import NetInfo from "@react-native-community/netinfo";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import Loader from "../../../components/Loader/Loader";
import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
import { BASE_URL_IMG } from "../../../config/api";
import { fehristStyles } from "../../../style/globalcss";

export default function ItemList() {
  const { tableName, category, subcategory, label } = useRoute().params || {};
  const navigation = useNavigation();
  const { fetchItems } = useData();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");


  const { width } = useWindowDimensions();

  const isSpecialTable = [
    "qutb",
    "rohaniilaaj",
    "tawizatusmaniya",
    "rohanidokan",
    "amliyatcourse",
    "hamzad_ka_amal",
  ].includes(tableName);

  const getNumColumns = () => {
    if (width < 340) return 1;
    if (width < 475) return 2;
    if (width < 575) return 3;
    if (width < 768) return 4;
    if (width < 1024) return 5;
    if (width < 1200) return 6;
    return 8;
  };

  const numColumns = getNumColumns();
  const cardMargin = 10;
  const cardPadding = 10;
  const containerPadding = 30;
  const cardWidth =
    (width - containerPadding - (cardMargin + cardPadding) * numColumns) / numColumns;
  useEffect(() => {
    const load = async () => {
      if (!tableName) return;
      setLoading(true);
      setErrorMsg("");

      try {
        const netState = await NetInfo.fetch();
        if (!netState.isConnected) {
          setErrorMsg("انٹرنیٹ کنکشن موجود نہیں ہے۔");
          return;
        }

        const data = await fetchItems(tableName, category, subcategory);

        if (!data || data.length === 0) {
          setErrorMsg("کوئی مواد موجود نہیں ہے۔");
          return;
        }

        setItems(sortUrduData(data, "title"));
      } catch (e) {
        console.warn("آئٹمز فیل:", e);
        setErrorMsg("انٹرنیٹ کنکشن موجود نہیں ہے۔");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [tableName, category, subcategory, fetchItems]);

  useEffect(() => {
    navigation.setOptions({ title: subcategory || category || label || "..." });
  }, [navigation, subcategory, category, label]);

  if (loading) return <Loader />;
  if (errorMsg) return <ErrorMessage text={errorMsg} />;

  return (
    <CustomBackground>
      <FlatList
        data={items}
        key={numColumns} 
        numColumns={isSpecialTable ? numColumns : 1}
        contentContainerStyle={
          isSpecialTable
            ? fehristStyles.imageListCenter
            : fehristStyles.fehristcenter
        }
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={
              isSpecialTable
                ? {
                  width: cardWidth,
          height: cardWidth,
          margin: cardMargin,
          padding:cardPadding,
          backgroundColor: "#E4DAC1",
          borderRadius: 5,
          justifyContent: "center", 
          alignItems: "center", 
          overflow: "hidden", 
                  }
                : fehristStyles.card
            }
            onPress={() =>
              navigation.navigate("CategoryDetails", { id: item.id, tableName })
            }
          >
          {isSpecialTable ? (
  item.image ? (
    <Image
      source={{ uri: `${BASE_URL_IMG}${item.image}` }}
      style={fehristStyles.imageCard}
      resizeMode="contain"
    />
  ) : (
    <Text
      style={{textAlign: 'center',color:'#6C472D',fontSize: 12,}}
    >
      Image not available
    </Text>
  )
) : (
  <Text style={fehristStyles.fehristText}>{item.title}</Text>
)}

          </TouchableOpacity>
        )}
      />
    </CustomBackground>
  );
}

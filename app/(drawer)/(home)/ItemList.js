import NetInfo from "@react-native-community/netinfo";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View
} from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import Loader from "../../../components/Loader/Loader";
import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
import { BASE_URL_IMG } from "../../../config/api";
import { mainStyles } from "../../../style/globalcss";

export default function ItemList() {
  const { tableName, category, subcategory, label } = useRoute().params || {};
  const navigation = useNavigation();
  const { fetchItems } = useData();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const { width } = useWindowDimensions();

  const isSpecialTable = [
    "chehalkaaf",
    "tawizatusmaniya",
    "rohanidokan",
    "amliyatcourse",
    "hamzadkaamal",
  ].includes(tableName);

  const getNumColumns = () => {
    if (width < 640) return 1;
    if (width < 768) return 2;
    if (width < 1024) return 3;
    if (width < 1280) return 4;
    return 4;
  };
  
  const numColumns = isSpecialTable ? getNumColumns() : 1;

  const cardMargin = 10;
  const cardPadding = 10;
  const imageListCenter = 15;

  const totalWidth = width-imageListCenter;
  const cardWidth = isSpecialTable
    ? (totalWidth -  cardMargin * 2 * numColumns) / numColumns
    : totalWidth - cardMargin * 2;

  const getCardHeight = () => {
    if (width < 375) return 200; 
    if (width < 400) return 250; 
    if (width < 475) return 240; 
    if (width < 640) return 300; 
    if (width < 768) return 200; 
    if (width < 1024) return 180; 
    if (width < 1280) return 200; 
    return 240; 
  };

  const FIXED_CARD_HEIGHT = getCardHeight();
  const FIXED_IMAGE_HEIGHT = FIXED_CARD_HEIGHT - cardPadding * 2;
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
  const titleText = subcategory || category || label || "...";

  navigation.setOptions({
    headerTitle: () => (
      <Text
        style={{
          color: "#6C472D",
          fontFamily: "NotoNastaliqUrdu-Regular",
          textAlign: "center",
          fontSize: 14,
          width:"100%"
        }}
      >
        {titleText}
      </Text>
    ),
  });
}, [navigation, subcategory, category, label]);

  if (loading) return <Loader />;
  if (errorMsg) return <ErrorMessage text={errorMsg} />;

  return (
    <CustomBackground>
     
     <FlatList
  key={numColumns}
  data={items}
  numColumns={numColumns}
  keyExtractor={(item) => item.id.toString()}
  contentContainerStyle={{
    flexGrow: 1,
    justifyContent: isSpecialTable ? undefined : "center",
    padding: isSpecialTable ? 7.5 : 15,
  }}
  showsVerticalScrollIndicator={false}  
  removeClippedSubviews={true}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={
        isSpecialTable
          ? {
              width: cardWidth,
              height: FIXED_CARD_HEIGHT,
              margin: cardMargin,
              padding: cardPadding,
              backgroundColor: "#E4DAC1",
              borderRadius: 5,
            }
          : {
              ...mainStyles.carditems, 
            }
      }
      onPress={() =>
        navigation.navigate("CategoryDetails", {
          id: item.id,
          tableName,
        })
      }
    >
      {isSpecialTable ? (
        item.image ? (
          <Image
            source={{ uri: `${BASE_URL_IMG}${item.image}` }}
            style={{
              width: "100%",
              height: FIXED_IMAGE_HEIGHT,
              borderRadius: 5,
            }}
            resizeMode="stretch"
          />
        ) : (
          <View
            style={{
              width: "100%",
              height: FIXED_IMAGE_HEIGHT,
              backgroundColor: "#D9C9A8",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#6C472D",
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              Image not available
            </Text>
          </View>
        )
      ) : (
        <Text style={mainStyles.carditemstext}>{item.title}</Text>
      )}
    </TouchableOpacity>
  )}
/>

       
    
    </CustomBackground>
  );
}

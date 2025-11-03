import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
import { BASE_URL_IMG } from "../../../config/api";
import { fehristStyles } from "../../../style/globalcss";

const Loader = () => (
  <CustomBackground>
    <View style={fehristStyles.centerContent}>
      <ActivityIndicator size="large" color="#6C472D" />
    </View>
  </CustomBackground>
);

export default function ItemList() {
  const { tableName, category, subcategory, label } = useRoute().params || {};
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { fetchItems } = useData();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const isSpecialTable = ["qutb", "rohaniilaaj", "tawizatusmaniya", "rohanidokan", "amliyatcourse", "hamzad_ka_amal"].includes(tableName);

  const { width } = Dimensions.get("window");
  const numColumns = width < 600 ? 2 : width < 900 ? 3 : 4;
  const cardWidth = (width - 60 - 40 * numColumns) / numColumns;

  useEffect(() => {
    if (!isFocused || !tableName) return;

    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchItems(tableName, category, subcategory); // await لگاؤ
setItems(sortUrduData(data, "title"));

        // فکس: response.rows استعمال کرو
        const rows = Array.isArray(response) ? response : (response.rows || []);
        setItems(sortUrduData(rows, "title"));
      } catch (e) {
        console.warn("آئٹمز لوڈنگ فیل:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [isFocused, tableName, category, subcategory, fetchItems]);

  useEffect(() => {
    navigation.setOptions({ title: subcategory || category || label || "آئٹمز" });
  }, [navigation, subcategory, category, label]);

  if (loading) return <Loader />;

  const itemsWithImage = items.filter(i => i.image);
  const itemsWithoutImage = items.filter(i => !i.image);

  console.log("Items state:", items);

  return (
    <CustomBackground>

      {/* تصویر والی گرڈ */}
      {isSpecialTable && itemsWithImage.length > 0 && (
        <FlatList
          data={itemsWithImage}
          numColumns={numColumns}
          contentContainerStyle={fehristStyles.imageList}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                width: cardWidth,
                margin: 10,
                padding: 10,
                backgroundColor: "#E4DAC1",
                borderRadius: 5,
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("CategoryDetails", { id: item.id, tableName })}
            >
              <Image source={{ uri: `${BASE_URL_IMG}${item.image}` }} style={fehristStyles.imageCard} resizeMode="contain" />
            </TouchableOpacity>
          )}
        />
      )}

      {/* نارمل لسٹ */}
      {(itemsWithoutImage.length > 0 || !isSpecialTable) && (
        <FlatList
          data={isSpecialTable ? itemsWithoutImage : items}
          contentContainerStyle={fehristStyles.fehristcenter}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={fehristStyles.card}
              onPress={() => navigation.navigate("CategoryDetails", { id: item.id, tableName })}
            >
              <Text style={fehristStyles.fehristText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </CustomBackground>
  );
}
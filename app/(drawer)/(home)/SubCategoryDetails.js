import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
import { BASE_URL_IMG } from "../../../config/api";
import { fehristStyles } from "../../../style/globalcss";

function SubCategoryDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { tableName, category, subcategory } = route.params || {};
  const { fetchTableData } = useData();
  const { width } = useWindowDimensions();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const imageTables = ["rohanidokan", "amliyatCourse"];
  const isImageTable = imageTables.includes(tableName);

  const getNumColumns = () => {
    if (width < 420) return 1;
    if (width < 600) return 2;
    if (width < 768) return 3;
    if (width < 1024) return 4;
    if (width < 1200) return 5;
    return 6;
  };

  const numColumns = getNumColumns();

  useEffect(() => {
    const loadData = async () => {
      const rows = await fetchTableData(tableName);
      let filtered = rows;

      if (category) filtered = filtered.filter((i) => i.category === category);
      if (subcategory) filtered = filtered.filter((i) => i.subcategory === subcategory);

      const sorted = sortUrduData(filtered, "title");
      setData(sorted);
      setLoading(false);
    };

    loadData();
    navigation.setOptions({ title: subcategory || category || tableName });
  }, [tableName, category, subcategory]);
  
const cardMargin = 10;     
const cardPadding = 10;  
const containerPadding = 30;

const cardWidth = 
  (width - containerPadding - (cardMargin  + cardPadding ) * numColumns) / numColumns;
  if (loading) {
    return (
      <CustomBackground>
        <View style={fehristStyles.centerContent}>
          <ActivityIndicator size="large" color="#6C472D" />
        </View>
      </CustomBackground>
    );
  }

  if (!data || data.length === 0) {
    return (
      <CustomBackground>
        <View style={fehristStyles.centerContent}>
          <Text style={fehristStyles.noRecordText}>کوئی ریکارڈ موجود نہیں ہے</Text>
        </View>
      </CustomBackground>
    );
  }

  return (
    <CustomBackground>
      {isImageTable ? (
        // ✅ IMAGE LAYOUT
        <View style={fehristStyles.imageContainer}>
          <FlatList
              key={numColumns} 
            contentContainerStyle={fehristStyles.imageList}
            data={data}
            numColumns={numColumns}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
               style={{
    width: cardWidth,
    margin: cardMargin,
    padding: cardPadding,
    backgroundColor: "#E4DAC1",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",

  }}
                onPress={() =>
                  navigation.navigate("CategoryDetails", {
                    id: item.id,
                    tableName,
                  })
                }
              >
                {item.image && (
                  <Image
                    source={{ uri: `${BASE_URL_IMG}${item.image}` }}
                    style={fehristStyles.imageCard}
                    resizeMode="contain"
                  />
                )}
              </TouchableOpacity>
            )}
          />
        </View>
      ) : (
        // ✅ TEXT LAYOUT
        <View style={fehristStyles.container}>
          <FlatList
            contentContainerStyle={fehristStyles.fehristcenter}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={fehristStyles.card}
                onPress={() =>
                  navigation.navigate("CategoryDetails", {
                    id: item.id,
                    tableName,
                  })
                }
              >
                <Text style={fehristStyles.fehristText}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </CustomBackground>
  );
}

export default SubCategoryDetails;



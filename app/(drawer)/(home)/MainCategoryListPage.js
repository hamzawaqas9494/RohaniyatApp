import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
import { BASE_URL_IMG } from "../../../config/api";
import { fehristStyles } from "../../../style/globalcss";

function MainCategoryListPage() {
  const navigation = useNavigation();
  const route = useRoute();
  const { tableName, category } = route.params;
  const { fetchTableData } = useData();
  const { width } = useWindowDimensions();

  const [data, setData] = useState([]);

  const imageTables = [
    "qutb",
    "tawizatusmaniya",
    "rohanidokan",
    "amliyatCourse",
    "hamzad_ka_amal",
  ];
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
    navigation.setOptions({ title: category });

    const loadData = async () => {
      const rows = await fetchTableData(tableName);

      // Filter by category
      const filtered = rows.filter((item) => item.category === category);
      setData(sortUrduData(filtered, "title"));
    };

    loadData();
  }, [tableName, category]);

  if (!data || data.length === 0) {
    return (
      <CustomBackground>
        <View style={fehristStyles.centerContent}>
          <Text style={fehristStyles.noRecordText}>کوئی ریکارڈ موجود نہیں ہے</Text>
        </View>
      </CustomBackground>
    );
  }

  // Check if subcategories exist
  const subcategories = Array.from(new Set(data.map((item) => item.subcategory).filter(Boolean)));
  if (subcategories.length > 0) {
    const sortedSubcategories = sortUrduData(
      subcategories.map((s, i) => ({ id: i + 1, title: s })),
      "title"
    ).map((item) => item.title);





    return (
      <CustomBackground>
        <FlatList
        key={numColumns} 
          contentContainerStyle={fehristStyles.fehristcenter}
          data={sortedSubcategories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={fehristStyles.card}
              onPress={() =>
                navigation.navigate("SubCategoryDetails", {
                  tableName,
                  category,
                  subcategory: item,
                })
              }
            >
              <Text style={fehristStyles.fehristText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </CustomBackground>
    );
  }
const cardMargin = 10;     
const cardPadding = 10;  
const containerPadding = 30;

const cardWidth = 
  (width - containerPadding - (cardMargin  + cardPadding ) * numColumns) / numColumns;
  return (

    
    <CustomBackground>
      {isImageTable ? (
        <View style={fehristStyles.imageContainer}>
          <FlatList
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
                {item.image ? (
                  <Image
                    source={{ uri: `${BASE_URL_IMG}${item.image}` }}
                    style={fehristStyles.imageCard}
                    resizeMode="contain"
                  />
                ) : (
                  <Text style={fehristStyles.fehristText}>{item.title}</Text>
                )}
              </TouchableOpacity>
            )}
          />
        </View>
      ) : (
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

export default MainCategoryListPage;




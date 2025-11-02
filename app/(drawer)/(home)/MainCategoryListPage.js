// import { useNavigation, useRoute } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import { FlatList, Image, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
// import CustomBackground from "../../../components/Background/Background";
// import { useData } from "../../../components/context/DataContext";
// import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// import { BASE_URL_IMG } from "../../../config/api";
// import { fehristStyles } from "../../../style/globalcss";

// function MainCategoryListPage() {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { tableName, category } = route.params;
//   const { fetchTableData } = useData();
//   const { width } = useWindowDimensions();

//   const [data, setData] = useState([]);

//   const imageTables = [
//     "qutb",
//     "tawizatusmaniya",
//     "rohanidokan",
//     "amliyatCourse",
//     "hamzad_ka_amal",
//   ];
//   const isImageTable = imageTables.includes(tableName);

//   const getNumColumns = () => {
//     if (width < 420) return 1;
//     if (width < 600) return 2;
//     if (width < 768) return 3;
//     if (width < 1024) return 4;
//     if (width < 1200) return 5;
//     return 6;
//   };
//   const numColumns = getNumColumns();

//   useEffect(() => {
//     navigation.setOptions({ title: category });

//     const loadData = async () => {
//       const rows = await fetchTableData(tableName);

//       // Filter by category
//       const filtered = rows.filter((item) => item.category === category);
//       setData(sortUrduData(filtered, "title"));
//     };

//     loadData();
//   }, [tableName, category]);

//   if (!data || data.length === 0) {
//     return (
//       <CustomBackground>
//         <View style={fehristStyles.centerContent}>
//           <Text style={fehristStyles.noRecordText}>کوئی ریکارڈ موجود نہیں ہے</Text>
//         </View>
//       </CustomBackground>
//     );
//   }

//   // Check if subcategories exist
//   const subcategories = Array.from(new Set(data.map((item) => item.subcategory).filter(Boolean)));
//   if (subcategories.length > 0) {
//     const sortedSubcategories = sortUrduData(
//       subcategories.map((s, i) => ({ id: i + 1, title: s })),
//       "title"
//     ).map((item) => item.title);





//     return (
//       <CustomBackground>
//         <FlatList
//         key={numColumns} 
//           contentContainerStyle={fehristStyles.fehristcenter}
//           data={sortedSubcategories}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={fehristStyles.card}
//               onPress={() =>
//                 navigation.navigate("SubCategoryDetails", {
//                   tableName,
//                   category,
//                   subcategory: item,
//                 })
//               }
//             >
//               <Text style={fehristStyles.fehristText}>{item}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       </CustomBackground>
//     );
//   }
// const cardMargin = 10;     
// const cardPadding = 10;  
// const containerPadding = 30;

// const cardWidth = 
//   (width - containerPadding - (cardMargin  + cardPadding ) * numColumns) / numColumns;
//   return (

    
//     <CustomBackground>
//       {isImageTable ? (
//         <View style={fehristStyles.imageContainer}>
//           <FlatList
//             contentContainerStyle={fehristStyles.imageList}
//             data={data}
//             numColumns={numColumns}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={{
//     width: cardWidth,
//     margin: cardMargin,
//     padding: cardPadding,
//     backgroundColor: "#E4DAC1",
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "center",

//   }}
//                 onPress={() =>
//                   navigation.navigate("CategoryDetails", {
//                     id: item.id,
//                     tableName,
//                   })
//                 }
//               >
//                 {item.image ? (
//                   <Image
//                     source={{ uri: `${BASE_URL_IMG}${item.image}` }}
//                     style={fehristStyles.imageCard}
//                     resizeMode="contain"
//                   />
//                 ) : (
//                   <Text style={fehristStyles.fehristText}>{item.title}</Text>
//                 )}
//               </TouchableOpacity>
//             )}
//           />
//         </View>
//       ) : (
//         <View style={fehristStyles.container}>
//           <FlatList
//             contentContainerStyle={fehristStyles.fehristcenter}
//             data={data}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={fehristStyles.card}
//                 onPress={() =>
//                   navigation.navigate("CategoryDetails", {
//                     id: item.id,
//                     tableName,
//                   })
//                 }
//               >
//                 <Text style={fehristStyles.fehristText}>{item.title}</Text>
//               </TouchableOpacity>
//             )}
//           />
//         </View>
//       )}
//     </CustomBackground>
//   );
// }

// export default MainCategoryListPage;




// src/screens/MainCategoryListPage.js
// src/screens/MainCategoryListPage.js
import NetInfo from '@react-native-community/netinfo';
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions
} from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
import { BASE_URL_IMG } from "../../../config/api";
import { fehristStyles } from "../../../style/globalcss";

export default function MainCategoryListPage() {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();
  const { width } = useWindowDimensions();
  const { tableName, category } = route.params || {};
  const { fetchTableData } = useData();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  // آپ کے تصویر والے ٹیبلز
  const imageTables = ["tawizatusmaniya", "rohanidokan", "amliyatcourse", "hamzad_ka_amal"];
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

  // آف لائن چیک
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOffline(!state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  const loadData = async (force = false) => {
    if (!tableName || !category) return;
    if (!force) setLoading(true);
    if (force) setRefreshing(true);

    const rows = await fetchTableData(tableName, { category, forceRefresh: force });
    const filtered = rows.filter(i => i.category === category);
    const sorted = sortUrduData(filtered, "title");
    setData(sorted);

    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    if (isFocused) {
      loadData(!isOffline);
    }
  }, [isFocused, tableName, category, isOffline]);

  const onRefresh = () => loadData(true);

  useEffect(() => {
    navigation.setOptions({ title: category || "Loading..." });
  }, [category]);

  // لوڈنگ
  if (loading) {
    return (
      <CustomBackground>
        <View style={fehristStyles.centerContent}>
          <ActivityIndicator size="large" color="#6C472D" />
        </View>
      </CustomBackground>
    );
  }

  // کوئی ڈیٹا نہیں
  if (data.length === 0) {
    return (
      <CustomBackground>
        <View style={fehristStyles.centerContent}>
          <Text style={fehristStyles.noRecordText}>
            {isOffline ? "آف لائن موڈ — نیٹ آن کریں" : "کوئی ریکارڈ موجود نہیں ہے"}
          </Text>
        </View>
      </CustomBackground>
    );
  }

  // سب کیٹیگریز
  const subcategories = Array.from(new Set(data.map(i => i.subcategory).filter(Boolean)));
  if (subcategories.length > 0) {
    const sortedSub = sortUrduData(subcategories.map((s, i) => ({ id: i + 1, title: s })), "title").map(i => i.title);
    return (
      <CustomBackground>
        <FlatList
          key={numColumns}
          contentContainerStyle={fehristStyles.fehristcenter}
          data={sortedSub}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={fehristStyles.card}
              onPress={() => navigation.navigate("SubCategoryDetails", { tableName, category, subcategory: item })}
            >
              <Text style={fehristStyles.fehristText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </CustomBackground>
    );
  }

  // کارڈ سائز
  const cardMargin = 10, cardPadding = 10, containerPadding = 30;
  const cardWidth = (width - containerPadding - (cardMargin + cardPadding) * numColumns) / numColumns;

  // تصویر والے اور ٹیکسٹ والے الگ کرو
  const itemsWithImage = data.filter(item => item.image);
  const itemsWithoutImage = data.filter(item => !item.image);

  return (
    <CustomBackground>
      {/* صرف تصویر والے → Grid میں */}
      {isImageTable && itemsWithImage.length > 0 && (
        <View style={fehristStyles.imageContainer}>
          <FlatList
          key={`image-${numColumns}`}
            contentContainerStyle={fehristStyles.imageList}
            data={itemsWithImage}
            numColumns={numColumns}
            keyExtractor={item => item.id.toString()}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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
                  minHeight: 100,
                }}
                onPress={() => navigation.navigate("CategoryDetails", { id: item.id, tableName })}
              >
                <Image
                  source={{ uri: `${BASE_URL_IMG}${item.image}` }}
                  style={fehristStyles.imageCard}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {/* ٹیکسٹ والے → Single column لسٹ میں (چاہے imageTable ہو یا نہ ہو) */}
      {(itemsWithoutImage.length > 0) && (
        <View style={fehristStyles.container}>
          <FlatList
            contentContainerStyle={fehristStyles.fehristcenter}
            data={itemsWithoutImage}
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
        </View>
      )}
    </CustomBackground>
  );
}
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
// import CustomBackground from "../../../components/Background/Background";
// import { useData } from "../../../components/context/DataContext";
// import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// import { BASE_URL_IMG } from "../../../config/api";
// import { fehristStyles } from "../../../style/globalcss";

// function SubCategoryDetails() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { tableName, category, subcategory } = route.params || {};
//   const { fetchTableData } = useData();
//   const { width } = useWindowDimensions();

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const imageTables = ["rohanidokan", "amliyatCourse"];
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
//     const loadData = async () => {
//       const rows = await fetchTableData(tableName);
//       let filtered = rows;

//       if (category) filtered = filtered.filter((i) => i.category === category);
//       if (subcategory) filtered = filtered.filter((i) => i.subcategory === subcategory);

//       const sorted = sortUrduData(filtered, "title");
//       setData(sorted);
//       setLoading(false);
//     };

//     loadData();
//     navigation.setOptions({ title: subcategory || category || tableName });
//   }, [tableName, category, subcategory]);
  
// const cardMargin = 10;     
// const cardPadding = 10;  
// const containerPadding = 30;

// const cardWidth = 
//   (width - containerPadding - (cardMargin  + cardPadding ) * numColumns) / numColumns;
//   if (loading) {
//     return (
//       <CustomBackground>
//         <View style={fehristStyles.centerContent}>
//           <ActivityIndicator size="large" color="#6C472D" />
//         </View>
//       </CustomBackground>
//     );
//   }

//   if (!data || data.length === 0) {
//     return (
//       <CustomBackground>
//         <View style={fehristStyles.centerContent}>
//           <Text style={fehristStyles.noRecordText}>کوئی ریکارڈ موجود نہیں ہے</Text>
//         </View>
//       </CustomBackground>
//     );
//   }

//   return (
//     <CustomBackground>
//       {isImageTable ? (
//         // ✅ IMAGE LAYOUT
//         <View style={fehristStyles.imageContainer}>
//           <FlatList
//               key={numColumns} 
//             contentContainerStyle={fehristStyles.imageList}
//             data={data}
//             numColumns={numColumns}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                style={{
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
//                 {item.image && (
//                   <Image
//                     source={{ uri: `${BASE_URL_IMG}${item.image}` }}
//                     style={fehristStyles.imageCard}
//                     resizeMode="contain"
//                   />
//                 )}
//               </TouchableOpacity>
//             )}
//           />
//         </View>
//       ) : (
//         // ✅ TEXT LAYOUT
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

// export default SubCategoryDetails;



// src/screens/SubCategoryDetails.js
// src/screens/SubCategoryDetails.js
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

export default function SubCategoryDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { width } = useWindowDimensions();
  const { tableName, category, subcategory } = route.params || {};
  const { fetchTableData } = useData();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  const imageTables = ["rohanidokan", "amliyatcourse"];
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
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOffline(!state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  const loadData = async (force = false) => {
    if (!tableName) return;
    if (!force) setLoading(true);
    if (force) setRefreshing(true);

    const rows = await fetchTableData(tableName, { category, subcategory, forceRefresh: force });
    let filtered = rows;
    if (category) filtered = filtered.filter(i => i.category === category);
    if (subcategory) filtered = filtered.filter(i => i.subcategory === subcategory);
    const sorted = sortUrduData(filtered, "title");
    setData(sorted);

    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    if (isFocused) {
      loadData(!isOffline);
    }
  }, [isFocused, tableName, category, subcategory, isOffline]);

  const onRefresh = () => loadData(true);

  useEffect(() => {
    navigation.setOptions({ title: subcategory || category || tableName || "تفصیلات" });
  }, [subcategory, category, tableName]);

  if (loading) {
    return (
      <CustomBackground>
        <View style={fehristStyles.centerContent}>
          <ActivityIndicator size="large" color="#6C472D" />
        </View>
      </CustomBackground>
    );
  }

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

  // کارڈ سائز
  const cardMargin = 10, cardPadding = 10, containerPadding = 30;
  const cardWidth = (width - containerPadding - (cardMargin + cardPadding) * numColumns) / numColumns;

  // الگ کرو: تصویر والے اور بغیر تصویر والے
  const itemsWithImage = data.filter(item => item.image);
  const itemsWithoutImage = data.filter(item => !item.image);

  return (
    <CustomBackground>
      {/* صرف تصویر والے → Grid میں */}
      {isImageTable && itemsWithImage.length > 0 && (
        <View style={fehristStyles.imageContainer}>
          <FlatList
            key={`image-${numColumns}`} // Responsive fix
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

      {/* ٹیکسٹ والے → Single column لسٹ میں */}
      {itemsWithoutImage.length > 0 && (
        <View style={fehristStyles.container}>
          <FlatList
            key={`text-${numColumns}`} // Responsive fix
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
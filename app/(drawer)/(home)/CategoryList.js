// import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import {
//   ActivityIndicator,
//   FlatList,
//   Image,
//   Text,
//   TouchableOpacity,
//   View,
//   useWindowDimensions,
// } from "react-native";
// import CustomBackground from "../../../components/Background/Background";
// import { useData } from "../../../components/context/DataContext";
// import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// import { BASE_URL_IMG } from "../../../config/api";
// import { fehristStyles } from "../../../style/globalcss";

// export default function CategoryList() {
  
//   const route = useRoute();
//   const navigation = useNavigation();
//   const isFocused = useIsFocused();
//   const { width } = useWindowDimensions();  
//   const { tableName, label } = route.params || {};
//   const { fetchTableData } = useData();

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const imageTables = ["qutb"];
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
//       if (!tableName) return;
//       setLoading(true);

//       const rows = await fetchTableData(tableName);
//       const sorted = sortUrduData(rows, "category");

//       setData(sorted);
//       setLoading(false);
//       navigation.setOptions({ title: label || tableName || "فہرست" });
//     };

//     if (isFocused) loadData();
//   }, [isFocused, tableName]);

//   if (loading) {
//     return (
//       <CustomBackground>
//         <View style={fehristStyles.centerContent}>
//           <ActivityIndicator size="large" color="#6C472D" />
//         </View>
//       </CustomBackground>
//     );
//   }

//   const uniqueCategories = Array.from(
//     new Set(data.filter((item) => item.category).map((item) => item.category))
//   );

//   const titlesWithoutCategory = data.filter((item) => !item.category);

//   const displayData = [
//     ...uniqueCategories.map((cat) => ({ label: cat, isCategory: true })),
//     ...titlesWithoutCategory.map((title) => ({
//       label: title.title,
//       id: title.id,
//       image: title.image,
//       isCategory: false,
//     })),
//   ];

//   if (displayData.length === 0) {
//     return (
//       <CustomBackground>
//         <View style={fehristStyles.centerContent}>
//           <Text style={fehristStyles.noRecordText}>کوئی ریکارڈ موجود نہیں ہے</Text>
//         </View>
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
//             key={numColumns} 
//             contentContainerStyle={fehristStyles.imageList}
//             data={displayData}
//             numColumns={numColumns}
//             keyExtractor={(item) => item.id?.toString() || item.label}
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
//                 onPress={() => {
//                   if (item.isCategory) {
//                     navigation.navigate("MainCategoryListPage", {
//                       tableName,
//                       category: item.label,
//                     });
//                   } else {
//                     navigation.navigate("CategoryDetails", {
//                       id: item.id,
//                       tableName,
//                     });
//                   }
//                 }}
//               >
//                 {item.image && (
//                   <Image
//                     source={{ uri: `${BASE_URL_IMG}${item.image}` }}
//                     style={fehristStyles.imageCard}
//                     resizeMode="contain"
//                   />
//                 )}
//                 {!item.image && <Text style={fehristStyles.fehristText}>{item.label}</Text>}
//               </TouchableOpacity>
//             )}
//           />
//         </View>
//       ) : (
//         // ✅ TEXT LAYOUT
//         <View style={fehristStyles.container}>
//           <FlatList
//             contentContainerStyle={fehristStyles.fehristcenter}
//             data={displayData}
//             keyExtractor={(item) => item.id?.toString() || item.label}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={fehristStyles.card}
//                 onPress={() => {
//                   if (item.isCategory) {
//                     navigation.navigate("MainCategoryListPage", {
//                       tableName,
//                       category: item.label,
//                     });
//                   } else {
//                     navigation.navigate("CategoryDetails", {
//                       id: item.id,
//                       tableName,
//                     });
//                   }
//                 }}
//               >
//                 <Text style={fehristStyles.fehristText}>{item.label}</Text>
//               </TouchableOpacity>
//             )}
//           />
//         </View>
//       )}
//     </CustomBackground>
//   );
// }





import NetInfo from '@react-native-community/netinfo';
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, RefreshControl, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
import { BASE_URL_IMG } from "../../../config/api";
import { fehristStyles } from "../../../style/globalcss";

export default function CategoryList() {
  const route = useRoute();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { width } = useWindowDimensions();
  const { tableName, label } = route.params || {};
  const { fetchTableData } = useData();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  const imageTables = ["qutb"];
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

    const rows = await fetchTableData(tableName, { forceRefresh: force });
    const sorted = sortUrduData(rows, "category");
    setData(sorted);

    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    if (isFocused) {
      loadData(!isOffline);
    }
  }, [isFocused, tableName, isOffline]);

  const onRefresh = () => loadData(true);

  useEffect(() => {
    navigation.setOptions({ title: label || tableName || "فہرست" });
  }, [label, tableName]);

  if (loading) {
    return (
      <CustomBackground>
        <View style={fehristStyles.centerContent}>
          <ActivityIndicator size="large" color="#6C472D" />
        </View>
      </CustomBackground>
    );
  }

  const uniqueCategories = Array.from(new Set(data.filter(i => i.category).map(i => i.category)));
  const titlesWithoutCategory = data.filter(i => !i.category);
  const displayData = [
    ...uniqueCategories.map(cat => ({ label: cat, isCategory: true })),
    ...titlesWithoutCategory.map(t => ({ label: t.title, id: t.id, image: t.image, isCategory: false })),
  ];

  if (displayData.length === 0) {
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

  const cardMargin = 10, cardPadding = 10, containerPadding = 30;
  const cardWidth = (width - containerPadding - (cardMargin + cardPadding) * numColumns) / numColumns;

  return (
    <CustomBackground>
      {isImageTable ? (
        <View style={fehristStyles.imageContainer}>
          <FlatList
         key={`image-${numColumns}`}
            contentContainerStyle={fehristStyles.imageList}
            data={displayData}
            numColumns={numColumns}
            keyExtractor={item => item.id?.toString() || item.label}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ width: cardWidth, margin: cardMargin, padding: cardPadding, backgroundColor: "#E4DAC1", borderRadius: 5, alignItems: "center", justifyContent: "center" }}
                onPress={() => {
                  if (item.isCategory) {
                    navigation.navigate("MainCategoryListPage", { tableName, category: item.label });
                  } else {
                    navigation.navigate("CategoryDetails", { id: item.id, tableName });
                  }
                }}
              >
                {item.image ? (
                  <Image source={{ uri: `${BASE_URL_IMG}${item.image}` }} style={fehristStyles.imageCard} resizeMode="contain" />
                ) : (
                  <Text style={fehristStyles.fehristText}>{item.label}</Text>
                )}
              </TouchableOpacity>
            )}
          />
        </View>
      ) : (
        <View style={fehristStyles.container}>
          <FlatList
            contentContainerStyle={fehristStyles.fehristcenter}
            data={displayData}
            keyExtractor={item => item.id?.toString() || item.label}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={fehristStyles.card}
                onPress={() => {
                  if (item.isCategory) {
                    navigation.navigate("MainCategoryListPage", { tableName, category: item.label });
                  } else {
                    navigation.navigate("CategoryDetails", { id: item.id, tableName });
                  }
                }}
              >
                <Text style={fehristStyles.fehristText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </CustomBackground>
  );
}
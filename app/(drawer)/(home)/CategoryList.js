// // import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
// // import { useEffect, useState } from "react";
// // import {
// //   ActivityIndicator,
// //   FlatList,
// //   Image,
// //   Text,
// //   TouchableOpacity,
// //   View,
// //   useWindowDimensions,
// // } from "react-native";
// // import CustomBackground from "../../../components/Background/Background";
// // import { useData } from "../../../components/context/DataContext";
// // import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// // import { BASE_URL_IMG } from "../../../config/api";
// // import { fehristStyles } from "../../../style/globalcss";

// // export default function CategoryList() {
  
// //   const route = useRoute();
// //   const navigation = useNavigation();
// //   const isFocused = useIsFocused();
// //   const { width } = useWindowDimensions();  
// //   const { tableName, label } = route.params || {};
// //   const { fetchTableData } = useData();

// //   const [data, setData] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const imageTables = ["qutb"];
// //   const isImageTable = imageTables.includes(tableName);

// //   const getNumColumns = () => {
// //     if (width < 420) return 1;
// //     if (width < 600) return 2;
// //     if (width < 768) return 3;
// //     if (width < 1024) return 4;
// //     if (width < 1200) return 5;
// //     return 6;
// //   };
// //   const numColumns = getNumColumns();

// //   useEffect(() => {
// //     const loadData = async () => {
// //       if (!tableName) return;
// //       setLoading(true);

// //       const rows = await fetchTableData(tableName);
// //       const sorted = sortUrduData(rows, "category");

// //       setData(sorted);
// //       setLoading(false);
// //       navigation.setOptions({ title: label || tableName || "فہرست" });
// //     };

// //     if (isFocused) loadData();
// //   }, [isFocused, tableName]);

// //   if (loading) {
// //     return (
// //       <CustomBackground>
// //         <View style={fehristStyles.centerContent}>
// //           <ActivityIndicator size="large" color="#6C472D" />
// //         </View>
// //       </CustomBackground>
// //     );
// //   }

// //   const uniqueCategories = Array.from(
// //     new Set(data.filter((item) => item.category).map((item) => item.category))
// //   );

// //   const titlesWithoutCategory = data.filter((item) => !item.category);

// //   const displayData = [
// //     ...uniqueCategories.map((cat) => ({ label: cat, isCategory: true })),
// //     ...titlesWithoutCategory.map((title) => ({
// //       label: title.title,
// //       id: title.id,
// //       image: title.image,
// //       isCategory: false,
// //     })),
// //   ];

// //   if (displayData.length === 0) {
// //     return (
// //       <CustomBackground>
// //         <View style={fehristStyles.centerContent}>
// //           <Text style={fehristStyles.noRecordText}>کوئی ریکارڈ موجود نہیں ہے</Text>
// //         </View>
// //       </CustomBackground>
// //     );
// //   }
// // const cardMargin = 10;     
// // const cardPadding = 10;  
// // const containerPadding = 30;

// // const cardWidth = 
// //   (width - containerPadding - (cardMargin  + cardPadding ) * numColumns) / numColumns;
// //   return (
// //     <CustomBackground>
// //       {isImageTable ? (
// //         <View style={fehristStyles.imageContainer}>
// //           <FlatList
// //             key={numColumns} 
// //             contentContainerStyle={fehristStyles.imageList}
// //             data={displayData}
// //             numColumns={numColumns}
// //             keyExtractor={(item) => item.id?.toString() || item.label}
// //             renderItem={({ item }) => (
// //               <TouchableOpacity
// //                 style={{
// //     width: cardWidth,
// //     margin: cardMargin,
// //     padding: cardPadding,
// //     backgroundColor: "#E4DAC1",
// //     borderRadius: 5,
// //     alignItems: "center",
// //     justifyContent: "center",

// //   }}
// //                 onPress={() => {
// //                   if (item.isCategory) {
// //                     navigation.navigate("MainCategoryListPage", {
// //                       tableName,
// //                       category: item.label,
// //                     });
// //                   } else {
// //                     navigation.navigate("CategoryDetails", {
// //                       id: item.id,
// //                       tableName,
// //                     });
// //                   }
// //                 }}
// //               >
// //                 {item.image && (
// //                   <Image
// //                     source={{ uri: `${BASE_URL_IMG}${item.image}` }}
// //                     style={fehristStyles.imageCard}
// //                     resizeMode="contain"
// //                   />
// //                 )}
// //                 {!item.image && <Text style={fehristStyles.fehristText}>{item.label}</Text>}
// //               </TouchableOpacity>
// //             )}
// //           />
// //         </View>
// //       ) : (
// //         // ✅ TEXT LAYOUT
// //         <View style={fehristStyles.container}>
// //           <FlatList
// //             contentContainerStyle={fehristStyles.fehristcenter}
// //             data={displayData}
// //             keyExtractor={(item) => item.id?.toString() || item.label}
// //             renderItem={({ item }) => (
// //               <TouchableOpacity
// //                 style={fehristStyles.card}
// //                 onPress={() => {
// //                   if (item.isCategory) {
// //                     navigation.navigate("MainCategoryListPage", {
// //                       tableName,
// //                       category: item.label,
// //                     });
// //                   } else {
// //                     navigation.navigate("CategoryDetails", {
// //                       id: item.id,
// //                       tableName,
// //                     });
// //                   }
// //                 }}
// //               >
// //                 <Text style={fehristStyles.fehristText}>{item.label}</Text>
// //               </TouchableOpacity>
// //             )}
// //           />
// //         </View>
// //       )}
// //     </CustomBackground>
// //   );
// // }




// import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
// import CustomBackground from "../../../components/Background/Background";
// import { useData } from "../../../components/context/DataContext";
// import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// import { fehristStyles } from "../../../style/globalcss";

// export default function CategoryList() {
//   const { tableName, label } = useRoute().params || {};
//   const navigation = useNavigation();
//   const isFocused = useIsFocused();
//   const { fetchTableData } = useData();

//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!isFocused || !tableName) return;

//     const load = async () => {
//       setLoading(true);
//       try {
//         const { rows } = await fetchTableData(tableName);
//         const cats = [...new Set(rows.map(r => String(r.category || "").trim()).filter(Boolean))];
//         setCategories(sortUrduData(cats.map(l => ({ label: l }))));

//         if (cats.length === 0) {
//           navigation.replace("ItemList", { tableName, label });
//         }
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         setLoading(false);
//       }
//     };

//     load();
//   }, [isFocused, tableName, fetchTableData, navigation, label]);

//   useEffect(() => {
//     navigation.setOptions({ title: label || tableName || "کیٹیگریز" });
//   }, [navigation, label, tableName]);

//   if (loading) {
//     return (
//       <CustomBackground>
//         <View style={fehristStyles.centerContent}>
//           <ActivityIndicator size="large" color="#6C472D" />
//         </View>
//       </CustomBackground>
//     );
//   }

//   return (
//     <CustomBackground>
//       <FlatList
//         data={categories}
//         keyExtractor={item => item.label}
//         contentContainerStyle={fehristStyles.fehristcenter}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={fehristStyles.card}
//             onPress={() => navigation.navigate("SubCategoryList", { tableName, category: item.label })}
//           >
//             <Text style={fehristStyles.fehristText}>{item.label}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </CustomBackground>
//   );
// }



import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
import { fehristStyles } from "../../../style/globalcss";

// Loader کمپوننٹ
const Loader = () => (
  <CustomBackground>
    <View style={fehristStyles.centerContent}>
      <ActivityIndicator size="large" color="#6C472D" />
    </View>
  </CustomBackground>
);

export default function CategoryList() {
  const { tableName, label } = useRoute().params || {};
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { fetchCategories } = useData();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isFocused || !tableName) return;

    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchCategories(tableName);
        const sorted = sortUrduData(data.map(name => ({ label: name })));
        setCategories(sorted);

        if (sorted.length === 0) {
          navigation.replace("ItemList", { tableName, label });
        }
      } catch (e) {
        console.warn("کیٹیگریز لوڈنگ فیل:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [isFocused, tableName, fetchCategories, navigation, label]);

  useEffect(() => {
    navigation.setOptions({ title: label || "کیٹیگریز" });
  }, [navigation, label]);

  if (loading) return <Loader />;

  return (
    <CustomBackground>
      <FlatList
        data={categories}
        keyExtractor={item => item.label}
        contentContainerStyle={fehristStyles.fehristcenter}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={fehristStyles.card}
            onPress={() => navigation.navigate("SubCategoryList", { tableName, category: item.label })}
          >
            <Text style={fehristStyles.fehristText}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </CustomBackground>
  );
}
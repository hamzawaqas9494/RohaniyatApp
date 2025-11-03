// // // // // // screens/MainCategoryListPage.jsx
// // // // // import { useNavigation, useRoute } from "@react-navigation/native";
// // // // // import { useEffect, useState } from "react";
// // // // // import {
// // // // //   ActivityIndicator,
// // // // //   FlatList,
// // // // //   Image,
// // // // //   Text,
// // // // //   TouchableOpacity,
// // // // //   View,
// // // // //   useWindowDimensions,
// // // // // } from "react-native";
// // // // // import CustomBackground from "../../../components/Background/Background";
// // // // // import { useData } from "../../../components/context/DataContext";
// // // // // import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// // // // // import { BASE_URL_IMG } from "../../../config/api";
// // // // // import { fehristStyles } from "../../../style/globalcss";

// // // // // export default function MainCategoryListPage() {
// // // // //   const navigation = useNavigation();
// // // // //   const route = useRoute();
// // // // //   const { tableName, category } = route.params || {};
// // // // //   const { fetchTableData, loading, getKey } = useData();
// // // // //   const { width } = useWindowDimensions();

// // // // //   const [data, setData] = useState([]);
// // // // //   const [subcategories, setSubcategories] = useState([]);

// // // // //   const imageTables = [
// // // // //     "qutb",
// // // // //     "tawizatusmaniya",
// // // // //     "rohanidokan",
// // // // //     "amliyatcourse",
// // // // //     "hamzad_ka_amal",
// // // // //   ];
// // // // //   const isImageTable = imageTables.includes(tableName);

// // // // //   const getNumColumns = () => {
// // // // //     if (width < 420) return 1;
// // // // //     if (width < 600) return 2;
// // // // //     if (width < 768) return 3;
// // // // //     if (width < 1024) return 4;
// // // // //     if (width < 1200) return 5;
// // // // //     return 6;
// // // // //   };
// // // // //   const numColumns = getNumColumns();

// // // // //   const cardMargin = 10;
// // // // //   const cardPadding = 10;
// // // // //   const containerPadding = 30;
// // // // //   const cardWidth =
// // // // //     (width - containerPadding - (cardMargin + cardPadding) * numColumns) /
// // // // //     numColumns;

// // // // //   useEffect(() => {
// // // // //     if (!tableName || !category) return;

// // // // //     navigation.setOptions({ title: category });

// // // // //     const load = async () => {
// // // // //       const rows = await fetchTableData(tableName, category); // ← id hata diya
// // // // //       console.log("ROWS FOR CATEGORY →", rows);

// // // // //       if (!Array.isArray(rows) || rows.length === 0) {
// // // // //         setData([]);
// // // // //         setSubcategories([]);
// // // // //         return;
// // // // //       }

// // // // //       const validSubs = rows
// // // // //         .map((r) => r.subcategory)
// // // // //         .filter((s) => s && s.trim() !== "" && s.trim() !== "0");

// // // // //       const uniqueSubs = [...new Set(validSubs)];

// // // // //       if (uniqueSubs.length > 0) {
// // // // //         const sorted = sortUrduData(
// // // // //           uniqueSubs.map((s, i) => ({ id: i + 1, title: s })),
// // // // //           "title"
// // // // //         ).map((item) => item.title);

// // // // //         setSubcategories(sorted);
// // // // //         setData([]);
// // // // //       } else {
// // // // //         const sorted = sortUrduData(rows, "title");
// // // // //         setData(sorted);
// // // // //         setSubcategories([]);
// // // // //       }
// // // // //     };

// // // // //     load();
// // // // //   }, [tableName, category, navigation, fetchTableData]);

// // // // //   const key = getKey(tableName, category);
// // // // //   if (loading[key]) {
// // // // //     return (
// // // // //       <CustomBackground>
// // // // //         <View style={fehristStyles.centerContent}>
// // // // //           <ActivityIndicator size="large" color="#6C472D" />
// // // // //         </View>
// // // // //       </CustomBackground>
// // // // //     );
// // // // //   }

// // // // //   if (data.length === 0 && subcategories.length === 0) {
// // // // //     return (
// // // // //       <CustomBackground>
// // // // //         <View style={fehristStyles.centerContent}>
// // // // //           <Text style={fehristStyles.noRecordText}>
// // // // //             کوئی ریکارڈ موجود نہیں ہے
// // // // //           </Text>
// // // // //         </View>
// // // // //       </CustomBackground>
// // // // //     );
// // // // //   }

// // // // //   if (subcategories.length > 0) {
// // // // //     return (
// // // // //       <CustomBackground>
// // // // //         <FlatList
// // // // //           contentContainerStyle={fehristStyles.fehristcenter}
// // // // //           data={subcategories}
// // // // //           keyExtractor={(item, index) => index.toString()}
// // // // //           renderItem={({ item }) => (
// // // // //             <TouchableOpacity
// // // // //               style={fehristStyles.card}
// // // // //               onPress={() =>
// // // // //                 navigation.navigate("SubCategoryDetails", {
// // // // //                   tableName,
// // // // //                   category,
// // // // //                   subcategory: item,
// // // // //                 })
// // // // //               }
// // // // //             >
// // // // //               <Text style={fehristStyles.fehristText}>{item}</Text>
// // // // //             </TouchableOpacity>
// // // // //           )}
// // // // //         />
// // // // //       </CustomBackground>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <CustomBackground>
// // // // //       {isImageTable ? (
// // // // //         <View style={fehristStyles.imageContainer}>
// // // // //           <FlatList
// // // // //             contentContainerStyle={fehristStyles.imageList}
// // // // //             data={data}
// // // // //             numColumns={numColumns}
// // // // //             keyExtractor={(item) => item.id.toString()}
// // // // //             renderItem={({ item }) => (
// // // // //               <TouchableOpacity
// // // // //                 style={{
// // // // //                   width: cardWidth,
// // // // //                   margin: cardMargin,
// // // // //                   padding: cardPadding,
// // // // //                   backgroundColor: "#E4DAC1",
// // // // //                   borderRadius: 5,
// // // // //                   alignItems: "center",
// // // // //                   justifyContent: "center",
// // // // //                 }}
// // // // //                 onPress={() =>
// // // // //                   navigation.navigate("CategoryDetails", {
// // // // //                     id: item.id,
// // // // //                     tableName,
// // // // //                   })
// // // // //                 }
// // // // //               >
// // // // //                 {item.image ? (
// // // // //                   <Image
// // // // //                     source={{ uri: `${BASE_URL_IMG}${item.image}` }}
// // // // //                     style={fehristStyles.imageCard}
// // // // //                     resizeMode="contain"
// // // // //                   />
// // // // //                 ) : (
// // // // //                   <Text style={fehristStyles.fehristText}>{item.title}</Text>
// // // // //                 )}
// // // // //               </TouchableOpacity>
// // // // //             )}
// // // // //           />
// // // // //         </View>
// // // // //       ) : (
// // // // //         <View style={fehristStyles.container}>
// // // // //           <FlatList
// // // // //             contentContainerStyle={fehristStyles.fehristcenter}
// // // // //             data={data}
// // // // //             keyExtractor={(item) => item.id.toString()}
// // // // //             renderItem={({ item }) => (
// // // // //               <TouchableOpacity
// // // // //                 style={fehristStyles.card}
// // // // //                 onPress={() =>
// // // // //                   navigation.navigate("CategoryDetails", {
// // // // //                     id: item.id,
// // // // //                     tableName,
// // // // //                   })
// // // // //                 }
// // // // //               >
// // // // //                 <Text style={fehristStyles.fehristText}>{item.title}</Text>
// // // // //               </TouchableOpacity>
// // // // //             )}
// // // // //           />
// // // // //         </View>
// // // // //       )}
// // // // //     </CustomBackground>
// // // // //   );
// // // // // }



// // // // // screens/MainCategoryListPage.jsx
// // // // import { useNavigation, useRoute } from "@react-navigation/native";
// // // // import { useEffect, useState } from "react";
// // // // import {
// // // //   ActivityIndicator,
// // // //   FlatList,
// // // //   Image,
// // // //   Text,
// // // //   TouchableOpacity,
// // // //   View,
// // // //   useWindowDimensions,
// // // // } from "react-native";
// // // // import CustomBackground from "../../../components/Background/Background";
// // // // import { useData } from "../../../components/context/DataContext";
// // // // import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// // // // import { BASE_URL_IMG } from "../../../config/api";
// // // // import { fehristStyles } from "../../../style/globalcss";

// // // // export default function MainCategoryListPage() {

// // // //   console.log("maincatgory")
// // // //   const navigation = useNavigation();
// // // //   const route = useRoute();
// // // //   const { tableName, category } = route.params || {};
// // // //   const { fetchTableData, loading, getKey } = useData();
// // // //   const { width } = useWindowDimensions();

// // // //   const [data, setData] = useState([]);
// // // //   const [subcategories, setSubcategories] = useState([]);

// // // //   const imageTables = ["qutb", "tawizatusmaniya", "rohanidokan", "amliyatcourse", "hamzad_ka_amal"];
// // // //   const isImageTable = imageTables.includes(tableName);

// // // //   const getNumColumns = () => {
// // // //     if (width < 420) return 1;
// // // //     if (width < 600) return 2;
// // // //     if (width < 768) return 3;
// // // //     if (width < 1024) return 4;
// // // //     if (width < 1200) return 5;
// // // //     return 6;
// // // //   };
// // // //   const numColumns = getNumColumns();
// // // //   const cardMargin = 10;
// // // //   const cardPadding = 10;
// // // //   const containerPadding = 30;
// // // //   const cardWidth = (width - containerPadding - (cardMargin + cardPadding) * numColumns) / numColumns;

// // // //   useEffect(() => {
// // // //     if (!tableName || !category) return;

// // // //     navigation.setOptions({ title: category });

// // // //     let isMounted = true;

// // // //     const load = async () => {
// // // //       const rows = await fetchTableData(tableName, category);
// // // //       if (!isMounted) return;

// // // //       console.log("ROWS FOR CATEGORY →", rows);

// // // //       if (!Array.isArray(rows) || rows.length === 0) {
// // // //         setData([]);
// // // //         setSubcategories([]);
// // // //         return;
// // // //       }

// // // //       const validSubs = rows
// // // //         .map((r) => r.subcategory)
// // // //         .filter((s) => s && s.trim() !== "" && s.trim() !== "0");

// // // //       const uniqueSubs = [...new Set(validSubs)];

// // // //       if (uniqueSubs.length > 0) {
// // // //         const sorted = sortUrduData(uniqueSubs.map((s) => ({ title: s })), "title").map((item) => item.title);
// // // //         setSubcategories(sorted);
// // // //         setData([]);
// // // //       } else {
// // // //         const sorted = sortUrduData(rows, "title");
// // // //         setData(sorted);
// // // //         setSubcategories([]);
// // // //       }
// // // //     };

// // // //     load();

// // // //     return () => {
// // // //       isMounted = false;
// // // //     };
// // // //   }, [tableName, category, navigation, fetchTableData]);

// // // //   const key = getKey(tableName, category);

// // // //   if (loading[key]) {
// // // //     return (
// // // //       <CustomBackground>
// // // //         <View style={fehristStyles.centerContent}>
// // // //           <ActivityIndicator size="large" color="#6C472D" />
// // // //         </View>
// // // //       </CustomBackground>
// // // //     );
// // // //   }

// // // //   if (!loading[key] && data.length === 0 && subcategories.length === 0) {
// // // //     return (
// // // //       <CustomBackground>
// // // //         <View style={fehristStyles.centerContent}>
// // // //           <Text style={fehristStyles.noRecordText}>کوئی ریکارڈ موجود نہیں ہے</Text>
// // // //         </View>
// // // //       </CustomBackground>
// // // //     );
// // // //   }

// // // //   if (subcategories.length > 0) {
// // // //     return (
// // // //       <CustomBackground>
// // // //         <FlatList
// // // //           contentContainerStyle={fehristStyles.fehristcenter}
// // // //           data={subcategories}
// // // //           keyExtractor={(item, index) => index.toString()}
// // // //           renderItem={({ item }) => (
// // // //             <TouchableOpacity
// // // //               style={fehristStyles.card}
// // // //               onPress={() =>
// // // //                 navigation.navigate("SubCategoryDetails", {
// // // //                   tableName,
// // // //                   category,
// // // //                   subcategory: item,
// // // //                 })
// // // //               }
// // // //             >
// // // //               <Text style={fehristStyles.fehristText}>{item}</Text>
// // // //             </TouchableOpacity>
// // // //           )}
// // // //         />
// // // //       </CustomBackground>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <CustomBackground>
// // // //       {isImageTable ? (
// // // //         <View style={fehristStyles.imageContainer}>
// // // //           <FlatList
// // // //             contentContainerStyle={fehristStyles.imageList}
// // // //             data={data}
// // // //             numColumns={numColumns}
// // // //             keyExtractor={(item) => item.id.toString()}
// // // //             renderItem={({ item }) => (
// // // //               <TouchableOpacity
// // // //                 style={{
// // // //                   width: cardWidth,
// // // //                   margin: cardMargin,
// // // //                   padding: cardPadding,
// // // //                   backgroundColor: "#E4DAC1",
// // // //                   borderRadius: 5,
// // // //                   alignItems: "center",
// // // //                   justifyContent: "center",
// // // //                 }}
// // // //                 onPress={() =>
// // // //                   navigation.navigate("CategoryDetails", {
// // // //                     id: item.id,
// // // //                     tableName,
// // // //                   })
// // // //                 }
// // // //               >
// // // //                 {item.image ? (
// // // //                   <Image
// // // //                     source={{ uri: `${BASE_URL_IMG}${item.image}` }}
// // // //                     style={fehristStyles.imageCard}
// // // //                     resizeMode="contain"
// // // //                   />
// // // //                 ) : (
// // // //                   <Text style={fehristStyles.fehristText}>{item.title}</Text>
// // // //                 )}
// // // //               </TouchableOpacity>
// // // //             )}
// // // //           />
// // // //         </View>
// // // //       ) : (
// // // //         <View style={fehristStyles.container}>
// // // //           <FlatList
// // // //             contentContainerStyle={fehristStyles.fehristcenter}
// // // //             data={data}
// // // //             keyExtractor={(item) => item.id.toString()}
// // // //             renderItem={({ item }) => (
// // // //               <TouchableOpacity
// // // //                 style={fehristStyles.card}
// // // //                 onPress={() =>
// // // //                   navigation.navigate("CategoryDetails", {
// // // //                     id: item.id,
// // // //                     tableName,
// // // //                   })
// // // //                 }
// // // //               >
// // // //                 <Text style={fehristStyles.fehristText}>{item.title}</Text>
// // // //               </TouchableOpacity>
// // // //             )}
// // // //           />
// // // //         </View>
// // // //       )}
// // // //     </CustomBackground>
// // // //   );
// // // // }


// // // import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
// // // import { useEffect, useState } from "react";
// // // import {
// // //   ActivityIndicator,
// // //   FlatList,
// // //   Text,
// // //   TouchableOpacity,
// // //   View,
// // // } from "react-native";
// // // import CustomBackground from "../../../components/Background/Background";
// // // import { useData } from "../../../components/context/DataContext";
// // // import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// // // import { fehristStyles } from "../../../style/globalcss";

// // // export default function SubCategoryList() {
// // //   const { tableName, category } = useRoute().params || {};
// // //   const navigation = useNavigation();
// // //   const isFocused = useIsFocused();
// // //   const { fetchTableData } = useData();

// // //   const [subCategories, setSubCategories] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     if (!isFocused || !tableName || !category) return;

// // //     const load = async () => {
// // //       setLoading(true);
// // //       try {
// // //         const rows = await fetchTableData(tableName);
// // //         const data = Array.isArray(rows) ? rows : [];

// // //         // ✅ Filter only those rows that belong to the selected category
// // //         const filtered = data.filter(
// // //           (r) => r.category && String(r.category).trim() === String(category).trim()
// // //         );

// // //         // ✅ Extract unique subcategories
// // //         const subCats = [...new Set(
// // //           filtered
// // //             .map((r) => r.subcategory)
// // //             .filter((c) => c != null && String(c).trim() !== "")
// // //             .map((c) => String(c).trim())
// // //         )];

// // //         // ✅ If no subcategories, navigate to ItemList (final data)
// // //         if (subCats.length === 0) {
// // //           navigation.replace("ItemList", {
// // //             tableName,
// // //             category,
// // //           });
// // //           return;
// // //         }

// // //         // ✅ Sort Urdu data
// // //         const sortedSubCats = sortUrduData(subCats.map((l) => ({ label: l })));
// // //         setSubCategories(sortedSubCats);
// // //       } catch (e) {
// // //         console.warn("SubCategory Load Error:", e);
// // //         setSubCategories([]);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     load();
// // //   }, [isFocused, tableName, category]);

// // //   useEffect(() => {
// // //     navigation.setOptions({ title: category || "سب کیٹیگریز" });
// // //   }, [navigation, category]);

// // //   if (loading) {
// // //     return (
// // //       <CustomBackground>
// // //         <View style={fehristStyles.centerContent}>
// // //           <ActivityIndicator size="large" color="#6C472D" />
// // //         </View>
// // //       </CustomBackground>
// // //     );
// // //   }

// // //   if (!loading && subCategories.length === 0) {
// // //     return (
// // //       <CustomBackground>
// // //         <View style={fehristStyles.centerContent}>
// // //           <Text style={fehristStyles.noRecordText}>کوئی ریکارڈ موجود نہیں ہے</Text>
// // //         </View>
// // //       </CustomBackground>
// // //     );
// // //   }

// // //   return (
// // //     <CustomBackground>
// // //       <FlatList
// // //         data={subCategories}
// // //         keyExtractor={(item) => item.label}
// // //         contentContainerStyle={fehristStyles.fehristcenter}
// // //         renderItem={({ item }) => (
// // //           <TouchableOpacity
// // //             style={fehristStyles.card}
// // //             onPress={() =>
// // //               navigation.navigate("SubCategoryList", {
// // //                 tableName,
// // //                 category: item.label, // ✅ Navigate deeper dynamically
// // //               })
// // //             }
// // //           >
// // //             <Text style={fehristStyles.fehristText}>{item.label}</Text>
// // //           </TouchableOpacity>
// // //         )}
// // //       />
// // //     </CustomBackground>
// // //   );
// // // }



// // import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
// // import { useEffect, useState } from "react";
// // import {
// //   ActivityIndicator,
// //   FlatList,
// //   Text,
// //   TouchableOpacity,
// //   View,
// // } from "react-native";
// // import CustomBackground from "../../../components/Background/Background";
// // import { useData } from "../../../components/context/DataContext";
// // import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// // import { fehristStyles } from "../../../style/globalcss";

// // export default function SubCategoryList() {
// //   const { tableName, category } = useRoute().params || {};
// //   const navigation = useNavigation();
// //   const isFocused = useIsFocused();
// //   const { fetchTableData } = useData();

// //   const [subCategories, setSubCategories] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     if (!isFocused || !tableName || !category) return;

// //     const load = async () => {
// //       setLoading(true);
// //       try {
// //         const rows = await fetchTableData(tableName);
// //         const data = Array.isArray(rows) ? rows : [];

// //         // ✅ Filter only those rows that belong to the selected category
// //         const filtered = data.filter(
// //           (r) => r.category && String(r.category).trim() === String(category).trim()
// //         );

// //         // ✅ Extract unique subcategories
// //         const subCats = [...new Set(
// //           filtered
// //             .map((r) => r.subcategory)
// //             .filter((c) => c != null && String(c).trim() !== "")
// //             .map((c) => String(c).trim())
// //         )];

// //         // ✅ If no subcategories, navigate to ItemList (final data)
// //         if (subCats.length === 0) {
// //           navigation.replace("ItemList", {
// //             tableName,
// //             category,
// //           });
// //           return;
// //         }

// //         // ✅ Sort Urdu data
// //         const sortedSubCats = sortUrduData(subCats.map((l) => ({ label: l })));
// //         setSubCategories(sortedSubCats);
// //       } catch (e) {
// //         console.warn("SubCategory Load Error:", e);
// //         setSubCategories([]);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     load();
// //   }, [isFocused, tableName, category]);

// //   useEffect(() => {
// //     navigation.setOptions({ title: category || "سب کیٹیگریز" });
// //   }, [navigation, category]);

// //   if (loading) {
// //     return (
// //       <CustomBackground>
// //         <View style={fehristStyles.centerContent}>
// //           <ActivityIndicator size="large" color="#6C472D" />
// //         </View>
// //       </CustomBackground>
// //     );
// //   }

// //   if (!loading && subCategories.length === 0) {
// //     return (
// //       <CustomBackground>
// //         <View style={fehristStyles.centerContent}>
// //           <Text style={fehristStyles.noRecordText}>کوئی ریکارڈ موجود نہیں ہے</Text>
// //         </View>
// //       </CustomBackground>
// //     );
// //   }

// //   return (
// //     <CustomBackground>
// //       <FlatList
// //         data={subCategories}
// //         keyExtractor={(item) => item.label}
// //         contentContainerStyle={fehristStyles.fehristcenter}
// //         renderItem={({ item }) => (
// //           <TouchableOpacity
// //             style={fehristStyles.card}
// //             onPress={() =>
// //               navigation.navigate("ItemList", {
// //                 tableName,
// //                 category: item.label, // ✅ Navigate deeper dynamically
// //               })
// //             }
// //           >
// //             <Text style={fehristStyles.fehristText}>{item.label}</Text>
// //           </TouchableOpacity>
// //         )}
// //       />
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

// export default function SubCategoryList() {
//   const { tableName, category } = useRoute().params || {};
//   const navigation = useNavigation();
//   const isFocused = useIsFocused();
//   const { fetchTableData } = useData();

//   const [subcategories, setSubcategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!isFocused || !tableName) return;

//     const load = async () => {
//       setLoading(true);
//       try {
//         const { rows } = await fetchTableData(tableName, { category });
//         const filtered = category
//           ? rows.filter(r => r.category?.trim() === category.trim())
//           : rows;

//         const subs = [...new Set(
//           filtered
//             .map(r => r.subcategory?.trim())
//             .filter(Boolean)
//         )];

//         const sorted = sortUrduData(subs.map(s => ({ label: s })));
//         setSubcategories(sorted);

//         if (subs.length === 0 && category) {
//           navigation.replace("ItemList", { tableName, category });
//         }
//       } catch (e) {
//         console.warn(e);
//         setSubcategories([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     load();
//   }, [isFocused, tableName, category, fetchTableData, navigation]);

//   useEffect(() => {
//     navigation.setOptions({ title: category || "سب کیٹیگریز" });
//   }, [navigation, category]);

//   if (loading) {
//     return (
//       <CustomBackground>
//         <View style={fehristStyles.centerContent}>
//           <ActivityIndicator size="large" color="#6C472D" />
//         </View>
//       </CustomBackground>
//     );
//   }

//   if (subcategories.length === 0) {
//     return (
//       <CustomBackground>
//         <View style={fehristStyles.centerContent}>
//           <Text style={fehristStyles.noRecordText}>کوئی سب کیٹیگری نہیں</Text>
//         </View>
//       </CustomBackground>
//     );
//   }

//   return (
//     <CustomBackground>
//       <FlatList
//         data={subcategories}
//         keyExtractor={item => item.label}
//         contentContainerStyle={fehristStyles.fehristcenter}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={fehristStyles.card}
//             onPress={() => navigation.navigate("ItemList", { tableName, category, subcategory: item.label })}
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

// Loader
const Loader = () => (
  <CustomBackground>
    <View style={fehristStyles.centerContent}>
      <ActivityIndicator size="large" color="#6C472D" />
    </View>
  </CustomBackground>
);

// No Data
const NoData = ({ text }) => (
  <CustomBackground>
    <View style={fehristStyles.centerContent}>
      <Text style={fehristStyles.noRecordText}>{text}</Text>
    </View>
  </CustomBackground>
);

export default function SubCategoryList() {
  const { tableName, category } = useRoute().params || {};
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { fetchSubcategories } = useData();

  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isFocused || !tableName || !category) return;

    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchSubcategories(tableName, category);
        const sorted = sortUrduData(data.map(name => ({ label: name })));
        setSubcategories(sorted);

        if (sorted.length === 0) {
          navigation.replace("ItemList", { tableName, category });
        }
      } catch (e) {
        console.warn("سب کیٹیگریز فیل:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [isFocused, tableName, category, fetchSubcategories, navigation]);

  useEffect(() => {
    navigation.setOptions({ title: category || "سب کیٹیگریز" });
  }, [navigation, category]);

  if (loading) return <Loader />;
  if (subcategories.length === 0) return <NoData text="کوئی سب کیٹیگری نہیں" />;

  return (
    <CustomBackground>
      <FlatList
        data={subcategories}
        keyExtractor={item => item.label}
        contentContainerStyle={fehristStyles.fehristcenter}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={fehristStyles.card}
            onPress={() => navigation.navigate("ItemList", { tableName, category, subcategory: item.label })}
          >
            <Text style={fehristStyles.fehristText}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </CustomBackground>
  );
}
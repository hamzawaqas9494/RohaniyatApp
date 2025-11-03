// // // // // // screens/SubCategoryDetails.jsx
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

// // // // // export default function SubCategoryDetails() {
// // // // //   const route = useRoute();
// // // // //   const navigation = useNavigation();
// // // // //   const { tableName, category, subcategory } = route.params || {};
// // // // //   const { fetchTableData } = useData();
// // // // //   const { width } = useWindowDimensions();

// // // // //   const [data, setData] = useState([]);
// // // // //   const [localLoading, setLocalLoading] = useState(false); // 🟢 Local loader

// // // // //   const imageTables = ["rohanidokan", "amliyatcourse"];
// // // // //   const isImageTable = imageTables.includes(tableName);

// // // // //   // 🟢 Calculate responsive number of columns
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

// // // // //   // 🟢 Load Data
// // // // //   useEffect(() => {
// // // // //     if (!tableName || !category || !subcategory) return;

// // // // //     navigation.setOptions({ title: subcategory });

// // // // //     let isMounted = true;
// // // // //     const load = async () => {
// // // // //       setLocalLoading(true); // ✅ start loader
// // // // //       const rows = await fetchTableData(tableName, category, subcategory);
// // // // //       if (!isMounted) return;

// // // // //       console.log("SUBCATEGORY ROWS →", rows);

// // // // //       if (Array.isArray(rows) && rows.length > 0) {
// // // // //         const sorted = sortUrduData(rows, "title");
// // // // //         setData(sorted);
// // // // //       } else {
// // // // //         setData([]);
// // // // //       }
// // // // //       setLocalLoading(false); // ✅ stop loader
// // // // //     };

// // // // //     load();

// // // // //     return () => {
// // // // //       isMounted = false;
// // // // //     };
// // // // //   }, [tableName, category, subcategory, navigation, fetchTableData]);

// // // // //   // 🟢 Loader UI
// // // // //   if (localLoading) {
// // // // //     return (
// // // // //       <CustomBackground>
// // // // //         <View style={fehristStyles.centerContent}>
// // // // //           <ActivityIndicator size="large" color="#6C472D" />
// // // // //         </View>
// // // // //       </CustomBackground>
// // // // //     );
// // // // //   }

// // // // //   // 🟢 No record UI
// // // // //   if (!localLoading && data.length === 0) {
// // // // //     return (
// // // // //       <CustomBackground>
// // // // //         <View style={fehristStyles.centerContent}>
// // // // //           <Text style={fehristStyles.noRecordText}>کوئی ریکارڈ موجود نہیں ہے</Text>
// // // // //         </View>
// // // // //       </CustomBackground>
// // // // //     );
// // // // //   }

// // // // //   // 🟢 Render Data
// // // // //   return (
// // // // //     <CustomBackground>
// // // // //       {isImageTable ? (
// // // // //         <View style={fehristStyles.imageContainer}>
// // // // //           <FlatList
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

// // // // export default function SubCategoryDetails() {
// // // //   const route = useRoute();
// // // //   const navigation = useNavigation();
// // // //   const { tableName, category, subcategory } = route.params || {};
// // // //   const { fetchTableData } = useData();
// // // //   const { width } = useWindowDimensions();

// // // //   const [data, setData] = useState([]);
// // // //   const [loading, setLoading] = useState(true); // ✅ single loader state

// // // //   const imageTables = ["rohanidokan", "amliyatcourse"];
// // // //   const isImageTable = imageTables.includes(tableName);

// // // //   // 🔹 Calculate number of columns
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
// // // //   const cardWidth =
// // // //     (width - containerPadding - (cardMargin + cardPadding) * numColumns) /
// // // //     numColumns;

// // // //   // 🔹 Load data
// // // //   useEffect(() => {
// // // //     if (!tableName || !category || !subcategory) return;
// // // //     navigation.setOptions({ title: subcategory });

// // // //     let isMounted = true;
// // // //     (async () => {
// // // //       setLoading(true);
// // // //       const rows = await fetchTableData(tableName, category, subcategory);
// // // //       if (!isMounted) return;

// // // //       if (Array.isArray(rows) && rows.length > 0) {
// // // //         setData(sortUrduData(rows, "title"));
// // // //       } else {
// // // //         setData([]);
// // // //       }
// // // //       setLoading(false);
// // // //     })();

// // // //     return () => {
// // // //       isMounted = false;
// // // //     };
// // // //   }, [tableName, category, subcategory, navigation, fetchTableData]);

// // // //   // 🟡 Full-screen loader
// // // //   if (loading) {
// // // //     return (
// // // //       <CustomBackground>
// // // //         <View style={fehristStyles.centerContent}>
// // // //           <ActivityIndicator size="large" color="#6C472D" />
// // // //           <Text style={{ marginTop: 10, color: "#6C472D" }}>لوڈ ہو رہا ہے...</Text>
// // // //         </View>
// // // //       </CustomBackground>
// // // //     );
// // // //   }

// // // //   // 🔴 No record case
// // // //   if (!loading && data.length === 0) {
// // // //     return (
// // // //       <CustomBackground>
// // // //         <View style={fehristStyles.centerContent}>
// // // //           <Text style={fehristStyles.noRecordText}>
// // // //             کوئی ریکارڈ موجود نہیں ہے
// // // //           </Text>
// // // //         </View>
// // // //       </CustomBackground>
// // // //     );
// // // //   }

// // // //   // 🟢 Render list
// // // //   const renderItem = ({ item }) => (
// // // //     <TouchableOpacity
// // // //       style={
// // // //         isImageTable
// // // //           ? {
// // // //               width: cardWidth,
// // // //               margin: cardMargin,
// // // //               padding: cardPadding,
// // // //               backgroundColor: "#E4DAC1",
// // // //               borderRadius: 5,
// // // //               alignItems: "center",
// // // //               justifyContent: "center",
// // // //             }
// // // //           : fehristStyles.card
// // // //       }
// // // //       onPress={() =>
// // // //         navigation.navigate("CategoryDetails", {
// // // //           id: item.id,
// // // //           tableName,
// // // //         })
// // // //       }
// // // //     >
// // // //       {isImageTable ? (
// // // //         item.image ? (
// // // //           <Image
// // // //             source={{ uri: `${BASE_URL_IMG}${item.image}` }}
// // // //             style={fehristStyles.imageCard}
// // // //             resizeMode="contain"
// // // //           />
// // // //         ) : (
// // // //           <Text style={fehristStyles.fehristText}>{item.title}</Text>
// // // //         )
// // // //       ) : (
// // // //         <Text style={fehristStyles.fehristText}>{item.title}</Text>
// // // //       )}
// // // //     </TouchableOpacity>
// // // //   );

// // // //   return (
// // // //     <CustomBackground>
// // // //       <FlatList
// // // //         data={data}
// // // //         numColumns={isImageTable ? numColumns : 1}
// // // //         keyExtractor={(item) => item.id.toString()}
// // // //         renderItem={renderItem}
// // // //         contentContainerStyle={
// // // //           isImageTable ? fehristStyles.imageContainer : fehristStyles.fehristcenter
// // // //         }
// // // //       />
// // // //     </CustomBackground>
// // // //   );
// // // // }



// // // import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
// // // import { useEffect, useState } from "react";
// // // import {
// // //   ActivityIndicator,
// // //   Dimensions,
// // //   FlatList,
// // //   Image,
// // //   Text,
// // //   TouchableOpacity,
// // //   View,
// // // } from "react-native";
// // // import CustomBackground from "../../../components/Background/Background";
// // // import { useData } from "../../../components/context/DataContext";
// // // import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// // // import { BASE_URL_IMG } from "../../../config/api";
// // // import { fehristStyles } from "../../../style/globalcss";

// // // export default function ItemList() {
// // //   const { tableName, category, subcategory, label } = useRoute().params || {};
// // //   const navigation = useNavigation();
// // //   const isFocused = useIsFocused();
// // //   const { fetchTableData } = useData();

// // //   const [items, setItems] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   const { width } = Dimensions.get("window");

// // //   const imageTables = [
// // //     "qutb",
// // //     "rohaniilaaj",
// // //     "tawizatusmaniya",
// // //     "rohanidokan",
// // //     "amliyatcourse",
// // //     "hamzad_ka_amal",
// // //   ];
// // //   const isImageTable = imageTables.includes(tableName);

// // //   const getNumColumns = () => {
// // //     if (width < 420) return 1;
// // //     if (width < 600) return 2;
// // //     if (width < 768) return 3;
// // //     if (width < 1024) return 4;
// // //     if (width < 1200) return 5;
// // //     return 6;
// // //   };
// // //   const numColumns = getNumColumns();

// // //   useEffect(() => {
// // //     if (!isFocused || !tableName) return;

// // //     const load = async () => {
// // //       setLoading(true);
// // //       try {
// // //         const rows = await fetchTableData(tableName);
// // //         const data = Array.isArray(rows) ? rows : [];

// // //         // ✅ Filter based on category/subcategory
// // //         const filtered = data.filter((r) => {
// // //           const catMatch = category
// // //             ? String(r.category).trim() === String(category).trim()
// // //             : true;
// // //           const subMatch = subcategory
// // //             ? String(r.subcategory).trim() === String(subcategory).trim()
// // //             : true;
// // //           return catMatch && subMatch;
// // //         });

// // //         // ✅ Sort Urdu titles
// // //         const sorted = sortUrduData(filtered, "title");
// // //         setItems(sorted);
// // //       } catch (e) {
// // //         console.warn("Item Load Error:", e);
// // //         setItems([]);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     load();
// // //   }, [isFocused, tableName, category, subcategory]);

// // //   useEffect(() => {
// // //     navigation.setOptions({
// // //       title: subcategory || category || label || "آئٹمز",
// // //     });
// // //   }, [navigation, subcategory, category, label, tableName]);

// // //   if (loading) {
// // //     return (
// // //       <CustomBackground>
// // //         <View style={fehristStyles.centerContent}>
// // //           <ActivityIndicator size="large" color="#6C472D" />
// // //         </View>
// // //       </CustomBackground>
// // //     );
// // //   }

// // //   if (!loading && items.length === 0) {
// // //     return (
// // //       <CustomBackground>
// // //         <View style={fehristStyles.centerContent}>
// // //           <Text style={fehristStyles.noRecordText}>کوئی ریکارڈ موجود نہیں ہے</Text>
// // //         </View>
// // //       </CustomBackground>
// // //     );
// // //   }

// // //   const itemsWithImage = items.filter((i) => i.image);
// // //   const itemsWithoutImage = items.filter((i) => !i.image);

// // //   const cardMargin = 10,
// // //     cardPadding = 10,
// // //     containerPadding = 30;
// // //   const cardWidth =
// // //     (width - containerPadding - (cardMargin + cardPadding) * numColumns) /
// // //     numColumns;

// // //   return (
// // //     <CustomBackground>
// // //       {/* 🟩 Image-based tables (Grid View) */}
// // //       {isImageTable && itemsWithImage.length > 0 && (
// // //         <FlatList
// // //           numColumns={numColumns}
// // //           data={itemsWithImage}
// // //           keyExtractor={(item) => item.id?.toString()}
// // //           contentContainerStyle={fehristStyles.imageList}
// // //           renderItem={({ item }) => (
// // //             <TouchableOpacity
// // //               style={{
// // //                 width: cardWidth,
// // //                 margin: cardMargin,
// // //                 padding: cardPadding,
// // //                 backgroundColor: "#E4DAC1",
// // //                 borderRadius: 5,
// // //                 alignItems: "center",
// // //               }}
// // //               onPress={() =>
// // //                 navigation.navigate("CategoryDetails", {
// // //                   id: item.id,
// // //                   tableName,
// // //                 })
// // //               }
// // //             >
// // //               <Image
// // //                 source={{ uri: `${BASE_URL_IMG}${item.image}` }}
// // //                 style={fehristStyles.imageCard}
// // //                 resizeMode="contain"
// // //               />
// // //             </TouchableOpacity>
// // //           )}
// // //         />
// // //       )}

// // //       {/* 🟫 Text-only tables (List View) */}
// // //       {(itemsWithoutImage.length > 0 || !isImageTable) && (
// // //         <FlatList
// // //           data={isImageTable ? itemsWithoutImage : items}
// // //           keyExtractor={(item) => item.id?.toString()}
// // //           contentContainerStyle={fehristStyles.fehristcenter}
// // //           renderItem={({ item }) => (
// // //             <TouchableOpacity
// // //               style={fehristStyles.card}
// // //               onPress={() =>
// // //                 navigation.navigate("CategoryDetails", {
// // //                   id: item.id,
// // //                   tableName,
// // //                 })
// // //               }
// // //             >
// // //               <Text style={fehristStyles.fehristText}>
// // //                 {item.title || "بغیر عنوان"}
// // //               </Text>
// // //             </TouchableOpacity>
// // //           )}
// // //         />
// // //       )}
// // //     </CustomBackground>
// // //   );
// // // }



// // import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
// // import { useEffect, useState } from "react";
// // import { ActivityIndicator, Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
// // import CustomBackground from "../../../components/Background/Background";
// // import { useData } from "../../../components/context/DataContext";
// // import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// // import { BASE_URL_IMG } from "../../../config/api";
// // import { fehristStyles } from "../../../style/globalcss";

// // export default function ItemList() {
// //   const { tableName, category, subcategory, label } = useRoute().params || {};
// //   const navigation = useNavigation();
// //   const isFocused = useIsFocused();
// //   const { fetchTableData } = useData();

// //   const [items, setItems] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const allowedTables = ["qutb", "rohaniilaaj", "tawizatusmaniya", "rohanidokan", "amliyatcourse", "hamzad_ka_amal"];
// //   const isSpecialTable = allowedTables.includes(tableName);

// //   const { width } = Dimensions.get("window");
// //   const numColumns = width < 600 ? 2 : width < 900 ? 3 : 4;
// //   const cardMargin = 10, cardPadding = 10, containerPadding = 30;
// //   const cardWidth = (width - containerPadding - (cardMargin + cardPadding) * numColumns) / numColumns;

// //   useEffect(() => {
// //     if (!isFocused || !tableName) return;

// //     const load = async () => {
// //       setLoading(true);
// //       try {
// //         const { rows } = await fetchTableData(tableName, { category, subcategory });
// //         const sorted = sortUrduData(rows, "title");
// //         setItems(sorted);
// //       } catch (e) {
// //         console.warn(e);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     load();
// //   }, [isFocused, tableName, category, subcategory, fetchTableData]);

// //   useEffect(() => {
// //     navigation.setOptions({ title: subcategory || category || label || "آئٹمز" });
// //   }, [navigation, subcategory, category, label]);

// //   if (loading) {
// //     return (
// //       <CustomBackground>
// //         <View style={fehristStyles.centerContent}>
// //           <ActivityIndicator size="large" color="#6C472D" />
// //         </View>
// //       </CustomBackground>
// //     );
// //   }

// //   const itemsWithImage = items.filter(i => i.image);
// //   const itemsWithoutImage = items.filter(i => !i.image);

// //   return (
// //     <CustomBackground>

// //       {isSpecialTable && itemsWithImage.length > 0 && (
// //         <View style={fehristStyles.imageContainer}>
// //           <FlatList
// //             data={itemsWithImage}
// //             numColumns={numColumns}
// //             contentContainerStyle={fehristStyles.imageList}
// //             keyExtractor={item => item.id.toString()}
// //             renderItem={({ item }) => (
// //               <TouchableOpacity
// //                 style={{
// //                   width: cardWidth,
// //                   margin: cardMargin,
// //                   padding: cardPadding,
// //                   backgroundColor: "#E4DAC1",
// //                   borderRadius: 5,
// //                   alignItems: "center",
// //                 }}
// //                 onPress={() => navigation.navigate("CategoryDetails", { id: item.id, tableName })}
// //               >
// //                 <Image source={{ uri: `${BASE_URL_IMG}${item.image}` }} style={fehristStyles.imageCard} resizeMode="contain" />
// //               </TouchableOpacity>
// //             )}
// //           />
// //         </View>
// //       )}

// //       {(itemsWithoutImage.length > 0 || !isSpecialTable) && (
// //         <View style={fehristStyles.container}>
// //           <FlatList
// //             data={isSpecialTable ? itemsWithoutImage : items}
// //             contentContainerStyle={fehristStyles.fehristcenter}
// //             keyExtractor={item => item.id.toString()}
// //             renderItem={({ item }) => (
// //               <TouchableOpacity
// //                 style={fehristStyles.card}
// //                 onPress={() => navigation.navigate("CategoryDetails", { id: item.id, tableName })}
// //               >
// //                 <Text style={fehristStyles.fehristText}>{item.title}</Text>
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
// import { ActivityIndicator, Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
// import CustomBackground from "../../../components/Background/Background";
// import { useData } from "../../../components/context/DataContext";
// import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// import { BASE_URL_IMG } from "../../../config/api";
// import { fehristStyles } from "../../../style/globalcss";

// // Loader
// const Loader = () => (
//   <CustomBackground>
//     <View style={fehristStyles.centerContent}>
//       <ActivityIndicator size="large" color="#6C472D" />
//     </View>
//   </CustomBackground>
// );

// export default function ItemList() {
//   const { tableName, category, subcategory, label } = useRoute().params || {};
//   const navigation = useNavigation();
//   const isFocused = useIsFocused();
//   const { fetchItems } = useData();

//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const isSpecialTable = ["qutb", "rohaniilaaj", "tawizatusmaniya", "rohanidokan", "amliyatcourse", "hamzad_ka_amal"].includes(tableName);

//   const { width } = Dimensions.get("window");
//   const numColumns = width < 600 ? 2 : width < 900 ? 3 : 4;
//   const cardWidth = (width - 60 - 40 * numColumns) / numColumns;

//   useEffect(() => {
//     if (!isFocused || !tableName) return;

//     const load = async () => {
//       setLoading(true);
//       try {
//         const data = await fetchItems(tableName, category, subcategory);
//         setItems(sortUrduData(data, "title"));
//       } catch (e) {
//         console.warn("آئٹمز فیل:", e);
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//   }, [isFocused, tableName, category, subcategory, fetchItems]);

//   useEffect(() => {
//     navigation.setOptions({ title: subcategory || category || label || "آئٹمز" });
//   }, [navigation, subcategory, category, label]);

//   if (loading) return <Loader />;

//   const itemsWithImage = items.filter(i => i.image);
//   const itemsWithoutImage = items.filter(i => !i.image);

//   return (
//     <CustomBackground>

//       {isSpecialTable && itemsWithImage.length > 0 && (
//         <FlatList
//           data={itemsWithImage}
//           numColumns={numColumns}
//           contentContainerStyle={fehristStyles.imageList}
//           keyExtractor={item => item.id.toString()}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={{
//                 width: cardWidth,
//                 margin: 10,
//                 padding: 10,
//                 backgroundColor: "#E4DAC1",
//                 borderRadius: 5,
//                 alignItems: "center",
//               }}
//               onPress={() => navigation.navigate("CategoryDetails", { id: item.id, tableName })}
//             >
//               <Image source={{ uri: `${BASE_URL_IMG}${item.image}` }} style={fehristStyles.imageCard} resizeMode="contain" />
//             </TouchableOpacity>
//           )}
//         />
//       )}

//       {(itemsWithoutImage.length > 0 || !isSpecialTable) && (
//         <FlatList
//           data={isSpecialTable ? itemsWithoutImage : items}
//           contentContainerStyle={fehristStyles.fehristcenter}
//           keyExtractor={item => item.id.toString()}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={fehristStyles.card}
//               onPress={() => navigation.navigate("CategoryDetails", { id: item.id, tableName })}
//             >
//               <Text style={fehristStyles.fehristText}>{item.title}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       )}
//     </CustomBackground>
//   );
// }


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
        const response = await fetchItems(tableName, category, subcategory);
        console.log("API Response:", response);

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
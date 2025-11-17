// // // import NetInfo from "@react-native-community/netinfo";
// // // import { useNavigation, useRoute } from "@react-navigation/native";
// // // import { useEffect, useState } from "react";
// // // import {
// // //   FlatList,
// // //   Image,
// // //   Text,
// // //   TouchableOpacity,
// // //   useWindowDimensions,
// // // } from "react-native";
// // // import CustomBackground from "../../../components/Background/Background";
// // // import { useData } from "../../../components/context/DataContext";
// // // import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
// // // import Loader from "../../../components/Loader/Loader";
// // // import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// // // import { BASE_URL_IMG } from "../../../config/api";
// // // import { fehristStyles } from "../../../style/globalcss";

// // // export default function ItemList() {
// // //   const { tableName, category, subcategory, label } = useRoute().params || {};
// // //   const navigation = useNavigation();
// // //   const { fetchItems } = useData();

// // //   const [items, setItems] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [errorMsg, setErrorMsg] = useState("");


// // //   const { width } = useWindowDimensions();

// // //   const isSpecialTable = [
// // //     "qutb",
// // //     "rohaniilaaj",
// // //     "tawizatusmaniya",
// // //     "rohanidokan",
// // //     "amliyatcourse",
// // //     "hamzad_ka_amal",
// // //   ].includes(tableName);

// // //   const getNumColumns = () => {
// // //     if (width < 340) return 1;
// // //     if (width < 475) return 2;
// // //     if (width < 575) return 3;
// // //     if (width < 768) return 4;
// // //     if (width < 1024) return 5;
// // //     if (width < 1200) return 6;
// // //     return 8;
// // //   };

// // //   const numColumns = getNumColumns();
// // //   const cardMargin = 10;
// // //   const cardPadding = 10;
// // //   const containerPadding = 30;
// // //   const cardWidth =
// // //     (width - containerPadding - (cardMargin + cardPadding) * numColumns) / numColumns;
// // //   useEffect(() => {
// // //     const load = async () => {
// // //       if (!tableName) return;
// // //       setLoading(true);
// // //       setErrorMsg("");

// // //       try {
// // //         const netState = await NetInfo.fetch();
// // //         if (!netState.isConnected) {
// // //           setErrorMsg("انٹرنیٹ کنکشن موجود نہیں ہے۔");
// // //           return;
// // //         }

// // //         const data = await fetchItems(tableName, category, subcategory);

// // //         if (!data || data.length === 0) {
// // //           setErrorMsg("کوئی مواد موجود نہیں ہے۔");
// // //           return;
// // //         }

// // //         setItems(sortUrduData(data, "title"));
// // //       } catch (e) {
// // //         console.warn("آئٹمز فیل:", e);
// // //         setErrorMsg("انٹرنیٹ کنکشن موجود نہیں ہے۔");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     load();
// // //   }, [tableName, category, subcategory, fetchItems]);

// // //   useEffect(() => {
// // //     navigation.setOptions({ title: subcategory || category || label || "..." });
// // //   }, [navigation, subcategory, category, label]);

// // //   if (loading) return <Loader />;
// // //   if (errorMsg) return <ErrorMessage text={errorMsg} />;

// // //   return (
// // //     <CustomBackground>
// // //       <FlatList
// // //         data={items}
// // //         key={numColumns} 
// // //         numColumns={isSpecialTable ? numColumns : 1}
// // //         contentContainerStyle={
// // //           isSpecialTable
// // //             ? fehristStyles.imageListCenter
// // //             : fehristStyles.fehristcenter
// // //         }
// // //         keyExtractor={(item) => item.id.toString()}
// // //         renderItem={({ item }) => (
// // //           <TouchableOpacity
// // //             style={
// // //               isSpecialTable
// // //                 ? {
// // //                   width: cardWidth,
// // //           height: cardWidth,
// // //           margin: cardMargin,
// // //           padding:cardPadding,
// // //           backgroundColor: "#E4DAC1",
// // //           borderRadius: 5,
// // //           justifyContent: "center", 
// // //           alignItems: "center", 
// // //           overflow: "hidden", 
// // //                   }
// // //                 : fehristStyles.card
// // //             }
// // //             onPress={() =>
// // //               navigation.navigate("CategoryDetails", { id: item.id, tableName })
// // //             }
// // //           >
// // //           {isSpecialTable ? (
// // //   item.image ? (
// // //     <Image
// // //       source={{ uri: `${BASE_URL_IMG}${item.image}` }}
// // //       style={fehristStyles.imageCard}
// // //       resizeMode="contain"
// // //     />
// // //   ) : (
// // //     <Text
// // //       style={{textAlign: 'center',color:'#6C472D',fontSize: 12,}}
// // //     >
// // //       Image not available
// // //     </Text>
// // //   )
// // // ) : (
// // //   <Text style={fehristStyles.fehristText}>{item.title}</Text>
// // // )}

// // //           </TouchableOpacity>
// // //         )}
// // //       />
// // //     </CustomBackground>
// // //   );
// // // }




// // /////////////////////////////////////////////////////////////////////////////test file //////////////////////////////
// // import NetInfo from "@react-native-community/netinfo";
// // import { useNavigation, useRoute } from "@react-navigation/native";
// // import { useEffect, useState } from "react";
// // import {
// //   FlatList,
// //   Image,
// //   ScrollView,
// //   Text,
// //   TouchableOpacity,
// //   useWindowDimensions,
// //   View
// // } from "react-native";
// // import CustomBackground from "../../../components/Background/Background";
// // import { useData } from "../../../components/context/DataContext";
// // import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
// // import Loader from "../../../components/Loader/Loader";
// // import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// // import { BASE_URL_IMG } from "../../../config/api";
// // import { fehristStyles } from "../../../style/globalcss";

// // export default function ItemList() {
// //   const { tableName, category, subcategory, label } = useRoute().params || {};
// //   const navigation = useNavigation();
// //   const { fetchItems } = useData();

// //   const [items, setItems] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [errorMsg, setErrorMsg] = useState("");
// //   const [imageHeights, setImageHeights] = useState({}); // store dynamic heights

// //   const { width } = useWindowDimensions();

// //   const isSpecialTable = [
// //     "qutb",
// //     "rohaniilaaj",
// //     "tawizatusmaniya",
// //     "rohanidokan",
// //     "amliyatcourse",
// //     "hamzad_ka_amal",
// //   ].includes(tableName);

// //   // Dynamic columns based on screen width
// //   const getNumColumns = () => {
// //     if (width < 640) return 1;
// //     if (width < 768) return 2;
// //     if (width < 1024) return 3;
// //        if (width < 1280) return 4;
// //     return 6;
// //   };
// //   const numColumns = isSpecialTable ? getNumColumns() : 1;

// //   const cardMargin = 10;
// //   const cardPadding = 10;
// //     const imageListCenter = 20;
// // const totalWidth = width - cardMargin - imageListCenter - 5;
// // const cardWidth = isSpecialTable
// //   ? (totalWidth - cardMargin * 2 * numColumns) / numColumns
// //   : totalWidth - cardMargin * 2;

// //   // Fetch items
// //   useEffect(() => {
// //     const load = async () => {
// //       if (!tableName) return;
// //       setLoading(true);
// //       setErrorMsg("");

// //       try {
// //         const netState = await NetInfo.fetch();
// //         if (!netState.isConnected) {
// //           setErrorMsg("انٹرنیٹ کنکشن موجود نہیں ہے۔");
// //           return;
// //         }

// //         const data = await fetchItems(tableName, category, subcategory);

// //         if (!data || data.length === 0) {
// //           setErrorMsg("کوئی مواد موجود نہیں ہے۔");
// //           return;
// //         }

// //         setItems(sortUrduData(data, "title"));
// //       } catch (e) {
// //         console.warn("آئٹمز فیل:", e);
// //         setErrorMsg("انٹرنیٹ کنکشن موجود نہیں ہے۔");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     load();
// //   }, [tableName, category, subcategory, fetchItems]);

// //   useEffect(() => {
// //     navigation.setOptions({ title: subcategory || category || label || "..." });
// //   }, [navigation, subcategory, category, label]);

// //   // Function to calculate image height dynamically
// //   const getImageHeight = (uri) => {
// //     if (!uri) return 100;
// //     return new Promise((resolve) => {
// //       Image.getSize(uri, (w, h) => {
// //         const scaleFactor = cardWidth / w;
// //         resolve(h * scaleFactor);
// //       });
// //     });
// //   };

// //   // Precalculate all image heights
// //   useEffect(() => {
    
// //     if (!isSpecialTable || items.length === 0) return;

// //     items.forEach(async (item) => {
// //       if (item.image && !imageHeights[item.id]) {
// //         const height = await getImageHeight(`${BASE_URL_IMG}${item.image}`);
// //         setImageHeights((prev) => ({ ...prev, [item.id]: height }));
// //       }
// //     });
// //   }, [items, cardWidth]);

// //   if (loading) return <Loader />;
// //   if (errorMsg) return <ErrorMessage text={errorMsg} />;

// //   return (
// //     <CustomBackground>
// //          <ScrollView>
// //                <View style={  
// //                 isSpecialTable
// //             ? fehristStyles.imageListCenter
// //             : fehristStyles.fehristcenter}>
// //       <FlatList
// //        key={numColumns} 
// //   data={items}
// //   numColumns={numColumns}
      
    
// //         keyExtractor={(item) => item.id.toString()}
// //         renderItem={({ item }) => {
// //           const height = imageHeights[item.id] || 100;

// //           return (
// //             <TouchableOpacity
// //               style={
// //                  isSpecialTable
// //                ? 
// //                 {
// //                 width: cardWidth,
// //                 margin: cardMargin,
// //                 padding: cardPadding,
// //                 backgroundColor: "#E4DAC1",
// //                 borderRadius: 5,
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //                 height: height + cardPadding * 2 - cardPadding,
// //               }
// //                : fehristStyles.card}
// //               onPress={() =>
// //                 navigation.navigate("CategoryDetails", {
// //                   id: item.id,
// //                   tableName,
// //                 })
// //               }
// //             >
// //               {isSpecialTable ? (
// //                 item.image ? (
// //                   <Image
// //                     source={{ uri: `${BASE_URL_IMG}${item.image}` }}
// //                     style={{
// //                       width: "100%",
// //                       height: height  - cardPadding,
// //                       borderRadius: 5,
// //                     }}
// //                     resizeMode="contain"
// //                   />
// //                 ) : (
// //                   <Text
// //                     style={{
// //                       textAlign: "center",
// //                       color: "#6C472D",
// //                       fontSize: 12,
// //                     }}
// //                   >
// //                     Image not available
// //                   </Text>
// //                 )
// //               ) : (
// //                 <Text style={fehristStyles.fehristText}>{item.title}</Text>
// //               )}
// //             </TouchableOpacity>
// //           );
// //         }}
// //       />
// //       </View>
// //        </ScrollView>
// //     </CustomBackground>
// //   );
// // }



// import NetInfo from "@react-native-community/netinfo";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import {
//   FlatList,
//   Image,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   useWindowDimensions,
//   View,
// } from "react-native";
// import CustomBackground from "../../../components/Background/Background";
// import { useData } from "../../../components/context/DataContext";
// import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
// import Loader from "../../../components/Loader/Loader";
// import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// import { BASE_URL_IMG } from "../../../config/api";
// import { fehristStyles } from "../../../style/globalcss";

// export default function ItemList() {
//   const { tableName, category, subcategory, label } = useRoute().params || {};
//   const navigation = useNavigation();
//   const { fetchItems } = useData();

//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMsg, setErrorMsg] = useState("");

//   const { width } = useWindowDimensions();

//   const isSpecialTable = [
//     "qutb",
//     "rohaniilaaj",
//     "tawizatusmaniya",
//     "rohanidokan",
//     "amliyatcourse",
//     "hamzad_ka_amal",
//   ].includes(tableName);

//   // Dynamic columns
//   const getNumColumns = () => {
//     if (width < 640) return 1;
//     if (width < 768) return 2;
//     if (width < 1024) return 3;
//     if (width < 1280) return 4;
//     return 6;
//   };
//   const numColumns = isSpecialTable ? getNumColumns() : 1;

//   const cardMargin = 10;
//   const cardPadding = 10;
//   const imageListCenter = 20;

//   const totalWidth = width - cardMargin - imageListCenter - 5;
//   const cardWidth = isSpecialTable
//     ? (totalWidth - cardMargin * 2 * numColumns) / numColumns
//     : totalWidth - cardMargin * 2;

//   // FIXED CARD SIZE
//   const FIXED_CARD_HEIGHT = 300; // Tum yahan change kar sakte ho
//   const FIXED_IMAGE_HEIGHT = FIXED_CARD_HEIGHT - cardPadding * 2;

//   // Fetch items
//   useEffect(() => {
//     const load = async () => {
//       if (!tableName) return;
//       setLoading(true);
//       setErrorMsg("");

//       try {
//         const netState = await NetInfo.fetch();
//         if (!netState.isConnected) {
//           setErrorMsg("انٹرنیٹ کنکشن موجود نہیں ہے۔");
//           return;
//         }

//         const data = await fetchItems(tableName, category, subcategory);
//         if (!data || data.length === 0) {
//           setErrorMsg("کوئی مواد موجود نہیں ہے۔");
//           return;
//         }

//         setItems(sortUrduData(data, "title"));
//       } catch (e) {
//         console.warn("آئٹمز فیل:", e);
//         setErrorMsg("انٹرنیٹ کنکشن موجود نہیں ہے۔");
//       } finally {
//         setLoading(false);
//       }
//     };

//     load();
//   }, [tableName, category, subcategory, fetchItems]);

//   useEffect(() => {
//     navigation.setOptions({ title: subcategory || category || label || "..." });
//   }, [navigation, subcategory, category, label]);

//   if (loading) return <Loader />;
//   if (errorMsg) return <ErrorMessage text={errorMsg} />;

//   return (
//     <CustomBackground>
//       <ScrollView>
//         <View
//           style={
//             isSpecialTable
//               ? fehristStyles.imageListCenter
//               : fehristStyles.fehristcenter
//           }
//         >
//           <FlatList
//             key={numColumns}
//             data={items}
//             numColumns={numColumns}
//             keyExtractor={(item) => item.id.toString()}
//             removeClippedSubviews={true}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={
//                   isSpecialTable
//                     ? {
//                         width: cardWidth,
//                         height: FIXED_CARD_HEIGHT,
//                         margin: cardMargin,
//                         padding: cardPadding,
//                         backgroundColor: "#E4DAC1",
//                         borderRadius: 5,
//                         justifyContent: "center",
//                         alignItems: "center",
//                       }
//                     : fehristStyles.card
//                 }
//                 onPress={() =>
//                   navigation.navigate("CategoryDetails", {
//                     id: item.id,
//                     tableName,
//                   })
//                 }
//               >
//                 {isSpecialTable ? (
//                   item.image ? (
//                     // 100% FIT — HORIZONTALLY + VERTICALLY
//                     <Image
//                       source={{ uri: `${BASE_URL_IMG}${item.image}` }}
//                       style={{
//                         width: "100%",
//                         height: FIXED_IMAGE_HEIGHT,
//                         borderRadius: 5,
//                       }}
//                       resizeMode="stretch" // ← 100% FIT, NO GAP
//                     />
//                   ) : (
//                     // NO IMAGE — SAME SIZE
//                     <View
//                       style={{
//                         width: "100%",
//                         height: FIXED_IMAGE_HEIGHT,
//                         backgroundColor: "#D9C9A8",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         borderRadius: 5,
//                       }}
//                     >
//                       <Text
//                         style={{
//                           textAlign: "center",
//                           color: "#6C472D",
//                           fontSize: 14,
//                           fontWeight: "600",
//                         }}
//                       >
//                         Image not available
//                       </Text>
//                     </View>
//                   )
//                 ) : (
//                   <Text style={fehristStyles.fehristText}>{item.title}</Text>
//                 )}
//               </TouchableOpacity>
//             )}
//           />
//         </View>
//       </ScrollView>
//     </CustomBackground>
//   );
// }



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
import { fehristStyles } from "../../../style/globalcss";

export default function ItemList() {
  const { tableName, category, subcategory, label } = useRoute().params || {};
  const navigation = useNavigation();
  const { fetchItems } = useData();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const { width } = useWindowDimensions();

  const isSpecialTable = [
    "qutb",
    "rohaniilaaj",
    "tawizatusmaniya",
    "rohanidokan",
    "amliyatcourse",
    "hamzad_ka_amal",
  ].includes(tableName);

  // Dynamic columns
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
  const imageListCenter = 20;

  const totalWidth = width-imageListCenter;
  const cardWidth = isSpecialTable
    ? (totalWidth - cardMargin * 2 * numColumns) / numColumns
    : totalWidth - cardMargin * 2;

  // 🔥 RESPONSIVE CARD HEIGHT
  const getCardHeight = () => {
       if (width < 375) return 200; // small phones
       if (width < 400) return 250; // small phones
    if (width < 475) return 240; // small phones
    if (width < 640) return 300; // medium phones
    if (width < 768) return 200; // tablets portrait
    if (width < 1024) return 180; // tablets landscape
    if (width < 1280) return 200; // small desktops
       
       
    return 240; // large screens
  };

  const FIXED_CARD_HEIGHT = getCardHeight();
  const FIXED_IMAGE_HEIGHT = FIXED_CARD_HEIGHT - cardPadding * 2;

  // Fetch items
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
    navigation.setOptions({ title: subcategory || category || label || "..." });
  }, [navigation, subcategory, category, label]);

  if (loading) return <Loader />;
  if (errorMsg) return <ErrorMessage text={errorMsg} />;

  return (
    <CustomBackground>
     
     
          <FlatList
            key={numColumns}
            data={items}
            numColumns={numColumns}
             contentContainerStyle={  isSpecialTable
              ? fehristStyles.imageListCenter
              : fehristStyles.fehristcenter}
            keyExtractor={(item) => item.id.toString()}
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
                        // justifyContent: "center",
                        // alignItems: "center",
                      }
                    : fehristStyles.card
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
                    // Image always fills full card area
                    <Image
                      source={{ uri: `${BASE_URL_IMG}${item.image}` }}
                      style={{
                        width: "100%",
                        height: FIXED_IMAGE_HEIGHT,
                        borderRadius: 5,
                      }}
                      resizeMode="stretch" // full fit, no gap
                    />
                  ) : (
                    // Fallback if no image
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
                  <Text style={fehristStyles.fehristText}>{item.title}</Text>
                )}
              </TouchableOpacity>
            )}
          />
       
    
    </CustomBackground>
  );
}

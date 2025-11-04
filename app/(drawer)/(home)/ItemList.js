// // import { useNavigation, useRoute } from "@react-navigation/native";
// // import { useEffect, useState } from "react";
// // import { ActivityIndicator, Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
// // import CustomBackground from "../../../components/Background/Background";
// // import { useData } from "../../../components/context/DataContext";
// // import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// // import { BASE_URL_IMG } from "../../../config/api";
// // import { fehristStyles } from "../../../style/globalcss";

// // const Loader = () => (
// //   <CustomBackground>
// //     <View style={fehristStyles.centerContent}>
// //       <ActivityIndicator size="large" color="#6C472D" />
// //     </View>
// //   </CustomBackground>
// // );

// // export default function ItemList() {
// //   const { tableName, category, subcategory, label } = useRoute().params || {};
// //   const navigation = useNavigation();
// //   const { fetchItems } = useData();

// //   const [items, setItems] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const isSpecialTable = ["qutb", "rohaniilaaj", "tawizatusmaniya", "rohanidokan", "amliyatcourse", "hamzad_ka_amal"].includes(tableName);

// //   const { width } = Dimensions.get("window");
// //   const numColumns = width < 600 ? 2 : width < 900 ? 3 : 4;
// //   const cardWidth = (width - 60 - 40 * numColumns) / numColumns;

// //   useEffect(() => {
// //     const load = async () => {
// //       if (!tableName) return;
// //       setLoading(true);
// //       try {
// //         const data = await fetchItems(tableName, category, subcategory);
// //         setItems(sortUrduData(data, "title"));
// //       } catch (e) {
// //         console.warn("آئٹمز فیل:", e);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     load();
// //   }, [tableName, category, subcategory]);

// //   useEffect(() => {
// //     navigation.setOptions({ title: subcategory || category || label || "آئٹمز" });
// //   }, [navigation, subcategory, category, label]);

// //   if (loading) return <Loader />;

// //   const itemsWithImage = items.filter(i => i.image);
// //   const itemsWithoutImage = items.filter(i => !i.image);

// //   return (
// //     <CustomBackground>
// //       {isSpecialTable && itemsWithImage.length > 0 && (
// //         <FlatList
// //           data={itemsWithImage}
// //           numColumns={numColumns}
// //           contentContainerStyle={fehristStyles.imageList}
// //           keyExtractor={item => item.id.toString()}
// //           renderItem={({ item }) => (
// //             <TouchableOpacity
// //               style={{ width: cardWidth, margin: 10, padding: 10, backgroundColor: "#E4DAC1", borderRadius: 5, alignItems: "center" }}
// //               onPress={() => navigation.navigate("CategoryDetails", { id: item.id, tableName })}
// //             >
// //               <Image source={{ uri: `${BASE_URL_IMG}${item.image}` }} style={fehristStyles.imageCard} resizeMode="contain" />
// //             </TouchableOpacity>
// //           )}
// //         />
// //       )}

// //       {(itemsWithoutImage.length > 0 || !isSpecialTable) && (
// //         <FlatList
// //           data={isSpecialTable ? itemsWithoutImage : items}
// //           contentContainerStyle={fehristStyles.fehristcenter}
// //           keyExtractor={item => item.id.toString()}
// //           renderItem={({ item }) => (
// //             <TouchableOpacity
// //               style={fehristStyles.card}
// //               onPress={() => navigation.navigate("CategoryDetails", { id: item.id, tableName })}
// //             >
// //               <Text style={fehristStyles.fehristText}>{item.title}</Text>
// //             </TouchableOpacity>
// //           )}
// //         />
// //       )}
// //     </CustomBackground>
// //   );
// // }



// import NetInfo from "@react-native-community/netinfo";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import { Dimensions, FlatList, Image, Text, TouchableOpacity } from "react-native";
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

//   const isSpecialTable = [
//     "qutb",
//     "rohaniilaaj",
//     "tawizatusmaniya",
//     "rohanidokan",
//     "amliyatcourse",
//     "hamzad_ka_amal",
//   ].includes(tableName);

//   const { width } = Dimensions.get("window");
//   const numColumns = width < 600 ? 2 : width < 900 ? 3 : 4;
//   const cardWidth = (width - 60 - 40 * numColumns) / numColumns;

//   useEffect(() => {
//     const load = async () => {
//       if (!tableName) return;
//       setLoading(true);
//       setErrorMsg("");

//       try {
//         // 🔌 Internet check
//         const netState = await NetInfo.fetch();
//         if (!netState.isConnected) {
//           setErrorMsg("📴 انٹرنیٹ کنکشن موجود نہیں ہے۔");
//           return;
//         }

//         const data = await fetchItems(tableName, category, subcategory);

//         if (!data || data.length === 0) {
//           setErrorMsg("📂 کوئی مواد موجود نہیں ہے۔");
//           return;
//         }

//         setItems(sortUrduData(data, "title"));
//       } catch (e) {
//         console.warn("آئٹمز فیل:", e);
//         setErrorMsg("⚠️ مواد لوڈ کرنے میں مسئلہ آیا۔");
//       } finally {
//         setLoading(false);
//       }
//     };

//     load();
//   }, [tableName, category, subcategory]);

//   useEffect(() => {
//     navigation.setOptions({ title: subcategory || category || label || "..."  });
//   }, [navigation, subcategory, category, label]);

//   // 🔵 Loader
//   if (loading) return <Loader />;

//   // 🔴 Error message
//   if (errorMsg) return <ErrorMessage text={errorMsg} />;

//   // ✅ Split data
//   const itemsWithImage = items.filter((i) => i.image);
//   const itemsWithoutImage = items.filter((i) => !i.image);

//   return (
//     <CustomBackground>
//       {/* 🖼️ Image Grid Section */}
//       {isSpecialTable && itemsWithImage.length > 0 && (
//         <FlatList
//           data={itemsWithImage}
//           numColumns={numColumns}
//           contentContainerStyle={fehristStyles.imageList}
//           keyExtractor={(item) => item.id.toString()}
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
//               onPress={() =>
//                 navigation.navigate("CategoryDetails", { id: item.id, tableName })
//               }
//             >
//               <Image
//                 source={{ uri: `${BASE_URL_IMG}${item.image}` }}
//                 style={fehristStyles.imageCard}
//                 resizeMode="contain"
//               />
//             </TouchableOpacity>
//           )}
//         />
//       )}

//       {/* 📜 Text List Section */}
//       {(itemsWithoutImage.length > 0 || !isSpecialTable) && (
//         <FlatList
//           data={isSpecialTable ? itemsWithoutImage : items}
//           contentContainerStyle={fehristStyles.fehristcenter}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={fehristStyles.card}
//               onPress={() =>
//                 navigation.navigate("CategoryDetails", { id: item.id, tableName })
//               }
//             >
//               <Text style={fehristStyles.fehristText}>{item.title}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       )}
//     </CustomBackground>
//   );
// }



import NetInfo from "@react-native-community/netinfo";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, Text, TouchableOpacity } from "react-native";
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

  const isSpecialTable = [
    "qutb",
    "rohaniilaaj",
    "tawizatusmaniya",
    "rohanidokan",
    "amliyatcourse",
    "hamzad_ka_amal",
  ].includes(tableName);

  const { width } = Dimensions.get("window");

  // ریسپونسیو کالم فنکشن
  const getNumColumns = () => {
    if (width < 420) return 1;
    if (width < 600) return 2;
    if (width < 768) return 3;
    if (width < 1024) return 4;
    if (width < 1200) return 5;
    return 6;
  };

  const numColumns = getNumColumns();
  const cardMargin = 10;
  const cardPadding = 10;
  const containerPadding = 30;

  // ریسپونسیو cardWidth
  const cardWidth = (width - containerPadding - (cardMargin + cardPadding) * numColumns) / numColumns;

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

  const itemsWithImage = items.filter((i) => i.image);
  const itemsWithoutImage = items.filter((i) => !i.image);

  return (
    <CustomBackground>
      {/* Image Grid Section - صرف کارڈ کا سائز ریسپونسیو */}
      {isSpecialTable && itemsWithImage.length > 0 && (
        <FlatList
          data={itemsWithImage}
          numColumns={numColumns}
          contentContainerStyle={fehristStyles.imageList}
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
                }}
              onPress={() =>
                navigation.navigate("CategoryDetails", { id: item.id, tableName })
              }
            >
              {/* تصویر کی اسٹائل وہی رہے گی */}
              <Image
                source={{ uri: `${BASE_URL_IMG}${item.image}` }}
                style={fehristStyles.imageCard}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        />
      )}

      {/* Text List Section - نارمل */}
      {(itemsWithoutImage.length > 0 || !isSpecialTable) && (
        <FlatList
          data={isSpecialTable ? itemsWithoutImage : items}
          contentContainerStyle={fehristStyles.fehristcenter}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={fehristStyles.card}
              onPress={() =>
                navigation.navigate("CategoryDetails", { id: item.id, tableName })
              }
            >
              <Text style={fehristStyles.fehristText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </CustomBackground>
  );
}
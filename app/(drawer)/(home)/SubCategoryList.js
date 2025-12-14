// // import NetInfo from "@react-native-community/netinfo";
// // import { useNavigation, useRoute } from "@react-navigation/native";
// // import { useEffect, useState } from "react";
// // import { FlatList, Text, TouchableOpacity } from "react-native";
// // import CustomBackground from "../../../components/Background/Background";
// // import { useData } from "../../../components/context/DataContext";
// // import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
// // import Loader from "../../../components/Loader/Loader";
// // import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// // import { mainStyles } from "../../../style/globalcss";

// // export default function SubCategoryList() {
// //   const { tableName, category } = useRoute().params || {};
// //   const navigation = useNavigation();
// //   const { fetchSubcategories } = useData();

// //   const [subcategories, setSubcategories] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [errorMsg, setErrorMsg] = useState("");

// //   useEffect(() => {
// //     const load = async () => {
// //       if (!tableName || !category) return;
// //       setLoading(true);
// //       setErrorMsg("");

// //       try {
// //         // 🔌 Internet Check
// //         const netState = await NetInfo.fetch();
// //         if (!netState.isConnected) {
// //           setErrorMsg("📴 انٹرنیٹ کنکشن موجود نہیں ہے۔");
// //           return;
// //         }

// //         const data = await fetchSubcategories(tableName, category);
// //         const sorted = sortUrduData(
// //           data.map((item) => ({ label: item.subcategory }))
// //         );
// //         setSubcategories(sorted);

// //         if (sorted.length === 0) {
// //           setErrorMsg("📂 کوئی سب کیٹیگری موجود نہیں ہے۔");
// //           navigation.replace("ItemList", { tableName, category });
// //         }
// //       } catch (e) {
// //         console.warn("سب کیٹیگریز فیل:", e);
// //         setErrorMsg("⚠️ مواد لوڈ کرنے میں مسئلہ آیا۔");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     load();
// //   }, [tableName, category, navigation]);

// //   useEffect(() => {
// //     navigation.setOptions({ title: category || "..."  });
// //   }, [navigation, category]);

// //   if (loading) return <Loader />;
// //   if (errorMsg) return <ErrorMessage text={errorMsg} />;

// //   return (
// //     <CustomBackground>
// //     <FlatList
// //   data={subcategories}
// //   keyExtractor={(item, index) => index.toString()}
 
// //   contentContainerStyle={{
// //     flexGrow: 1,
// //     justifyContent: "center",
// //     padding: 15,
// //   }}
// //     showsVerticalScrollIndicator={false}  
// //   renderItem={({ item }) => (
// //     <TouchableOpacity
// //       style={mainStyles.carditems}
// //       onPress={() =>
// //         navigation.navigate("ItemList", {
// //           tableName,
// //           category,
// //           subcategory: item.label,
// //         })
// //       }
// //     >
// //       <Text style={mainStyles.carditemstext}>{item.label}</Text> 
// //     </TouchableOpacity>
// //   )}
// // />

// //     </CustomBackground>
// //   );
// // }



// "use client";
// import NetInfo from "@react-native-community/netinfo";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import { FlatList, Text, TouchableOpacity } from "react-native";

// import CustomBackground from "../../../components/Background/Background";
// import { useData } from "../../../components/context/DataContext";
// import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
// import Loader from "../../../components/Loader/Loader";
// import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// import { mainStyles } from "../../../style/globalcss";

// export default function SubCategoryList() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { tableName, categoryId, categoryLabel } = route.params || {};

//   console.log(tableName, categoryId, categoryLabel ,"tableName, categoryId, categoryLabel ")

//   const { fetchSubcategories } = useData();

//   const [subcategories, setSubcategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMsg, setErrorMsg] = useState("");

//   useEffect(() => {
//     const load = async () => {
//       if (!tableName || !categoryId) {
//         setErrorMsg("معلومات غائب ہے");
//         setLoading(false);
//         return;
//       }

//       setLoading(true);
//       setErrorMsg("");

//       try {
//         const netState = await NetInfo.fetch();
//         if (!netState.isConnected) {
//           setErrorMsg("📴 انٹرنیٹ کنکشن موجود نہیں ہے۔");
//           setLoading(false);
//           return;
//         }

//         // نیا سسٹم: tableName + categoryId سے سب کیٹیگریز
//         const data = await fetchSubcategories(tableName, categoryId);

//         console.log(data,"data on subcatagory")

//         if (!data || data.length === 0) {
//           setErrorMsg("📂 کوئی سب کیٹیگری موجود نہیں ہے۔");
//           navigation.replace("ItemList", { tableName, categoryId });
//           setLoading(false);
//           return;
//         }

//         // id اور label دونوں لے رہے ہیں
//         const sorted = sortUrduData(
//           data.map((item) => ({
//             id: item.id,
//             label: item.label || item.name || item.subcategory || "نام نہیں"
//           }))
//         );

//         setSubcategories(sorted);
//       } catch (e) {
//         console.warn("سب کیٹیگریز فیل:", e);
//         setErrorMsg("⚠️ مواد لوڈ کرنے میں مسئلہ آیا۔");
//       } finally {
//         setLoading(false);
//       }
//     };

//     load();
//   }, [tableName, categoryId, navigation]);

//   useEffect(() => {
//     navigation.setOptions({ title: categoryLabel || "سب کیٹیگریز" });
//   }, [navigation, categoryLabel]);

//   if (loading) return <Loader />;
//   if (errorMsg) return <ErrorMessage text={errorMsg} />;

//   return (
//     <CustomBackground>
//       <FlatList
//         data={subcategories}
//         keyExtractor={(item, index) => item.id?.toString() || index.toString()}
//         contentContainerStyle={{
//           flexGrow: 1,
//           justifyContent: "center",
//           padding: 15,
//         }}
//         showsVerticalScrollIndicator={false}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={mainStyles.carditems}
//             onPress={() =>
//               navigation.navigate("ItemList", {
//                 tableName,
//                 categoryId,
//                 subcategoryId: item.id,           // نیا: subcategoryId بھیجو
//               })
//             }
//           >
//             <Text style={mainStyles.carditemstext}>{item.label}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </CustomBackground>
//   );
// }



import NetInfo from "@react-native-community/netinfo";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";

import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import Loader from "../../../components/Loader/Loader";
import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
import { mainStyles } from "../../../style/globalcss";

export default function SubCategoryList() {
  const route = useRoute();
  const navigation = useNavigation();
  const { tableName, categoryId, categoryLabel } = route.params || {};

  // console.log(tableName, categoryId, categoryLabel, "tableName, categoryId, categoryLabel");

  const { fetchSubcategories } = useData();

  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const load = async () => {
      if (!tableName || !categoryId) {
        setErrorMsg("معلومات غائب ہے");
        setLoading(false);
        return;
      }

      setLoading(true);
      setErrorMsg("");

      try {
        const netState = await NetInfo.fetch();
        if (!netState.isConnected) {
          setErrorMsg("📴 انٹرنیٹ کنکشن موجود نہیں ہے۔");
          setLoading(false);
          return;
        }

        const data = await fetchSubcategories(tableName, categoryId);

        console.log(data, "data on subcategory");

        if (!data || data.length === 0) {
          setErrorMsg("📂 کوئی سب کیٹیگری موجود نہیں ہے۔");
          navigation.replace("ItemList", {
            tableName,
            categoryId,
            label: categoryLabel || "آئٹمز"
          });
          setLoading(false);
          return;
        }

      const sorted = sortUrduData(
  data.map((item) => ({
    id: item.id,
    label: item.label || item.subcategory_name || item.name || item.title || item.subcategory || "بغیر نام"
  }))
);

        setSubcategories(sorted);
      } catch (e) {
        console.warn("سب کیٹیگریز فیل:", e);
        setErrorMsg("⚠️ مواد لوڈ کرنے میں مسئلہ آیا۔");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [tableName, categoryId, navigation]);

  // سب کیٹیگری لسٹ کا ٹائٹل → کیٹیگری کا لیبل
  useEffect(() => {
    navigation.setOptions({ title: categoryLabel || "سب کیٹیگریز" });
  }, [navigation, categoryLabel]);

  if (loading) return <Loader />;
  if (errorMsg) return <ErrorMessage text={errorMsg} />;

  return (
    <CustomBackground>
      <FlatList
        data={subcategories}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          padding: 15,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={mainStyles.carditems}
            onPress={() =>
              navigation.navigate("ItemList", {
                tableName,
                categoryId,
                subcategoryId: item.id,
                label: item.label  // ← سب کیٹیگری کا لیبل بھیج رہا ہوں!
              })
            }
          >
            <Text style={mainStyles.carditemstext}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </CustomBackground>
  );
}
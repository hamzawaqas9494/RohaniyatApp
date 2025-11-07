// // // import { useNavigation, useRoute } from "@react-navigation/native";
// // // import { useEffect, useState } from "react";
// // // import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
// // // import CustomBackground from "../../../components/Background/Background";
// // // import { useData } from "../../../components/context/DataContext";
// // // import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// // // import { fehristStyles } from "../../../style/globalcss";

// // // const Loader = () => (
// // //   <CustomBackground>
// // //     <View style={fehristStyles.centerContent}>
// // //       <ActivityIndicator size="large" color="#6C472D" />
// // //     </View>
// // //   </CustomBackground>
// // // );

// // // export default function CategoryList() {
// // //   const { tableName, label } = useRoute().params || {};
// // //   const navigation = useNavigation();
// // //   const { fetchCategories } = useData();

// // //   const [categories, setCategories] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     const load = async () => {
// // //       if (!tableName) return;
// // //       setLoading(true);
// // //       try {
// // //         const data = await fetchCategories(tableName);
// // //         const sorted = sortUrduData(data.map(item => ({ label: item.category })));
// // //         setCategories(sorted);

// // //         if (sorted.length === 0) {
// // //           navigation.replace("ItemList", { tableName, label });
// // //         }
// // //       } catch (e) {
// // //         console.warn("کیٹیگریز فیل:", e);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     load();
// // //   }, [tableName, navigation, label]);

// // //   useEffect(() => {
// // //     navigation.setOptions({ title: label || "کیٹیگریز" });
// // //   }, [navigation, label]);

// // //   if (loading) return <Loader />;

// // //   return (
// // //     <CustomBackground>
// // //       <FlatList
// // //         data={categories}
// // //         keyExtractor={(item, index) => index.toString()}
// // //         contentContainerStyle={fehristStyles.fehristcenter}
// // //         renderItem={({ item }) => (
// // //           <TouchableOpacity
// // //             style={fehristStyles.card}
// // //             onPress={() => navigation.navigate("SubCategoryList", { tableName, category: item.label })}
// // //           >
// // //             <Text style={fehristStyles.fehristText}>{item.label}</Text>
// // //           </TouchableOpacity>
// // //         )}
// // //       />
// // //     </CustomBackground>
// // //   );
// // // }



// // import NetInfo from "@react-native-community/netinfo";
// // import { useNavigation, useRoute } from "@react-navigation/native";
// // import { useEffect, useState } from "react";
// // import {
// //   FlatList,
// //   Text,
// //   TouchableOpacity
// // } from "react-native";
// // import CustomBackground from "../../../components/Background/Background";
// // import { useData } from "../../../components/context/DataContext";
// // import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
// // import Loader from "../../../components/Loader/Loader";
// // import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// // import { fehristStyles } from "../../../style/globalcss";

// // export default function CategoryList() {
// //   const { tableName, label } = useRoute().params || {};
// //   const navigation = useNavigation();
// //   const { fetchCategories } = useData();

// //   const [categories, setCategories] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [errorMsg, setErrorMsg] = useState("");

// //   useEffect(() => {
// //     const load = async () => {
// //       if (!tableName) return;
// //       setLoading(true);
// //       setErrorMsg("");

// //       try {
// //         const netState = await NetInfo.fetch();
// //         if (!netState.isConnected) {
// //           setErrorMsg("📴 انٹرنیٹ کنکشن موجود نہیں ہے۔");
// //           return;
// //         }

// //         const data = await fetchCategories(tableName);

// //         if (!data || data.length === 0) {
// //           setErrorMsg("📂 کوئی مواد موجود نہیں ہے۔");
// //           navigation.replace("ItemList", { tableName, label });
// //           return;
// //         }

// //         const sorted = sortUrduData(
// //           data.map((item) => ({ label: item.category }))
// //         );

// //         setCategories(sorted);
// //       } catch (e) {
// //         console.warn("کیٹیگریز فیل:", e);
// //           setErrorMsg("📴 انٹرنیٹ کنکشن موجود نہیں ہے۔");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     load();
// //   }, [tableName, navigation, label]);

// //   useEffect(() => {
// //     navigation.setOptions({ title: label || "..." });
// //   }, [navigation, label]);

// //   if (loading) return <Loader />;
// //   if (errorMsg) return <ErrorMessage text={errorMsg} />;

// //   return (
// //     <CustomBackground>
// //       <FlatList
// //         data={categories}
// //         keyExtractor={(item, index) => index.toString()}
// //         contentContainerStyle={fehristStyles.fehristcenter}
// //         renderItem={({ item }) => (
// //           <TouchableOpacity
// //             style={fehristStyles.card}
// //             onPress={() =>
// //               navigation.navigate("SubCategoryList", {
// //                 tableName,
// //                 category: item.label,
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



// import NetInfo from "@react-native-community/netinfo";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import { FlatList, Text, TouchableOpacity } from "react-native";
// import CustomBackground from "../../../components/Background/Background";
// import { useData } from "../../../components/context/DataContext";
// import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
// import Loader from "../../../components/Loader/Loader";
// import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// import { fehristStyles } from "../../../style/globalcss";

// export default function CategoryList() {
//   const { tableName, label } = useRoute().params || {};
//   const navigation = useNavigation();
//   const { fetchCategories, fetchSubcategories } = useData(); // fetchSubcategories شامل کیا

//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMsg, setErrorMsg] = useState("");

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

//         const data = await fetchCategories(tableName);

//         if (!data || data.length === 0) {
//           setErrorMsg("کوئی مواد موجود نہیں ہے۔");
//           navigation.replace("ItemList", { tableName, label });
//           return;
//         }

//         const sorted = sortUrduData(
//           data.map((item) => ({ label: item.category }))
//         );

//         setCategories(sorted);
//       } catch (e) {
//         console.warn("کیٹیگریز فیل:", e);
//         setErrorMsg("انٹرنیٹ کنکشن موجود نہیں ہے۔");
//       } finally {
//         setLoading(false);
//       }
//     };

//     load();
//   }, [tableName, navigation, label]);

//   useEffect(() => {
//     navigation.setOptions({ title: label || "کیٹیگریز" });
//   }, [navigation, label]);

//   // نیا فنکشن: چیک کرو کہ سب کیٹیگری ہے یا نہیں
//   const handleCategoryPress = async (categoryLabel) => {
//     try {
//       const netState = await NetInfo.fetch();
//       if (!netState.isConnected) {
//         alert("انٹرنیٹ کنکشن چیک کریں");
//         return;
//       }

//       // سب کیٹیگری چیک کرو
//       const subcats = await fetchSubcategories(tableName, categoryLabel);

//       if (subcats && subcats.length > 0) {
//         // سب کیٹیگری موجود ہے
//         navigation.navigate("SubCategoryList", {
//           tableName,
//           category: categoryLabel,
//         });
//       } else {
//         // کوئی سب کیٹیگری نہیں → براہ راست آئٹمز
//         navigation.navigate("ItemList", {
//           tableName,
//           category: categoryLabel,
//         });
//       }
//     } catch (err) {
//       console.warn("سب کیٹیگری چیک کرنے میں ایشو:", err);
//       // ایشو ہو تو بھی آئٹمز دکھاؤ
//       navigation.navigate("ItemList", {
//         tableName,
//         category: categoryLabel,
//       });
//     }
//   };

//   if (loading) return <Loader />;
//   if (errorMsg) return <ErrorMessage text={errorMsg} />;

//   return (
//     <CustomBackground>
//       <FlatList
//         data={categories}
//         keyExtractor={(item, index) => index.toString()}
//         contentContainerStyle={fehristStyles.fehristcenter}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={fehristStyles.card}
//             onPress={() => handleCategoryPress(item.label)}
//           >
//             <Text style={fehristStyles.fehristText}>{item.label}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </CustomBackground>
//   );
// }


// screens/CategoryList.js
import NetInfo from "@react-native-community/netinfo";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import Loader from "../../../components/Loader/Loader";
import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
import { fehristStyles } from "../../../style/globalcss";

export default function CategoryList() {
  const { tableName, label } = useRoute().params || {};
  const navigation = useNavigation();
  const { fetchCategories, fetchSubcategories } = useData();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

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

        const data = await fetchCategories(tableName);

        if (!data || data.length === 0) {
          setErrorMsg("کوئی مواد موجود نہیں ہے۔");
          navigation.replace("ItemList", { tableName, label });
          return;
        }

        const sorted = sortUrduData(
          data.map((item) => ({ label: item.category }))
        );

        setCategories(sorted);
      } catch (e) {
        console.warn("کیٹیگریز فیل:", e);
        setErrorMsg("انٹرنیٹ کنکشن موجود نہیں ہے۔");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [tableName, navigation, label]);

  useEffect(() => {
    navigation.setOptions({ title: label || "کیٹیگریز" });
  }, [navigation, label]);

  const handleCategoryPress = async (categoryLabel) => {
    try {
      const netState = await NetInfo.fetch();
      if (!netState.isConnected) {
        alert("انٹرنیٹ کنکشن چیک کریں");
        return;
      }

      const subcats = await fetchSubcategories(tableName, categoryLabel);

      if (subcats && subcats.length > 0) {
        navigation.navigate("SubCategoryList", {
          tableName,
          category: categoryLabel,
        });
      } else {
        navigation.navigate("ItemList", {
          tableName,
          category: categoryLabel,
        });
      }
    } catch (err) {
      console.warn("سب کیٹیگری چیک کرنے میں ایشو:", err);
      navigation.navigate("ItemList", {
        tableName,
        category: categoryLabel,
      });
    }
  };

  if (loading) return <Loader />;
  if (errorMsg) return <ErrorMessage text={errorMsg} />;

  return (
    <CustomBackground>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={fehristStyles.fehristcenter}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={fehristStyles.card}
            onPress={() => handleCategoryPress(item.label)}
          >
            <Text style={fehristStyles.fehristText}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </CustomBackground>
  );
}
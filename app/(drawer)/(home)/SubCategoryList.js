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
// //   const route = useRoute();
// //   const navigation = useNavigation();
// //   const { tableName, categoryId, categoryLabel } = route.params || {};

// //   const { fetchSubcategories } = useData();

// //   const [subcategories, setSubcategories] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [errorMsg, setErrorMsg] = useState("");

// //   useEffect(() => {
// //     const load = async () => {
// //       if (!tableName || !categoryId) {
// //         setErrorMsg("معلومات غائب ہے");
// //         setLoading(false);
// //         return;
// //       }

// //       setLoading(true);
// //       setErrorMsg("");

// //       try {
// //         const netState = await NetInfo.fetch();
// //         if (!netState.isConnected) {
// //           setErrorMsg("📴 انٹرنیٹ کنکشن موجود نہیں ہے۔");
// //           setLoading(false);
// //           return;
// //         }

// //         const data = await fetchSubcategories(tableName, categoryId);

// //         console.log(data, "data on subcategory");

// //         if (!data || data.length === 0) {
// //           setErrorMsg("📂 کوئی سب کیٹیگری موجود نہیں ہے۔");
// //           navigation.replace("ItemList", {
// //             tableName,
// //             categoryId,
// //             label: categoryLabel || "آئٹمز" 
// //           });
// //           setLoading(false);
// //           return;
// //         }

// //       const sorted = sortUrduData(
// //   data.map((item) => ({
// //     id: item.id,
// //     label: item.label || item.subcategory_name || item.name || item.title || item.subcategory || "بغیر نام"
// //   }))
// // );

// //         setSubcategories(sorted);
// //       } catch (e) {
// //         console.warn("سب کیٹیگریز فیل:", e);
// //         setErrorMsg("⚠️ مواد لوڈ کرنے میں مسئلہ آیا۔");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     load();
// //   }, [tableName, categoryId, navigation]);


// //   useEffect(() => {
// //     navigation.setOptions({ title: categoryLabel || "سب کیٹیگریز" });
// //   }, [navigation, categoryLabel]);

// //   if (loading) return <Loader />;
// //   if (errorMsg) return <ErrorMessage text={errorMsg} />;

// //   return (
// //     <CustomBackground>
// //       <FlatList
// //         data={subcategories}
// //         keyExtractor={(item, index) => item.id?.toString() || index.toString()}
// //         contentContainerStyle={{
// //           flexGrow: 1,
// //           justifyContent: "center",
// //           padding: 15,
// //         }}
// //         showsVerticalScrollIndicator={false}
// //         renderItem={({ item }) => (
// //           <TouchableOpacity
// //             style={mainStyles.carditems}
// //             onPress={() =>
// //               navigation.navigate("ItemList", {
// //                 tableName,
// //                 categoryId,
// //                 subcategoryId: item.id,
// //                 label: item.label 
// //               })
// //             }
// //           >
// //             <Text style={mainStyles.carditemstext}>{item.label}</Text>
// //           </TouchableOpacity>
// //         )}
// //       />
// //     </CustomBackground>
// //   );
// // }





// // testing pase based on height 



// import NetInfo from "@react-native-community/netinfo";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { useCallback, useEffect, useRef, useState } from "react";
// import { Dimensions, FlatList, Text, TouchableOpacity } from "react-native";

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

//   const { fetchSubcategoriesPaginated, fetchSubcategories } = useData();

//   const [subcategories, setSubcategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMsg, setErrorMsg] = useState("");
//   const [hasMore, setHasMore] = useState(true);
//   const [page, setPage] = useState(1);

//   const observer = useRef();

//   // Dynamic limit — سکرین height کے حساب سے
//   const getCurrentLimit = () => {
//     const { height } = Dimensions.get("window");
//     const headerHeight = 150; // اپنے header کی اونچائی ایڈجسٹ کریں اگر مختلف ہو
//     const cardHeight = 60; // تمہارا card 60 + margins/padding ≈75
//     const available = height - headerHeight;
//     const items = Math.ceil(available / cardHeight);
//     return Math.max(items + 5, 5); // تھوڑے زیادہ تاکہ scroll بنے
//   };

//   const loadSubcategories = async (pageNum = 1, append = false) => {
//     if (!tableName || !categoryId) {
//       setErrorMsg("معلومات غائب ہے");
//       setLoading(false);
//       return;
//     }

//     try {
//       const netState = await NetInfo.fetch();
//       if (!netState.isConnected) {
//         setErrorMsg("📴 انٹرنیٹ کنکشن موجود نہیں ہے۔");
//         setLoading(false);
//         return;
//       }

//       // پہلی page پر: چیک کریں کہ کوئی سب کیٹیگری ہے یا نہیں
//       if (pageNum === 1) {
//         const quickCheck = await fetchSubcategories(tableName, categoryId);
//         if (!quickCheck || quickCheck.length === 0) {
//           navigation.replace("ItemList", {
//             tableName,
//             categoryId,
//             label: categoryLabel || "آئٹمز"
//           });
//           setLoading(false);
//           return;
//         }
//       }

//       const limit = getCurrentLimit();
//       const { rows, hasMore: more } = await fetchSubcategoriesPaginated(tableName, categoryId, pageNum, limit);

//       const sorted = sortUrduData(
//         rows.map((item) => ({
//           id: item.id,
//           label: item.label || item.subcategory_name || item.name || item.title || item.subcategory || "بغیر نام"
//         }))
//       );

//       if (append) {
//         setSubcategories(prev => [...prev, ...sorted]);
//       } else {
//         setSubcategories(sorted);
//       }

//       setHasMore(more);
//     } catch (e) {
//       console.warn("سب کیٹیگریز لوڈنگ ایشو:", e);
//       setErrorMsg("⚠️ مواد لوڈ کرنے میں مسئلہ آیا۔");
//       setHasMore(false);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     setSubcategories([]);
//     setPage(1);
//     setHasMore(true);
//     loadSubcategories(1);
//   }, [tableName, categoryId]);

//   useEffect(() => {
//     if (page > 1) {
//       loadSubcategories(page, true);
//     }
//   }, [page]);

//   useEffect(() => {
//     navigation.setOptions({ title: categoryLabel || "سب کیٹیگریز" });
//   }, [navigation, categoryLabel]);

//   const lastItemRef = useCallback(
//     (node) => {
//       if (!hasMore || loading) return;
//       if (observer.current) observer.current.disconnect();

//       observer.current = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting) {
//           setPage(prev => prev + 1);
//         }
//       });

//       if (node) observer.current.observe(node);
//     },
//     [hasMore, loading]
//   );

//   if (loading && subcategories.length === 0) return <Loader />;
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
//         renderItem={({ item, index }) => (
//           <TouchableOpacity
//             style={mainStyles.carditems}
//             onPress={() =>
//               navigation.navigate("ItemList", {
//                 tableName,
//                 categoryId,
//                 subcategoryId: item.id,
//                 label: item.label
//               })
//             }
//             ref={index === subcategories.length - 1 ? lastItemRef : null}
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
import { useCallback, useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Text, TouchableOpacity } from "react-native";

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

  const { fetchSubcategoriesPaginated } = useData(); // صرف paginated استعمال

  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const observer = useRef();

  // Dynamic limit — سکرین height کے حساب سے
  const getCurrentLimit = () => {
    const { height } = Dimensions.get("window");
    const headerHeight = 150;
    const cardHeight = 70; // 60 + margins/padding ≈75
    const available = height - headerHeight;
    const items = Math.ceil(available / cardHeight);
    return Math.max(items + 5, 10); // تھوڑے زیادہ تاکہ scroll بنے
  };

  const loadSubcategories = async (pageNum = 1, append = false) => {
    if (!tableName || !categoryId) {
      setErrorMsg("معلومات غائب ہے");
      setLoading(false);
      return;
    }

    try {
      const netState = await NetInfo.fetch();
      if (!netState.isConnected) {
        setErrorMsg("📴 انٹرنیٹ کنکشن موجود نہیں ہے۔");
        setLoading(false);
        return;
      }

      const limit = getCurrentLimit();
      const { rows, hasMore: more } = await fetchSubcategoriesPaginated(tableName, categoryId, pageNum, limit);

      // اگر پہلی page پر کوئی subcategory نہ ہو تو ItemList پر چلے جائیں
      if (rows.length === 0 && pageNum === 1) {
        navigation.replace("ItemList", {
          tableName,
          categoryId,
          label: categoryLabel || "آئٹمز"
        });
        setLoading(false);
        return;
      }

      const sorted = sortUrduData(
        rows.map((item) => ({
          id: item.id,
          label: item.label || item.subcategory_name || item.name || item.title || item.subcategory || "بغیر نام"
        }))
      );

      if (append) {
        setSubcategories(prev => [...prev, ...sorted]);
      } else {
        setSubcategories(sorted);
      }

      setHasMore(more);
    } catch (e) {
      console.warn("سب کیٹیگریز لوڈنگ ایشو:", e);
      setErrorMsg("⚠️ مواد لوڈ کرنے میں مسئلہ آیا۔");
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setSubcategories([]);
    setPage(1);
    setHasMore(true);
    loadSubcategories(1);
  }, [tableName, categoryId]);

  useEffect(() => {
    if (page > 1) {
      loadSubcategories(page, true);
    }
  }, [page]);

  useEffect(() => {
    navigation.setOptions({ title: categoryLabel || "سب کیٹیگریز" });
  }, [navigation, categoryLabel]);

  const lastItemRef = useCallback(
    (node) => {
      if (!hasMore || loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage(prev => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [hasMore, loading]
  );

  if (loading && subcategories.length === 0) return <Loader />;
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
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={mainStyles.carditems}
            onPress={() =>
              navigation.navigate("ItemList", {
                tableName,
                categoryId,
                subcategoryId: item.id,
                label: item.label
              })
            }
            ref={index === subcategories.length - 1 ? lastItemRef : null}
          >
            <Text style={mainStyles.carditemstext}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </CustomBackground>
  );
}
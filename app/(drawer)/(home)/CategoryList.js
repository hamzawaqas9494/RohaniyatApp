import NetInfo from "@react-native-community/netinfo";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Platform, Text, TouchableOpacity } from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import Loader from "../../../components/Loader/Loader";
import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
import { mainStyles } from "../../../style/globalcss";

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
          data.map((item) => ({ label: item.category })),
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
    const titleText = label || "...";

    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            color: "#6C472D",
            fontFamily: "NotoNastaliqUrdu-Regular",
            textAlign: "center",
            fontSize: 14,
            width: "100%",
            maxWidth: Platform.OS === "android" ? "95%" : undefined,
          }}
        >
          {titleText}
        </Text>
      ),
    });
  }, [navigation, label]);

  const handleCategoryPress = async (categoryLabel) => {
    try {
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
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          padding: 15,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={mainStyles.carditems}
            onPress={() => handleCategoryPress(item.label)}
          >
            <Text
              style={mainStyles.carditemstext}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        )}
      />
    </CustomBackground>
  );
}

// import NetInfo from "@react-native-community/netinfo";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import { FlatList, Platform, Text, TouchableOpacity } from "react-native";

// import CustomBackground from "../../../components/Background/Background";
// import { useData } from "../../../components/context/DataContext";
// import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
// import Loader from "../../../components/Loader/Loader";
// import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// import { mainStyles } from "../../../style/globalcss";

// export default function CategoryList() {
//   const { tableName, label } = useRoute().params || {};
//   const navigation = useNavigation();

//   const {
//     fetchCategories,
//     fetchSubcategories,
//     translateText, // 👈 NEW
//   } = useData();

//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMsg, setErrorMsg] = useState("");

//   // 🔹 Language states
//   const [language, setLanguage] = useState("ur"); // ur | en
//   const [translatedMap, setTranslatedMap] = useState({});
//   const [translating, setTranslating] = useState(false);

//   // 🔹 Load categories (Urdu only)
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
//           data.map((item) => ({ label: item.category })),
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

//   // 🔹 Toggle Urdu ↔ English
//   const toggleLanguage = async () => {
//     if (language === "ur") {
//       setTranslating(true);

//       const map = {};
//       for (const item of categories) {
//         map[item.label] = await translateText(item.label);
//         console.log(item.label, "item.label");
//       }

//       setTranslatedMap(map);
//       setLanguage("en");
//       setTranslating(false);
//     } else {
//       setLanguage("ur");
//     }
//   };

//   // 🔹 Header title + toggle button
//   useEffect(() => {
//     const titleText = label || "...";

//     navigation.setOptions({
//       headerTitle: () => (
//         <Text
//           style={{
//             color: "#6C472D",
//             fontFamily: "NotoNastaliqUrdu-Regular",
//             textAlign: "center",
//             fontSize: 14,
//             width: "100%",
//             maxWidth: Platform.OS === "android" ? "95%" : undefined,
//           }}
//         >
//           {titleText}
//         </Text>
//       ),
//       headerRight: () => (
//         <TouchableOpacity
//           onPress={toggleLanguage}
//           style={{ paddingRight: 12 }}
//           disabled={translating}
//         >
//           <Text style={{ color: "#6C472D", fontSize: 12 }}>
//             {translating ? "..." : language === "ur" ? "EN" : "اردو"}
//           </Text>
//         </TouchableOpacity>
//       ),
//     });
//   }, [navigation, label, language, translating, categories]);

//   // 🔹 Category click
//   const handleCategoryPress = async (categoryLabel) => {
//     try {
//       const subcats = await fetchSubcategories(tableName, categoryLabel);

//       if (subcats && subcats.length > 0) {
//         navigation.navigate("SubCategoryList", {
//           tableName,
//           category: categoryLabel,
//         });
//       } else {
//         navigation.navigate("ItemList", {
//           tableName,
//           category: categoryLabel,
//         });
//       }
//     } catch (err) {
//       console.warn("سب کیٹیگری چیک کرنے میں ایشو:", err);
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
//         contentContainerStyle={{
//           flexGrow: 1,
//           justifyContent: "center",
//           padding: 15,
//         }}
//         showsVerticalScrollIndicator={false}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={mainStyles.carditems}
//             onPress={() => handleCategoryPress(item.label)}
//           >
//             <Text
//               style={mainStyles.carditemstext}
//               numberOfLines={1}
//               ellipsizeMode="tail"
//             >
//               {language === "ur"
//                 ? item.label
//                 : translatedMap[item.label] || item.label}
//             </Text>
//           </TouchableOpacity>
//         )}
//       />
//     </CustomBackground>
//   );
// }

// import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
// import CustomBackground from "../../../components/Background/Background";
// import { useData } from "../../../components/context/DataContext";
// import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// import { fehristStyles } from "../../../style/globalcss";

// // Loader کمپوننٹ
// const Loader = () => (
//   <CustomBackground>
//     <View style={fehristStyles.centerContent}>
//       <ActivityIndicator size="large" color="#6C472D" />
//     </View>
//   </CustomBackground>
// );

// export default function CategoryList() {
//   const { tableName, label } = useRoute().params || {};
//   const navigation = useNavigation();
//   const isFocused = useIsFocused();
//   const { fetchCategories } = useData();

//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!isFocused || !tableName) return;

//     const load = async () => {
//       setLoading(true);
//       try {
//      const data = await fetchCategories(tableName); // await لگاؤ
//         const sorted = sortUrduData(data.map(name => ({ label: name })));
//         setCategories(sorted);

//         if (sorted.length === 0) {
//           navigation.replace("ItemList", { tableName, label });
//         }
//       } catch (e) {
//         console.warn("کیٹیگریز لوڈنگ فیل:", e);
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//   }, [isFocused, tableName, fetchCategories, navigation, label]);

//   useEffect(() => {
//     navigation.setOptions({ title: label || "کیٹیگریز" });
//   }, [navigation, label]);

//   if (loading) return <Loader />;

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


// screens/CategoryList.js
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
import { fehristStyles } from "../../../style/globalcss";

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
  const { fetchCategories } = useData();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      if (!tableName) return;
      setLoading(true);
      try {
        const data = await fetchCategories(tableName);
        const sorted = sortUrduData(data.map(item => ({ label: item.category })));
        setCategories(sorted);

        if (sorted.length === 0) {
          navigation.replace("ItemList", { tableName, label });
        }
      } catch (e) {
        console.warn("کیٹیگریز فیل:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [tableName, navigation, label]);

  useEffect(() => {
    navigation.setOptions({ title: label || "کیٹیگریز" });
  }, [navigation, label]);

  if (loading) return <Loader />;

  return (
    <CustomBackground>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
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
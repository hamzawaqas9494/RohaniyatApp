// import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
// import CustomBackground from "../../../components/Background/Background";
// import { useData } from "../../../components/context/DataContext";
// import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// import { fehristStyles } from "../../../style/globalcss";

// // Loader
// const Loader = () => (
//   <CustomBackground>
//     <View style={fehristStyles.centerContent}>
//       <ActivityIndicator size="large" color="#6C472D" />
//     </View>
//   </CustomBackground>
// );

// // No Data
// const NoData = ({ text }) => (
//   <CustomBackground>
//     <View style={fehristStyles.centerContent}>
//       <Text style={fehristStyles.noRecordText}>{text}</Text>
//     </View>
//   </CustomBackground>
// );

// export default function SubCategoryList() {
//   const { tableName, category } = useRoute().params || {};
//   const navigation = useNavigation();
//   const isFocused = useIsFocused();
//   const { fetchSubcategories } = useData();

//   const [subcategories, setSubcategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!isFocused || !tableName || !category) return;

//     const load = async () => {
//       setLoading(true);
//       try {
//     const data = await fetchSubcategories(tableName, category); // await لگاؤ
//         const sorted = sortUrduData(data.map(name => ({ label: name })));
//         setSubcategories(sorted);

//         if (sorted.length === 0) {
//           navigation.replace("ItemList", { tableName, category });
//         }
//       } catch (e) {
//         console.warn("سب کیٹیگریز فیل:", e);
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//   }, [isFocused, tableName, category, fetchSubcategories, navigation]);

//   useEffect(() => {
//     navigation.setOptions({ title: category || "سب کیٹیگریز" });
//   }, [navigation, category]);

//   if (loading) return <Loader />;
//   if (subcategories.length === 0) return <NoData text="کوئی سب کیٹیگری نہیں" />;

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


// screens/SubCategoryList.js
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
  const { fetchSubcategories } = useData();

  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      if (!tableName || !category) return;
      setLoading(true);
      try {
        const data = await fetchSubcategories(tableName, category);
        const sorted = sortUrduData(data.map(item => ({ label: item.subcategory })));
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
  }, [tableName, category, navigation]);

  useEffect(() => {
    navigation.setOptions({ title: category || "سب کیٹیگریز" });
  }, [navigation, category]);

  if (loading) return <Loader />;
  if (subcategories.length === 0) return <NoData text="کوئی سب کیٹیگری نہیں" />;

  return (
    <CustomBackground>
      <FlatList
        data={subcategories}
        keyExtractor={(item, index) => index.toString()}
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
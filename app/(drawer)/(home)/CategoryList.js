// // screens/CategoryList.js
// import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
// import CustomBackground from "../../../components/Background/Background";
// import { useData } from "../../../components/context/DataContext";
// import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// import { fehristStyles } from "../../../style/globalcss";

// export default function CategoryList() {
//   const { tableName, label } = useRoute().params || {};
//   const navigation = useNavigation();
//   const isFocused = useIsFocused();
//   const { fetchTableData } = useData();

//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!tableName || !isFocused) return;

//     const load = async () => {
//       setLoading(true);
//       const rows = await fetchTableData(tableName);
//       const cats = [...new Set(rows.map(r => r.category).filter(Boolean))];
//       const sorted = sortUrduData(cats.map(c => ({ label: c })));

//       if (cats.length === 0) {
//         navigation.replace("SubCategoryList", { tableName });
//       } else {
//         setCategories(sorted);
//       }
//       setLoading(false);
//     };

//     load();
//   }, [tableName, isFocused, navigation, fetchTableData]);

//   useEffect(() => {
//     navigation.setOptions({ title: label || tableName || "..." });
//   }, [navigation, label, tableName]);

//   if (loading) {
//     return (
//       <CustomBackground>
//         <View style={fehristStyles.centerContent}>
//           <ActivityIndicator size="large" color="#6C472D" />
//         </View>
//       </CustomBackground>
//     );
//   }

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
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
import { fehristStyles } from "../../../style/globalcss";

const PAGE_SIZE = 10; // پہلی دفعہ 10، باقی 10-10

export default function CategoryList() {
  console.log("CategoryList Rendered");

  const { tableName, label } = useRoute().params || {};
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { fetchTableData } = useData();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const loadPage = useCallback(
    async (pageNum = 0, isRefresh = false) => {
      if (!tableName) return;

      const setter = isRefresh ? setLoading : setLoadingMore;
      setter(true);

      try {
        const { rows: raw, hasMore: serverMore } = await fetchTableData(tableName, {
          limit: PAGE_SIZE,
          offset: pageNum * PAGE_SIZE,
        });

        const rows = Array.isArray(raw) ? raw : [];

        // فکس: null ہٹاؤ، خالی سٹرنگ رکھو
        const newCats = rows
          .map((r) => r.category)
          .filter((c) => c != null)
          .map((c) => String(c).trim());

        setCategories((prev) => {
          const all = isRefresh ? newCats : [...prev.map((i) => i.label), ...newCats];
          const uniq = [...new Set(all)];
          return sortUrduData(uniq.map((l) => ({ label: l })));
        });

        setHasMore(serverMore === true);
        setPage(pageNum + 1);

        if (isRefresh && newCats.length === 0) {
          navigation.replace("ItemList", { tableName, label });
        }
      } catch (e) {
        console.warn("Category Load Error:", e);
      } finally {
        setter(false);
      }
    },
    [tableName, fetchTableData, navigation]
  );

  const loadMore = () => {
    if (hasMore && !loadingMore) {
      loadPage(page);
    }
  };

  // فکس: useEffect (ٹائپو درست کیا)
  useEffect(() => {
    if (isFocused) {
      setCategories([]);
      setPage(0);
      setHasMore(true);
      loadPage(0, true);
    }
  }, [isFocused, tableName]);

  useEffect(() => {
    navigation.setOptions({ title: label || tableName || "کیٹیگریز" });
  }, [navigation, label, tableName]);

  if (loading && categories.length === 0) {
    return (
      <CustomBackground>
        <View style={fehristStyles.centerContent}>
          <ActivityIndicator size="large" color="#6C472D" />
        </View>
      </CustomBackground>
    );
  }

  return (
    <CustomBackground>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.label}
        contentContainerStyle={fehristStyles.fehristcenter}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loadingMore && <ActivityIndicator size="small" color="#6C472D" />
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={fehristStyles.card}
            onPress={() =>
              navigation.navigate("SubCategoryList", {
                tableName,
                category: item.label,
              })
            }
          >
            <Text style={fehristStyles.fehristText}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </CustomBackground>
  );
}
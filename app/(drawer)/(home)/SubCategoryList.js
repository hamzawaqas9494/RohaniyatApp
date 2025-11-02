// screens/SubCategoryList.js
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, RefreshControl, Text, TouchableOpacity, View } from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
import { fehristStyles } from "../../../style/globalcss";

export default function SubCategoryList() {
   console.log("SubCategoryList")
  const { tableName, category } = useRoute().params || {};
  
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { fetchTableData } = useData();

  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const loadData = async (isRefresh = false) => {
    if (!tableName) return;

    if (isRefresh) setRefreshing(true);
    setLoading(true);
    setError(null);

    try {
      const result = await fetchTableData(tableName, category ? { category } : {});
      const rows = Array.isArray(result.rows) ? result.rows : []; // Fix: Ensure array

      const filtered = category ? rows.filter(r => 
        r.category && r.category.trim() === category.trim()
      ) : rows;

      const validSubcategories = filtered
        .map(r => r.subcategory)
        .filter(s => s && typeof s === 'string' && s.trim() !== '') // Strict filter
        .map(s => s.trim()); // Trim

      const subs = [...new Set(validSubcategories)]; // No duplicates
      const sorted = sortUrduData(subs.map(s => ({ label: s })));

      setSubcategories(sorted);

      if (subs.length === 0 && category) {
        navigation.replace("ItemList", { tableName, category });
      }
    } catch (err) {
      console.warn("Load error:", err);
      setError("Failed to load subcategories");
      setSubcategories([]);
    } finally {
      setLoading(false);
      if (isRefresh) setRefreshing(false);
    }
  };

  useEffect(() => {
    if (!tableName || !isFocused) return;

    loadData();
  }, [tableName, category, isFocused, fetchTableData]);

  useEffect(() => {
    navigation.setOptions({ title: category || tableName || "..." });
  }, [navigation, category, tableName]);

  const onRefresh = () => loadData(true);

  if (loading) {
    return (
      <CustomBackground>
        <View style={fehristStyles.centerContent}>
          <ActivityIndicator size="large" color="#6C472D" />
        </View>
      </CustomBackground>
    );
  }

  if (error) {
    return (
      <CustomBackground>
        <View style={fehristStyles.centerContent}>
          <Text style={fehristStyles.noRecordText}>{error}</Text>
        </View>
      </CustomBackground>
    );
  }

  if (subcategories.length === 0) {
    return (
      <CustomBackground>
        <View style={fehristStyles.centerContent}>
          <Text style={fehristStyles.noRecordText}>کوئی سب کیٹیگری موجود نہیں ہے</Text>
        </View>
      </CustomBackground>
    );
  }

  return (
    <CustomBackground>
      <FlatList
        data={subcategories}
        keyExtractor={item => item.label}
        contentContainerStyle={fehristStyles.fehristcenter}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
import NetInfo from "@react-native-community/netinfo";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";

import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import Loader from "../../../components/Loader/Loader";
import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
import { mainStyles } from "../../../style/globalcss";

export default function CategoryList() {
  const route = useRoute();
  const navigation = useNavigation();
  const { tableName, label } = route.params || {};
  const { fetchCategoriesPaginated, fetchSubcategories } = useData();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const getCurrentLimit = () => {
    const { height } = Dimensions.get("window");
    const headerHeight = 150;
    const cardHeight = 70;
    const available = height - headerHeight;
    const items = Math.ceil(available / cardHeight);
    return Math.max(items + 1, 10);
  };

  const loadCategories = async (pageNum = 1, append = false) => {
    if (!tableName) {
      setErrorMsg("ٹیبل کی معلومات غائب ہے");
      setLoading(false);
      return;
    }

    try {
      const netState = await NetInfo.fetch();
      if (!netState.isConnected) {
        setErrorMsg("انٹرنیٹ کنکشن موجود نہیں ہے۔");
        setLoading(false);
        return;
      }

      const limit = getCurrentLimit();
      const { rows, hasMore: more } = await fetchCategoriesPaginated(
        tableName,
        pageNum,
        limit,
      );

      if (rows.length === 0 && pageNum === 1) {
        navigation.replace("ItemList", { tableName, label });
        setLoading(false);
        return;
      }

      const sorted = sortUrduData(rows);

      if (append) {
        setCategories((prev) => [...prev, ...sorted]);
      } else {
        setCategories(sorted);
      }

      setHasMore(more);
    } catch (e) {
      console.error(e);
      setErrorMsg("ڈیٹا لوڈ کرنے میں مسئلہ ہے");
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCategories([]);
    setPage(1);
    setHasMore(true);
    loadCategories(1);
  }, [tableName]);

  useEffect(() => {
    if (page > 1) {
      loadCategories(page, true);
    }
  }, [page]);

  useEffect(() => {
    navigation.setOptions({ title: label || "کیٹیگریز" });
  }, [navigation, label]);

  const handleCategoryPress = async (category) => {
    try {
      const subcats = await fetchSubcategories(tableName, category.id);
      if (subcats && subcats.length > 0) {
        navigation.navigate("SubCategoryList", {
          tableName,
          categoryId: category.id,
          categoryLabel: category.label,
        });
      } else {
        navigation.navigate("ItemList", {
          tableName,
          categoryId: category.id,
          categoryLabel: category.label,
        });
      }
    } catch (err) {
      navigation.navigate("ItemList", {
        tableName,
        categoryId: category.id,
      });
    }
  };

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  if (loading && categories.length === 0) return <Loader />;

  if (errorMsg) return <ErrorMessage text={errorMsg} />;

  return (
    <CustomBackground>
      <FlatList
        data={categories}
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
            onPress={() => handleCategoryPress(item)}
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
        onEndReached={loadMore}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          loading ? (
            <ActivityIndicator
              size="large"
              color="#6C472D"
              style={{ marginVertical: 20 }}
            />
          ) : null
        }
      />
    </CustomBackground>
  );
}

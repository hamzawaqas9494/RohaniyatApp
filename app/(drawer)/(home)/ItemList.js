import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
import { BASE_URL_IMG } from "../../../config/api";
import { fehristStyles } from "../../../style/globalcss";

const PAGE_SIZE = 10;

export default function ItemList() {
  const { tableName, category, subcategory ,label} = useRoute().params || {};
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { fetchTableData } = useData();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const { width } = Dimensions.get("window");

  const allowedTables = ["qutb", "rohaniilaaj", "tawizatusmaniya", "rohanidokan", "amliyatcourse", "hamzad_ka_amal"];
  const isSpecialTable = allowedTables.includes(tableName);

  const getNumColumns = () => {
    if (width < 420) return 1;
    if (width < 600) return 2;
    if (width < 768) return 3;
    if (width < 1024) return 4;
    if (width < 1200) return 5;
    return 6;
  };
  const numColumns = getNumColumns();

  const loadPage = useCallback(async (pageNum = 0, isRefresh = false) => {
    if (!tableName) return;

    const setter = isRefresh ? setLoading : setLoadingMore;
    setter(true);

    try {
      const { rows, hasMore: more } = await fetchTableData(tableName, {
        category,
        subcategory,
        limit: PAGE_SIZE,
        offset: pageNum * PAGE_SIZE,
      });

      const sorted = sortUrduData(rows, "title");
      setItems(prev => isRefresh ? sorted : [...prev, ...sorted]);
      setHasMore(more === true);  // فکس
      setPage(pageNum + 1);
    } catch (err) {
      console.warn("Load failed");
    } finally {
      setter(false);  // فکس: ہمیشہ بند
    }
  }, [tableName, category, subcategory, fetchTableData]);

  const loadMore = () => {
    if (hasMore && !loadingMore && page > 0) {
      loadPage(page);
    }
  };

  useEffect(() => {
    if (isFocused) {
      setItems([]);
      setPage(0);
      setHasMore(true);
      loadPage(0, true);
    }
  }, [isFocused, tableName, category, subcategory]);

  useEffect(() => {
    navigation.setOptions({ title: subcategory || category || label || "..." });
  }, [navigation, subcategory, category, tableName]);

  if (loading && items.length === 0) {
    return (
      <CustomBackground>
        <View style={fehristStyles.centerContent}>
          <ActivityIndicator size="large" color="#6C472D" />
        </View>
      </CustomBackground>
    );
  }

  const itemsWithImage = items.filter(i => i.image);
  const itemsWithoutImage = items.filter(i => !i.image);

  const cardMargin = 10, cardPadding = 10, containerPadding = 30;
  const cardWidth = (width - containerPadding - (cardMargin + cardPadding) * numColumns) / numColumns;

  return (
    <CustomBackground>

      {isSpecialTable && itemsWithImage.length > 0 && (
        <View style={fehristStyles.imageContainer}>
          <FlatList
            key={`grid-${numColumns}`}
            data={itemsWithImage}
            numColumns={numColumns}
            contentContainerStyle={fehristStyles.imageList}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={loadingMore && <ActivityIndicator />}
            renderItem={({ item }) => (
              console.log(item,"item image"),
              <TouchableOpacity
                style={{
                  width: cardWidth,
                  margin: cardMargin,
                  padding: cardPadding,
                  backgroundColor: "#E4DAC1",
                  borderRadius: 5,
                  alignItems: "center",
                }}
                onPress={() => navigation.navigate("CategoryDetails", { id: item.id, tableName })}
              >
                <Image source={{ uri: `${BASE_URL_IMG}${item.image}` }} style={fehristStyles.imageCard} resizeMode="contain" />
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {(itemsWithoutImage.length > 0 || !isSpecialTable) && (
        <View style={fehristStyles.container}>
          <FlatList
            key={`list-${numColumns}`}
            data={isSpecialTable ? itemsWithoutImage : items}
            contentContainerStyle={fehristStyles.fehristcenter}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={loadingMore && <ActivityIndicator />}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={fehristStyles.card}
                onPress={() => navigation.navigate("CategoryDetails", { id: item.id, tableName })}
              >
                <Text style={fehristStyles.fehristText}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

    </CustomBackground>
  );
}
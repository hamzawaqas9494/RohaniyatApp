// import NetInfo from "@react-native-community/netinfo";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import {
//   FlatList,
//   Image,
//   Text,
//   TouchableOpacity,
//   useWindowDimensions,
//   View
// } from "react-native";

// import CustomBackground from "../../../components/Background/Background";
// import { useData } from "../../../components/context/DataContext";
// import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
// import Loader from "../../../components/Loader/Loader";
// import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// import { BASE_URL_IMG } from "../../../config/api";
// import { mainStyles } from "../../../style/globalcss";

// export default function ItemList() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { tableName, categoryId, subcategoryId, categoryLabel ,label} = route.params || {};

//   const { fetchItems } = useData();

//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMsg, setErrorMsg] = useState("");

//   const { width } = useWindowDimensions();

//   const isSpecialTable = [
//     "chehalkaaf",
//     "tawizatusmaniya",
//     "rohanidokan",
//     "amliyatcourse",
//     "hamzadkaamal",
//   ].includes(tableName);

//   const getNumColumns = () => {
//     if (width < 640) return 1;
//     if (width < 768) return 2;
//     if (width < 1024) return 3;
//     if (width < 1280) return 4;
//     return 4;
//   };

//   const numColumns = isSpecialTable ? getNumColumns() : 1;

//   const cardMargin = 10;
//   const cardPadding = 10;
//   const imageListCenter = 15;

//   const totalWidth = width - imageListCenter;
//   const cardWidth = isSpecialTable
//     ? (totalWidth - cardMargin * 2 * numColumns) / numColumns
//     : totalWidth - cardMargin * 2;

//   const getCardHeight = () => {
//     if (width < 375) return 200;
//     if (width < 400) return 250;
//     if (width < 475) return 240;
//     if (width < 640) return 300;
//     if (width < 768) return 200;
//     if (width < 1024) return 180;
//     if (width < 1280) return 200;
//     return 240;
//   };

//   const FIXED_CARD_HEIGHT = getCardHeight();
//   const FIXED_IMAGE_HEIGHT = FIXED_CARD_HEIGHT - cardPadding * 2;

//   useEffect(() => {
//     const load = async () => {
//       if (!tableName) {
//         setErrorMsg("ٹیبل کی معلومات غائب ہے");
//         setLoading(false);
//         return;
//       }

//       setLoading(true);
//       setErrorMsg("");

//       try {
//         const netState = await NetInfo.fetch();
//         if (!netState.isConnected) {
//           setErrorMsg("انٹرنیٹ کنکشن موجود نہیں ہے۔");
//           setLoading(false);
//           return;
//         }

  
//         const data = await fetchItems(tableName, categoryId, subcategoryId);
//         if (!data || data.length === 0) {
//           setErrorMsg("کوئی مواد موجود نہیں ہے۔");
//           setLoading(false);
//           return;
//         }

//         setItems(sortUrduData(data, "title"));
//       } catch (e) {
//         console.warn("آئٹمز فیل:", e);
//         setErrorMsg("انٹرنیٹ کنکشن موجود نہیں ہے۔");
//       } finally {
//         setLoading(false);
//       }
//     };

//     load();
//   }, [tableName, categoryId, subcategoryId, fetchItems]);

//   useEffect(() => {
//     navigation.setOptions({ title: categoryLabel ||label|| "آئٹمز" });
//   }, [navigation, categoryLabel]);

//   if (loading) return <Loader />;
//   if (errorMsg) return <ErrorMessage text={errorMsg} />;

//   return (
//     <CustomBackground>
//       <FlatList
//         key={numColumns}
//         data={items}
//         numColumns={numColumns}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={{
//           flexGrow: 1,
//           justifyContent: isSpecialTable ? undefined : "center",
//           padding: isSpecialTable ? 7.5 : 15,
//         }}
//         showsVerticalScrollIndicator={false}
//         removeClippedSubviews={true}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={
//               isSpecialTable
//                 ? {
//                     width: cardWidth,
//                     height: FIXED_CARD_HEIGHT,
//                     margin: cardMargin,
//                     padding: cardPadding,
//                     backgroundColor: "#E4DAC1",
//                     borderRadius: 5,
//                   }
//                 : {
//                     ...mainStyles.carditems,
//                   }
//             }
//             onPress={() =>
//               navigation.navigate("CategoryDetails", {
//                 id: item.id,
//                 tableName,
//               })
//             }
//           >
//             {isSpecialTable ? (
//               item.image ? (
//                 <Image
//                   source={{ uri: `${BASE_URL_IMG}${item.image}` }}
//                   style={{
//                     width: "100%",
//                     height: FIXED_IMAGE_HEIGHT,
//                     borderRadius: 5,
//                   }}
//                   resizeMode="stretch"
//                 />
//               ) : (
//                 <View
//                   style={{
//                     width: "100%",
//                     height: FIXED_IMAGE_HEIGHT,
//                     backgroundColor: "#D9C9A8",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderRadius: 5,
//                   }}
//                 >
//                   <Text
//                     style={{
//                       textAlign: "center",
//                       color: "#6C472D",
//                       fontSize: 14,
//                       fontWeight: "600",
//                     }}
//                   >
//                     Image not available
//                   </Text>
//                 </View>
//               )
//             ) : (
//               <Text style={mainStyles.carditemstext}>{item.title}</Text>
//             )}
//           </TouchableOpacity>
//         )}
//       />
//     </CustomBackground>
//   );
// }



// testing pase based on height 

import NetInfo from "@react-native-community/netinfo";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View
} from "react-native";

import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import Loader from "../../../components/Loader/Loader";
import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
import { BASE_URL_IMG } from "../../../config/api";
import { mainStyles } from "../../../style/globalcss";

export default function ItemList() {
  const route = useRoute();
  const navigation = useNavigation();
  const { tableName, categoryId, subcategoryId, categoryLabel, label } = route.params || {};

  const { fetchItemsPaginated, fetchItems } = useData();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const observer = useRef();

  const { width } = useWindowDimensions();

  const isSpecialTable = [
    "chehalkaaf",
    "tawizatusmaniya",
    "rohanidokan",
    "amliyatcourse",
    "hamzadkaamal",
  ].includes(tableName);

  const getNumColumns = () => {
    if (width < 640) return 1;
    if (width < 768) return 2;
    if (width < 1024) return 3;
    if (width < 1280) return 4;
    return 4;
  };

  const numColumns = isSpecialTable ? getNumColumns() : 1;

  const cardMargin = 10;
  const cardPadding = 10;
  const imageListCenter = 15;

  const totalWidth = width - imageListCenter;
  const cardWidth = isSpecialTable
    ? (totalWidth - cardMargin * 2 * numColumns) / numColumns
    : totalWidth - cardMargin * 2;

  const getCardHeight = () => {
    if (width < 375) return 200;
    if (width < 400) return 250;
    if (width < 475) return 240;
    if (width < 640) return 300;
    if (width < 768) return 200;
    if (width < 1024) return 180;
    if (width < 1280) return 200;
    return 240;
  };

  const FIXED_CARD_HEIGHT = getCardHeight();
  const FIXED_IMAGE_HEIGHT = FIXED_CARD_HEIGHT - cardPadding * 2;

  // Dynamic limit — سکرین height کے حساب سے (card height FIXED ہے، تو height سے حساب)
  const getCurrentLimit = () => {
    const { height } = Dimensions.get("window");
    const headerHeight = 150; // اپنے header کی اونچائی
    const available = height - headerHeight;
    const rowHeight = FIXED_CARD_HEIGHT + cardMargin * 2; // ایک row کی مکمل اونچائی
    const rowsThatFit = Math.floor(available / rowHeight);
    const itemsPerPage = rowsThatFit * numColumns;
    return Math.max(itemsPerPage + numColumns * 2, 10); // تھوڑے زیادہ تاکہ scroll بنے
  };

  const loadItems = async (pageNum = 1, append = false) => {
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

      // پہلی page پر: چیک کریں کہ کوئی آئٹم ہے یا نہیں
      if (pageNum === 1) {
        const quickCheck = await fetchItems(tableName, categoryId, subcategoryId);
        if (!quickCheck || quickCheck.length === 0) {
          setErrorMsg("کوئی مواد موجود نہیں ہے۔");
          setLoading(false);
          return;
        }
      }

      const limit = getCurrentLimit();
      const { rows, hasMore: more } = await fetchItemsPaginated(tableName, categoryId, subcategoryId, pageNum, limit);

      const sorted = sortUrduData(rows, "title");

      if (append) {
        setItems(prev => [...prev, ...sorted]);
      } else {
        setItems(sorted);
      }

      setHasMore(more);
    } catch (e) {
      console.warn("آئٹمز لوڈنگ ایشو:", e);
      setErrorMsg("انٹرنیٹ کنکشن موجود نہیں ہے۔");
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setItems([]);
    setPage(1);
    setHasMore(true);
    loadItems(1);
  }, [tableName, categoryId, subcategoryId]);

  useEffect(() => {
    if (page > 1) {
      loadItems(page, true);
    }
  }, [page]);

  useEffect(() => {
    navigation.setOptions({ title: categoryLabel || label || "آئٹمز" });
  }, [navigation, categoryLabel, label]);

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

  if (loading && items.length === 0) return <Loader />;
  if (errorMsg) return <ErrorMessage text={errorMsg} />;

  return (
    <CustomBackground>
      <FlatList
        key={numColumns}
        data={items}
        numColumns={numColumns}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: isSpecialTable ? undefined : "center",
          padding: isSpecialTable ? 7.5 : 15,
        }}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={
              isSpecialTable
                ? {
                    width: cardWidth,
                    height: FIXED_CARD_HEIGHT,
                    margin: cardMargin,
                    padding: cardPadding,
                    backgroundColor: "#E4DAC1",
                    borderRadius: 5,
                  }
                : {
                    ...mainStyles.carditems,
                  }
            }
            onPress={() =>
              navigation.navigate("CategoryDetails", {
                id: item.id,
                tableName,
              })
            }
            ref={index === items.length - 1 ? lastItemRef : null}
          >
            {isSpecialTable ? (
              item.image ? (
                <Image
                  source={{ uri: `${BASE_URL_IMG}${item.image}` }}
                  style={{
                    width: "100%",
                    height: FIXED_IMAGE_HEIGHT,
                    borderRadius: 5,
                  }}
                  resizeMode="stretch"
                />
              ) : (
                <View
                  style={{
                    width: "100%",
                    height: FIXED_IMAGE_HEIGHT,
                    backgroundColor: "#D9C9A8",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#6C472D",
                      fontSize: 14,
                      fontWeight: "600",
                    }}
                  >
                    Image not available
                  </Text>
                </View>
              )
            ) : (
              <Text style={mainStyles.carditemstext}>{item.title}</Text>
            )}
          </TouchableOpacity>
        )}
      />
    </CustomBackground>
  );
}
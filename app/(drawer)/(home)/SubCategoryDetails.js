// // screens/SubCategoryDetails.jsx
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import {
//   ActivityIndicator,
//   FlatList,
//   Image,
//   Text,
//   TouchableOpacity,
//   View,
//   useWindowDimensions,
// } from "react-native";
// import CustomBackground from "../../../components/Background/Background";
// import { useData } from "../../../components/context/DataContext";
// import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
// import { BASE_URL_IMG } from "../../../config/api";
// import { fehristStyles } from "../../../style/globalcss";

// export default function SubCategoryDetails() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { tableName, category, subcategory } = route.params || {};
//   const { fetchTableData } = useData();
//   const { width } = useWindowDimensions();

//   const [data, setData] = useState([]);
//   const [localLoading, setLocalLoading] = useState(false); // 🟢 Local loader

//   const imageTables = ["rohanidokan", "amliyatcourse"];
//   const isImageTable = imageTables.includes(tableName);

//   // 🟢 Calculate responsive number of columns
//   const getNumColumns = () => {
//     if (width < 420) return 1;
//     if (width < 600) return 2;
//     if (width < 768) return 3;
//     if (width < 1024) return 4;
//     if (width < 1200) return 5;
//     return 6;
//   };
//   const numColumns = getNumColumns();

//   const cardMargin = 10;
//   const cardPadding = 10;
//   const containerPadding = 30;
//   const cardWidth =
//     (width - containerPadding - (cardMargin + cardPadding) * numColumns) /
//     numColumns;

//   // 🟢 Load Data
//   useEffect(() => {
//     if (!tableName || !category || !subcategory) return;

//     navigation.setOptions({ title: subcategory });

//     let isMounted = true;
//     const load = async () => {
//       setLocalLoading(true); // ✅ start loader
//       const rows = await fetchTableData(tableName, category, subcategory);
//       if (!isMounted) return;

//       console.log("SUBCATEGORY ROWS →", rows);

//       if (Array.isArray(rows) && rows.length > 0) {
//         const sorted = sortUrduData(rows, "title");
//         setData(sorted);
//       } else {
//         setData([]);
//       }
//       setLocalLoading(false); // ✅ stop loader
//     };

//     load();

//     return () => {
//       isMounted = false;
//     };
//   }, [tableName, category, subcategory, navigation, fetchTableData]);

//   // 🟢 Loader UI
//   if (localLoading) {
//     return (
//       <CustomBackground>
//         <View style={fehristStyles.centerContent}>
//           <ActivityIndicator size="large" color="#6C472D" />
//         </View>
//       </CustomBackground>
//     );
//   }

//   // 🟢 No record UI
//   if (!localLoading && data.length === 0) {
//     return (
//       <CustomBackground>
//         <View style={fehristStyles.centerContent}>
//           <Text style={fehristStyles.noRecordText}>کوئی ریکارڈ موجود نہیں ہے</Text>
//         </View>
//       </CustomBackground>
//     );
//   }

//   // 🟢 Render Data
//   return (
//     <CustomBackground>
//       {isImageTable ? (
//         <View style={fehristStyles.imageContainer}>
//           <FlatList
//             data={data}
//             numColumns={numColumns}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={{
//                   width: cardWidth,
//                   margin: cardMargin,
//                   padding: cardPadding,
//                   backgroundColor: "#E4DAC1",
//                   borderRadius: 5,
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//                 onPress={() =>
//                   navigation.navigate("CategoryDetails", {
//                     id: item.id,
//                     tableName,
//                   })
//                 }
//               >
//                 {item.image ? (
//                   <Image
//                     source={{ uri: `${BASE_URL_IMG}${item.image}` }}
//                     style={fehristStyles.imageCard}
//                     resizeMode="contain"
//                   />
//                 ) : (
//                   <Text style={fehristStyles.fehristText}>{item.title}</Text>
//                 )}
//               </TouchableOpacity>
//             )}
//           />
//         </View>
//       ) : (
//         <View style={fehristStyles.container}>
//           <FlatList
//             contentContainerStyle={fehristStyles.fehristcenter}
//             data={data}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={fehristStyles.card}
//                 onPress={() =>
//                   navigation.navigate("CategoryDetails", {
//                     id: item.id,
//                     tableName,
//                   })
//                 }
//               >
//                 <Text style={fehristStyles.fehristText}>{item.title}</Text>
//               </TouchableOpacity>
//             )}
//           />
//         </View>
//       )}
//     </CustomBackground>
//   );
// }


import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
import { BASE_URL_IMG } from "../../../config/api";
import { fehristStyles } from "../../../style/globalcss";

export default function SubCategoryDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { tableName, category, subcategory } = route.params || {};
  const { fetchTableData } = useData();
  const { width } = useWindowDimensions();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ single loader state

  const imageTables = ["rohanidokan", "amliyatcourse"];
  const isImageTable = imageTables.includes(tableName);

  // 🔹 Calculate number of columns
  const getNumColumns = () => {
    if (width < 420) return 1;
    if (width < 600) return 2;
    if (width < 768) return 3;
    if (width < 1024) return 4;
    if (width < 1200) return 5;
    return 6;
  };
  const numColumns = getNumColumns();
  const cardMargin = 10;
  const cardPadding = 10;
  const containerPadding = 30;
  const cardWidth =
    (width - containerPadding - (cardMargin + cardPadding) * numColumns) /
    numColumns;

  // 🔹 Load data
  useEffect(() => {
    if (!tableName || !category || !subcategory) return;
    navigation.setOptions({ title: subcategory });

    let isMounted = true;
    (async () => {
      setLoading(true);
      const rows = await fetchTableData(tableName, category, subcategory);
      if (!isMounted) return;

      if (Array.isArray(rows) && rows.length > 0) {
        setData(sortUrduData(rows, "title"));
      } else {
        setData([]);
      }
      setLoading(false);
    })();

    return () => {
      isMounted = false;
    };
  }, [tableName, category, subcategory, navigation, fetchTableData]);

  // 🟡 Full-screen loader
  if (loading) {
    return (
      <CustomBackground>
        <View style={fehristStyles.centerContent}>
          <ActivityIndicator size="large" color="#6C472D" />
          <Text style={{ marginTop: 10, color: "#6C472D" }}>لوڈ ہو رہا ہے...</Text>
        </View>
      </CustomBackground>
    );
  }

  // 🔴 No record case
  if (!loading && data.length === 0) {
    return (
      <CustomBackground>
        <View style={fehristStyles.centerContent}>
          <Text style={fehristStyles.noRecordText}>
            کوئی ریکارڈ موجود نہیں ہے
          </Text>
        </View>
      </CustomBackground>
    );
  }

  // 🟢 Render list
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={
        isImageTable
          ? {
              width: cardWidth,
              margin: cardMargin,
              padding: cardPadding,
              backgroundColor: "#E4DAC1",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }
          : fehristStyles.card
      }
      onPress={() =>
        navigation.navigate("CategoryDetails", {
          id: item.id,
          tableName,
        })
      }
    >
      {isImageTable ? (
        item.image ? (
          <Image
            source={{ uri: `${BASE_URL_IMG}${item.image}` }}
            style={fehristStyles.imageCard}
            resizeMode="contain"
          />
        ) : (
          <Text style={fehristStyles.fehristText}>{item.title}</Text>
        )
      ) : (
        <Text style={fehristStyles.fehristText}>{item.title}</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <CustomBackground>
      <FlatList
        data={data}
        numColumns={isImageTable ? numColumns : 1}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={
          isImageTable ? fehristStyles.imageContainer : fehristStyles.fehristcenter
        }
      />
    </CustomBackground>
  );
}

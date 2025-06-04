// import { useNavigation } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import {
//   ActivityIndicator,
//   FlatList,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import CustomBackground from "../../components/Background/Background";
// import { mainStyles } from "../../style/styleDetails"; // ✅ correct import
// export default function Wazaiffehrist() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigation = useNavigation();
//   useEffect(() => {
//     fetch(
//       "https://rohaniyatweb-production-bf29.up.railway.app/api/card-data/get-table-data?tableName=wazaif"
//     )
//       .then((res) => res.json())
//       .then((result) => {
//         setData(result.rows);
//         // setData(result.rows || []);
//       })
//       .catch((error) => console.error("Error fetching data:", error))
//       .finally(() => setLoading(false));
//   }, []);
//   return (
//     <CustomBackground>
//       <View>
//         {loading ? (
//           <View style={mainStyles.centerContent}>
//             <ActivityIndicator size="large" color="#6C472D" />
//           </View>
//         ) : data.length === 0 ? (
//           <View style={mainStyles.centerContent}>
//             <Text style={mainStyles.noDataText}>کوئی ریکارڈ موجود نہیں </Text>
//           </View>
//         ) : (
//           <FlatList
//             data={data}
//             keyExtractor={(item) => item.id.toString()}
//             contentContainerStyle={mainStyles.list}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={mainStyles.card}
//                 onPress={() =>
//                   navigation.navigate("وَظَائف کی تفصیل", {
//                     id: item.id,
//                   })
//                 }
//               >
//                 <Text style={mainStyles.fehristText}>{item.title}</Text>
//               </TouchableOpacity>
//             )}
//           />
//         )}
//       </View>
//     </CustomBackground>
//   );
// }



// // // fehrist
// // import { useNavigation } from "@react-navigation/native";
// // import { useEffect, useState } from "react";
// // import {
// //   ActivityIndicator,
// //   FlatList,
// //   StyleSheet,
// //   Text,
// //   TouchableOpacity,
// //   View,
// // } from "react-native";
// // import CustomBackground from "../../components/Background/Background";
// // export default function Wazaiffehrist() {
// //   const [data, setData] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const navigation = useNavigation();
// //   useEffect(() => {
// //     fetch(
// //        "https://rohaniyatweb-production-bf29.up.railway.app/api/card-data/get-table-data?tableName=wazaif"
// //     )
// //       .then((res) => res.json())
// //       .then((result) => {
// //         setData(result.rows);
// //       })
// //       .catch((error) => console.error("Error fetching data:", error))
// //       .finally(() => setLoading(false));
// //   }, []);
// //   return (
// //     <CustomBackground>
// //       <View>
// //         {loading ? (
// //           <View style={styles.centerContent}>
// //             <ActivityIndicator size="large" color="#6C472D" />
// //           </View>
// //         ) : data.length === 0 ? (
// //           <View style={styles.centerContent}>
// //             <Text style={styles.noDataText}>کوئی ریکارڈ موجود نہیں ہے</Text>
// //           </View>
// //         ) : (
// //           <FlatList
// //             data={data}
// //             keyExtractor={(item) => item.id.toString()}
// //             contentContainerStyle={styles.list}
// //             renderItem={({ item }) => (
// //               <TouchableOpacity
// //                 style={styles.card}
// //                 onPress={() =>
// //                   navigation.navigate("وَظَائف کی تفصیل", {
// //                     id: item.id,
// //                   })
// //                 }
// //               >
// //                 <Text style={styles.text}>{item.title}</Text>
// //               </TouchableOpacity>
// //             )}
// //           />
// //         )}
// //       </View>
// //     </CustomBackground>
// //   );
// // }
// // const styles = StyleSheet.create({
// //   centerContent: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   noDataText: {
// //     fontSize: 18,
// //     color: "#6C472D",
// //     fontWeight: "600",
// //     fontFamily: "Jameel-Noori-Regular",
// //     textAlign: "center",
// //   },
// //   card: {
// //     width: "100%",
// //     backgroundColor: "#E4DAC1",
// //     paddingVertical: 2,
// //     marginTop: 8,
// //     marginBottom: 8,
// //     borderRadius: 5,
// //     alignItems: "center",
// //   },
// //   text: {
// //     fontSize: 22,
// //     fontFamily: "Jameel-Noori-Regular",
// //     color: "#6C472D",
// //     textAlign: "center",
// //   },
// // });


import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import CustomBackground from "../../components/Background/Background";
import { mainStyles } from "../../style/styleDetails";
export default function Wazaiffehrist() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    fetch(
      "https://rohaniyatweb-production-bf29.up.railway.app/api/card-data/get-table-data?tableName=wazaif"
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result.rows);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <CustomBackground>
      <View>
        {loading ? (
          <View style={mainStyles.centerContent}>
            <ActivityIndicator size="large" color="#6C472D" />
          </View>
        ) : data.length === 0 ? (
          <View style={mainStyles.centerContent}>
            <Text style={mainStyles.noDataText}>کوئی ریکارڈ موجود نہیں ہے</Text>
          </View>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={mainStyles.list}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={mainStyles.card}
                onPress={() =>
                  navigation.navigate("وَظَائف کی تفصیل", {
                    id: item.id,
                  })
                }
              >
                <Text style={mainStyles.fehristText}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </CustomBackground>
  );
}

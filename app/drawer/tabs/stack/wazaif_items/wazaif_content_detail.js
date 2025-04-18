// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
// import { useRoute } from "@react-navigation/native";
// import CustomBackground from "../../../../../components/Background/Background";

// export default function DetailsScreen() {
//   const route = useRoute();
//   const { id } = route.params; // Get ID from Navigation
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         const response = await fetch(
//           `https://rohaniyatweb-production-99fc.up.railway.app/api/card-data/get-table-data?tableName=wazaif&id=${id}`
//         ); // API with ID
//         const result = await response.json();
//         console.log(result.rows, "get from db");
//         setData(result.rows[0]); // Set Data
//       } catch (error) {
//         console.error("Error fetching details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDetails();
//   }, [id]);

//   return (
//     <CustomBackground>
//       <View>
//         {loading ? (
//           <ActivityIndicator size="large" color="#6C472D" />
//         ) : (
//           <View>
//             <Text style={styles.text}>
//               {data ? data.title : "No Data Found"}
//             </Text>
//             <Text style={styles.text}>
//               {data ? data.images : "No Data Found"}
//             </Text>
//             <Text style={styles.text}>
//               {data ? data.content : "No Data Found"}
//             </Text>
//           </View>
//         )}
//       </View>
//     </CustomBackground>
//   );
// }

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#6C472D",
//     textAlign: "center",
//     writingDirection: "rtl",
//   },
// });

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import HTMLView from "react-native-htmlview";
import CustomBackground from "../../../../../components/Background/Background";

export default function WazaifDetailsScreen() {
  const route = useRoute();
  const { id } = route.params;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `https://rohaniyatweb-production-99fc.up.railway.app/api/card-data/get-table-data?tableName=Wazaif&id=${id}`
        );
        const result = await response.json();
        setData(result.rows[0]);
      } catch (error) {
        console.error("Error fetching details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  return (
    <CustomBackground>
      {loading ? (
        <View style={styles.centerContent}>
          <ActivityIndicator size="large" color="#6C472D" />
        </View>
      ) : (
        <ScrollView>
          <Text style={styles.heading}>
            {data ? data.title : "No Data Found"}
          </Text>

          <Image
            source={require("../../../../../assets/images/content-image.jpg")}
            style={styles.image}
            resizeMode="contain"
          />

          <HTMLView
            value={data?.content || "No Data Found"}
            stylesheet={htmlStyles}
          />
        </ScrollView>
      )}
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#6C472D",
    textAlign: "center",
    writingDirection: "rtl",
  },
  image: {
    marginTop: 30,
    width: "100%",
    height: 300,
  },
});

// HTML Styles
const htmlStyles = StyleSheet.create({
  h1: {
    fontFamily: "Arial",
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    writingDirection: "rtl",
    textAlign: "right",
  },
  h2: {
    fontFamily: "Arial",
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    writingDirection: "rtl",
    textAlign: "right",
  },
  h3: {
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: "bold",
    color: "#444",
    writingDirection: "rtl",
    textAlign: "right",
  },
  p: {
    marginTop: 10,
    fontSize: 16,
    color: "#6C472D",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
  },
  span: {
    fontSize: 16,
    color: "#6C472D",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
  },
  ul: {
    fontSize: 16,
    color: "#6C472D",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
  },
  ol: {
    fontSize: 16,
    color: "#6C472D",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
  },
  li: {
    fontSize: 16,
    color: "#6C472D",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
  },
  strong: {
    fontWeight: "bold",
    color: "red",
  },
  em: {
    fontStyle: "italic",
  },
});

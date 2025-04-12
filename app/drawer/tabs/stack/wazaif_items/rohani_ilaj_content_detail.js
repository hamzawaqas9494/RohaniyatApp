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

export default function DetailsScreen() {
  const route = useRoute();
  const { id } = route.params;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `https://rohaniyatweb-production-99fc.up.railway.app/api/card-data/get-table-data?tableName=wazaif&id=${id}`
        );
        const result = await response.json();
        console.log(result.rows, "get from db");
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
      <ScrollView>
        {loading ? (
          <ActivityIndicator size="large" color="#6C472D" />
        ) : (
          <View>
            <Text style={styles.title}>
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
          </View>
        )}
      </ScrollView>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
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
  // content: {
  //   marginTop: 50,
  // },
});
// General styles for the HTML content
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
    fontFamily: "Arial",
    fontSize: 18,
    color: "#555",
    lineHeight: 24,
    justifyContent: "center",
    writingDirection: "rtl",
    textAlign: "right",
    marginTop: 30,
  },
  span: {
    fontFamily: "Arial",
    fontSize: 18,
    color: "#555",
    lineHeight: 24,
    writingDirection: "rtl",
    textAlign: "right",
    marginTop: 30,
  },

  ul: {
    writingDirection: "rtl",
    textAlign: "right",
    fontSize: 18,
    color: "red",
    marginTop: 30,
  },

  ol: {
    writingDirection: "rtl",
    textAlign: "right",
    fontSize: 18,
    color: "red",
    marginTop: 20,
  },

  li: {
    fontFamily: "Arial",
    fontSize: 18,
    color: "#555",
    lineHeight: 22,
  },

  strong: {
    fontWeight: "bold",
    color: "red",
  },

  em: {
    fontStyle: "italic",
  },
});

import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import RenderHTML from "react-native-render-html";
import CustomBackground from "../../components/Background/Background";

export default function Wazaifkitafseel() {
  const route = useRoute();
  const { id } = route.params;
  const { width } = useWindowDimensions();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `https://rohaniyatweb-production-99fc.up.railway.app/api/card-data/get-table-data?tableName=wazaif&id=${id}`
        );
        const result = await response.json();
        console.log(result,"result nii ha ");
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
      ) : !data ? (
        <View style={styles.centerContent}>
          <Text style={styles.noRecordText}>کوئی ریکارڈ موجود نہیں ہے</Text>
        </View>
      ) : (
        <ScrollView>
          <Text style={styles.heading}>{data.title}</Text>

          {data.image ? (
            <Image
              source={{ uri: data.image }}
              style={styles.image}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={require("../../assets/images/content-image.jpg")}
              style={styles.image}
              resizeMode="contain"
            />
          )}

          <View style={styles.contentWrapper}>
            <RenderHTML
              contentWidth={width}
              source={{ html: data.content || "<p>No Data Found</p>" }}
              tagsStyles={htmlStyles}
              systemFonts={["Jameel-Noori-Regular"]}
              defaultTextProps={{ selectable: true }}
              baseStyle={{
                whiteSpace: "pre-wrap",
                writingDirection: "rtl",
                textAlign: "right",
                fontFamily: "Jameel-Noori-Regular",
                color: "#6C472D",
              }}
            />
          </View>
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
    fontSize: 28,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  noRecordText: {
    fontSize: 22,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "center",
    writingDirection: "rtl",
  },
  image: {
    marginTop: 10,
    width: "100%",
    height: 300,
  },
  contentWrapper: {
    marginTop: 10,
    textAlign: "right",
    writingDirection: "rtl",
  },
});

const htmlStyles = StyleSheet.create({
  body: {
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  p: {
    margin: 0,
    fontSize: 20,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
    lineHeight: 30,
    whiteSpace: "pre-wrap",
  },
  span: {
    fontSize: 20,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  h1: {
    fontSize: 28,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  h2: {
    fontSize: 24,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  h4: {
    fontSize: 24,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  ul: {
    margin: 0,
    direction: "rtl",
    fontFamily: "Jameel-Noori-Regular",
    color: "red",
    textAlign: "right",
    writingDirection: "rtl",
    lineHeight: 32,
  },
  ol: {
    margin: 0,
    direction: "rtl",
    fontFamily: "Jameel-Noori-Regular",
    color: "red",
    textAlign: "right",
    writingDirection: "rtl",
    lineHeight: 31,
  },
  li: {
    paddingRight: 10,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    direction: "ltr",
    textAlign: "start",
    writingDirection: "rtl",
  },
  u: {
    textDecorationLine: "underline",
    color: "#6C472D",
    fontSize: 18,
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "right",
    writingDirection: "rtl",
  },
  s: {
    textDecorationLine: "line-through",
    color: "#6C472D",
    fontSize: 20,
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "right",
    writingDirection: "rtl",
  },
  hr: {
    borderBottomColor: "#6C472D",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  br: {
    marginBottom: 10,
    padding: 40,
  },
  strong: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    textAlign: "right",
    writingDirection: "rtl",
  },
});

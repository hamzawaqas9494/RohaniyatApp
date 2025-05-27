import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import RenderHTML from "react-native-render-html";
import CustomBackground from "../../../components/Background/Background";
const openLink = (url) => {
  Linking.openURL(url).catch((err) =>
    console.error("Failed to open URL:", err)
  );
};
export default function SifliTaweezatKiTafseel() {
  const route = useRoute();
  const { id } = route.params;
  const { width } = useWindowDimensions();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `https://rohaniyatweb-production-99fc.up.railway.app/api/card-data/get-table-data?tableName=saflitavezat&id=${id}`
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
            source={require("../../../assets/images/content-image.jpg")}
            style={styles.image}
            resizeMode="contain"
          />
           <View style={styles.contentWrapper}>
                      <RenderHTML
                        contentWidth={width}
                        source={{ html: data?.content || "<p>No Data Found</p>" }}
                        tagsStyles={htmlStyles}
                        systemFonts={["Jameel-Noori-Regular"]}
                      />
                    </View>
                    <View style={styles.youtubeSection}>
                      {/* Idara Rohaniyat Image - Top */}
                      <Image
                        source={require("../../../assets/images/Line.png")}
                        style={styles.rohaniyatImage}
                        resizeMode="contain"
                      />
                      <TouchableOpacity
                        onPress={() =>
                          openLink("https://www.youtube.com/@IdaraRohaniyat")
                        }
                      >
                        <View style={styles.youtubeRow}>
                          <Image
                            source={require("../../../assets/images/youtube.png")}
                            style={styles.youtubeIcon}
                          />
                          <Text style={styles.youtubeText}>
                            مزید تفصیلات کے لیے یوٹیوب لنک وزٹ کریں۔
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <Image
                        source={require("../../../assets/images/Line.png")}
                        style={styles.rohaniyatImage}
                        resizeMode="contain"
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
  image: {
    marginTop: 10,
    width: "100%",
    height: 300,
  },
  contentWrapper: {
    marginTop: 10,
  },
  youtubeSection: {
    marginTop: 40,
  },
  rohaniyatImage: {
    width: "100%",
    height: 20,
  },
  youtubeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  youtubeIcon: {
    width: 28,
    height: 26,
  },
  youtubeText: {
    fontSize: 20,
    fontFamily: "Jameel-Noori-Regular",
    color: "red",
    textAlign: "right",
    writingDirection: "rtl",
  },
});
 const htmlStyles = StyleSheet.create({
  h1: {
    fontFamily: "Arial",
    fontSize: 28,
    fontFamily: "Jameel-Noori-Regular",
    color: "#222",
    writingDirection: "rtl",
    textAlign: "right",
  },
  h2: {
    fontFamily: "Arial",
    fontSize: 24,
    fontFamily: "Jameel-Noori-Regular",
    color: "#333",
    writingDirection: "rtl",
    textAlign: "right",
  },
  h3: {
    fontFamily: "Arial",
    fontSize: 20,
    fontFamily: "Jameel-Noori-Regular",
    color: "#444",
    writingDirection: "rtl",
    textAlign: "right",
  },
  p: {
    marginTop: 10,
    fontSize: 20,
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
  },
  span: {
    fontSize: 20,
    color: "#6C472D",
    lineHeight: 30,
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "right",
    writingDirection: "rtl",
  },
  ul: {
    fontSize: 20,
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
  },
  ol: {
    fontSize: 20,
    color: "#6C472D",
    lineHeight: 30,
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "right",
    writingDirection: "rtl",
  },
  li: {
    fontSize: 20,
    color: "#6C472D",
    lineHeight: 30,
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "right",
    writingDirection: "rtl",
  },
  strong: {
    fontWeight: "bold",
    color: "red",
  },
  em: {
    fontStyle: "italic",
    fontFamily: "Jameel-Noori-Regular",
  },
});
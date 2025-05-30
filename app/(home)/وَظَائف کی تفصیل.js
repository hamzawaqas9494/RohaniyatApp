import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import RenderHTML from "react-native-render-html";
import CustomBackground from "../../components/Background/Background";
import YoutubeButton from "../../components/youtubeButton/youtubeVideo";
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
        console.log(result, "ressss");
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

          {data?.image ? (
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
              style={styles.contentWrapper}
              contentWidth={width}
              source={{ html: data?.content || "<p>No Data Found</p>" }}
              tagsStyles={htmlStyles}
              systemFonts={["Jameel-Noori-Regular"]}
            />
          </View>
          <YoutubeButton />
        </ScrollView>
      )}
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  centerContent: {
    flex: 1,
    justifyContent: "center",
    writingDirection: "rtl",

    textAlign: "right",
    alignItems: "center",
  },
  heading: {
    fontSize: 28,
    paddingTop: 4,
    paddingRight: 6,
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
    textAlign: "right",
    // display:flex,
    direction: "right",
    // alignItems:center,
    // justifyContent:center,
    writingDirection: "rtl",
  },
});
const htmlStyles = StyleSheet.create({
  h1: {
    fontSize: 28,
    color: "#222",
    writingDirection: "rtl",
    textAlign: "right",
    fontFamily: "Jameel-Noori-Regular",
  },
  h2: {
    fontSize: 24,
    color: "#333",
    writingDirection: "rtl",
    textAlign: "right",
    fontFamily: "Jameel-Noori-Regular",
  },
  h3: {
    fontSize: 20,
    color: "#444",
    writingDirection: "rtl",
    textAlign: "right",
    fontFamily: "Jameel-Noori-Regular",
  },
  p: {
    ...Platform.select({
      web: {
        fontFamily: "Jameel-Noori-Regular",
        // color: "red",
        fontSize: 20,
        color: "#6C472D",
        marginTop: 10,
        lineHeight: 40,
        textAlign: "right",
        writingDirection: "rtl",
      },
      default: {
        fontSize: 20,
        color: "#6C472D",
        marginTop: 10,
        lineHeight: 30,
        textAlign: "right",
        writingDirection: "rtl",
        fontFamily: "Jameel-Noori-Regular",
      },
    }),
  },
  span: {
    fontSize: 20,
    // marginTop: 10,
    color: "#6C472D",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
    fontFamily: "Jameel-Noori-Regular",
  },
 ul: {
  listStylePosition: 'inside', // ✅ add this
  ...Platform.select({
    web: {
      // color: "#6C472D",
      textAlign: "right",
      direction: "rtl",
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      writingDirection: "rtl",
      fontFamily: "Jameel-Noori-Regular",
    },
    default: {
      // color: "#6C472D",
      direction: "rtl",
      textAlign: "right",
      writingDirection: "rtl",
      paddingRight: 10,
      marginRight: 10,
      fontFamily: "Jameel-Noori-Regular",
    },
  }),
},


  li: {
    listStylePosition: 'inside',
  ...Platform.select({
    web: {
      display: "flex", // important to apply flex styles
      flexDirection: "column", // RTL bullet on right side
      alignItems: "center",
      justifyContent: "center",
      fontSize: 20,
      color: "#6C472D",
      writingDirection: "rtl",
      direction: "rtl",
      textAlign: "right",
      listStylePosition: "outside",
      fontFamily: "Jameel-Noori-Regular",
      lineHeight: 36,
      // paddingRight: 20,
      // marginBottom: 10,
    },
    default: {
      fontSize: 20,
      color: "#6C472D",
      textAlign: "right",
      writingDirection: "rtl",
      direction: "rtl",
      fontFamily: "Jameel-Noori-Regular",
      lineHeight: 36,
      paddingRight: 20,
      marginBottom: 10,
    },
  })
},
  ol: {
    fontSize: 20,
    color: "#6C472D",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
    fontFamily: "Jameel-Noori-Regular",
  },
  strong: {
    fontWeight: "bold",
    color: "red",
    marginTop: 10,
    lineHeight: 40,
    textAlign: "right",
    writingDirection: "rtl",
  },
  em: {
    fontStyle: "italic",
    textAlign: "right",
    writingDirection: "rtl",
    fontFamily: "Jameel-Noori-Regular",
  },
});

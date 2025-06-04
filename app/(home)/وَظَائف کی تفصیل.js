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
<<<<<<< Updated upstream
        console.log(result, "ressss");
=======
        console.log(result);
>>>>>>> Stashed changes
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
              style={styles.contentWrapper}
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
       lineHeight: 30,
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
<<<<<<< Updated upstream
=======
    marginTop: 20,
    paddingRight:10,
>>>>>>> Stashed changes
    textAlign: "right",
    // display:flex,
    direction: "right",
    // alignItems:center,
    // justifyContent:center,
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
<<<<<<< Updated upstream
  h1: {
    fontSize: 28,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
    textAlign: "right",
    fontFamily: "Jameel-Noori-Regular",
  },
  h2: {
    fontSize: 24,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
    textAlign: "right",
    fontFamily: "Jameel-Noori-Regular",
  },
  h4: {
    fontSize: 24,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
    fontFamily: "Jameel-Noori-Regular",
  },
=======
 h1: {
  fontSize: 28,
  fontFamily: "Jameel-Noori-Regular",
  color: "red",
  textAlign: "right",
  writingDirection: "rtl",
   lineHeight: 30,
  //  padding:0,
  //  margin:0,
            justifyContent:"center",
},
h2: {
  fontSize: 26,
  fontFamily: "Jameel-Noori-Regular",
  color: "#6C472D",
  textAlign: "right",
  writingDirection: "rtl",
    padding:0,
   margin:0,
        lineHeight: 30,
},
h3: {
  fontSize: 24,
  fontFamily: "Jameel-Noori-Regular",
  color: "#6C472D",
  textAlign: "right",
  writingDirection: "rtl",
    padding:0,
   margin:0,
         lineHeight: 30,
        //  alignItems:"center",
        //  justifyContent:"center",
},
h4: {
  fontSize: 20,
  fontFamily: "Jameel-Noori-Regular",
  color: "#6C472D",
  textAlign: "right",
  writingDirection: "rtl",
    padding:0,
   margin:0,
         lineHeight: 30,
},
h5: {
  fontSize: 18,
  fontFamily: "Jameel-Noori-Regular",
  color: "#6C472D",
  textAlign: "right",
  writingDirection: "rtl",
    padding:0,
   margin:0,
         lineHeight: 30,
},
h6: {
  fontSize: 16,
  fontFamily: "Jameel-Noori-Regular",
  color: "#6C472D",
  textAlign: "right",
  writingDirection: "rtl",
    padding:0,
   margin:0,
         lineHeight: 30,
},
>>>>>>> Stashed changes
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

  u:{
    textDecorationLine: "underline",
  },
<<<<<<< Updated upstream
  s: {
    textDecorationLine: "line-through",
    color: "#6C472D",
    fontSize: 20,
    color: "#6C472D",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
=======
 s: {
  textDecorationLine: 'line-through',
},

em: {
    fontStyle: "italic",
>>>>>>> Stashed changes
  },
  
  blockquote: {
  margin:0,
   lineHeight: 30,
},
  mark: {
    backgroundColor: '#fff3b0',
  },
  strong: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    marginTop: 10,
    lineHeight: 40,
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
});

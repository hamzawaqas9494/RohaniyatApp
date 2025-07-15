import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import RenderHTML from "react-native-render-html";
import { BASE_URL } from "../../config/api";
import CustomBackground from "../../components/Background/Background";
import YoutubeButton from "../../components/youtubeButton/youtubeVideo";
import {
  fehristStyles,
  htmlBaseStyle,
  htmlStyles,
  mainStyles,
} from "../../style/globalcss";
export default function JadujinnatkailajTafseel() {
  const route = useRoute();
  const { id } = route.params;
  const [data, setData] = useState(null);
  const { width } = useWindowDimensions();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/blog-data/get-table-data?tableName=rohaniilaaj&id=${id}`
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
           <View style={fehristStyles.centerContent}>
             <ActivityIndicator size="large" color="#6C472D" />
           </View>
         ) : !data ? (
           <View style={fehristStyles.centerContent}>
             <Text style={fehristStyles.noRecordText}>کوئی ریکارڈ موجود نہیں ہے</Text>
           </View>
         ) : (
           <ScrollView>
             <Text style={mainStyles.heading}>{data.title}</Text>
              {data.image ? (
            <Image
              source={{ uri: data.image }}
              style={fehristStyles.image}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={require("../../assets/images/content-image.jpg")}
              style={fehristStyles.image}
              resizeMode="contain"
            />
          )}
             <View style={fehristStyles.deatilContentWrapper}>
               <RenderHTML
                 contentWidth={width}
                 source={{ html: data?.content || "<p>No Data Found</p>" }}
                 tagsStyles={htmlStyles}
                 systemFonts={["Jameel-Noori-Regular"]}
                 defaultTextProps={{ selectable: true }}
                 baseStyle={htmlBaseStyle}
               />
             </View>
             <YoutubeButton />
           </ScrollView>
         )}
       </CustomBackground>
  );
}

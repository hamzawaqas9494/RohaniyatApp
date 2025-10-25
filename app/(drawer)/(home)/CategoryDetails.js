import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, Text, useWindowDimensions, View } from "react-native";
import RenderHTML from "react-native-render-html";
import CustomBackground from "../../../components/Background/Background";
import BuyButton from "../../../components/BuyButton/BuyButton";
import { useData } from "../../../components/context/DataContext";
import YoutubeButton from "../../../components/youtubeButton/youtubeVideo";
import { BASE_URL_IMG } from "../../../config/api";
import { customButton, fehristStyles, htmlBaseStyle, htmlStyles, mainStyles } from "../../../style/globalcss";

function CategoryDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { id, tableName } = route.params || {};
  const { width } = useWindowDimensions();
  const { fetchTableData } = useData();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const load = async () => {
    try {
      setLoading(true);
      const rows = await fetchTableData(tableName);

      if (!rows || rows.length === 0) {
        setItem(null);
        return;
      }

      const found = rows.find((row) => String(row.id) === String(id));
      if (found) {
        setItem(found);
        navigation.setOptions({ title: found.title });
      } else {
        setItem(null);
      }
    } catch (error) {
      console.error("Error loading data:", error);
      setItem(null);
    } finally {
      setLoading(false);
    }
  };

  if (tableName && id) load();
}, [id, tableName]);

const allowedTables = [
  "qutb",
  "rohaniilaaj",
  "tawizatusmaniya",
  "rohanidokan",
  "amliyatCourse",
  "hamzad_ka_amal"
];

  if (loading) {
    return (
      <CustomBackground>
        <View style={fehristStyles.centerContent}>
          <ActivityIndicator size="large" color="#6C472D" />
        </View>
      </CustomBackground>
    );
  }

  if (!item) {
    return (
      <CustomBackground>
        <View style={fehristStyles.centerContent}>
          <Text style={fehristStyles.noRecordText}>کوئی ریکارڈ موجود نہیں ہے</Text>
        </View>
      </CustomBackground>
    );
  }

  return (
    <CustomBackground>
      <ScrollView>
        <Text style={mainStyles.heading}>{item.title}</Text>
        <View style={fehristStyles.deatilContentWrapper}>
          <RenderHTML
            contentWidth={width}
            source={{ html: item.content || "<p>No Data Found</p>" }}
            tagsStyles={htmlStyles}
            systemFonts={["Jameel-Noori-Regular", "Amiri-Bold", "ScheherazadeNew-Bold"]}
            defaultTextProps={{ selectable: true }}
            baseStyle={htmlBaseStyle}
          />
        </View>
        {item.image && (
          <Image
            source={{ uri: `${BASE_URL_IMG}${item.image}` }}
            style={fehristStyles.image}
            resizeMode="contain"
          />
        )}   
            <View style={customButton.container}>
    {allowedTables.includes(tableName) && (
      <BuyButton link="https://wa.me/923008440979" />
    )}
    <YoutubeButton link={item.youtube_link} />
  </View>
      </ScrollView>
    </CustomBackground>
  );
}

export default CategoryDetails;

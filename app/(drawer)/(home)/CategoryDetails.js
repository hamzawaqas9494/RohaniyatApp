import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, Image, ScrollView, Text, View } from "react-native";
import RenderHTML from "react-native-render-html";
import CustomBackground from "../../../components/Background/Background";
import BuyButton from "../../../components/BuyButton/BuyButton";
import { useData } from "../../../components/context/DataContext";
import YoutubeButton from "../../../components/youtubeButton/youtubeVideo";
import { BASE_URL_IMG } from "../../../config/api";
import { customButton, fehristStyles, htmlBaseStyle, htmlStyles, mainStyles } from "../../../style/globalcss";

export default function CategoryDetails() {
  const { id, tableName } = useRoute().params || {};
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");
  const { fetchItemById } = useData();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      if (!tableName || !id) return;
      setLoading(true);
      try {
        const found = await fetchItemById(tableName, id);
        setItem(found);
        if (found) navigation.setOptions({ title: found.title });
      } catch (err) {
        console.error("آئٹم لوڈنگ فیل:", err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id, tableName]);

  const allowedTables = ["qutb", "rohaniilaaj", "tawizatusmaniya", "rohanidokan", "amliyatcourse", "hamzad_ka_amal"];

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
            source={{ html: item.content || "<p>کوئی مواد نہیں</p>" }}
            tagsStyles={htmlStyles}
            systemFonts={["Jameel-Noori-Regular", "Amiri-Bold", "ScheherazadeNew-Bold"]}
            defaultTextProps={{ selectable: true }}
            baseStyle={htmlBaseStyle}
          />
        </View>
        {item.image && (
          <Image source={{ uri: `${BASE_URL_IMG}${item.image}` }} style={fehristStyles.image} resizeMode="contain" />
        )}
        <View style={customButton.container}>
          {allowedTables.includes(tableName) && <BuyButton link="https://wa.me/923008440979" />}
          <YoutubeButton link={item.youtube_link} />
        </View>
      </ScrollView>
    </CustomBackground>
  );
}
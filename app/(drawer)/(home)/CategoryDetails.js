import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Dimensions, Image, Platform, ScrollView, Text, View } from "react-native";
import RenderHTML from "react-native-render-html";
import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import Loader from "../../../components/Loader/Loader";
import UniversalButton from "../../../components/UniversalButton/UniversalButton";
import { BASE_URL_IMG } from "../../../config/api";
import { customButton, htmlBaseStyle, htmlStyles, mainStyles } from "../../../style/globalcss";

export default function CategoryDetails() {
  const { id, tableName } = useRoute().params || {};
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");
  const { fetchItemById } = useData();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

//  useEffect(() => {
//   const load = async () => {
//     if (!tableName || !id) return;
//     setLoading(true);


//     navigation.setOptions({ title: "..." });

//     try {
//       const found = await fetchItemById(tableName, id);
//       setItem(found);

//       if (found?.title) {
//         navigation.setOptions({ title: found.title });
//       }
//     } catch (err) {
//       console.error("آئٹم لوڈنگ فیل:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   load();
// }, [id, tableName]);




useEffect(() => {
  const load = async () => {
    if (!tableName || !id) return;
    setLoading(true);

    // loading کے دوران چھوٹا title یا ... دکھاؤ
    navigation.setOptions({ 
      // title: "...", 
      headerTitle: () => (
          <Text
              style={{
          color: "#6C472D",
          fontFamily: "NotoNastaliqUrdu-Regular",
          textAlign: "center",
          fontSize: 14,
          width:"100%"
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
          ...
        </Text>
      ),
    });

    try {
      
      const found = await fetchItemById(tableName, id);
      setItem(found);

      if (found?.title) {
          const titleText = found.title ||  "..."
        // اصل title سیٹ کرو، لیکن truncate کے ساتھ
        navigation.setOptions({
          title: found.title ||  "...",

          headerTitle: () => (
            <Text
              style={{
                 color: "#6C472D",
          fontFamily: "NotoNastaliqUrdu-Regular",
          textAlign: "center",
          fontSize: 14,
         width: "100%",
                     // maxWidth: "95%", 
                 //  width: Platform.OS === "web" ? "100%" : "95%",
                  maxWidth: Platform.OS === "web" ? "100%" : "95%",  
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {titleText}
            </Text>
          ),
        });
      }
    } catch (err) {
      console.error("آئٹم لوڈنگ فیل:", err);
    } finally {
      setLoading(false);
    }
  };

  load();
}, [id, tableName, navigation]); // navigation بھی dependency میں ایڈ کر لو


  const allowedTables = ["rohaniilaaj","chehalkaaf","tawizatusmaniya","rohanidokan","amliyatcourse","hamzadkaamal"];

  if (loading) return <Loader />;

  if (!item) return <ErrorMessage text="کوئی ریکارڈ موجود نہیں ہے" />;

  return (
    <CustomBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
         <View style={mainStyles.container}>
        <Text style={mainStyles.heading}>{item.title}</Text>
        <View style={htmlStyles.ContentWrapper}>
          <RenderHTML
            contentWidth={width}
            source={{ html: item.content || "<p>کوئی مواد نہیں</p>" }}
            tagsStyles={htmlStyles}
            systemFonts={["Jameel-Noori-Regular", "ScheherazadeNew-Bold","NotoNastaliqUrdu-Bold","NotoNastaliqUrdu-Regular"]}
            defaultTextProps={{ selectable: true }}
            baseStyle={htmlBaseStyle}
          />
        </View>
        {item.image && (
          <Image source={{ uri: `${BASE_URL_IMG}${item.image}` }} style={htmlStyles.itemimage} resizeMode="contain" />
        )}
      

  <View style={customButton.container}>
  {/* WhatsApp Button */}
  {allowedTables.includes(tableName) && (
    <UniversalButton
      icon="whatsapp"
      iconColor="#fff"               
      text="رابطہ برائے خریداری"
      color="#fff"                  
      backgroundColor="#6C472D" 
      link="https://wa.me/923008440979"
    />
  )}

  {/* YouTube Button */}
  <UniversalButton
    icon="youtube-play"
    iconColor="#fff"         
    text="مزید تفصیلات کے لیے یوٹیوب وزٹ کریں"
    color="#fff"                   
    backgroundColor="#6C472D"   
    link={item.youtube_link}
  />
</View>




        </View>
      </ScrollView>
    </CustomBackground>
  );
}

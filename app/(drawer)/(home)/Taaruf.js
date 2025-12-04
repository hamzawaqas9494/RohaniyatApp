import { useNavigation } from "@react-navigation/native";
import { FlatList, Text, TouchableOpacity } from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { mainStyles } from "../../../style/globalcss";

const DATA = [
  { id: "1", screen: "Sarparast-Taaruf", text: "سرپرست" },
  { id: "2", screen: "Idara-Rohaniyat-Taaruf", text: "ادارہ روحانیات" },
  { id: "3", screen:"Taweezat-Usmania-Taaruf", text: "تعویذات عثمانیہ" },
  { id: "4", screen: "Rohani-Ashya-Taaruf", text: "روحانی اشیاء" },
  { id: "5", screen: "Rohani-Ilaj-Taaruf", text: "روحانی علاج" },
  { id: "6", screen: "Amliyat-Course", text: "عملیات کورس" },
  { id: "7", screen: "Madrasa-Taleem-ul-Quran-Taaruf", text: "مدرسہ تعلیم القرآن" },
];

export default function Taaruf() {
  const navigation = useNavigation();

  return (
    <CustomBackground>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          padding: 15,
        }}
          showsVerticalScrollIndicator={false}  
        renderItem={({ item }) => (
          <TouchableOpacity
            style={mainStyles.carditems}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Text style={mainStyles.carditemstext}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
    </CustomBackground>
  );
}

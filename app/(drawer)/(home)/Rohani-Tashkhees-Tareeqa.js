import { useNavigation } from "@react-navigation/native";
import { FlatList, Text, TouchableOpacity } from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { mainStyles } from "../../../style/globalcss";
const DATA = [
  {
    id: "1",
    screen: "rohani-tashkhees-taaruf",
    text: "روحانی تشخیص کا تعارف",
  },
  {
    id: "2",
    screen: "fard-ki-tashkhees",
    text: "فرد کی تشخیص کرنے کا طریقہ",
  },
  {
    id: "3",
    screen: "jagah-ki-tashkhees",
    text: " جگہ کی تشخیص کرنے کا طریقہ",
  },
];
export default function RohaniTashkheesTrika() {
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
            <Text
              style={mainStyles.carditemstext}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.text}
            </Text>
          </TouchableOpacity>
        )}
      />
    </CustomBackground>
  );
}

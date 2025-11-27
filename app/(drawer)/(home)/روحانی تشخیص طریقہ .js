import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  Text,
  TouchableOpacity
} from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { mainStyles } from "../../../style/globalcss";
const DATA = [
  {
    id: "1",
    screen: "روحانی تشخیص تعارف",
    text: "روحانی تشخیص کا تعارف",
  },
  {
    id: "2",
    screen: "فرد کی تشخیص",
    text: "فرد کی تشخیص کرنے کا طریقہ",
  },
  {
    id: "3",
    screen: "جگہ کی تشخیص",
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
        <Text style={mainStyles.carditemstext}>{item.text}</Text>
      </TouchableOpacity>
    )}
  />
</CustomBackground>

  );
}

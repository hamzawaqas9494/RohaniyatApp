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
    screen:"ہمارا طریقہ علاج",
    text: "ہمارا طریقہ علاج",
  },
  {
    id: "2",
    screen:"مریض کے لیے روحانی علاج",
    text: "سائل/مریض کے لیے روحانی علاج",
  }
];
export default function RohaniIlaj() {
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

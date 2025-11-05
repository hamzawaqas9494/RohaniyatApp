import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { fehristStyles, mainStyles } from "../../../style/globalcss";
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
     <View style={mainStyles.container}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          // contentContainerStyle={fehristStyles.list}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={fehristStyles.card}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Text style={fehristStyles.text}>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </CustomBackground>
  );
}

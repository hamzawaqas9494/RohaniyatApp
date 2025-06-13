import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import CustomBackground from "../../components/Background/Background";
import { fehristStyles } from "../../style/globalcss";
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
      <View>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={fehristStyles.card}
              onPress={() =>
                navigation.navigate(item.screen)
              }
            >
              <Text style={fehristStyles.tashkhesText}>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </CustomBackground>
  );
}

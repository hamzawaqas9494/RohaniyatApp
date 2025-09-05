import { useNavigation } from "@react-navigation/native";
import {
    FlatList,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { fehristStyles } from "../../../style/globalcss";
const DATA = [
  {
    id: "1",
    screen: "روحانی علاج کا تعارف",
    text: "روحانی علاج کا مختصر تعارف",
  },
  {
    id: "2",
    screen: "جادو،جنات کی علامات",
    text: "جادو، جنات اور نظر بد کی علامات",
  },
  {
    id: "3",
    screen: "روحانی تشخیص طریقہ ",
    text: "روحانی تشخیص کے طریقے",
  },
  {
    id: "4",
    screen:"جادو، جنات کا علاج",
    text:"جادو، جنات، بیماریاں کا روحانی علاج",
  },
  {
    id: "5",
    screen: "حصاراعمال",
     text:"روحانی حفاظت (حصار) کا طریقہ",
  },
];
export default function MarizooKeLiyeRohaniIlaaj() {
  const navigation = useNavigation();
  return (
    <CustomBackground>
      <View style={fehristStyles.container}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          contentContainerStyle={fehristStyles.fehristcenter}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={fehristStyles.card}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Text style={fehristStyles.tashkhesText}>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </CustomBackground>
  );
}


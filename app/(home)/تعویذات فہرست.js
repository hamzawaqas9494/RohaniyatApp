import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import CustomBackground from "../../components/Background/Background";
import { fehristStyles } from "../../style/globalcss";
const DATA = [
  {
    id: "1",
    screen: "نقوش کا مزاج",
    text: " نقوش کا مزاج اور طریقہ",
  },
  {
    id: "2",
    screen: "نقوش کے لوازمات",
    text: "نقوش کے لوازمات",
  },
  {
    id: "3",
    screen: "مجرب نقوش فہرست",
    text: "مجرب نقوش",
  },
];

export default function TavezatFehrist() {
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
              <Text style={fehristStyles.text}>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </CustomBackground>
  );
}


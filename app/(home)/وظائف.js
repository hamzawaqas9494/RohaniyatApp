import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomBackground from "../../components/Background/Background";
import { fehristStyles } from "../../style/globalcss";
const DATA = [
  {
    id: "1",
    screen: "وظائف فہرست",
    text: "وظائف",
  },
  {
    id: "2",
    screen: "تعویذات فہرست",
    text: "تعویذات",
  },
];
export default function TitleScreen() {
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

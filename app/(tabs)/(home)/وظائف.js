import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomBackground from "../../../components/Background/Background";

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
              style={styles.card}
              onPress={() =>
                navigation.navigate(item.screen)
              }
            >
              <Text style={styles.text}>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </CustomBackground>
  );
}
const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#E4DAC1",
    paddingVertical: 2,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
  },
  text: {
    fontSize: 24,
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "center",
  },
});

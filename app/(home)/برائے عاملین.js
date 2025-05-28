import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import CustomBackground from "../../components/Background/Background";
const DATA = [
  {
    id: "1",
    screen: "نوری اعمال",
    text: "نوری اعمال",
  },
  {
    id: "2",
    screen: "نوری علوی اعمال",
    text: "نوری علوی اعمال",
  },
    {
    id: "3",
    screen:"اولیاء اللہ کے اعمال",
    text: "اولیاء اللہ کے اعمال",
  },
  {
    id: "4",
    screen:"با موکل اعمال",
    text: "با موکل اعمال",
  },
    {
    id: "5",
    screen:"خاص الخاص اعمال",
    text: "خاص الخاص اعمال",
  },
  {
    id: "6",
    screen:"علوی اعمال",
    text: "علوی اعمال",
  },
    {
    id: "7",
    screen:"سفلی تعویذات",
    text: "سفلی تعویذات",
  },
];
export default function BarayAmeleen() {
  const navigation = useNavigation();
  return (
    <CustomBackground>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
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
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    fontSize: 18,
    color: "#6C472D",
    fontWeight: "600",
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "#E4DAC1",
    paddingVertical: 2,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "center",
  },
  
});

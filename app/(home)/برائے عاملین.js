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

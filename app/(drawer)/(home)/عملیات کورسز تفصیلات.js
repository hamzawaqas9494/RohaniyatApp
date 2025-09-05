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
    screen:"برائے مریض سائلین",
    text: "برائے مریض / سائلین",
  },
  {
    id: "2",
    screen: "برائے عاملین",
    text: "برائے عاملین",
  },
];
export default function AmliyatCoursesTafsilat() {
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

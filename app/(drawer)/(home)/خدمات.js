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
  { id: "1", screen: "مرید فارم", text: "مرید ہونے کیلئے" },
  { id: "2", screen: "روحانی علاج فارم", text: "روحانی علاج کے لیے" },
  { id: "3", screen: "روحانی تشخیص فارم", text: "روحانی تشخیص کے لیے" },
  { id: "4", screen: "استخارہ فارم", text: "استخارہ کے لیے" },
  { id: "5", screen: "عطیات فارم", text: "عطیات کے لیے" },
  { id: "6", screen: "عملیات کورس فارم", text: "عملیات کورس کے لیے" },
];
export default function Khidmat() {
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

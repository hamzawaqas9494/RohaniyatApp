import { useNavigation } from "@react-navigation/native";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { fehristStyles, mainStyles } from "../../../style/globalcss";

const DATA = [
  { id: "1", tableName: "wazaif", label: "وظائف" },
  { id: "2", tableName: "taweez", label: "تعویذات" },
];

export default function TitleScreen() {
  const navigation = useNavigation();

  const handlePress = (item) => {
    if (item.id === "1") {
      navigation.navigate("CategoryList", {
        tableName: item.tableName,
        label: item.label,
      });
    } else {
      navigation.navigate("تعویذات", {
        tableName: item.tableName,
        label: item.label,
      });
    }
  };

  return (
    <CustomBackground>
        <View style={mainStyles.container}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={fehristStyles.card}
              onPress={() => handlePress(item)}
            >
              <Text style={fehristStyles.text}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </CustomBackground>
  );
}

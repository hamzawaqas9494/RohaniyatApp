import { useNavigation } from "@react-navigation/native";
import { FlatList, Text, TouchableOpacity } from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { mainStyles } from "../../../style/globalcss";

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
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          padding: 15,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={mainStyles.carditems}
            onPress={() => handlePress(item)}
          >
            <Text style={mainStyles.carditemstext}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </CustomBackground>
  );
}

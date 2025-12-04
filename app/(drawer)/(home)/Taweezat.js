import { useNavigation } from "@react-navigation/native";
import { FlatList, Text, TouchableOpacity } from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { mainStyles } from "../../../style/globalcss";

const DATA = [
  { id: "1", screen: "Nuqoosh-Ka-Mizaj" , label: "نقوش کا مزاج اور طریقہ" },
  { id: "2", screen: "Nuqoosh-Ke-Lawazmaat", label: "نقوش کے لوازمات" },
  { id: "3", screen:  "Mujarrab-Nuqoosh", tableName: "taweez", label: "مجرب نقوش" },
];

export default function TavezatFehrist() {
  const navigation = useNavigation();

  const handlePress = (item) => {
    if (item.id === "3") {
      navigation.navigate("CategoryList", {
        tableName: item.tableName,
        label: item.label,
      });
    } else {
   
      navigation.navigate(item.screen);
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
      showsVerticalScrollIndicator={false}  
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

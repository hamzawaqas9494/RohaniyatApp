import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  Text,
  TouchableOpacity
} from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { mainStyles } from "../../../style/globalcss";

const DATA = [
  {
    id: "1",
    screen: "Rohani-Ilaj-Ka-Taaruf",
    label: "روحانی علاج کا مختصر تعارف",
  },
  {
    id: "2",
    screen: "Jadu-Jinnat-Ki-Alamaat",
    label: "جادو، جنات اور نظر بد کی علامات",
  },
  {
    id: "3",
    screen: "Rohani-Tashkhees-Tareeqa",
    label: "روحانی تشخیص کے طریقے",
  },
  {
    id: "4",
     screen: "Jadu-Jinnat-Bemariyaan-Ka-Rohani-Ilaj",
    tableName: "rohaniilaaj",
    label: "جادو، جنات، بیماریاں کا روحانی علاج",
  
  },
  {
    id: "5",
    screen: "Hisaar-Aamaal",
    label: "روحانی حفاظت (حصار) کا طریقہ",
  },
];

export default function MarizooKeLiyeRohaniIlaaj() {
  const navigation = useNavigation();

  const handlePress = (item) => {
    if (item.id === "4") {
     navigation.navigate("ItemList", { 
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
        <Text  style={mainStyles.carditemstext}>{item.label}</Text>
      </TouchableOpacity>
    )}
  />
</CustomBackground>
  );
}
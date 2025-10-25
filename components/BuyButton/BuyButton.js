import { FontAwesome } from '@expo/vector-icons';
import { Linking, Pressable, Text } from "react-native";
import { customButton } from "../../style/globalcss";

export default function BuyButton({ link }) {
  const handlePress = () => {
    if (link) {
      Linking.openURL(link).catch((err) =>
        console.error("Failed to open link:", err)
      );
    } else {
      console.log("No link available");
    }
  };

  return (
        <Pressable style={customButton.button} onPress={handlePress}>
        <FontAwesome
          name="whatsapp"
          size={22}
          color="#fff"
          style={customButton.icon}
        />
        <Text style={customButton.text}>
         رابطہ برائے خریداری
        </Text>
      </Pressable>
  );
}

import { FontAwesome } from "@expo/vector-icons";
import { Linking, Pressable, Text } from "react-native";
import { customButton } from "../../style/globalcss";

export default function UniversalButton({
  icon,
  iconColor,
  text,
  color = "#fff",
  link = null,
  onPress = null,
  backgroundColor = "#6C472D",
  style = {},        
}) {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else if (link) {
      Linking.openURL(link).catch(err => console.error(err));
    }
  };

  return (
    <Pressable
      style={[customButton.button, { backgroundColor }]}
      onPress={handlePress}
    >
      {icon && (
        <FontAwesome
          name={icon}
          size={22}
          color={iconColor || color}
          style={customButton.icon}
        />
      )}
      <Text style={[customButton.text, { color }, style]}>{text}</Text>
    </Pressable>
  );
}

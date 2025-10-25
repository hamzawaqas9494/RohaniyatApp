import { FontAwesome } from '@expo/vector-icons';
import { Linking, Pressable, Text } from 'react-native';
import { customButton } from "../../style/globalcss";

export default function YouTubeButton({ link }) {
  const handlePress = () => {
    const finalLink = link && link.trim() !== "" 
      ? link 
      : "https://www.youtube.com/@IdaraRohaniyat";
    Linking.openURL(finalLink).catch(err =>
      console.error("Failed to open URL:", err)
    );
  };

  return (

      <Pressable style={customButton.button} onPress={handlePress}>
        <FontAwesome
          name="youtube-play"
          size={22}
          color="#fff"
          style={customButton.icon}
        />
        <Text style={customButton.text}> مزید تفصیلات کے لیے یوٹیوب لنک وزٹ کریں۔</Text>
      </Pressable>
   
  );
}

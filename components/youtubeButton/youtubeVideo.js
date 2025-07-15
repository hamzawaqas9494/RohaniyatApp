import { FontAwesome } from '@expo/vector-icons';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { youtube } from "../../style/globalcss";
export default function YouTubeButton() {
  const handlePress = () => {
    Linking.openURL('https://www.youtube.com/@IdaraRohaniyat').catch(err =>
      console.error('Failed to open URL:', err)
    );
  };
  return (
    <View style={youtube.container}>
      <Pressable style={youtube.button} onPress={handlePress}>
        <FontAwesome name="youtube-play" size={22} color="rgba(255, 255, 255, 1)" style={youtube.icon} />
        <Text style={youtube.text}>مزید تفصیلات کے لیے یوٹیوب لنک وزٹ کریں۔</Text>
      </Pressable>
    </View>
  );
}



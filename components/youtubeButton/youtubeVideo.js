import { FontAwesome } from '@expo/vector-icons';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

export default function YouTubeButton() {
  const handlePress = () => {
    Linking.openURL('https://www.youtube.com/channel/yourchannelid').catch(err =>
      console.error('Failed to open URL:', err)
    );
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handlePress}>
        <FontAwesome name="youtube-play" size={22} color="rgb(228, 218, 193)" style={styles.icon} />
        <Text style={styles.text}>مزید تفصیلات کے لیے یوٹیوب لنک وزٹ کریں۔</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    width: '80%',
    flexDirection: 'row',
    backgroundColor: 'rgb(108, 71, 45)',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  icon: {
    marginRight: 5,
  },
  text: {
    color: 'rgb(228, 218, 193)',
    fontSize: 18,
      fontFamily: "Jameel-Noori-Regular",
  },
});

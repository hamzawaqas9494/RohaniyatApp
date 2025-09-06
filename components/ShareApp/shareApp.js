import { FontAwesome } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { useRef, useState } from "react";
import {
  Animated,
  Easing,
  Platform,
  Pressable,
  Share,
  View
} from "react-native";
import { shareApp } from "../../style/globalcss";
const AppMenuDropdown = () => {
  const [visible, setVisible] = useState(false);
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const isWeb = Platform.OS === "web";

  const toggleDropdown = () => {
    if (visible) {
      Animated.timing(scaleAnim, {
        toValue: 0,
        duration: 200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(() => setVisible(false));
    } else {
      setVisible(true);
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    }
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: "Check out this app: https://yourapp.link",
      });
    } catch (err) {
      console.error(err);
    }
    toggleDropdown();
  };

  const handleRate = () => {
    const url =
      Platform.OS === "ios"
        ? "itms-apps://itunes.apple.com/app/idXXXXXXXXX"
        : "https://play.google.com/store/apps/details?id=com.yourapp";
    Linking.openURL(url);
    toggleDropdown();
  };

  return (
    <View style={[shareApp.container, { maxWidth: isWeb ? 600 : "100%" }]}>
      <Pressable onPress={toggleDropdown} style={shareApp.dotButton}>
        {visible ? (
          <FontAwesome name="close" size={24} color="#6C472D" />
        ) : (
          <FontAwesome name="ellipsis-v" size={24} color="#6C472D" />
        )}
      </Pressable>

      {visible && (
        <Animated.View
          style={[
            shareApp.dropdown,
            {
              transform: [{ scaleY: scaleAnim }],
              opacity: scaleAnim,
            },
          ]}
        >
          <Pressable onPress={handleRate} style={shareApp.iconButton}>
            <FontAwesome name="star" size={20} color="#6C472D" />
          </Pressable>

          <Pressable onPress={handleShare} style={shareApp.iconButton}>
            <FontAwesome name="share-alt" size={20} color="#6C472D" />
          </Pressable>
        </Animated.View>
      )}
    </View>
  );
};

export default AppMenuDropdown;



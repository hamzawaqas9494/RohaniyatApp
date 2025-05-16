import { FontAwesome } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { useRef, useState } from "react";
import {
  Animated,
  Easing,
  Platform,
  Pressable,
  Share,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";

const AppMenuDropdown = () => {
  const [visible, setVisible] = useState(false);
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();
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
    <View style={[styles.container, { maxWidth: isWeb ? 600 : "100%" }]}>
      <Pressable onPress={toggleDropdown} style={styles.dotButton}>
        {visible ? (
          <FontAwesome name="close" size={24} color="#6C472D" />
        ) : (
          <FontAwesome name="ellipsis-v" size={24} color="#6C472D" />
        )}
      </Pressable>

      {visible && (
        <Animated.View
          style={[
            styles.dropdown,
            {
              transform: [{ scaleY: scaleAnim }],
              opacity: scaleAnim,
            },
          ]}
        >
          <Pressable onPress={handleRate} style={styles.iconButton}>
            <FontAwesome name="star" size={20} color="#6C472D" />
          </Pressable>

          <Pressable onPress={handleShare} style={styles.iconButton}>
            <FontAwesome name="share-alt" size={20} color="#6C472D" />
          </Pressable>
        </Animated.View>
      )}
    </View>
  );
};

export default AppMenuDropdown;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 20,
    alignItems: "center",
  },
  dotButton: {
    zIndex: 10,
    backgroundColor: "#E4DAC1",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    cursor: Platform.OS === "web" ? "pointer" : "default",
  },
  dropdown: {
    position: "absolute",
    top: 55,
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    transformOrigin: "top",
    backgroundColor: "transparent",
  },
  iconButton: {
    backgroundColor: "#E4DAC1",
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    cursor: Platform.OS === "web" ? "pointer" : "default",
  },
});

import React, { useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Easing,
  Share,
  Platform,
} from "react-native";
import { Entypo, FontAwesome, AntDesign } from "@expo/vector-icons";
import * as Linking from "expo-linking";

const AppMenuDropdown = () => {
  const [visible, setVisible] = useState(false);
  const scaleAnim = useRef(new Animated.Value(0)).current;

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
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dotButton}>
        {visible ? (
          <AntDesign name="close" size={24} color="#6C472D" />
        ) : (
          <Entypo name="dots-three-vertical" size={24} color="#6C472D" />
        )}
      </TouchableOpacity>

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
          <TouchableOpacity onPress={handleRate} style={styles.iconButton}>
            <FontAwesome name="star" size={20} color="#6C472D" />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleShare} style={styles.iconButton}>
            <FontAwesome name="share-alt" size={20} color="#6C472D" />
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

export default AppMenuDropdown;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "flex-end",
    position: "relative",
    position: "absolute",
    top: 0,
    right: 0,
  },
  dotButton: {
    padding: 6,
    zIndex: 10,
    backgroundColor: "#E4DAC1",
    borderRadius: 100,
  },
  dropdown: {
    position: "absolute",
    top: 60,
    right: 20,
    justifyContent: "center",
    alignItems: "center",

    gap: 6,
    transformOrigin: "top",
  },
  iconButton: {
    backgroundColor: "#E4DAC1",
    borderRadius: 100,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

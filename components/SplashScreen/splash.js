import { useEffect, useRef } from "react";
import { Animated, Dimensions, Image, StyleSheet, View } from "react-native";

const { height } = Dimensions.get("window");

export default function CustomSplash() {
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const scaleAnim = useRef(new Animated.Value(0.5)).current; 
  const slideAnim = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.centerContent,
          {
            opacity: fadeAnim, 
            transform: [{ scale: scaleAnim }], 
          },
        ]}
      >
        <Image
          source={require("../../assets/images/main-logo.png")} 
          style={styles.mainLogo}
          resizeMode="contain"
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.bottomContent,
          { transform: [{ translateY: slideAnim }] },
        ]}
      >
        <Image
          source={require("../../assets/images/CN_Logo.png")}
          style={styles.brandLogo}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4DAC1",
    alignItems: "center",
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainLogo: {
    width: 200,
    height: 200,
  },
  bottomContent: {
    position: "absolute",
    bottom: 0,
  },
  brandLogo: {
    width: 150,
    height: 80,
  },
});

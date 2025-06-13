import { useEffect, useRef } from "react";
import { Animated, Dimensions, Image, StyleSheet, View } from "react-native";
import { splash } from "../../style/globalcss";
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
    <View style={splash.container}>
      <Animated.View
        style={[
          splash.centerContent,
          {
            opacity: fadeAnim, 
            transform: [{ scale: scaleAnim }], 
          },
        ]}
      >
        <Image
          source={require("../../assets/images/main-logo.png")} 
          style={splash.mainLogo}
          resizeMode="contain"
        />
      </Animated.View>

      <Animated.View
        style={[
          splash.bottomContent,
          { transform: [{ translateY: slideAnim }] },
        ]}
      >
        <Image
          source={require("../../assets/images/CN_Logo.png")}
          style={splash.brandLogo}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
}



import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  ImageBackground,
  Pressable,
  Text,
  Dimensions,
  View
} from "react-native";
import { useNavigation } from "@react-navigation/native";
 
const { width } = Dimensions.get("window");
 
const AnimatedItem = ({ item, index, total, iconWidth, iconHeight, circleRadius }) => {
  const navigation = useNavigation();
 
  const angle = index * ((2 * Math.PI) / total);
  const x = circleRadius * Math.cos(angle) + width / 2 - iconWidth / 2;
  const y = circleRadius * Math.sin(angle) + width / 2 - iconHeight / 2;
  const rotation = (angle * 180) / Math.PI + 90;
 
  // ✅ React Native Animated values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;
 
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        delay: index * 200,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        delay: index * 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
 
  return (
    <Animated.View
      style={{
        position: "absolute",
        left: x,
        top: y,
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }],
      }}
    >

        <ImageBackground
          source={item.image}
          style={{
            width: iconWidth ,
            height: iconHeight,
            justifyContent: "center",
            alignItems: "center",
            // overflow:"hidden"
          }}
          resizeMode="contain"
          imageStyle={{ transform: [{ rotate: `${rotation}deg` }] }}
        >
   <Pressable
  onPress={() => navigation.navigate(item.screen)}
  style={{
    alignItems: "center",
    justifyContent: "center",
    width: iconWidth * 0.85,
    height: iconWidth * 0.8,
    // backgroundColor: "rgba(255, 255, 255, 0.6)",
    transform: [{ rotate: `${rotation}deg` }],
  }}
>
  
  <View
    style={{
     
      alignItems: "center",
      transform: [{ rotate: `${-rotation}deg` }],
      justifyContent: "center",
      
    }}
  >
    <Image
      source={item.icon}
      style={{
        width: iconWidth * 0.2,
        height: iconWidth * 0.2,
      }}
    />
    <Text
      style={{
        color: "#6C472D",
        fontFamily: "Jameel-Noori-Regular",
        fontSize: iconWidth * 0.16,
        textAlign: "center",
      }}
    >
      {item.text}
    </Text>
  </View>
</Pressable>

        </ImageBackground>
    
    </Animated.View>
  );
};
 
export default AnimatedItem;
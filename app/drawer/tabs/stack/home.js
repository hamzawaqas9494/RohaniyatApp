import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import IdaraRohaniyat from "../../../../components/link/link";
import ShareApp from "../../../../components/ShareApp/shareApp";
 
const { width, height } = Dimensions.get("window");
 
// Dynamically adjust sizes
const ICON_SIZE_WIDTH = width * 0.3;
const ICON_SIZE_HEIGHT = height * 0.13;
const CENTER_CARD_SIZE = width * 0.5;
const CIRCLE_RADIUS = width * 0.35;
 
// Your DATA array
const DATA = [
  {
    id: "1",
    icon: require("../../../../assets/images/istakhraIcon.png"),
    screen: "free_istikhara",
    text: "فری استخارہ",
    image: require("../../../../assets/images/item1-bg-path.png"),
  },
  {
    id: "2",
    icon: require("../../../../assets/images/rohanielajIcon.png"),
    screen: "rohani_ilaj",
    text: "روحانی علاج",
    image: require("../../../../assets/images/item2-bg-path.png"),
  },
  {
    id: "3",
    icon: require("../../../../assets/images/tawizatusmaniyaIcon.png"),
    screen: "taweezat_usmania",
    text: "تعویذات عثمانیہ",
    image: require("../../../../assets/images/item1-bg-path.png"),
  },
  {
    id: "4",
    icon: require("../../../../assets/images/amliyatIcons.png"),
    screen: "amaliyat_course",
    text: "عملیات کورس",
    image: require("../../../../assets/images/item2-bg-path.png"),
  },
  {
    id: "5",
    icon: require("../../../../assets/images/rohanidokanIcon.png"),
    screen: "rohani_dukan",
    text: "روحانی دکان",
    image: require("../../../../assets/images/item1-bg-path.png"),
  },
  {
    id: "6",
    icon: require("../../../../assets/images/bookicon.png"),
    screen: "kutub",
    text: "کتب",
    image: require("../../../../assets/images/item2-bg-path.png"),
  },
  {
    id: "7",
    icon: require("../../../../assets/images/introductionIcons.png"),
    text: "تعارف",
    screen: "taaruf",
    image: require("../../../../assets/images/item1-bg-path.png"),
  },
  {
    id: "8",
    icon: require("../../../../assets/images/wazafIcon.png"),
    screen: "wazaif",
    text: "وظائف",
    image: require("../../../../assets/images/item2-bg-path.png"),
  },
];
 
export default function HomeScreen() {
  const navigation = useNavigation();
 
  return (
    <ImageBackground
      source={require("../../../../assets/images/background.png")}
      style={styles.background}
    >
      {/* ShareApp Component */}
      <ShareApp />
 
      <View style={styles.circleContainer}>
        <View style={styles.centerCard}>
          <Image
            source={require("../../../../assets/images/ss.png")}
            style={styles.centerLogo}
          />
        </View>
 
        {DATA.map((item, index) => {
          const angle = index * ((2 * Math.PI) / DATA.length);
          const x =
            CIRCLE_RADIUS * Math.cos(angle) + width / 2 - ICON_SIZE_WIDTH / 2;
          const y =
            CIRCLE_RADIUS * Math.sin(angle) + width / 2 - ICON_SIZE_HEIGHT / 2;
          const rotation = (angle * 180) / Math.PI + 90;
 
          // Animation Values
          const scale = useSharedValue(0);
          const opacity = useSharedValue(0);
 
          useEffect(() => {
            scale.value = withDelay(index * 200, withSpring(1));
            opacity.value = withDelay(
              index * 200,
              withTiming(1, { duration: 500 })
            );
          }, []);
 
          const animatedStyle = useAnimatedStyle(() => {
            return {
              transform: [{ scale: scale.value }],
              opacity: opacity.value,
            };
          });
 
          return (
            <Animated.View
              key={item.id}
              style={[{ position: "absolute", left: x, top: y }, animatedStyle]}
            >
              <Pressable
                onPress={() => navigation.navigate(`main_items/${item.screen}`)}
                style={styles.iconContainer}
              >
                <ImageBackground
                  source={item.image}
                  style={[
                    styles.iconBackground,
                    {
                      width: ICON_SIZE_WIDTH,
                      height: ICON_SIZE_HEIGHT,
                      // borderWidth: 1, // Set border width
                      // borderColor: "black", // Set border color
                      // borderStyle: "solid", // Optional: Default 'solid' hota hai
                    },
                  ]}
                  resizeMode="contain"
                  imageStyle={{ transform: [{ rotate: `${rotation}deg` }] }}
                >
                  <Image
                    source={item.icon}
                    style={{
                      width: ICON_SIZE_WIDTH * 0.25,
                      height: ICON_SIZE_WIDTH * 0.25,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: ICON_SIZE_WIDTH * 0.12,
                      fontFamily: "NotoNastaliqUrdu-Regular",
                      color: "#6C472D",
                      lineHeight: ICON_SIZE_WIDTH * 0.24,
                    }}
                  >
                    {item.text}
                  </Text>
                </ImageBackground>
              </Pressable>
            </Animated.View>
          );
        })}
      </View>
      {/* Footer Component */}
      <View style={styles.footer}>
        <IdaraRohaniyat />
      </View>
    </ImageBackground>
  );
}
 
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  circleContainer: {
    // position: "absolute",
    // top: "45%",
    // left: "50%",
    width: width,
    height: width,
    justifyContent: "center",
    alignItems: "center",
    // transform: [{ translateX: -width / 2 }, { translateY: -width / 2 }],
  },
  centerCard: {
    width: CENTER_CARD_SIZE,
    height: CENTER_CARD_SIZE,
    backgroundColor: "white",
    borderRadius: CENTER_CARD_SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 10,
    elevation: 6,
    borderWidth: 10,
    borderColor: "#F9F6F2",
  },
  centerLogo: {
    width: CENTER_CARD_SIZE * 0.56,
    height: CENTER_CARD_SIZE * 0.7,
  },
  iconBackground: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    color: "#6C472D",
    fontWeight: "bold",
    textAlign: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
});
 
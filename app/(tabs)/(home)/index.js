
import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import IdaraRohaniyat from "../../../components/link/link";
import ShareApp from "../../../components/ShareApp/shareApp";
import AnimatedItem from "../../../components/Animation/animation";
 
const { width, height } = Dimensions.get("window");
 
const ICON_SIZE_WIDTH = width * 0.3;
const ICON_SIZE_HEIGHT = height * 0.13;
const CENTER_CARD_SIZE = width * 0.5;
const CIRCLE_RADIUS = width * 0.35;
 
const DATA = [
  {
    id: "1",
    icon: require("../../../assets/images/istakhraIcon.png"),
    screen: "فری استخارہ",
    text: "فری استخارہ",
    image: require("../../../assets/images/item1-bg-path.png"),
  },
  {
    id: "2",
    icon: require("../../../assets/images/rohanielajIcon.png"),
    screen: "روحانی علاج فہرست",
    text: "روحانی علاج",
    image: require("../../../assets/images/item2-bg-path.png"),
  },
  {
    id: "3",
    icon: require("../../../assets/images/tawizatusmaniyaIcon.png"),
    screen: "تعویذات عثمانیہ",
    text: "تعویذات عثمانیہ",
    image: require("../../../assets/images/item1-bg-path.png"),
  },
  {
    id: "4",
    icon: require("../../../assets/images/amliyatIcons.png"),
    screen: "عملیات کورسز تفصیلات",
    text: "عملیات کورس",
    image: require("../../../assets/images/item2-bg-path.png"),
  },
  {
    id: "5",
    icon: require("../../../assets/images/rohanidokanIcon.png"),
    screen: "روحانی دکان",
    text: "روحانی دکان",
    image: require("../../../assets/images/item1-bg-path.png"),
  },
  {
    id: "6",
    icon: require("../../../assets/images/bookicon.png"),
    screen: "کتب",
    text: "کتب",
    image: require("../../../assets/images/item2-bg-path.png"),
  },
  {
    id: "7",
    icon: require("../../../assets/images/introductionIcons.png"),
    screen: "تعارف",
    text: "تعارف",
    image: require("../../../assets/images/item1-bg-path.png"),
  },
  {
    id: "8",
    icon: require("../../../assets/images/wazafIcon.png"),
    screen: "وظائف",
    text: "وظائف",
    image: require("../../../assets/images/item2-bg-path.png"),
  },
];
 
export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../../../assets/images/background.png")}
      style={styles.background}
    >
      <ShareApp />
 
      <View style={styles.circleContainer}>
        <View style={styles.centerCard}>
          <Image
            source={require("../../../assets/images/ss.png")}
            style={styles.centerLogo}
          />
        </View>
 
        {DATA.map((item, index) => (
          <AnimatedItem
            key={item.id}
            item={item}
            index={index}
            total={DATA.length}
            iconWidth={ICON_SIZE_WIDTH}
            iconHeight={ICON_SIZE_HEIGHT}
            circleRadius={CIRCLE_RADIUS}
          />
        ))}
      </View>
 
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
    width: width,
    height: width,
    justifyContent: "center",
    alignItems: "center",
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
  footer: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
});
 
 
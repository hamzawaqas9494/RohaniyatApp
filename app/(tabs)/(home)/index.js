import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import AnimatedItem from "../../../components/Animation/animation";
import IdaraRohaniyat from "../../../components/link/link";
import ShareApp from "../../../components/ShareApp/shareApp";
const { width, height } = Dimensions.get("window");
let ICON_SIZE_WIDTH, ICON_SIZE_HEIGHT, CENTER_CARD_SIZE, CIRCLE_RADIUS;
if (width < 475) {
  ICON_SIZE_WIDTH = width * 0.3;
  ICON_SIZE_HEIGHT = height * 0.13;
 CENTER_CARD_SIZE = width * 0.5;
 CIRCLE_RADIUS = width * 0.355;
} else if (width < 675) {
  ICON_SIZE_WIDTH = width * 0.20;
  ICON_SIZE_HEIGHT = height *0.12;
 CENTER_CARD_SIZE = width * 0.36;
 CIRCLE_RADIUS = width * 0.25;
}else if (width < 768) {
  ICON_SIZE_WIDTH = width * 0.18;
  ICON_SIZE_HEIGHT = height * 0.13;
 CENTER_CARD_SIZE = width * 0.295;
 CIRCLE_RADIUS = width * 0.21;
}else{
  ICON_SIZE_WIDTH = width * 0.14;
  ICON_SIZE_HEIGHT = height * 0.15;
 CENTER_CARD_SIZE = width * 0.26;
 CIRCLE_RADIUS = width * 0.18;
}
const DATA = [
  {
    id: "1",
    icon: require("../../../assets/images/istakhraIcon.png"),
    screen: "خدمات",
    text: "خدمات",
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
    icon: require("../../../assets/images/bookicon.png"),
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
      source={require("../../../assets/images/MainBackground.png")}
      style={styles.background}
    >
      <ShareApp />
      <View style={styles.circleContainer}>
        <View style={styles.centerCard}>
          <Image
            source={require("../../../assets/images/CircleLogo.png")}
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
 
 

import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AnimatedItem from "../../components/Animation/animation";
import IdaraRohaniyat from "../../components/link/link";
import ShareApp from "../../components/ShareApp/shareApp";

const { height } = Dimensions.get("window");
const screenWidth = Dimensions.get("window").width;
const width = Platform.OS === "web" ? Math.min(screenWidth, 1024) : screenWidth;

let ICON_SIZE_WIDTH, ICON_SIZE_HEIGHT, CENTER_CARD_SIZE, CIRCLE_RADIUS;

if (width < 475) {
  ICON_SIZE_WIDTH = width * 0.3;
  ICON_SIZE_HEIGHT = height * 0.13;
  CENTER_CARD_SIZE = width * 0.5;
  CIRCLE_RADIUS = width * 0.355;
} else if (width < 675) {
  ICON_SIZE_WIDTH = width * 0.2;
  ICON_SIZE_HEIGHT = height * 0.12;
  CENTER_CARD_SIZE = width * 0.36;
  CIRCLE_RADIUS = width * 0.25;
} else if (width < 768) {
  ICON_SIZE_WIDTH = width * 0.18;
  ICON_SIZE_HEIGHT = height * 0.13;
  CENTER_CARD_SIZE = width * 0.295;
  CIRCLE_RADIUS = width * 0.21;
} else {
  ICON_SIZE_WIDTH = width * 0.14;
  ICON_SIZE_HEIGHT = height * 0.15;
  CENTER_CARD_SIZE = width * 0.26;
  CIRCLE_RADIUS = width * 0.18;
}

const DATA = [
  {
    id: "1",
    icon: require("../../assets/images/istakhraIcon.png"),
    screen: "خدمات",
    text: "خدمات",
    image: require("../../assets/images/item1-bg-path.png"),
  },
  {
    id: "2",
    icon: require("../../assets/images/rohanielajIcon.png"),
    screen: "روحانی علاج فہرست",
    text: "روحانی علاج",
    image: require("../../assets/images/item2-bg-path.png"),
  },
  {
    id: "3",
    icon: require("../../assets/images/tawizatusmaniyaIcon.png"),
    screen: "تعویذات عثمانیہ",
    text: "تعویذات عثمانیہ",
    image: require("../../assets/images/item1-bg-path.png"),
  },
  {
    id: "4",
    icon: require("../../assets/images/bookicon.png"),
    screen: "عملیات کورسز تفصیلات",
    text: "عملیات کورس",
    image: require("../../assets/images/item2-bg-path.png"),
  },
  {
    id: "5",
    icon: require("../../assets/images/rohanidokanIcon.png"),
    screen: "روحانی دکان",
    text: "روحانی دکان",
    image: require("../../assets/images/item1-bg-path.png"),
  },
  {
    id: "6",
    icon: require("../../assets/images/bookicon.png"),
    screen: "کتب",
    text: "کتب",
    image: require("../../assets/images/item2-bg-path.png"),
  },
  {
    id: "7",
    icon: require("../../assets/images/introductionIcons.png"),
    screen: "تعارف",
    text: "تعارف",
    image: require("../../assets/images/item1-bg-path.png"),
  },
  {
    id: "8",
    icon: require("../../assets/images/wazafIcon.png"),
    screen: "وظائف",
    text: "وظائف",
    image: require("../../assets/images/item2-bg-path.png"),
  },
];

export default function HomeScreen() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  const handleRateApp = () => {
    setShowModal(false);
    const ANDROID_APP_URL = "https://play.google.com/store/apps/details?id=com.creationnext.idararohaniyat";
    const IOS_APP_URL =    "itms-apps://itunes.apple.com/app/idYOUR_APP_ID";

    const url = Platform.OS === "ios" ? IOS_APP_URL : ANDROID_APP_URL;
    Linking.openURL(url).catch((err) => console.error("Failed to open store URL", err));
  };

  return (
    <ImageBackground
      source={require("../../assets/images/MainBackground.png")}
      style={styles.background}
    >
      {/* Modal */}
      <Modal
        transparent
        visible={showModal}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Pressable style={styles.closeButton} onPress={() => setShowModal(false)}>
              <Text style={{  color:"rgb(228, 218, 193)" , fontSize: 25 }}>✖</Text>
            </Pressable>
            <Text style={styles.modalTitle}>ادارہ روحانیات</Text>
            <Text style={styles.modalText}>ہماری ٹیم کی حوصلہ افزائی کے لیے</Text>

            <View style={{ flexDirection: "row", marginVertical: 5 }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesome key={star} name="star" size={20} color="#FFD700" style={{ marginHorizontal: 2 }} />
              ))}
            </View>
            <Text style={styles.modalText}>اور اچھے اخلاق کا مظاہرہ کرتے ہوئے اپنے تاثرات لکھیں۔</Text>
            <TouchableOpacity style={styles.rateButton} onPress={handleRateApp}>
              <Text style={{ color: "rgb(108, 71, 45)", fontWeight: "bold" }}>RATE US NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <ShareApp />
      <View style={styles.circleContainer}>
        <View style={styles.centerCard}>
          <Image
            source={require("../../assets/images/CircleLogo.png")}
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
 modalOverlay: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
},

  modalContent: {
    width: "90%",
    backgroundColor: "rgb(108, 71, 45)",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 5,
    zIndex: 1,
    borderWidth: 0,
    outlineWidth: 0, 
  },
  modalTitle: {
    lineHeight:50,
    fontSize: 35,
    textAlign: "center",
    color:"white",
    fontFamily: "Jameel-Noori-Regular",
  },
  modalText: {
    fontSize: 20,
    textAlign: "center",
   color:"white",
        fontFamily: "Jameel-Noori-Regular",
  },
  rateButton: {
     color:"black",
    marginTop:10,
    backgroundColor: "rgb(228, 218, 193)",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

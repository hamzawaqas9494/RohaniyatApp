import {
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

const openLink = (url) => {
  Linking.openURL(url).catch((err) =>
    console.error("Failed to open URL:", err)
  );
};

const Links = () => {
  return (
    <View style={styles.mainRow}>
      {/* For Ladies */}
      <View style={styles.userSection}>
        <Text style={styles.userText}>For Ladies</Text>
        <TouchableOpacity
          onPress={() => openLink("https://wa.me/923008430971")}
        >
          <FontAwesome
            name="whatsapp"
            size={40}
            color="#25D366"
            style={styles.iconSpacing}
          />
        </TouchableOpacity>
      </View>

      {/* Center */}
      <View style={styles.centerContainer}>
        <Image
          source={require("../../assets/images/Idararohaniyat.png")}
          style={styles.logo}
        />
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => openLink("https://www.facebook.com/IdaraRohaniayt")}
          >
            <Image
              source={require("../../assets/images/facebook.png")}
              style={styles.socialMedia}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink("https://taweez.idararohaniyat.com")}
          >
            <Image
              source={require("../../assets/images/Google.png")}
              style={styles.socialMedia}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink("https://www.youtube.com/@IdaraRohaniyat")}
          >
            <Image
              source={require("../../assets/images/youtube.png")}
              style={styles.socialMedia}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink("https://www.tiktok.com/@idararohaniyat")}
          >
            <Image
              source={require("../../assets/images/Tiktok.png")}
              style={styles.socialMedia}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink("https://www.instagram.com/idararohaniyat")}
          >
            <Image
              source={require("../../assets/images/instagram.png")}
              style={styles.socialMedia}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink("https://www.pinterest.com/idararohaniyat")}
          >
            <Image
              source={require("../../assets/images/pinterest.png")}
              style={styles.socialMedia}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* For Gents */}
      <View style={styles.userSection}>
        <Text style={styles.userText}>For Gents</Text>
        <TouchableOpacity onPress={() => openLink("https://wa.me/923008440979")}>
          <FontAwesome
            name="whatsapp"
            size={40}
            color="#25D366"
            style={styles.iconSpacing}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainRow: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width,
  },
  userSection: {
    alignItems: "center",
  },
  userText: {
    color: "#6C472D",
    fontSize: 10,
    fontWeight: "bold",
  },
  centerContainer: {
    alignItems: "center",
  },
  heading: {
    color: "#6C472D",
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  socialMedia: {
    width: 25,
    height: 25,
    margin: 3,
  },
  iconSpacing: {
    marginTop: 2,
  },
  logo: {
    width: "100%",
    height: 30,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default Links;

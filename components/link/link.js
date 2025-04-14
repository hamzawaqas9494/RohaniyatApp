import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

const IdaraRohaniyat = () => {
  return (
    <View style={styles.mainRow}>
      <View style={styles.userSection}>
        <Text style={styles.userText}>For Ladies</Text>

        <FontAwesome
          name="whatsapp"
          size={40}
          color="#25D366"
          style={styles.iconSpacing}
        />
      </View>
      <View style={styles.centerContainer}>
        <View style={styles.divider} />
        <Text style={styles.heading}>IDARA ROHANIYAT</Text>
        <View style={styles.iconContainer}>
          <Image
            source={require("../../assets/images/facebook.png")}
            style={styles.socialMedia}
          />
          <Image
            source={require("../../assets/images/phone.png")}
            style={styles.socialMedia}
          />
          <Image
            source={require("../../assets/images/youtube.png")}
            style={styles.socialMedia}
          />
          <Image
            source={require("../../assets/images/xcode.png")}
            style={styles.socialMedia}
          />
          <Image
            source={require("../../assets/images/instagram.png")}
            style={styles.socialMedia}
          />
        </View>
      </View>
      <View style={styles.userSection}>
        <Text style={styles.userText}>For Gents</Text>
        <FontAwesome
          name="whatsapp"
          size={40}
          color="#25D366"
          style={styles.iconSpacing}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainRow: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width,
  },
  userSection: {
    alignItems: "center",
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginTop: 2,
  },
  socialMedia: {
    width: 25,
    height: 25,
    marginTop: 2,
    margin: 3,
  },
  userText: {
    color: "#6C472D",
    fontSize: 10,
    fontWeight: "bold",
  },
  centerContainer: {
    alignItems: "center",
    flex: 1,
  },
  divider: {
    width: 160,
    height: 3,
    backgroundColor: "#6C472D",
  },
  heading: {
    color: "#6C472D",
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default IdaraRohaniyat;

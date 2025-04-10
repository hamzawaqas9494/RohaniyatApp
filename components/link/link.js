import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window"); // Mobile screen width

const IdaraRohaniyat = () => {
  return (
    <View style={styles.container}>
      {/* Main Row */}
      <View style={styles.mainRow}>
        {/* Left Side - WhatsApp (For Ladies) */}
        <View style={styles.userSection}>
          <Text style={styles.userText}>For Ladies</Text>

          <Image
            source={require("../../assets/images/whatsapp.png")}
            style={styles.socialIcon}
          />
        </View>

        {/* Center - IDARA ROHANIYAT */}
        <View style={styles.centerContainer}>
          <View style={styles.divider} />
          <Text style={styles.heading}>IDARA ROHANIYAT</Text>
          {/* Social Media Icons */}
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

        {/* Right Side - WhatsApp (For Gents) */}
        <View style={styles.userSection}>
          <Text style={styles.userText}>For Gents</Text>
          <Image
            source={require("../../assets/images/whatsapp.png")}
            style={styles.socialIcon}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    width: width,
  },
  mainRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  userSection: {
    alignItems: "center",
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginTop: 5,
  },
  socialMedia: {
    width: 30,
    height: 30,
    marginTop: 5,
    margin: 3,
  },
  userText: {
    color: "#6C472D",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
  },
  centerContainer: {
    alignItems: "center",
    flex: 1,
  },
  divider: {
    width: 200,
    height: 4,
    backgroundColor: "#6C472D",
    marginBottom: 5,
  },
  heading: {
    color: "#6C472D",
    fontSize: 20,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default IdaraRohaniyat;

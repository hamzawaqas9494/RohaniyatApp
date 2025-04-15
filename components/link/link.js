// import React from "react";
// import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
// import FontAwesome from "react-native-vector-icons/FontAwesome";

// const { width } = Dimensions.get("window");

// const IdaraRohaniyat = () => {
//   return (
//     <View style={styles.mainRow}>
//       <View style={styles.userSection}>
//         <Text style={styles.userText}>For Ladies</Text>

//         <FontAwesome
//           name="whatsapp"
//           size={40}
//           color="#25D366"
//           style={styles.iconSpacing}
//         />
//       </View>
//       <View style={styles.centerContainer}>
//         <View style={styles.divider} />
//         <Text style={styles.heading}>IDARA ROHANIYAT</Text>
//         <View style={styles.iconContainer}>
//           <Image
//             source={require("../../assets/images/facebook.png")}
//             style={styles.socialMedia}
//           />
//           <Image
//             source={require("../../assets/images/phone.png")}
//             style={styles.socialMedia}
//           />
//           <Image
//             source={require("../../assets/images/youtube.png")}
//             style={styles.socialMedia}
//           />
//           <Image
//             source={require("../../assets/images/xcode.png")}
//             style={styles.socialMedia}
//           />
//           <Image
//             source={require("../../assets/images/instagram.png")}
//             style={styles.socialMedia}
//           />
//         </View>
//       </View>
//       <View style={styles.userSection}>
//         <Text style={styles.userText}>For Gents</Text>
//         <FontAwesome
//           name="whatsapp"
//           size={40}
//           color="#25D366"
//           style={styles.iconSpacing}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainRow: {
//     padding: 5,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     width: width,
//   },
//   userSection: {
//     alignItems: "center",
//   },
//   socialIcon: {
//     width: 40,
//     height: 40,
//     marginTop: 2,
//   },
//   socialMedia: {
//     width: 25,
//     height: 25,
//     marginTop: 2,
//     margin: 3,
//   },
//   userText: {
//     color: "#6C472D",
//     fontSize: 10,
//     fontWeight: "bold",
//   },
//   centerContainer: {
//     alignItems: "center",
//     flex: 1,
//   },
//   divider: {
//     width: 160,
//     height: 3,
//     backgroundColor: "#6C472D",
//   },
//   heading: {
//     color: "#6C472D",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   iconContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//   },
// });

// export default IdaraRohaniyat;
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

const openLink = (url) => {
  Linking.openURL(url).catch((err) =>
    console.error("Failed to open URL:", err)
  );
};

const IdaraRohaniyat = () => {
  return (
    <View style={styles.mainRow}>
      {/* For Ladies */}
      <View style={styles.userSection}>
        <Text style={styles.userText}>For Ladies</Text>
        <TouchableOpacity
          onPress={() => openLink("https://wa.me/923001234567")}
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
        <View style={styles.divider} />
        <Text style={styles.heading}>IDARA ROHANIYAT</Text>
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
            onPress={() => openLink("https://www.pinterest.com/idararohaniyat")}
          >
            <Image
              source={require("../../assets/images/phone.png")}
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
          <TouchableOpacity source={require("../../assets/images/phone.png")}>
            <Image
              source={require("../../assets/images/phone.png")}
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
            onPress={() => openLink("https://taweez.idararohaniyat.com")}
          >
            <Image
              source={require("../../assets/images/phone.png")}
              style={styles.socialMedia}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* For Gents */}
      <View style={styles.userSection}>
        <Text style={styles.userText}>For Gents</Text>
        <TouchableOpacity onPress={() => openLink("https://wa.me/03331449494")}>
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
    padding: 5,
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
    flexWrap: "wrap",
  },
  socialMedia: {
    width: 30,
    height: 30,
    margin: 5,
    backgroundColor: "#F4EDE4",
    borderRadius: 8,
    padding: 5,
  },
  iconSpacing: {
    marginTop: 2,
  },
});

export default IdaraRohaniyat;

import { ImageBackground, StyleSheet, View } from "react-native";

export default function Background({ children }) {
  return (
    <ImageBackground
      source={require("../../assets/images/background.png")}
      style={styles.background}
    >
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    // height: "100%",
    // justifyContent: "center",
    // alignItems: "center",
  },
  container: {
    padding: 25,
    height: "100%",
    justifyContent: "center",
    // alignItems: "center",
  },
});

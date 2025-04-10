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
  },
  container: {
    padding: 25,
  },
});

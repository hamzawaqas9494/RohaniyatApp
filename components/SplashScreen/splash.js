import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function CustomSplash() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/CircleLogo.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#E4DAC1"
  },

});

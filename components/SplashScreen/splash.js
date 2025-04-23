import { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
export default function RootLayout() {
  const [showCustomSplash, setShowCustomSplash] = useState(true);
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    'Jameel-Noori-Regular': require('../assets/fonts/JameelNooriNastaleeqRegular.ttf')
  });
  useEffect(() => {
    if (fontsLoaded) {
      const timer = setTimeout(() => {
        setShowCustomSplash(false);
        router.replace("/drawer");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [fontsLoaded]);
  if (showCustomSplash || !fontsLoaded) {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/images/splashScreen.png")}
          style={styles.logo}
        />

      </View>
    );
  }
  return null;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
 
// import { useEffect } from "react";
// import { useRouter } from "expo-router";
// import { useFonts } from "expo-font";

// export default function RootLayout() {
//   const router = useRouter();

//   const [fontsLoaded] = useFonts({
//     'NotoNastaliqUrdu-Regular': require('../assets/fonts/NotoNastaliqUrdu-Regular.ttf'),
//     'NotoNastaliqUrdu-Bold': require('../assets/fonts/NotoNastaliqUrdu-Bold.ttf')
//   });

//   useEffect(() => {
//     if (fontsLoaded) {
//       router.replace("/drawer");
//     }
//   }, [fontsLoaded]);

//   // Jab tak font load nahi hotay, kuch bhi render nahi karo
//   return null;
// }

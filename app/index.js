import { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

// Expo ki default splash screen ko disable karein
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setAppReady(true);
      SplashScreen.hideAsync(); // Default Splash Screen Hide
    }, 3000);
  }, []);

  useEffect(() => {
    if (appReady) {
      router.replace("/drawer");
    }
  }, [appReady]);

  if (!appReady) {
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

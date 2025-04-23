import { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Drawer } from "expo-router/drawer";
import { FontAwesome } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  const [fontsLoaded] = useFonts({
    'Jameel-Noori-Regular': require("../assets/fonts/JameelNooriNastaleeqRegular.ttf"),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // 2 second delay for splash screen

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (showSplash || !fontsLoaded) {
    return (
      <View style={styles.splash}>
        <Image
          source={require("../assets/images/main-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    );
  }

  return (
    <Drawer
      screenOptions={{
        headerLeftContainerStyle: { paddingLeft: -16 },
        headerStyle: {
          height: 56,
          backgroundColor: "#E4DAC1",
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Jameel-Noori-Regular",
          fontSize: 22,
        },
        headerShown: false, // 👈 change this to true if you want header visible
        drawerStyle: {
          backgroundColor: "#E4DAC1",
          width: 240,
        },
        drawerActiveTintColor: "blue",
        drawerInactiveTintColor: "gray",
        drawerLabelStyle: {
          fontFamily: "Jameel-Noori-Regular",
          fontSize: 18,
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Dashboard",
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="aboutus"
        options={{
          headerShown: true,
          title: "About Us",
          headerTitleStyle: {
            fontFamily: "Jameel-Noori-Regular",
            fontSize: 22,
          },
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="info" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 200,
    height: 200,
  },
});

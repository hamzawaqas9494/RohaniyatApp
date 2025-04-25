import React, { useState, useEffect, useCallback } from "react";
import { Drawer } from "expo-router/drawer";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import DrawerButton from "../components/DrawerButton/button";

// Keep splash screen visible
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    "Jameel-Noori-Regular": require("../assets/fonts/JameelNooriNastaleeqRegular.ttf"),
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    if (fontsLoaded) {
      prepare();
    }
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!fontsLoaded || !appIsReady) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Drawer
        screenOptions={{
          headerShown: false,
          headerLeft: () => null,
          headerTitleStyle: {
            fontFamily: "Jameel-Noori-Regular",
            fontSize: 25,
            color: "#6C472D",
          },
          headerTitleAlign: "center",
          headerStyle: { height: 56, backgroundColor: "#E4DAC1" },
          drawerStyle: { backgroundColor: "#E4DAC1", width: 240 },
          drawerActiveTintColor: "#6C472D",
          drawerInactiveTintColor: "black",
          drawerLabelStyle: { fontSize: 16 },
          gestureEnabled: true,
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: "ادارہ روحانیت",
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="aboutus"
          options={{
            title: "ہماری پہچان",
            headerShown: true,
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="address-card" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
      <DrawerButton />
    </GestureHandlerRootView>
  );
}

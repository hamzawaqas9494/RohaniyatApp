import { useEffect, useState} from "react";
import { Image, View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { Drawer } from "expo-router/drawer";
import { FontAwesome } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DrawerActions, useNavigation } from "@react-navigation/native";



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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerLeft: () => null, // ❌ Hide default drawer button
          // headerLeftContainerStyle: { paddingLeft: -16 },
          headerStyle: {
            height: 56,
            backgroundColor: "#E4DAC1",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Jameel-Noori-Regular",
            fontSize: 22,
          },
          headerShown: false, // Hide header by default
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
          gestureEnabled: true,  // Enable gestures globally for all screens
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
      <DraggableBar />
    </GestureHandlerRootView>
  );
}

const DraggableBar = () => {

  const navigation = useNavigation();



  const handleTap = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <TouchableWithoutFeedback onPress={handleTap}>
  <View style={styles.sideLayer}>
    <FontAwesome name="bars" size={28} color="#6C472D" />
  </View>
</TouchableWithoutFeedback>
  );
};

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

  sideLayer: {
    position: "absolute",
    top: 5,
    right: 10,
    width: 50,
    height: "6%",
    // backgroundColor: "#C09F80", // Warm tone for the bar
    // borderTopRightRadius: 20,
    // borderBottomRightRadius: 20,
    // zIndex: 10,
    // opacity: 0.95,
    justifyContent: "center",
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: { width: 2, height: 2 },
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
    // elevation: 6,
  },

});

import React, { useState, useEffect,useLayoutEffect } from "react";
import { Drawer } from "expo-router/drawer";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from 'expo-splash-screen';

import DrawerButton from "../components/DrawerButton/button";
import SplashScreenComponent from "../components/SplashScreen/splash";

// Prevent auto-hide
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    "Jameel-Noori-Regular": require("../assets/fonts/JameelNooriNastaleeqRegular.ttf"),
  });

  const [isSplashVisible, setSplashVisible] = useState(true);


  // Use useLayoutEffect to hide the splash screen immediately before any render
  useLayoutEffect(() => {
    const hide = async () => {
      await SplashScreen.hideAsync();
    };
    hide(); // Hide splash screen before the app renders anything
  }, []);

  // 👉 Ye fonts aur custom splash ke liye
  useEffect(() => {
    if (fontsLoaded) {
      const timer = setTimeout(() => {
        setSplashVisible(false); // Apni custom splash band karo after 3 seconds
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || isSplashVisible) {
    return <SplashScreenComponent />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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



// import { useCallback, useEffect, useState } from "react";
// import { Drawer } from "expo-router/drawer";
// import { FontAwesome } from "@expo/vector-icons";
// import { useFonts } from "expo-font";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import * as SplashScreen from "expo-splash-screen";

// // Keep splash visible while loading
// SplashScreen.preventAutoHideAsync();


// export default function Layout() {
//   const [fontsLoaded] = useFonts({
//     "Jameel-Noori-Regular": require("../assets/fonts/JameelNooriNastaleeqRegular.ttf"),
//   });

//   const [appIsReady, setAppIsReady] = useState(false);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         // Simulate delay if needed, or preload anything else
//         await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second artificial delay
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         if (fontsLoaded) {
//           setAppIsReady(true);
//         }
//       }
//     }
//     prepare();
//   }, [fontsLoaded]);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
//       <Drawer
//         screenOptions={{
//           headerShown: false,
//           headerLeft: () => null,
//           headerTitleStyle: {
//             fontFamily: "Jameel-Noori-Regular",
//             fontSize: 25,
//             color: "#6C472D",
//           },
//           headerTitleAlign: "center",
//           headerStyle: { height: 56, backgroundColor: "#E4DAC1" },
//           drawerStyle: { backgroundColor: "#E4DAC1", width: 240 },
//           drawerActiveTintColor: "#6C472D",
//           drawerInactiveTintColor: "black",
//           drawerLabelStyle: { fontSize: 16 },
//           gestureEnabled: true,
//         }}
//       >
//         <Drawer.Screen
//           name="(tabs)"
//           options={{
//             title: "ادارہ روحانیت",
//             drawerIcon: ({ color, size }) => (
//               <FontAwesome name="home" size={size} color={color} />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="aboutus"
//           options={{
//             title: "ہماری پہچان",
//             headerShown: true,
//             drawerIcon: ({ color, size }) => (
//               <FontAwesome name="address-card" size={size} color={color} />
//             ),
//           }}
//         />
//       </Drawer>
//     </GestureHandlerRootView>
//   );
// }




// import { Drawer } from "expo-router/drawer";
// import { FontAwesome } from "@expo/vector-icons";
// import { useFonts } from "expo-font";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import DrawerButton from "../components/DrawerButton/button";
// import * as SplashScreen from 'expo-splash-screen';
// import {useEffect} from 'react';

// SplashScreen.preventAutoHideAsync();



// export default function RootLayout() {
//   const [fontsLoaded] = useFonts({
//     "Jameel-Noori-Regular": require("../assets/fonts/JameelNooriNastaleeqRegular.ttf"),
//   });

//   useEffect(() => {
//     if (fontsLoaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded]);


//   if (!fontsLoaded) {
//     return null;
//   }



//   return (
//     <GestureHandlerRootView>
//       <Drawer
//         screenOptions={{
//           headerShown: false,
//           headerLeft: () => null,
//           headerTitleStyle: {
//             fontFamily: "Jameel-Noori-Regular",
//             fontSize: 25,
//             color: "#6C472D",
//           },
//           headerTitleAlign: "center",
//           headerStyle: { height: 56, backgroundColor: "#E4DAC1" },
//           drawerStyle: { backgroundColor: "#E4DAC1", width: 240 },
//           drawerActiveTintColor: "#6C472D",
//           drawerInactiveTintColor: "black",
//           drawerLabelStyle: { fontSize: 16 },
//           gestureEnabled: true,
//         }}
//       >
//         <Drawer.Screen
//           name="(tabs)"
//           options={{
//             title: "ادارہ روحانیت",
//             drawerIcon: ({ color, size }) => (
//               <FontAwesome name="home" size={size} color={color} />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="aboutus"
//           options={{
//             title: "ہماری پہچان",
//             headerShown: true,
//             drawerIcon: ({ color, size }) => (
//               <FontAwesome name="address-card" size={size} color={color} />
//             ),
//           }}
//         />
//       </Drawer>
//       <DrawerButton />
//     </GestureHandlerRootView>
//   );
// }

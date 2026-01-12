// // import { FontAwesome } from "@expo/vector-icons";
// // import { DrawerActions, useNavigation } from "@react-navigation/native";
// // import { useFonts } from 'expo-font';
// // import { Drawer } from "expo-router/drawer";
// // import * as SplashScreen from "expo-splash-screen";
// // import { useEffect, useLayoutEffect, useState } from "react";
// // import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
// // import { GestureHandlerRootView } from "react-native-gesture-handler";
// // import { SafeAreaView } from "react-native-safe-area-context";
// // import SplashScreenComponent from "../../components/SplashScreen/splash";
// // import { DataProvider } from "../../components/context/DataContext";

// // SplashScreen.preventAutoHideAsync();
// // export default function Layout() {

// //   const [fontsLoaded] = useFonts({
// //     "Jameel-Noori-Regular": require("../../assets/fonts/JameelNooriNastaleeqRegular.ttf"), // For OverAll Urdu Text
// //     "ScheherazadeNew-Bold": require("../../assets/fonts/ScheherazadeNew-Bold.ttf"), // For Arabic Ayaat Text
// //     "NotoNastaliqUrdu-Regular": require("../../assets/fonts/NotoNastaliqUrdu-Regular.ttf"), // For Header Text
// //     "NotoNastaliqUrdu-Bold": require("../../assets/fonts/NotoNastaliqUrdu-Bold.ttf"), // For Bold Text 
// //   });
// //   const [isSplashVisible, setSplashVisible] = useState(true);
// //   useLayoutEffect(() => {
// //     const hide = async () => {
// //       await SplashScreen.hideAsync();
// //     };
// //     hide();
// //   }, []);
// //   useEffect(() => {
// //     if (fontsLoaded) {
// //       const timer = setTimeout(() => {
// //         setSplashVisible(false);
// //       }, 2000);
// //       return () => clearTimeout(timer);
// //     }
// //   }, [fontsLoaded]);
// //   if (!fontsLoaded || isSplashVisible) {
// //     return <SplashScreenComponent />;
// //   }
// //   const DrawerButton = () => {
// //     const navigation = useNavigation();
// //     const handleTap = () => {
// //       navigation.dispatch(DrawerActions.openDrawer());
// //     };
// //     return (
// //       <TouchableWithoutFeedback onPress={handleTap}>
// //         <View style={styles.floatingButton}>
// //           <FontAwesome name="bars" size={25} color="#6C472D" />
// //         </View>
// //       </TouchableWithoutFeedback>
// //     );
// //   };
// //   return (
// //     <SafeAreaView style={{ flex: 1 }}>
// //     <GestureHandlerRootView style={{ flex: 1 }}>
// //           <DataProvider>
// //       <Drawer
// //         screenOptions={{
// //           headerShown: false,
// //           headerLeft: () => null,
// //           headerTitleStyle: {
// //             textAlignVertical: "center",
// //             fontFamily: "NotoNastaliqUrdu-Regular",
// //             fontSize: 16,
// //             color: "#6C472D",
// //           },
// //           headerTitleAlign: "center",
// //           headerStyle: { height: 56, backgroundColor: "#E4DAC1"},
// //           drawerStyle: { backgroundColor: "#E4DAC1" },
// //           drawerActiveTintColor: "#6C472D",
// //           drawerInactiveTintColor: "black",
// //           drawerLabelStyle: {
// //              fontSize: 11,
// //             //  fontFamily: "Jameel-Noori-Regular",
// //                fontFamily: "NotoNastaliqUrdu-Regular",
// //             },
// //           gestureEnabled: true,
          
// //         }}
// //       >
// //         <Drawer.Screen
// //           name="(home)"
// //           options={{
// //             title: "ادارہ روحانیت",
// //             drawerIcon: ({ color, size }) => (
// //               <FontAwesome name="home" size={size} color={color} />
// //             ),
// //           }}
// //         />
// //         <Drawer.Screen
// //           name="Humari-Pechan"
// //           options={{
// //             title: "ہماری پہچان",
// //             headerShown: true,
// //             headerRight: () => <DrawerButton />,
// //             drawerIcon: ({ color, size }) => (
// //               <FontAwesome name="address-card" size={size} color={color}/>
// //             ),
// //           }}
// //         />
// //       </Drawer>
// //       </DataProvider>
// //     </GestureHandlerRootView>
// //     </SafeAreaView>
// //   );
// // }
// // const styles = StyleSheet.create({
// //   floatingButton: {
// //     position: "absolute",
// //     top: 16,
// //     right: 20,
// //     zIndex: 999,
// //   },
// // });








// import { FontAwesome } from "@expo/vector-icons";
// import { useFonts } from 'expo-font';
// import { Drawer } from "expo-router/drawer";
// import * as SplashScreen from "expo-splash-screen";
// import { useEffect, useLayoutEffect, useState } from "react";
// import { DataProvider } from "../../components/context/DataContext";
// import DrawerButton from '../../components/DrawerButton/DrawerButton';
// import SplashScreenComponent from "../../components/SplashScreen/splash";

// SplashScreen.preventAutoHideAsync();

// export default function Layout() {
//   const [fontsLoaded] = useFonts({
//     "Jameel-Noori-Regular": require("../../assets/fonts/JameelNooriNastaleeqRegular.ttf"),
//     "ScheherazadeNew-Bold": require("../../assets/fonts/ScheherazadeNew-Bold.ttf"),
//     "NotoNastaliqUrdu-Regular": require("../../assets/fonts/NotoNastaliqUrdu-Regular.ttf"),
//     "NotoNastaliqUrdu-Bold": require("../../assets/fonts/NotoNastaliqUrdu-Bold.ttf"),
//   });

//   const [isSplashVisible, setSplashVisible] = useState(true);

//   useLayoutEffect(() => {
//     const hide = async () => {
//       await SplashScreen.hideAsync();
//     };
//     hide();
//   }, []);

//   useEffect(() => {
//     if (fontsLoaded) {
//       const timer = setTimeout(() => {
//         setSplashVisible(false);
//       }, 2000);
//       return () => clearTimeout(timer);
//     }
//   }, [fontsLoaded]);

//   if (!fontsLoaded || isSplashVisible) {
//     return <SplashScreenComponent />;
//   }



//   return (
//     // <SafeAreaView style={{ flex: 1 }}>
//       // <GestureHandlerRootView style={{ flex: 1 }}>
//         <DataProvider>
//           <Drawer
//             screenOptions={{
//               headerShown: false,
//               headerLeft: () => null,
//               headerTitleStyle: {
//                 textAlignVertical: "center",
//                 fontFamily: "NotoNastaliqUrdu-Regular",
//                 fontSize: 16,
//                 color: "#6C472D",
//               },
//               headerTitleAlign: "center",
//               headerStyle: { 
//                  height: 90,
//                  backgroundColor: "#E4DAC1"
//                  },
//               drawerStyle: { 
//                 backgroundColor: "#E4DAC1",
//                 width: 280, 
//               },
//               drawerActiveTintColor: "#6C472D",
//               drawerInactiveTintColor: "black",
//               drawerLabelStyle: {
//                 fontSize: 11,
//                 fontFamily: "NotoNastaliqUrdu-Regular",
//               },
//               gestureEnabled: true,

             
//               drawerType: "front",   
//               sceneContainerStyle: { backgroundColor: "#E4DAC1" }, 
//               overlayColor: "rgba(0, 0, 0, 0.4)",                  
//             }}
//           >
//             <Drawer.Screen
//               name="(home)"
//               options={{
//                 title: "ادارہ روحانیت",
//                 drawerIcon: ({ color, size }) => (
//                   <FontAwesome name="home" size={size} color={color} />
//                 ),
//               }}
//             />
//             <Drawer.Screen
//               name="Humari-Pechan"
//               options={{
//                 title: "ہماری پہچان",
//                 headerShown: true,
//                 headerRight: () => <DrawerButton />,
//                 drawerIcon: ({ color, size }) => (
//                   <FontAwesome name="address-card" size={size} color={color} />
//                 ),
//               }}
//             />
//           </Drawer>
//         </DataProvider>
//       // </GestureHandlerRootView>
//     // {/* </SafeAreaView> */}
//   );
// }


import { FontAwesome } from "@expo/vector-icons";
import { DrawerToggleButton } from '@react-navigation/drawer';
import { useFonts } from 'expo-font';
import { Drawer } from "expo-router/drawer";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useLayoutEffect, useState } from "react";
import { Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { DataProvider } from "../../components/context/DataContext";
import SplashScreenComponent from "../../components/SplashScreen/splash";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    "Jameel-Noori-Regular": require("../../assets/fonts/JameelNooriNastaleeqRegular.ttf"), // For OverAll Urdu Text
    "ScheherazadeNew-Bold": require("../../assets/fonts/ScheherazadeNew-Bold.ttf"), // For Arabic Ayaat Text
    "NotoNastaliqUrdu-Regular": require("../../assets/fonts/NotoNastaliqUrdu-Regular.ttf"), // For Header Text
    "NotoNastaliqUrdu-Bold": require("../../assets/fonts/NotoNastaliqUrdu-Bold.ttf"), // For Bold Text 
  });

  const [isSplashVisible, setSplashVisible] = useState(true);

  useLayoutEffect(() => {
    const hide = async () => {
      await SplashScreen.hideAsync();
    };
    hide();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      const timer = setTimeout(() => {
        setSplashVisible(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || isSplashVisible) {
    return <SplashScreenComponent />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <DataProvider>
          <SafeAreaView 
            style={{ flex: 1 }} 
            edges={[ 'left', 'right',"bottom"]}
          >
            <Drawer
              screenOptions={{
                headerShown: false,
                drawerStyle: { 
                  backgroundColor: "#E4DAC1",
                  width: 280, 
                },
                drawerActiveTintColor: "#6C472D",
                drawerInactiveTintColor: "black",
                drawerLabelStyle: {
                  fontSize: 11,
                  fontFamily: "NotoNastaliqUrdu-Regular",
                },
                gestureEnabled: true,
                drawerType: "front",   
                sceneContainerStyle: { backgroundColor: "#E4DAC1" }, 
                overlayColor: "rgba(0, 0, 0, 0.4)",                  
              }}
            >
              <Drawer.Screen
                name="(home)"
                options={{
                  title: "ادارہ روحانیت",
                  drawerIcon: ({ color, size }) => (
                    <FontAwesome name="home" size={size} color={color} />
                  ),
                }}
              />
              <Drawer.Screen
                name="Humari-Pechan"
                options={{
                  title: "ہماری پہچان",
                  headerShown: true, 
                  headerLeft: () => null, 
                  headerRight: () => <DrawerToggleButton tintColor="#6C472D"/>,
                  headerStyle: { 
                  height: Platform.OS === 'web' ? 56 : 90,  
                    backgroundColor: "#E4DAC1",
                  },
                  headerTitleStyle: {
                    textAlignVertical: "center",
                    fontFamily: "NotoNastaliqUrdu-Regular",
                    fontSize: 16,
                    color: "#6C472D",
                  },
                  headerTitleAlign: "center",
                  drawerIcon: ({ color, size }) => (
                    <FontAwesome name="address-card" size={size} color={color} />
                  ),
                }}
              />
            </Drawer>
          </SafeAreaView>
        </DataProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
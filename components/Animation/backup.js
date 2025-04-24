// // // // import React, { useEffect, useRef } from "react";
// // // // import {
// // // //   Animated,
// // // //   Image,
// // // //   ImageBackground,
// // // //   Pressable,
// // // //   Text,
// // // //   Dimensions,

// // // // } from "react-native";
// // // // import Svg, { Path } from 'react-native-svg';
// // // // import { useNavigation } from "@react-navigation/native";
 
// // // // const { width } = Dimensions.get("window");
 
// // // // const AnimatedItem = ({ item, index, total, iconWidth, iconHeight, circleRadius }) => {
// // // //   const navigation = useNavigation();
 
// // // //   const angle = index * ((2 * Math.PI) / total);
// // // //   const x = circleRadius * Math.cos(angle) + width / 2 - iconWidth / 2;
// // // //   const y = circleRadius * Math.sin(angle) + width / 2 - iconHeight / 2;
// // // //   const rotation = (angle * 180) / Math.PI + 90;
 
// // // //   // ✅ React Native Animated values
// // // //   const fadeAnim = useRef(new Animated.Value(0)).current;
// // // //   const slideAnim = useRef(new Animated.Value(20)).current;
 
// // // //   useEffect(() => {
// // // //     Animated.parallel([
// // // //       Animated.timing(fadeAnim, {
// // // //         toValue: 1,
// // // //         duration: 500,
// // // //         delay: index * 200,
// // // //         useNativeDriver: true,
// // // //       }),
// // // //       Animated.timing(slideAnim, {
// // // //         toValue: 0,
// // // //         duration: 500,
// // // //         delay: index * 200,
// // // //         useNativeDriver: true,
// // // //       }),
// // // //     ]).start();
// // // //   }, []);
 
// // // //   return (
// // // //     <Animated.View
// // // //       style={{
// // // //         position: "absolute",
// // // //         left: x,
// // // //         top: y,
// // // //         opacity: fadeAnim,
// // // //         transform: [{ translateY: slideAnim }],
// // // //       }}
// // // //     >

// // // //         <ImageBackground
// // // //           source={item.image}
// // // //           style={{
// // // //             width: iconWidth ,
// // // //             height: iconHeight,
// // // //             justifyContent: "center",
// // // //             alignItems: "center",
// // // //           }}
// // // //           resizeMode="contain"
// // // //           imageStyle={{ transform: [{ rotate: `${rotation}deg` }] }}
// // // //         >
// // // // <Pressable
// // // //   onPress={() => navigation.navigate(item.screen)}
// // // //   style={{
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //     width: iconWidth * 0.85,
// // // //     height: iconWidth * 0.8,
// // // //     transform: [{ rotate: `${rotation}deg` }],
// // // //     backgroundColor: "rgba(255, 255, 255, 0.6)",
// // // //   }}
// // // // >
// // // // <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
// // // //         <Path
// // // //           d={`
// // // //             M ${width * 0.2} 0 
// // // //             L ${width * 0.8} 0 
// // // //             L ${width} ${height} 
// // // //             L 0 ${height} 
// // // //             Z
// // // //           `}
// // // //           fill={color || "#FFD700"}
// // // //         />
    
// // // //   <Animated.View
// // // //     style={{
// // // //       alignItems: "center",
// // // //       transform: [{ rotate: `${-rotation}deg` }], // 👈 reverse rotation here
// // // //     }}
// // // //   >
// // // //     <Image
// // // //       source={item.icon}
// // // //       style={{
// // // //         width: iconWidth * 0.2,
// // // //         height: iconWidth * 0.2,
// // // //       }}
// // // //     />
// // // //     <Text
// // // //       style={{
// // // //         color: "#6C472D",
// // // //         fontFamily: "Jameel-Noori-Regular",
// // // //         fontSize: iconWidth * 0.16,
// // // //         textAlign: "center",
// // // //       }}
// // // //     >
// // // //       {item.text}
// // // //     </Text>
  
// // // //   </Animated.View>
// // // //   </Svg>
// // // // </Pressable>

// // // //         </ImageBackground>
    
// // // //     </Animated.View>
// // // //   );
// // // // };
 
// // // // export default AnimatedItem;
 
// // // import React, { useEffect, useRef } from "react";
// // // import {
// // //   Animated,
// // //   Dimensions,
// // //   Image,
// // //   StyleSheet,
// // //   Text,
// // //   View,
// // //   TouchableOpacity,
// // //   ImageBackground,
// // // } from "react-native";
// // // import Svg, { Path } from "react-native-svg";
// // // import { useNavigation } from "@react-navigation/native";

// // // const { width } = Dimensions.get("window");

// // // const AnimatedItem = ({ item, index, total, iconWidth, iconHeight, circleRadius }) => {
// // //   const navigation = useNavigation();

// // //   const angle = index * ((2 * Math.PI) / total);
// // //   const x = circleRadius * Math.cos(angle) + width / 2 - iconWidth / 2;
// // //   const y = circleRadius * Math.sin(angle) + width / 2 - iconHeight / 2;
// // //   const rotation = (angle * 180) / Math.PI + 90;

// // //   const fadeAnim = useRef(new Animated.Value(0)).current;
// // //   const slideAnim = useRef(new Animated.Value(20)).current;

// // //   useEffect(() => {
// // //     Animated.parallel([
// // //       Animated.timing(fadeAnim, {
// // //         toValue: 1,
// // //         duration: 500,
// // //         delay: index * 200,
// // //         useNativeDriver: true,
// // //       }),
// // //       Animated.timing(slideAnim, {
// // //         toValue: 0,
// // //         duration: 500,
// // //         delay: index * 200,
// // //         useNativeDriver: true,
// // //       }),
// // //     ]).start();
// // //   }, []);

// // //   return (
// // //     <Animated.View
// // //       style={[
// // //         styles.animatedView,
// // //         {
// // //           left: x,
// // //           top: y,
// // //           opacity: fadeAnim,
// // //           transform: [{ translateY: slideAnim }],
// // //         },
// // //       ]}
// // //     >
// // //       <ImageBackground
// // //         source={item.image}
// // //         style={{
// // //           width: iconWidth,
// // //           height: iconHeight,
// // //           justifyContent: "center",
// // //           alignItems: "center",
// // //           transform: [{ rotate: `${rotation}deg` }],
// // //         }}
// // //         resizeMode="contain"
// // //       >
       
// // //        <Svg
// // //   width={iconWidth*0.9}
// // //   height={iconHeight*0.4}
// // //   viewBox={`0 0 ${iconWidth} ${iconHeight}`}
// // // >
// // //   <Path
// // //     onPress={() => navigation.navigate(item.screen)}
// // //     d={`
// // //       M ${iconWidth * 0.1} ${iconHeight * 0.2}
// // //       L ${iconWidth * 0.9} ${iconHeight * 0.2}
// // //       L ${iconWidth * 0.75} ${iconHeight * 0.7}
// // //       L ${iconWidth * 0.25} ${iconHeight * 0.7}
// // //       Z
// // //     `}
// // //     fill="transparent"
// // //     stroke="#FFD700"
// // //     strokeWidth={2}
// // //   />
// // // </Svg>



// // //           {/* Centered Icon and Text */}
// // //           <View
// // //             style={{
// // //               position: "absolute",
// // //               justifyContent: "center",
// // //               alignItems: "center",
// // //               transform: [{ rotate: `${-rotation}deg` }],
// // //             }}
// // //           >
// // //             <Image
// // //               source={item.icon}
// // //               style={{
// // //                 width: iconWidth * 0.2,
// // //                 height: iconWidth * 0.2,
// // //                 marginBottom: 4,
// // //               }}
// // //             />
// // //             <Text
// // //               style={{
// // //                 color: "#6C472D",
// // //                 fontFamily: "Jameel-Noori-Regular",
// // //                 fontSize: iconWidth * 0.16,
// // //                 textAlign: "center",
// // //               }}
// // //             >
// // //               {item.text}
// // //             </Text>
// // //           </View>
     
// // //       </ImageBackground>
// // //     </Animated.View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   animatedView: {
// // //     position: "absolute",
// // //   },
// // // });

// // // export default AnimatedItem;

// // // import React, { useEffect, useRef } from "react";
// // // import {
// // //   Animated,
// // //   Image,
// // //   ImageBackground,
// // //   Pressable,
// // //   Text,
// // //   Dimensions,
// // //   View
// // // } from "react-native";
// // // import { useNavigation } from "@react-navigation/native";
 
// // // const { width } = Dimensions.get("window");
 
// // // const AnimatedItem = ({ item, index, total, iconWidth, iconHeight, circleRadius }) => {
// // //   const navigation = useNavigation();
 
// // //   const angle = index * ((2 * Math.PI) / total);
// // //   const x = circleRadius * Math.cos(angle) + width / 2 - iconWidth / 2;
// // //   const y = circleRadius * Math.sin(angle) + width / 2 - iconHeight / 2;
// // //   const rotation = (angle * 180) / Math.PI + 90;
 
// // //   // ✅ React Native Animated values
// // //   const fadeAnim = useRef(new Animated.Value(0)).current;
// // //   const slideAnim = useRef(new Animated.Value(20)).current;
 
// // //   useEffect(() => {
// // //     Animated.parallel([
// // //       Animated.timing(fadeAnim, {
// // //         toValue: 1,
// // //         duration: 500,
// // //         delay: index * 200,
// // //         useNativeDriver: true,
// // //       }),
// // //       Animated.timing(slideAnim, {
// // //         toValue: 0,
// // //         duration: 500,
// // //         delay: index * 200,
// // //         useNativeDriver: true,
// // //       }),
// // //     ]).start();
// // //   }, []);
 
// // //   return (
// // //     <Animated.View
// // //       style={{
// // //         position: "absolute",
// // //         left: x,
// // //         top: y,
// // //         opacity: fadeAnim,
// // //         transform: [{ translateY: slideAnim }],
// // //       }}
// // //     >

// // //         <ImageBackground
// // //           source={item.image}
// // //           style={{
// // //             width: iconWidth ,
// // //             height: iconHeight,
// // //             justifyContent: "center",
// // //             alignItems: "center",
// // //             // overflow:"hidden"
// // //           }}
// // //           resizeMode="contain"
// // //           imageStyle={{ transform: [{ rotate: `${rotation}deg` }] }}
// // //         >
// // //    <Pressable
// // //   onPress={() => navigation.navigate(item.screen)}
// // //   style={{
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //     width: iconWidth * 0.85,
// // //     height: iconWidth * 0.75,
// // //     backgroundColor: "rgba(255, 255, 255, 0.6)",
// // //     transform: [{ rotate: `${rotation}deg` }],
// // //   }}
// // // >
  
// // //   <View
// // //     style={{
     
// // //       alignItems: "center",
// // //       justifyContent: "center",
      
// // //     }}
// // //   >
// // //     <Image
// // //       source={item.icon}
// // //       style={{
// // //         width: iconWidth * 0.2,
// // //         height: iconWidth * 0.2,
// // //         marginBottom: 4,
// // //       }}
// // //     />
// // //     <Text
// // //       style={{
// // //         color: "#6C472D",
// // //         fontFamily: "Jameel-Noori-Regular",
// // //         fontSize: iconWidth * 0.16,
// // //         textAlign: "center",
// // //       }}
// // //     >
// // //       {item.text}
// // //     </Text>
// // //   </View>
// // // </Pressable>

// // //         </ImageBackground>
    
// // //     </Animated.View>
// // //   );
// // // };
 
// // // export default AnimatedItem;
 
 






// // import React, { useEffect, useRef } from "react";
// // import {
// //   Animated,
// //   Image,
// //   ImageBackground,
// //   Pressable,
// //   Text,
// //   Dimensions,
// //   View
// // } from "react-native";
// // import { useNavigation } from "@react-navigation/native";
 
// // const { width } = Dimensions.get("window");
 
// // const AnimatedItem = ({ item, index, total, iconWidth, iconHeight, circleRadius }) => {
// //   const navigation = useNavigation();
 
// //   const angle = index * ((2 * Math.PI) / total);
// //   const x = circleRadius * Math.cos(angle) + width / 2 - iconWidth / 2;
// //   const y = circleRadius * Math.sin(angle) + width / 2 - iconHeight / 2;
// //   const rotation = (angle * 180) / Math.PI + 90;
 
// //   // ✅ React Native Animated values
// //   const fadeAnim = useRef(new Animated.Value(0)).current;
// //   const slideAnim = useRef(new Animated.Value(20)).current;
 
// //   useEffect(() => {
// //     Animated.parallel([
// //       Animated.timing(fadeAnim, {
// //         toValue: 1,
// //         duration: 500,
// //         delay: index * 200,
// //         useNativeDriver: true,
// //       }),
// //       Animated.timing(slideAnim, {
// //         toValue: 0,
// //         duration: 500,
// //         delay: index * 200,
// //         useNativeDriver: true,
// //       }),
// //     ]).start();
// //   }, []);
 
// //   return (
// //     <Animated.View
// //       style={{
// //         position: "absolute",
// //         left: x,
// //         top: y,
// //         opacity: fadeAnim,
// //         transform: [{ translateY: slideAnim }],
// //       }}
// //     >

// //         <ImageBackground
// //           source={item.image}
// //           style={{
// //             width: iconWidth ,
// //             height: iconHeight,
// //             justifyContent: "center",
// //             alignItems: "center",
// //             // overflow:"hidden"
// //           }}
// //           resizeMode="contain"
// //           imageStyle={{ transform: [{ rotate: `${rotation}deg` }] }}
// //         >
// //    <Pressable
// //   onPress={() => navigation.navigate(item.screen)}
// //   style={{
// //     alignItems: "center",
// //     justifyContent: "center",
// //     width: iconWidth * 0.85,
// //     height: iconWidth * 0.75,
// //     backgroundColor: "rgba(255, 255, 255, 0.6)",
// //     transform: [{ rotate: `${rotation}deg` }],
// //   }}
// // >
  
// //   <View
// //     style={{
     
// //       alignItems: "center",
// //       justifyContent: "center",
// //       transform: [{ rotate: `${-rotation}deg` }],
      
// //     }}
// //   >
// //     <Image
// //       source={item.icon}
// //       style={{
// //         width: iconWidth * 0.2,
// //         height: iconWidth * 0.2,
// //         marginBottom: 4,
// //       }}
// //     />
// //     <Text
// //       style={{
// //         color: "#6C472D",
// //         fontFamily: "Jameel-Noori-Regular",
// //         fontSize: iconWidth * 0.16,
// //         textAlign: "center",
// //       }}
// //     >
// //       {item.text}
// //     </Text>
// //   </View>
// // </Pressable>

// //         </ImageBackground>
    
// //     </Animated.View>
// //   );
// // };
 
// // export default AnimatedItem;
 
//  import { useEffect, useState, useRef } from "react";
//  import { Image, Animated, PanResponder, Text, View, StyleSheet } from "react-native";
//  import { Drawer } from "expo-router/drawer";
//  import { FontAwesome } from "@expo/vector-icons";
//  import * as SplashScreen from "expo-splash-screen";
//  import { useFonts } from "expo-font";
//  import { GestureHandlerRootView } from "react-native-gesture-handler";
//  import { useNavigation, DrawerActions } from "@react-navigation/native"; // Import DrawerActions
 
//  export default function RootLayout() {
//    const [showSplash, setShowSplash] = useState(true);
//    const [fontsLoaded] = useFonts({
//      'Jameel-Noori-Regular': require("../assets/fonts/JameelNooriNastaleeqRegular.ttf"),
//    });
 
//    useEffect(() => {
//      const timer = setTimeout(() => {
//        setShowSplash(false);
//      }, 2000); // 2 second delay for splash screen
 
//      return () => clearTimeout(timer);
//    }, []);
 
//    useEffect(() => {
//      if (fontsLoaded) {
//        SplashScreen.hideAsync();
//      }
//    }, [fontsLoaded]);
 
//    if (showSplash || !fontsLoaded) {
//      return (
//        <View style={styles.splash}>
//          <Image
//            source={require("../assets/images/main-logo.png")}
//            style={styles.logo}
//            resizeMode="contain"
//          />
//        </View>
//      );
//    }
 
//    return (
//      <GestureHandlerRootView style={{ flex: 1 }}>
//        <Drawer
//          screenOptions={{
//            headerLeftContainerStyle: { paddingLeft: -16 },
//            headerStyle: {
//              height: 56,
//              backgroundColor: "#E4DAC1",
//            },
//            headerTitleAlign: "center",
//            headerTitleStyle: {
//              fontFamily: "Jameel-Noori-Regular",
//              fontSize: 22,
//            },
//            headerShown: false, // Hide header by default
//            drawerStyle: {
//              backgroundColor: "#E4DAC1",
//              width: 240,
//            },
//            drawerActiveTintColor: "blue",
//            drawerInactiveTintColor: "gray",
//            drawerLabelStyle: {
//              fontFamily: "Jameel-Noori-Regular",
//              fontSize: 18,
//            },
//            gestureEnabled: false, // Disable swipe gesture everywhere
//          }}
//        >
//          <Drawer.Screen
//            name="(tabs)"
//            options={{
//              title: "Dashboard",
//              drawerIcon: ({ color, size }) => (
//                <FontAwesome name="home" size={size} color={color} />
//              ),
//            }}
//          />
//          <Drawer.Screen
//            name="aboutus"
//            options={{
//              headerShown: true,
//              title: "About Us",
//              headerTitleStyle: {
//                fontFamily: "Jameel-Noori-Regular",
//                fontSize: 22,
//              },
//              drawerIcon: ({ color, size }) => (
//                <FontAwesome name="info" size={size} color={color} />
//              ),
//            }}
//          />
//        </Drawer>
 
//        {/* Left Side Layer Indicator - Draggable */}
//        <DraggableBar />
//      </GestureHandlerRootView>
//    );
//  }
 
//  const DraggableBar = () => {
//    const translateY = useRef(new Animated.Value(0)).current;
//    const translateX = useRef(new Animated.Value(0)).current;
//    const navigation = useNavigation(); // Get navigation prop
 
//    const panResponder = useRef(
//      PanResponder.create({
//        onMoveShouldSetPanResponder: (_, gestureState) => {
//          // Enable gesture only when horizontal movement is detected
//          return Math.abs(gestureState.dy) > 10 || Math.abs(gestureState.dx) > 10;
//        },
//        onPanResponderMove: (_, gestureState) => {
//          // Track vertical movement
//          translateY.setValue(gestureState.dy);
 
//          // Track horizontal movement (left swipe from the edge of the bar)
//          translateX.setValue(gestureState.dx);
//        },
//        onPanResponderRelease: (_, gestureState) => {
//          // If swiped up or down, reset position
//          if (Math.abs(gestureState.dy) > 30) {
//            translateY.setValue(0); // Reset vertical movement
//          }
 
//          // Open the drawer if swiped from the left edge of the bar
//          if (gestureState.dx < 50 && gestureState.dx > -50) {
//            navigation.dispatch(DrawerActions.openDrawer()); // Open drawer when swiped horizontally from left edge
//          }
 
//          translateY.setValue(0); // Reset vertical movement after release
//          translateX.setValue(0); // Reset horizontal movement after release
//        },
//      })
//    ).current;
 
//    return (
//      <Animated.View
//        {...panResponder.panHandlers}
//        style={[
//          styles.sideLayer,
//          {
//            transform: [{ translateY }, { translateX }],
//          },
//        ]}
//      >
//        <View style={styles.grip} />
//        <Text style={styles.swipeText}>کھینچیں</Text>
//      </Animated.View>
//    );
//  };
 
//  const styles = StyleSheet.create({
//    splash: {
//      flex: 1,
//      justifyContent: "center",
//      alignItems: "center",
//      backgroundColor: "#fff",
//    },
//    logo: {
//      width: 200,
//      height: 200,
//    },
//    sideLayer: {
//      position: "absolute",
//      top: 0,
//      left: 0,
//      width: 35,
//      height: "30%",
//      backgroundColor: "#C09F80",
//      borderTopRightRadius: 20,
//      borderBottomRightRadius: 20,
//      zIndex: 10,
//      opacity: 0.95,
//      justifyContent: "center",
//      alignItems: "center",
//      shadowColor: "#000",
//      shadowOffset: { width: 2, height: 2 },
//      shadowOpacity: 0.3,
//      shadowRadius: 4,
//      elevation: 6,
//    },
//    swipeText: {
//      color: "#fff",
//      fontSize: 14,
//      fontWeight: "bold",
//      marginTop: 10,
//      transform: [{ rotate: "-90deg" }],
//      fontFamily: "Jameel-Noori-Regular",
//    },
//    grip: {
//      width: 8,
//      height: 40,
//      borderRadius: 4,
//      backgroundColor: "#fff",
//      marginBottom: 10,
//    },
//  });
 
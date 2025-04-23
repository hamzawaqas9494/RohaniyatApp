// // // import React, { useEffect, useRef } from "react";
// // // import {
// // //   Animated,
// // //   Image,
// // //   ImageBackground,
// // //   Pressable,
// // //   Text,
// // //   Dimensions,

// // // } from "react-native";
// // // import Svg, { Path } from 'react-native-svg';
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
// // //           }}
// // //           resizeMode="contain"
// // //           imageStyle={{ transform: [{ rotate: `${rotation}deg` }] }}
// // //         >
// // // <Pressable
// // //   onPress={() => navigation.navigate(item.screen)}
// // //   style={{
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //     width: iconWidth * 0.85,
// // //     height: iconWidth * 0.8,
// // //     transform: [{ rotate: `${rotation}deg` }],
// // //     backgroundColor: "rgba(255, 255, 255, 0.6)",
// // //   }}
// // // >
// // // <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
// // //         <Path
// // //           d={`
// // //             M ${width * 0.2} 0 
// // //             L ${width * 0.8} 0 
// // //             L ${width} ${height} 
// // //             L 0 ${height} 
// // //             Z
// // //           `}
// // //           fill={color || "#FFD700"}
// // //         />
    
// // //   <Animated.View
// // //     style={{
// // //       alignItems: "center",
// // //       transform: [{ rotate: `${-rotation}deg` }], // 👈 reverse rotation here
// // //     }}
// // //   >
// // //     <Image
// // //       source={item.icon}
// // //       style={{
// // //         width: iconWidth * 0.2,
// // //         height: iconWidth * 0.2,
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
  
// // //   </Animated.View>
// // //   </Svg>
// // // </Pressable>

// // //         </ImageBackground>
    
// // //     </Animated.View>
// // //   );
// // // };
 
// // // export default AnimatedItem;
 
// // import React, { useEffect, useRef } from "react";
// // import {
// //   Animated,
// //   Dimensions,
// //   Image,
// //   StyleSheet,
// //   Text,
// //   View,
// //   TouchableOpacity,
// //   ImageBackground,
// // } from "react-native";
// // import Svg, { Path } from "react-native-svg";
// // import { useNavigation } from "@react-navigation/native";

// // const { width } = Dimensions.get("window");

// // const AnimatedItem = ({ item, index, total, iconWidth, iconHeight, circleRadius }) => {
// //   const navigation = useNavigation();

// //   const angle = index * ((2 * Math.PI) / total);
// //   const x = circleRadius * Math.cos(angle) + width / 2 - iconWidth / 2;
// //   const y = circleRadius * Math.sin(angle) + width / 2 - iconHeight / 2;
// //   const rotation = (angle * 180) / Math.PI + 90;

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
// //       style={[
// //         styles.animatedView,
// //         {
// //           left: x,
// //           top: y,
// //           opacity: fadeAnim,
// //           transform: [{ translateY: slideAnim }],
// //         },
// //       ]}
// //     >
// //       <ImageBackground
// //         source={item.image}
// //         style={{
// //           width: iconWidth,
// //           height: iconHeight,
// //           justifyContent: "center",
// //           alignItems: "center",
// //           transform: [{ rotate: `${rotation}deg` }],
// //         }}
// //         resizeMode="contain"
// //       >
       
// //        <Svg
// //   width={iconWidth*0.9}
// //   height={iconHeight*0.4}
// //   viewBox={`0 0 ${iconWidth} ${iconHeight}`}
// // >
// //   <Path
// //     onPress={() => navigation.navigate(item.screen)}
// //     d={`
// //       M ${iconWidth * 0.1} ${iconHeight * 0.2}
// //       L ${iconWidth * 0.9} ${iconHeight * 0.2}
// //       L ${iconWidth * 0.75} ${iconHeight * 0.7}
// //       L ${iconWidth * 0.25} ${iconHeight * 0.7}
// //       Z
// //     `}
// //     fill="transparent"
// //     stroke="#FFD700"
// //     strokeWidth={2}
// //   />
// // </Svg>



// //           {/* Centered Icon and Text */}
// //           <View
// //             style={{
// //               position: "absolute",
// //               justifyContent: "center",
// //               alignItems: "center",
// //               transform: [{ rotate: `${-rotation}deg` }],
// //             }}
// //           >
// //             <Image
// //               source={item.icon}
// //               style={{
// //                 width: iconWidth * 0.2,
// //                 height: iconWidth * 0.2,
// //                 marginBottom: 4,
// //               }}
// //             />
// //             <Text
// //               style={{
// //                 color: "#6C472D",
// //                 fontFamily: "Jameel-Noori-Regular",
// //                 fontSize: iconWidth * 0.16,
// //                 textAlign: "center",
// //               }}
// //             >
// //               {item.text}
// //             </Text>
// //           </View>
     
// //       </ImageBackground>
// //     </Animated.View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   animatedView: {
// //     position: "absolute",
// //   },
// // });

// // export default AnimatedItem;

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
 
 






// import React, { useEffect, useRef } from "react";
// import {
//   Animated,
//   Image,
//   ImageBackground,
//   Pressable,
//   Text,
//   Dimensions,
//   View
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
 
// const { width } = Dimensions.get("window");
 
// const AnimatedItem = ({ item, index, total, iconWidth, iconHeight, circleRadius }) => {
//   const navigation = useNavigation();
 
//   const angle = index * ((2 * Math.PI) / total);
//   const x = circleRadius * Math.cos(angle) + width / 2 - iconWidth / 2;
//   const y = circleRadius * Math.sin(angle) + width / 2 - iconHeight / 2;
//   const rotation = (angle * 180) / Math.PI + 90;
 
//   // ✅ React Native Animated values
//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const slideAnim = useRef(new Animated.Value(20)).current;
 
//   useEffect(() => {
//     Animated.parallel([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 500,
//         delay: index * 200,
//         useNativeDriver: true,
//       }),
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 500,
//         delay: index * 200,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   }, []);
 
//   return (
//     <Animated.View
//       style={{
//         position: "absolute",
//         left: x,
//         top: y,
//         opacity: fadeAnim,
//         transform: [{ translateY: slideAnim }],
//       }}
//     >

//         <ImageBackground
//           source={item.image}
//           style={{
//             width: iconWidth ,
//             height: iconHeight,
//             justifyContent: "center",
//             alignItems: "center",
//             // overflow:"hidden"
//           }}
//           resizeMode="contain"
//           imageStyle={{ transform: [{ rotate: `${rotation}deg` }] }}
//         >
//    <Pressable
//   onPress={() => navigation.navigate(item.screen)}
//   style={{
//     alignItems: "center",
//     justifyContent: "center",
//     width: iconWidth * 0.85,
//     height: iconWidth * 0.75,
//     backgroundColor: "rgba(255, 255, 255, 0.6)",
//     transform: [{ rotate: `${rotation}deg` }],
//   }}
// >
  
//   <View
//     style={{
     
//       alignItems: "center",
//       justifyContent: "center",
//       transform: [{ rotate: `${-rotation}deg` }],
      
//     }}
//   >
//     <Image
//       source={item.icon}
//       style={{
//         width: iconWidth * 0.2,
//         height: iconWidth * 0.2,
//         marginBottom: 4,
//       }}
//     />
//     <Text
//       style={{
//         color: "#6C472D",
//         fontFamily: "Jameel-Noori-Regular",
//         fontSize: iconWidth * 0.16,
//         textAlign: "center",
//       }}
//     >
//       {item.text}
//     </Text>
//   </View>
// </Pressable>

//         </ImageBackground>
    
//     </Animated.View>
//   );
// };
 
// export default AnimatedItem;
 
 
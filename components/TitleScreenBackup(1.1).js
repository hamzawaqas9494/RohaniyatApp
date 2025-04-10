// // // // // import {
// // // // //   View,
// // // // //   Text,
// // // // //   StyleSheet,
// // // // //   ImageBackground,
// // // // //   FlatList,
// // // // //   Dimensions,
// // // // // } from "react-native";
// // // // // import { TouchableOpacity } from "react-native-gesture-handler";
// // // // // import { FontAwesome5 } from "@expo/vector-icons";
// // // // // import { useNavigation } from "@react-navigation/native";

// // // // // const { width } = Dimensions.get("window");
// // // // // const CARD_SIZE = width / 4.2; // Compact Size for Cards

// // // // // const DATA = [
// // // // //   { id: "1", icon: "home", text: "title" },
// // // // //   { id: "2", icon: "user", text: "profile" },
// // // // //   { id: "3", icon: "cog", text: "settings" },
// // // // //   { id: "4", icon: "bell", text: "notifications" },
// // // // //   { id: "5", icon: "envelope", text: "messages" },
// // // // //   { id: "6", icon: "calendar", text: "calendar" },
// // // // //   { id: "7", icon: "heart", text: "favorites" },
// // // // //   { id: "8", icon: "globe", text: "explore" },
// // // // // ];

// // // // // export default function HomeScreen() {
// // // // //   const navigation = useNavigation();
// // // // //   return (
// // // // //     <ImageBackground
// // // // //       source={{
// // // // //         uri: "https://images.unsplash.com/photo-1598300053656-485b40e1a48b",
// // // // //       }}
// // // // //       style={styles.background}
// // // // //     >
// // // // //       <View>
// // // // //         <FlatList
// // // // //           data={DATA}
// // // // //           numColumns={3}
// // // // //           keyExtractor={(item) => item.id}
// // // // //           contentContainerStyle={styles.listContainer}
// // // // //           renderItem={({ item }) => (
// // // // //             <TouchableOpacity
// // // // //               style={styles.card}
// // // // //               onPress={() => navigation.navigate(item.text)}
// // // // //             >
// // // // //               <FontAwesome5 name={item.icon} size={22} color="#fff" />
// // // // //               <Text style={styles.cardText}>{item.text}</Text>
// // // // //             </TouchableOpacity>
// // // // //           )}
// // // // //         />
// // // // //       </View>
// // // // //     </ImageBackground>
// // // // //   );
// // // // // }

// // // // // const styles = StyleSheet.create({
// // // // //   background: {
// // // // //     flex: 1,
// // // // //     width: "100%",
// // // // //     height: "100%",
// // // // //     resizeMode: "cover",
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //   },

// // // // //   listContainer: {
// // // // //     flexGrow: 1,
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //   },
// // // // //   card: {
// // // // //     width: CARD_SIZE,
// // // // //     height: CARD_SIZE * 0.9,
// // // // //     backgroundColor: "black",
// // // // //     margin: 8,
// // // // //     borderRadius: 12,
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //     elevation: 4,
// // // // //     borderWidth: 1,
// // // // //     borderColor: "rgba(255,255,255,0.5)",
// // // // //   },
// // // // //   cardText: {
// // // // //     color: "#fff",
// // // // //     fontSize: 12,
// // // // //     fontWeight: "bold",
// // // // //     marginTop: 6,
// // // // //     textAlign: "center",
// // // // //   },
// // // // // });

// // // // import {
// // // //   View,
// // // //   Text,
// // // //   StyleSheet,
// // // //   ImageBackground,
// // // //   FlatList,
// // // //   Dimensions,
// // // // } from "react-native";
// // // // import { TouchableOpacity } from "react-native-gesture-handler";
// // // // import { FontAwesome5 } from "@expo/vector-icons";
// // // // import { useNavigation } from "@react-navigation/native";

// // // // const { width } = Dimensions.get("window");
// // // // const CARD_SIZE = width / 4.2; // Compact Size for Cards

// // // // const DATA = [
// // // //   { id: "1", icon: "home", text: "title" },
// // // //   { id: "2", icon: "user", text: "profile" },
// // // //   { id: "3", icon: "cog", text: "settings" },
// // // //   { id: "4", icon: "bell", text: "notifications" },
// // // //   { id: "5", icon: "envelope", text: "messages" },
// // // //   { id: "6", icon: "calendar", text: "calendar" },
// // // //   { id: "7", icon: "heart", text: "favorites" },
// // // //   { id: "8", icon: "globe", text: "explore" },
// // // // ];

// // // // export default function HomeScreen() {
// // // //   const navigation = useNavigation();
// // // //   return (
// // // //     <ImageBackground
// // // //       source={{
// // // //         uri: "https://images.unsplash.com/photo-1598300053656-485b40e1a48b",
// // // //       }}
// // // //       style={styles.background}
// // // //     >
// // // //       <View>
// // // //         <FlatList
// // // //           data={DATA}
// // // //           numColumns={3}
// // // //           keyExtractor={(item) => item.id}
// // // //           contentContainerStyle={styles.listContainer}
// // // //           renderItem={({ item }) => (
// // // //             <TouchableOpacity
// // // //               style={styles.card}
// // // //               onPress={() => navigation.navigate(item.text)}
// // // //             >
// // // //               <FontAwesome5 name={item.icon} size={22} color="#fff" />
// // // //               <Text style={styles.cardText}>{item.text}</Text>
// // // //             </TouchableOpacity>
// // // //           )}
// // // //         />
// // // //       </View>
// // // //     </ImageBackground>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   background: {
// // // //     flex: 1,
// // // //     width: "100%",
// // // //     height: "100%",
// // // //     resizeMode: "cover",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //   },

// // // //   listContainer: {
// // // //     flexGrow: 1,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //   },
// // // //   card: {
// // // //     width: CARD_SIZE,
// // // //     height: CARD_SIZE * 0.9,
// // // //     backgroundColor: "black",
// // // //     margin: 8,
// // // //     borderRadius: 12,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     elevation: 4,
// // // //     borderWidth: 1,
// // // //     borderColor: "rgba(255,255,255,0.5)",
// // // //   },
// // // //   cardText: {
// // // //     color: "#fff",
// // // //     fontSize: 12,
// // // //     fontWeight: "bold",
// // // //     marginTop: 6,
// // // //     textAlign: "center",
// // // //   },
// // // // });

// // // // import React from "react";
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   StyleSheet,
// // // //   ImageBackground,
// // // //   Dimensions,
// // // //   Image,
// // // // } from "react-native";
// // // // import { TouchableOpacity } from "react-native-gesture-handler";
// // // // import { FontAwesome5 } from "@expo/vector-icons";
// // // // import { useNavigation } from "@react-navigation/native";

// // // // const { width } = Dimensions.get("window");
// // // // const CIRCLE_RADIUS = width * 0.35; // Icons circle ka radius
// // // // const ICON_SIZE = 60; // Icons size
// // // // const CENTER_CARD_SIZE = 120; // Center card size

// // // // const DATA = [
// // // //   { id: "1", icon: "home", text: "title" },
// // // //   { id: "2", icon: "user", text: "profile" },
// // // //   { id: "3", icon: "cog", text: "settings" },
// // // //   { id: "4", icon: "bell", text: "notifications" },
// // // //   { id: "5", icon: "envelope", text: "messages" },
// // // //   { id: "6", icon: "calendar", text: "calendar" },
// // // //   { id: "7", icon: "heart", text: "favorites" },
// // // //   { id: "8", icon: "globe", text: "explore" },
// // // // ];
// // // // export default function HomeScreen() {
// // // //   const navigation = useNavigation();

// // // //   return (
// // // //     <ImageBackground
// // // //       source={{
// // // //         uri: "https://images.unsplash.com/photo-1598300053656-485b40e1a48b",
// // // //       }}
// // // //       style={styles.background}
// // // //     >
// // // //       {/* Parent View for Center Card & Circular Icons */}
// // // //       <View style={styles.circleContainer}>
// // // //         {/* Center Card */}
// // // //         <View style={styles.centerCard}>
// // // //           <Image
// // // //             source={{ uri: "https://your-logo-url.com/logo.png" }}
// // // //             style={styles.centerLogo}
// // // //           />
// // // //         </View>

// // // //         {/* Circular Positioned Icons */}
// // // //         {DATA.map((item, index) => {
// // // //           const angle = index * (360 / DATA.length) * (Math.PI / 180);
// // // //           const x = CIRCLE_RADIUS * Math.cos(angle) - ICON_SIZE / 2;
// // // //           const y = CIRCLE_RADIUS * Math.sin(angle) - ICON_SIZE / 2;

// // // //           return (
// // // //             <TouchableOpacity
// // // //               key={item.id}
// // // //               style={[
// // // //                 styles,
// // // //                 { transform: [{ translateX: x }, { translateY: y }] },
// // // //               ]}
// // // //               onPress={() => navigation.navigate(item.text)}
// // // //             >
// // // //               <Text style={styles.cardText}>{item.text}</Text>
// // // //               <FontAwesome5 name={item.icon} size={28} color="#fff" />
// // // //             </TouchableOpacity>
// // // //           );
// // // //         })}
// // // //       </View>
// // // //     </ImageBackground>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   background: {
// // // //     flex: 1,
// // // //     width: "100%",
// // // //     height: "100%",
// // // //     resizeMode: "cover",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //   },
// // // //   circleContainer: {
// // // //     position: "absolute",
// // // //     top: "50%",
// // // //     left: "50%",
// // // //     width: width,
// // // //     height: width,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     transform: [{ translateX: -width / 2 }, { translateY: -width / 2 }],
// // // //   },
// // // //   centerCard: {
// // // //     width: CENTER_CARD_SIZE,
// // // //     height: CENTER_CARD_SIZE,
// // // //     backgroundColor: "black",
// // // //     borderRadius: CENTER_CARD_SIZE / 2,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     position: "absolute",
// // // //     zIndex: 10,
// // // //     elevation: 6,
// // // //     borderWidth: 2,
// // // //     borderColor: "white",
// // // //   },
// // // //   centerLogo: {
// // // //     width: CENTER_CARD_SIZE * 0.6,
// // // //     height: CENTER_CARD_SIZE * 0.6,
// // // //     borderRadius: (CENTER_CARD_SIZE * 0.6) / 2,
// // // //   },
// // // //   card: {
// // // //     position: "fixed",
// // // //     width: ICON_SIZE,
// // // //     height: ICON_SIZE,
// // // //     backgroundColor: "black",
// // // //     borderRadius: ICON_SIZE / 2,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     elevation: 4,
// // // //     borderWidth: 1,
// // // //     borderColor: "rgba(255,255,255,0.5)",
// // // //   },
// // // //   cardText: {
// // // //     color: "#fff",
// // // //     fontSize: 10,
// // // //     fontWeight: "bold",
// // // //     marginTop: 4,
// // // //     textAlign: "center",
// // // //   },
// // // // });

// // // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // // import React from "react";
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   StyleSheet,
// // // //   ImageBackground,
// // // //   Dimensions,
// // // //   Image,
// // // //   Pressable,
// // // // } from "react-native";
// // // // import { FontAwesome5 } from "@expo/vector-icons";
// // // // import { useNavigation } from "@react-navigation/native";

// // // // const { width } = Dimensions.get("window");
// // // // const CIRCLE_RADIUS = width * 0.35;
// // // // const ICON_SIZE = 60;
// // // // const CENTER_CARD_SIZE = 120;

// // // // const DATA = [
// // // //   { id: "1", icon: "home", text: "Home" },
// // // //   { id: "2", icon: "user", text: "profile" },
// // // //   { id: "3", icon: "cog", text: "settings" },
// // // //   { id: "4", icon: "bell", text: "notifications" },
// // // //   { id: "5", icon: "envelope", text: "messages" },
// // // //   { id: "6", icon: "calendar", text: "calendar" },
// // // //   { id: "7", icon: "heart", text: "favorites" },
// // // //   { id: "8", icon: "globe", text: "explore" },
// // // // ];

// // // // export default function HomeScreen() {
// // // //   const navigation = useNavigation();

// // // //   return (
// // // //     <ImageBackground
// // // //       source={{
// // // //         uri: "https://images.unsplash.com/photo-1598300053656-485b40e1a48b",
// // // //       }}
// // // //       style={styles.background}
// // // //     >
// // // //       <View style={styles.circleContainer} pointerEvents="box-none">
// // // //         <View style={styles.centerCard}>
// // // //           <Image
// // // //             source={{ uri: "https://your-logo-url.com/logo.png" }}
// // // //             style={styles.centerLogo}
// // // //           />
// // // //         </View>

// // // //         {DATA.map((item, index) => {
// // // //           const angle = index * (360 / DATA.length) * (Math.PI / 180);
// // // //           const x = CIRCLE_RADIUS * Math.cos(angle) - ICON_SIZE / 2;
// // // //           const y = CIRCLE_RADIUS * Math.sin(angle) - ICON_SIZE / 2;

// // // //           return (
// // // //             <Pressable
// // // //               key={item.id}
// // // //               style={[
// // // //                 styles.card,
// // // //                 {
// // // //                   // transform: [{ translateX: x }, { translateY: y }],
// // // //                   transform: [{ translateX: x }, { translateY: y }],
// // // //                   zIndex: 20,
// // // //                   elevation: 10,
// // // //                   backgroundColor: "red", // Debugging ke liye color
// // // //                 },
// // // //               ]}
// // // //               onPress={() => {
// // // //                 console.log("Navigating to:", item.text);
// // // //                 navigation.navigate(item.text);
// // // //               }}
// // // //             >
// // // //               <FontAwesome5 name={item.icon} size={28} color="#fff" />
// // // //               <Text style={styles.cardText}>{item.text}</Text>
// // // //             </Pressable>
// // // //           );
// // // //         })}
// // // //       </View>
// // // //     </ImageBackground>
// // // //   );
// // // // }

// // // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // // import React from "react";
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   StyleSheet,
// // // //   ImageBackground,
// // // //   Dimensions,
// // // //   Image,
// // // //   Pressable,
// // // // } from "react-native";
// // // // import { TouchableOpacity } from "react-native-gesture-handler";
// // // // import { FontAwesome5 } from "@expo/vector-icons";
// // // // import { useNavigation } from "@react-navigation/native";

// // // // const { width } = Dimensions.get("window");
// // // // const CIRCLE_RADIUS = width * 0.35; // Icons circle ka radius
// // // // const ICON_SIZE = 60; // Icons size
// // // // const CENTER_CARD_SIZE = 120; // Center card size

// // // // const DATA = [
// // // //   { id: "1", icon: "home", text: "Home" },
// // // //   { id: "2", icon: "user", text: "profile" },
// // // //   { id: "3", icon: "cog", text: "settings" },
// // // //   { id: "4", icon: "bell", text: "notifications" },
// // // //   { id: "5", icon: "envelope", text: "messages" },
// // // //   { id: "6", icon: "calendar", text: "calendar" },
// // // //   { id: "7", icon: "heart", text: "favorites" },
// // // //   { id: "8", icon: "globe", text: "explore" },
// // // // ];

// // // // export default function HomeScreen() {
// // // //   const navigation = useNavigation();

// // // //   return (
// // // //     <ImageBackground
// // // //       source={{
// // // //         uri: "https://images.unsplash.com/photo-1598300053656-485b40e1a48b",
// // // //       }}
// // // //       style={styles.background}
// // // //     >
// // // //       {/* Parent View for Center Card & Circular Icons */}
// // // //       <View style={styles.circleContainer}>
// // // //         {/* Center Card */}
// // // //         <View style={styles.centerCard}>
// // // //           <Image
// // // //             source={{ uri: "https://your-logo-url.com/logo.png" }}
// // // //             style={styles.centerLogo}
// // // //           />
// // // //         </View>

// // // //         {/* Circular Positioned Icons */}
// // // //         {DATA.map((item, index) => {
// // // //           const angle = index * (360 / DATA.length) * (Math.PI / 180);
// // // //           const x = CIRCLE_RADIUS * Math.cos(angle) - ICON_SIZE / 2;
// // // //           const y = CIRCLE_RADIUS * Math.sin(angle) - ICON_SIZE / 2;

// // // //           return (
// // // //             <Pressable
// // // //               key={item.id}
// // // //               style={[
// // // //                 styles.card,
// // // //                 { transform: [{ translateX: x }, { translateY: y }] },
// // // //               ]}
// // // //               onPress={() => navigation.navigate(item.text)}
// // // //             >
// // // //               <FontAwesome5 name={item.icon} size={28} color="#fff" />
// // // //               <Text style={styles.cardText}>{item.text}</Text>
// // // //             </Pressable>
// // // //           );
// // // //         })}
// // // //       </View>
// // // //     </ImageBackground>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   background: {
// // // //     flex: 1,
// // // //     width: "100%",
// // // //     height: "100%",
// // // //     resizeMode: "cover",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //   },
// // // //   circleContainer: {
// // // //     position: "absolute",
// // // //     top: "50%",
// // // //     left: "50%",
// // // //     width: width,
// // // //     height: width,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     transform: [{ translateX: -width / 2 }, { translateY: -width / 2 }],
// // // //   },
// // // //   centerCard: {
// // // //     width: CENTER_CARD_SIZE,
// // // //     height: CENTER_CARD_SIZE,
// // // //     backgroundColor: "black",
// // // //     borderRadius: CENTER_CARD_SIZE / 2,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     position: "absolute",
// // // //     zIndex: 10,
// // // //     elevation: 6,
// // // //     borderWidth: 2,
// // // //     borderColor: "white",
// // // //   },
// // // //   centerLogo: {
// // // //     width: CENTER_CARD_SIZE * 0.6,
// // // //     height: CENTER_CARD_SIZE * 0.6,
// // // //     borderRadius: (CENTER_CARD_SIZE * 0.6) / 2,
// // // //   },
// // // //   card: {
// // // //     position: "absolute",
// // // //     width: ICON_SIZE,
// // // //     height: ICON_SIZE,
// // // //     backgroundColor: "black",
// // // //     borderRadius: ICON_SIZE / 2,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     elevation: 4,
// // // //     borderWidth: 1,
// // // //     borderColor: "rgba(255,255,255,0.5)",
// // // //   },
// // // //   cardText: {
// // // //     color: "#fff",
// // // //     fontSize: 10,
// // // //     fontWeight: "bold",
// // // //     marginTop: 4,
// // // //     textAlign: "center",
// // // //   },
// // // // });

// // // // import React from "react";
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   StyleSheet,
// // // //   ImageBackground,
// // // //   Dimensions,
// // // //   Image,
// // // //   Pressable,
// // // // } from "react-native";
// // // // import { TouchableOpacity } from "react-native-gesture-handler";
// // // // import { FontAwesome5 } from "@expo/vector-icons";
// // // // import { useNavigation } from "@react-navigation/native";

// // // // const { width } = Dimensions.get("window");
// // // // const CIRCLE_RADIUS = width * 0.35; // Icons circle ka radius
// // // // const ICON_SIZE = 60; // Icons size
// // // // const CENTER_CARD_SIZE = 120; // Center card size

// // // // const DATA = [
// // // //   { id: "1", icon: "home", text: "Home" },
// // // //   { id: "2", icon: "user", text: "profile" },
// // // //   { id: "3", icon: "cog", text: "settings" },
// // // //   { id: "4", icon: "bell", text: "notifications" },
// // // //   { id: "5", icon: "envelope", text: "messages" },
// // // //   { id: "6", icon: "calendar", text: "calendar" },
// // // //   { id: "7", icon: "heart", text: "favorites" },
// // // //   { id: "8", icon: "globe", text: "explore" },
// // // // ];

// // // // export default function HomeScreen() {
// // // //   const navigation = useNavigation();

// // // //   return (
// // // //     <ImageBackground
// // // //       source={{
// // // //         uri: "https://images.unsplash.com/photo-1598300053656-485b40e1a48b",
// // // //       }}
// // // //       style={styles.background}
// // // //     >
// // // //       {/* Parent View for Center Card & Circular Icons */}
// // // //       <View style={styles.circleContainer}>
// // // //         {/* Center Card */}
// // // //         <View style={styles.centerCard}>
// // // //           <Image
// // // //             source={{ uri: "https://your-logo-url.com/logo.png" }}
// // // //             style={styles.centerLogo}
// // // //           />
// // // //         </View>

// // // //         {/* Circular Positioned Icons */}
// // // //         {DATA.map((item, index) => {
// // // //           const angle = index * (360 / DATA.length) * (Math.PI / 180);
// // // //           const x = CIRCLE_RADIUS * Math.cos(angle) - ICON_SIZE / 2;
// // // //           const y = CIRCLE_RADIUS * Math.sin(angle) - ICON_SIZE / 2;

// // // //           return (
// // // //             <Pressable
// // // //               key={item.id}
// // // //               style={[
// // // //                 styles.card,
// // // //                 { transform: [{ translateX: x }, { translateY: y }] },
// // // //               ]}
// // // //               onPress={() => navigation.navigate(item.text)}
// // // //             >
// // // //               <FontAwesome5 name={item.icon} size={28} color="#fff" />
// // // //               <Text style={styles.cardText}>{item.text}</Text>
// // // //             </Pressable>
// // // //           );
// // // //         })}
// // // //       </View>
// // // //     </ImageBackground>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   background: {
// // // //     flex: 1,
// // // //     width: "100%",
// // // //     height: "100%",
// // // //     resizeMode: "cover",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //   },
// // // //   circleContainer: {
// // // //     position: "absolute",
// // // //     top: "50%",
// // // //     left: "50%",
// // // //     width: width,
// // // //     height: width,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     transform: [{ translateX: -width / 2 }, { translateY: -width / 2 }],
// // // //   },
// // // //   centerCard: {
// // // //     width: CENTER_CARD_SIZE,
// // // //     height: CENTER_CARD_SIZE,
// // // //     backgroundColor: "black",
// // // //     borderRadius: CENTER_CARD_SIZE / 2,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     position: "absolute",
// // // //     zIndex: 10,
// // // //     elevation: 6,
// // // //     borderWidth: 2,
// // // //     borderColor: "white",
// // // //   },
// // // //   centerLogo: {
// // // //     width: CENTER_CARD_SIZE * 0.6,
// // // //     height: CENTER_CARD_SIZE * 0.6,
// // // //     borderRadius: (CENTER_CARD_SIZE * 0.6) / 2,
// // // //   },
// // // //   card: {
// // // //     position: "fixed",
// // // //     width: ICON_SIZE,
// // // //     height: ICON_SIZE,
// // // //     backgroundColor: "black",
// // // //     borderRadius: ICON_SIZE / 2,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     elevation: 4,
// // // //     borderWidth: 1,
// // // //     borderColor: "rgba(255,255,255,0.5)",
// // // //   },
// // // //   cardText: {
// // // //     color: "#fff",
// // // //     fontSize: 10,
// // // //     fontWeight: "bold",
// // // //     marginTop: 4,
// // // //     textAlign: "center",
// // // //   },
// // // // });
// // // //////////////////////////////////////////////////////////////////////////////////////////working code/////////////////////////////////////
// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ImageBackground,
//   Dimensions,
//   Image,
//   Pressable,
// } from "react-native";
// import { FontAwesome5 } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";

// const { width } = Dimensions.get("window");
// const CIRCLE_RADIUS = width * 0.35; // Icons circle ka radius
// const ICON_SIZE = 60; // Icons size
// const CENTER_CARD_SIZE = 120; // Center card size

// const DATA = [
//   { id: "1", icon: "home", text: "Home" },
//   { id: "2", icon: "user", text: "profile" },
//   { id: "3", icon: "cog", text: "settings" },
//   { id: "4", icon: "bell", text: "notifications" },
//   { id: "5", icon: "envelope", text: "messages" },
//   { id: "6", icon: "calendar", text: "calendar" },
//   { id: "7", icon: "heart", text: "favorites" },
//   { id: "8", icon: "globe", text: "explore" },
// ];

// export default function HomeScreen() {
//   const navigation = useNavigation();

//   return (
//     <ImageBackground
//       source={{
//         uri: "https://images.unsplash.com/photo-1598300053656-485b40e1a48b",
//       }}
//       style={styles.background}
//     >
//       {/* Parent View for Center Card & Circular Icons */}
//       <View style={styles.circleContainer}>
//         {/* Center Card */}
//         <View style={styles.centerCard}>
//           <Image
//             source={{ uri: "https://your-logo-url.com/logo.png" }}
//             style={styles.centerLogo}
//           />
//         </View>

//         {/* Circular Positioned Icons */}
//         {DATA.map((item, index) => {
//           const angle = index * ((2 * Math.PI) / DATA.length); // Equal spacing
//           const x = CIRCLE_RADIUS * Math.cos(angle) + width / 2 - ICON_SIZE / 2;
//           const y = CIRCLE_RADIUS * Math.sin(angle) + width / 2 - ICON_SIZE / 2;

//           return (
//             <Pressable
//               key={item.id}
//               style={[styles.card, { position: "absolute", left: x, top: y }]}
//               onPress={() => navigation.navigate(item.text)}
//             >
//               <FontAwesome5 name={item.icon} size={28} color="#fff" />
//               <Text style={styles.cardText}>{item.text}</Text>
//             </Pressable>
//           );
//         })}
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//     resizeMode: "cover",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   circleContainer: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     width: width,
//     height: width,
//     justifyContent: "center",
//     alignItems: "center",
//     transform: [{ translateX: -width / 2 }, { translateY: -width / 2 }],
//   },
//   centerCard: {
//     width: CENTER_CARD_SIZE,
//     height: CENTER_CARD_SIZE,
//     backgroundColor: "black",
//     borderRadius: CENTER_CARD_SIZE / 2,
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute",
//     zIndex: 10,
//     elevation: 6,
//     borderWidth: 2,
//     borderColor: "white",
//   },
//   centerLogo: {
//     width: CENTER_CARD_SIZE * 0.6,
//     height: CENTER_CARD_SIZE * 0.6,
//     borderRadius: (CENTER_CARD_SIZE * 0.6) / 2,
//   },
//   card: {
//     width: ICON_SIZE,
//     height: ICON_SIZE,
//     backgroundColor: "black",
//     borderRadius: ICON_SIZE / 2,
//     justifyContent: "center",
//     alignItems: "center",
//     elevation: 4,
//     borderWidth: 1,
//     borderColor: "rgba(255,255,255,0.5)",
//   },
//   cardText: {
//     color: "#fff",
//     fontSize: 10,
//     fontWeight: "bold",
//     marginTop: 4,
//     textAlign: "center",
//   },
// });
// // //////////////////////////////////////////////////////////////////working with chnage  code //////////////////////////////////////////
// // // import React from "react";
// // // import { View, StyleSheet, Dimensions } from "react-native";
// // // import Svg, { Circle, Polygon } from "react-native-svg";

// // // const { width } = Dimensions.get("window");
// // // const CIRCLE_RADIUS = width * 0.35; // Circle radius
// // // const TRIANGLE_SIZE = 40; // Triangle size
// // // const DATA = new Array(8).fill(0); // 8 triangles

// // // export default function HomeScreen() {
// // //   return (
// // //     <View style={styles.container}>
// // //       {/* SVG Circle */}
// // //       <Svg height={width} width={width} style={styles.svg}>
// // //         <Circle
// // //           cx={width / 2}
// // //           cy={width / 2}
// // //           r={CIRCLE_RADIUS}
// // //           stroke="white"
// // //           strokeWidth="2"
// // //           fill="none"
// // //         />
// // //       </Svg>

// // //       {/* Triangles positioned along the circle */}
// // //       {DATA.map((_, index) => {
// // //         const angle = (index * (2 * Math.PI)) / DATA.length;
// // //         const x =
// // //           CIRCLE_RADIUS * Math.cos(angle) + width / 2 - TRIANGLE_SIZE / 2;
// // //         const y =
// // //           CIRCLE_RADIUS * Math.sin(angle) + width / 2 - TRIANGLE_SIZE / 2;
// // //         const rotateAngle = (angle * 180) / Math.PI + 90; // Rotate triangle to face outward

// // //         return (
// // //           <Svg
// // //             key={index}
// // //             width={TRIANGLE_SIZE}
// // //             height={TRIANGLE_SIZE}
// // //             style={{ position: "absolute", left: x, top: y }}
// // //             viewBox="0 0 100 100"
// // //           >
// // //             <Polygon
// // //               points="50,0 100,100 0,100"
// // //               fill="white"
// // //               transform={`rotate(${rotateAngle}, 50, 50)`} // Rotate each triangle
// // //             />
// // //           </Svg>
// // //         );
// // //       })}
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     backgroundColor: "black",
// // //   },
// // //   svg: {
// // //     position: "absolute",
// // //     top: 0,
// // //     left: 0,
// // //   },
// // // });

// // import React from "react";
// // import { View, StyleSheet, Dimensions, Pressable } from "react-native";
// // import Svg, { Circle, Polygon } from "react-native-svg";
// // import { useNavigation } from "@react-navigation/native";

// // const { width } = Dimensions.get("window");
// // const CIRCLE_RADIUS = width * 0.35; // Circle radius
// // const TRIANGLE_SIZE = 40; // Triangle size
// // const DATA = [
// //   { id: "1", screen: "Home" },
// //   { id: "2", screen: "profile" },
// //   { id: "3", screen: "Settings" },
// //   { id: "4", screen: "Notifications" },
// //   { id: "5", screen: "Messages" },
// //   { id: "6", screen: "Calendar" },
// //   { id: "7", screen: "Favorites" },
// //   { id: "8", screen: "Explore" },
// // ];

// // export default function HomeScreen() {
// //   const navigation = useNavigation();

// //   return (
// //     <View style={styles.container}>
// //       {/* SVG Circle */}
// //       <Svg height={width} width={width} style={styles.svg}>
// //         <Circle
// //           cx={width / 2}
// //           cy={width / 2}
// //           r={CIRCLE_RADIUS}
// //           stroke="white"
// //           strokeWidth="2"
// //           fill="none"
// //         />
// //       </Svg>

// //       {/* Triangles positioned along the circle */}
// //       {DATA.map((item, index) => {
// //         const angle = (index * (2 * Math.PI)) / DATA.length;
// //         const x =
// //           CIRCLE_RADIUS * Math.cos(angle) + width / 2 - TRIANGLE_SIZE / 2;
// //         const y =
// //           CIRCLE_RADIUS * Math.sin(angle) + width / 2 - TRIANGLE_SIZE / 2;
// //         const rotateAngle = (angle * 180) / Math.PI + 90; // Rotate triangle to face outward

// //         return (
// //           <Pressable
// //             key={item.id}
// //             style={{ position: "absolute", left: x, top: y }}
// //             onPress={() => navigation.navigate(item.screen)}
// //           >
// //             <Svg
// //               width={TRIANGLE_SIZE}
// //               height={TRIANGLE_SIZE}
// //               viewBox="0 0 100 100"
// //             >
// //               <Polygon
// //                 points="50,0 100,100 0,100"
// //                 fill="white"
// //                 transform={`rotate(${rotateAngle}, 50, 50)`} // Rotate each triangle
// //               />
// //             </Svg>
// //           </Pressable>
// //         );
// //       })}
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     backgroundColor: "black",
// //   },
// //   svg: {
// //     position: "absolute",
// //     top: 0,
// //     left: 0,
// //   },
// // });
// import React from "react";
// import { View, StyleSheet, Dimensions, Pressable, Image } from "react-native";
// import Svg, { Circle } from "react-native-svg";
// import { useNavigation } from "@react-navigation/native";

// // Import images correctly
// import HomeIcon from "../../../../assets/images/icon.png";
// import ProfileIcon from "../../../../assets/images/icon.png";
// import SettingsIcon from "../../../../assets/images/icon.png";
// import NotificationIcon from "../../../../assets/images/icon.png";
// import MessagesIcon from "../../../../assets/images/icon.png";
// import CalendarIcon from "../../../../assets/images/icon.png";
// import FavoritesIcon from "../../../../assets/images/icon.png";
// import ExploreIcon from "../../../../assets/images/icon.png";

// const { width } = Dimensions.get("window");
// const CIRCLE_RADIUS = width * 0.35; // Circle radius
// const ICON_SIZE = 40; // Size of each icon

// const DATA = [
//   { id: "1", screen: "Home", icon: HomeIcon },
//   { id: "2", screen: "profile", icon: ProfileIcon },
//   { id: "3", screen: "settings", icon: SettingsIcon },
//   { id: "4", screen: "notifications", icon: NotificationIcon },
//   { id: "5", screen: "messages", icon: MessagesIcon },
//   { id: "6", screen: "calendar", icon: CalendarIcon },
//   { id: "7", screen: "favorites", icon: FavoritesIcon },
//   { id: "8", screen: "explore", icon: ExploreIcon },
// ];

// export default function HomeScreen() {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       {/* SVG Circle */}
//       <Svg height={width} width={width} style={styles.svg}>
//         <Circle
//           cx={width / 2}
//           cy={width / 2}
//           r={CIRCLE_RADIUS}
//           stroke="white"
//           strokeWidth="2"
//           fill="none"
//         />
//       </Svg>

//       {/* Icons Positioned Along the Circle */}
//       {DATA.map((item, index) => {
//         const angle = (index * (2 * Math.PI)) / DATA.length;
//         const x = CIRCLE_RADIUS * Math.cos(angle) + width / 2 - ICON_SIZE / 2;
//         const y = CIRCLE_RADIUS * Math.sin(angle) + width / 2 - ICON_SIZE / 2;
//         const rotateAngle = (angle * 180) / Math.PI + 90; // Rotate icons outward

//         return (
//           <Pressable
//             key={item.id}
//             style={{ position: "absolute", left: x, top: y }}
//             onPress={() => navigation.navigate(item.screen)}
//           >
//             <View style={{ transform: [{ rotate: `${rotateAngle}deg` }] }}>
//               <Image
//                 source={item.icon} // ✅ Use Image component for PNG
//                 style={{ width: ICON_SIZE, height: ICON_SIZE }}
//                 resizeMode="contain"
//               />
//             </View>
//           </Pressable>
//         );
//       })}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "black",
//   },
//   svg: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//   },
// });

// import React from "react";
// import {
//   View,
//   StyleSheet,
//   Dimensions,
//   Pressable,
//   Image,
//   Text,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import HomeIcon from "../../../../assets/images/react-logo.png";
// import HomeIcontwo from "../../../../assets/images/favicon.png";

// const { width } = Dimensions.get("window");
// const CIRCLE_RADIUS = width * 0.35;
// const ICON_SIZE = 50;
// const SUB_ICON_SIZE = 20;

// const DATA = [
//   { id: "1", screen: "Home", icon: "home", subIcon: HomeIcon, label: "Home" },
//   {
//     id: "2",
//     screen: "Profile",
//     icon: "user",
//     subIcon: HomeIcontwo,
//     label: "Profile",
//   },
//   {
//     id: "3",
//     screen: "Settings",
//     icon: "cog",
//     subIcon: HomeIcon,
//     label: "Settings",
//   },
//   {
//     id: "4",
//     screen: "Notifications",
//     icon: "bell",
//     subIcon: HomeIcon,
//     label: "Alerts",
//   },
//   {
//     id: "5",
//     screen: "Messages",
//     icon: "envelope",
//     subIcon: HomeIcon,
//     label: "Chats",
//   },
//   {
//     id: "6",
//     screen: "Calendar",
//     icon: "calendar",
//     subIcon: HomeIcon,
//     label: "Events",
//   },
//   {
//     id: "7",
//     screen: "Favorites",
//     icon: "heart",
//     subIcon: HomeIcon,
//     label: "Likes",
//   },
//   {
//     id: "8",
//     screen: "Explore",
//     icon: "search",
//     subIcon: HomeIcon,
//     label: "Search",
//   },
// ];

// export default function HomeScreen() {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       {DATA.map((item, index) => {
//         const angle = (index * (2 * Math.PI)) / DATA.length;
//         const x = CIRCLE_RADIUS * Math.cos(angle) + width / 2 - ICON_SIZE / 2;
//         const y = CIRCLE_RADIUS * Math.sin(angle) + width / 2 - ICON_SIZE / 2;
//         const rotateAngle = (angle * 180) / Math.PI + 90; // Rotate icons outward

//         return (
//           <Pressable
//             key={item.id}
//             style={{
//               position: "absolute",
//               left: x,
//               top: y,
//               alignItems: "center",
//             }}
//             onPress={() => navigation.navigate(item.screen)}
//           >
//             <View>
//               <Image
//                 source={item.subIcon}
//                 style={[
//                   styles.mainIcon,
//                   { transform: [{ rotate: `${rotateAngle}deg` }] },
//                 ]}
//                 resizeMode="contain"
//               />

//               <FontAwesome
//                 name={item.icon}
//                 size={ICON_SIZE / 2}
//                 color="white"
//                 style={styles.mainIconText}
//               />

//               <Text style={styles.textLabel}>{item.label}</Text>
//             </View>
//           </Pressable>
//         );
//       })}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "black",
//   },
//   mainIcon: {
//     width: ICON_SIZE,
//     height: ICON_SIZE,
//     position: "absolute",
//   },
//   mainIconText: {
//     position: "absolute",
//     // top: "50%",
//     flex: 1,
//     alignSelf: "center",
//   },
//   subIcon: {
//     position: "absolute",
//     bottom: -10,
//     right: -10,
//   },
//   subIconImage: {
//     width: SUB_ICON_SIZE,
//     height: SUB_ICON_SIZE,
//     position: "absolute",
//     bottom: -10,
//     right: -10,
//   },
//   textLabel: {
//     color: "white",
//     fontSize: 14,
//     marginTop: 30,
//     fontWeight: "bold",
//   },
// });
// import React from "react";
// import {
//   View,
//   StyleSheet,
//   Dimensions,
//   Pressable,
//   Image,
//   Text,
//   ImageBackground,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import HomeIcon from "../../../../assets/images/react-logo.png";
// import HomeIcontwo from "../../../../assets/images/favicon.png";
// import BackgroundImage from "../../../../assets/images/Mainbackground.jpg"; // Replace with your actual image

// const { width, height } = Dimensions.get("window");
// const CIRCLE_RADIUS = width * 0.35;
// const ICON_SIZE = 50;

// const DATA = [
//   { id: "1", screen: "Home", icon: "home", subIcon: HomeIcon, label: "Home" },
//   {
//     id: "2",
//     screen: "Profile",
//     icon: "user",
//     subIcon: HomeIcontwo,
//     label: "Profile",
//   },
//   {
//     id: "3",
//     screen: "Settings",
//     icon: "cog",
//     subIcon: HomeIcon,
//     label: "Settings",
//   },
//   {
//     id: "4",
//     screen: "Notifications",
//     icon: "bell",
//     subIcon: HomeIcon,
//     label: "Alerts",
//   },
//   {
//     id: "5",
//     screen: "Messages",
//     icon: "envelope",
//     subIcon: HomeIcon,
//     label: "Chats",
//   },
//   {
//     id: "6",
//     screen: "Calendar",
//     icon: "calendar",
//     subIcon: HomeIcon,
//     label: "Events",
//   },
//   {
//     id: "7",
//     screen: "Favorites",
//     icon: "heart",
//     subIcon: HomeIcon,
//     label: "Likes",
//   },
//   {
//     id: "8",
//     screen: "Explore",
//     icon: "search",
//     subIcon: HomeIcon,
//     label: "Search",
//   },
// ];

// export default function HomeScreen() {
//   const navigation = useNavigation();

//   return (
//     <ImageBackground source={BackgroundImage} style={styles.background}>
//       <View style={styles.container}>
//         <View style={styles.circle}>
//           {DATA.map((item, index) => {
//             const angle = (index * (2 * Math.PI)) / DATA.length;
//             const x =
//               CIRCLE_RADIUS * Math.cos(angle) + width / 2 - ICON_SIZE / 2;
//             const y =
//               CIRCLE_RADIUS * Math.sin(angle) + height / 2 - ICON_SIZE / 2;
//             const rotateAngle = (angle * 180) / Math.PI + 90;

//             return (
//               <Pressable
//                 key={item.id}
//                 style={[styles.iconContainer, { left: x, top: y }]}
//                 onPress={() => navigation.navigate(item.screen)}
//               >
//                 <Image
//                   source={item.subIcon}
//                   style={[
//                     styles.mainIcon,
//                     { transform: [{ rotate: `${rotateAngle}deg` }] },
//                   ]}
//                   resizeMode="contain"
//                 />
//                 <FontAwesome
//                   name={item.icon}
//                   size={ICON_SIZE / 2}
//                   color="white"
//                   style={styles.mainIconText}
//                 />
//                 <Text style={styles.textLabel}>{item.label}</Text>
//               </Pressable>
//             );
//           })}
//         </View>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   circle: {
//     position: "absolute",
//     width: CIRCLE_RADIUS * 2,
//     height: CIRCLE_RADIUS * 2,
//     borderRadius: CIRCLE_RADIUS,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   iconContainer: {
//     position: "absolute",
//     alignItems: "center",
//   },
//   mainIcon: {
//     width: ICON_SIZE,
//     height: ICON_SIZE,
//     position: "absolute",
//   },
//   mainIconText: {
//     position: "absolute",
//     alignSelf: "center",
//   },
//   textLabel: {
//     color: "white",
//     fontSize: 14,
//     marginTop: 30,
//     fontWeight: "bold",
//   },
// });

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ImageBackground,
//   Dimensions,
//   Image,
//   Pressable,
// } from "react-native";
// import { FontAwesome5 } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";

// const { width } = Dimensions.get("window");
// const CIRCLE_RADIUS = width * 0.35; // Icons circle ka radius
// const ICON_SIZE = 60; // Icons size
// const CENTER_CARD_SIZE = 120; // Center card size

// const DATA = [
//   { id: "1", icon: "home", text: "Home" },
//   { id: "2", icon: "user", text: "profile" },
//   { id: "3", icon: "cog", text: "settings" },
//   { id: "4", icon: "bell", text: "notifications" },
//   { id: "5", icon: "envelope", text: "messages" },
//   { id: "6", icon: "calendar", text: "calendar" },
//   { id: "7", icon: "heart", text: "favorites" },
//   { id: "8", icon: "globe", text: "explore" },
// ];

// export default function HomeScreen() {
//   const navigation = useNavigation();

//   return (
//     <ImageBackground
//       source={{
//         uri: "https://images.unsplash.com/photo-1598300053656-485b40e1a48b",
//       }}
//       style={styles.background}
//     >
//       {/* Parent View for Center Card & Circular Icons */}
//       <View style={styles.circleContainer}>
//         {/* Center Card */}
//         <View style={styles.centerCard}>
//           <Image
//             source={{ uri: "https://your-logo-url.com/logo.png" }}
//             style={styles.centerLogo}
//           />
//         </View>

//         {/* Circular Positioned Icons */}
//         {DATA.map((item, index) => {
//           const angle = index * ((2 * Math.PI) / DATA.length); // Equal spacing
//           const x = CIRCLE_RADIUS * Math.cos(angle) + width / 2 - ICON_SIZE / 2;
//           const y = CIRCLE_RADIUS * Math.sin(angle) + width / 2 - ICON_SIZE / 2;

//           return (
//             <Pressable
//               key={item.id}
//               style={{ position: "absolute", left: x, top: y }}
//               onPress={() => navigation.navigate(item.text)}
//             >
//               <FontAwesome5 name={item.icon} size={28} color="#fff" />
//               <Text style={styles.cardText}>{item.text}</Text>
//             </Pressable>
//           );
//         })}
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//     resizeMode: "cover",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   circleContainer: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     width: width,
//     height: width,
//     justifyContent: "center",
//     alignItems: "center",
//     transform: [{ translateX: -width / 2 }, { translateY: -width / 2 }],
//   },
//   centerCard: {
//     width: CENTER_CARD_SIZE,
//     height: CENTER_CARD_SIZE,
//     backgroundColor: "black",
//     borderRadius: CENTER_CARD_SIZE / 2,
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute",
//     zIndex: 10,
//     elevation: 6,
//     borderWidth: 2,
//     borderColor: "white",
//   },
//   centerLogo: {
//     width: CENTER_CARD_SIZE * 0.6,
//     height: CENTER_CARD_SIZE * 0.6,
//     borderRadius: (CENTER_CARD_SIZE * 0.6) / 2,
//   },

//   cardText: {
//     color: "#fff",
//     fontSize: 10,
//     fontWeight: "bold",
//     marginTop: 4,
//     textAlign: "center",
//   },
// });

// import React from "react";
// import {
//   View,
//   StyleSheet,
//   Dimensions,
//   Pressable,
//   Image,
//   Text,
//   ImageBackground,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import HomeIcon from "../../../../assets/images/react-logo.png";
// import HomeIcontwo from "../../../../assets/images/favicon.png";
// import BackgroundImage from "../../../../assets/images/Mainbackground.jpg";

// const { width, height } = Dimensions.get("window");
// const CIRCLE_RADIUS = width * 0.35;
// const ICON_SIZE = 50;

// const DATA = [
//   { id: "1", screen: "Home", icon: "home", subIcon: HomeIcon, label: "Home" },
//   {
//     id: "2",
//     screen: "Profile",
//     icon: "user",
//     subIcon: HomeIcontwo,
//     label: "Profile",
//   },
//   {
//     id: "3",
//     screen: "Settings",
//     icon: "cog",
//     subIcon: HomeIcon,
//     label: "Settings",
//   },
//   {
//     id: "4",
//     screen: "Notifications",
//     icon: "bell",
//     subIcon: HomeIcon,
//     label: "Alerts",
//   },
//   {
//     id: "5",
//     screen: "Messages",
//     icon: "envelope",
//     subIcon: HomeIcon,
//     label: "Chats",
//   },
//   {
//     id: "6",
//     screen: "Calendar",
//     icon: "calendar",
//     subIcon: HomeIcon,
//     label: "Events",
//   },
//   {
//     id: "7",
//     screen: "Favorites",
//     icon: "heart",
//     subIcon: HomeIcon,
//     label: "Likes",
//   },
//   {
//     id: "8",
//     screen: "Explore",
//     icon: "search",
//     subIcon: HomeIcon,
//     label: "Search",
//   },
// ];

// export default function HomeScreen() {
//   const navigation = useNavigation();

//   return (
//     <ImageBackground source={BackgroundImage} style={styles.background}>
//       <View style={styles.container}>
//         {/* Center Card */}
//         <View style={styles.centerCard}>
//           <Text style={styles.centerText}>Main</Text>
//         </View>

//         {/* Circular Menu */}
//         <View style={styles.circle}>
//           {DATA.map((item, index) => {
//             const angle = (index * (2 * Math.PI)) / DATA.length;
//             const x =
//               CIRCLE_RADIUS * Math.cos(angle) + width / 2 - ICON_SIZE / 2;
//             const y =
//               CIRCLE_RADIUS * Math.sin(angle) + height / 2 - ICON_SIZE / 2;
//             const rotateAngle = (angle * 180) / Math.PI + 90;

//             return (
//               <Pressable
//                 key={item.id}
//                 style={[styles.iconContainer, { left: x, top: y }]}
//                 onPress={() => navigation.navigate(item.screen)}
//               >
//                 <Image
//                   source={item.subIcon}
//                   style={styles.mainIcon}
//                   resizeMode="contain"
//                 />
//                 <FontAwesome
//                   name={item.icon}
//                   size={ICON_SIZE / 2}
//                   color="white"
//                   style={styles.mainIconText}
//                 />
//                 <Text style={styles.textLabel}>{item.label}</Text>
//               </Pressable>
//             );
//           })}
//         </View>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   circle: {
//     position: "absolute",
//     width: CIRCLE_RADIUS * 2,
//     height: CIRCLE_RADIUS * 2,
//     borderRadius: CIRCLE_RADIUS,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   centerCard: {
//     position: "absolute",
//     width: 100,
//     height: 100,
//     backgroundColor: "rgba(255, 255, 255, 0.8)",
//     borderRadius: 50,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   centerText: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   iconContainer: {
//     position: "absolute",
//     alignItems: "center",
//   },
//   mainIcon: {
//     width: ICON_SIZE,
//     height: ICON_SIZE,
//     position: "absolute",
//   },
//   mainIconText: {
//     position: "absolute",
//     alignSelf: "center",
//   },
//   textLabel: {
//     color: "white",
//     fontSize: 14,
//     marginTop: 30,
//     fontWeight: "bold",
//   },
// });
// width: 50%;
// height: 40%;
// background: #754242;
// transform: rotate(45deg) scaleX(2.5) scaleY(1);
// /* z-index: -22; */
// /* position: absolute; */
// border-top-left-radius: 100px;
// border-top-right-radius: 100px;
// overflow: hidden;
// clip-path: polygon(32% 100%, 68% 100%, 92% 0%, 8% 0%);
// border-top-left-radius: 100px;
// border-top-right-radius: -1px;

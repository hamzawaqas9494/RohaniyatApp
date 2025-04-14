// // // import { TouchableOpacity } from "react-native";
// // // import { useNavigation } from "@react-navigation/native";
// // // import { DrawerActions } from "@react-navigation/native";
// // // import { FontAwesome } from "@expo/vector-icons";

// // // export default function CustomDrawerButton() {
// // //   const navigation = useNavigation();

// // //   if (!navigation) return null; // Check if navigation is available

// // //   return (
// // //     <TouchableOpacity
// // //       onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
// // //       // style={{ padding: 16 }}
// // //     >
// // //       <FontAwesome name="bars" size={24} color="black" />
// // //     </TouchableOpacity>
// // //   );
// // // }

// // import { useEffect } from "react";
// // import { useNavigation } from "@react-navigation/native";
// // import { DrawerActions } from "@react-navigation/native";
// // import { TouchableOpacity } from "react-native";
// // import { FontAwesome } from "@expo/vector-icons";

// // export default function CustomDrawerButton() {
// //   const navigation = useNavigation();

// //   useEffect(() => {
// //     if (!navigation) {
// //       console.warn("Navigation not available");
// //     }
// //   }, [navigation]);

// //   if (!navigation) return null;

// //   return (
// //     <TouchableOpacity
// //       onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
// //     >
// //       <FontAwesome name="bars" size={24} color="black" />
// //     </TouchableOpacity>
// //   );
// // }
// import { DrawerToggleButton } from "@react-navigation/drawer";
// import { View, Text } from "react-native";

// export default function CustomHeader({ title }) {
//   return (
//     <View
//       style={{
//         height: 56,
//         backgroundColor: "green",
//         flexDirection: "row",
//         alignItems: "center",
//         paddingHorizontal: 16,
//       }}
//     >
//       {/* 👇 Drawer button manually added */}
//       <DrawerToggleButton />

//       {/* 👇 Dynamic title */}
//       <Text
//         style={{ flex: 1, textAlign: "center", fontSize: 18, color: "white" }}
//       >
//         {title}
//       </Text>
//     </View>
//   );
// }

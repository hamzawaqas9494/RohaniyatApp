// import { View, Text, StyleSheet } from "react-native";

// export default function SettingsScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>⚙️ Settings Screen</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center" },
//   text: { fontSize: 20, fontWeight: "bold" },
// });


import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
export default function SettingsScreen() {
//  const [fontsLoaded] = useFonts({
//      'Jameel-Noori-Regular': require('../../../assets/fonts/JameelNooriNastaleeqRegular.ttf')
//    });

  // if (!fontsLoaded) {
  //   return null; // or show a loader
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>یہ اردو ٹیکسٹ ہے</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontFamily: "Jameel-Noori-Regular",
    color: "#000",
  },
});

// import { DrawerToggleButton } from "@react-navigation/drawer";
// import { Stack } from "expo-router";
// import { Platform, View } from "react-native";
// import NotificationBell from "../../../components/Notifications/NotificationBell";
// export default function StackNavigator() {
//   return (
//     <Stack
//       screenOptions={{
//         headerShown: true,
//         gestureEnabled: true,

//         headerStyle: {
//           height: 56,
//           backgroundColor: "#E4DAC1",
//         },

//         headerTitleStyle: {
//           textAlignVertical: "center",
//           fontFamily: "NotoNastaliqUrdu-Regular",
//           overflow: "visible",
//           fontSize: 14,
//           color: "#6C472D",
//         },

//         headerTitleAlign: "center",
//         headerTintColor: "#6C472D",

//         headerRight: () => (
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",

//               marginRight: Platform.select({
//                 web: 0,
//                 android: -16,
//                 ios: -15,
//               }),
//             }}
//           >
//             <NotificationBell onPress={() => router.push("/notifications")} />

//             <DrawerToggleButton tintColor="#6C472D" />
//           </View>
//         ),
//       }}
//     >
//       <Stack.Screen
//         name="index"
//         options={{
//           title: "ادارہ روحانیات",
//           gestureEnabled: true,
//         }}
//       />
//       <Stack.Screen
//         name="Taaruf"
//         options={{
//           title: "تعارف",
//           gestureEnabled: true,
//         }}
//       />
//       <Stack.Screen
//         name="Wazaif"
//         options={{
//           title: "وظائف",
//           gestureEnabled: true,
//         }}
//       />
//       <Stack.Screen
//         name="Taweezat"
//         options={{
//           title: "تعویذات",
//           gestureEnabled: true,
//         }}
//       />

//       <Stack.Screen
//         name="Sarparast-Taaruf"
//         options={{
//           title: "سرپرست تعارف",
//           gestureEnabled: true,
//         }}
//       />
//       <Stack.Screen
//         name="Idara-Rohaniyat-Taaruf"
//         options={{
//           title: "ادارہ روحانیات تعارف",
//           gestureEnabled: true,
//         }}
//       />
//       <Stack.Screen
//         name="Taweezat-Usmania-Taaruf"
//         options={{
//           title: "تعویذات عثمانیہ تعارف",
//           gestureEnabled: true,
//         }}
//       />
//       <Stack.Screen
//         name="Rohani-Ashya-Taaruf"
//         options={{
//           title: "روحانی اشیاء تعارف",
//           gestureEnabled: true,
//         }}
//       />
//       <Stack.Screen
//         name="Rohani-Ilaj-Taaruf"
//         options={{
//           title: "روحانی علاج تعارف",
//           gestureEnabled: true,
//         }}
//       />
//       <Stack.Screen
//         name="Amliyat-Course"
//         options={{
//           title: "عملیات کورس",
//           gestureEnabled: true,
//         }}
//       />
//       <Stack.Screen
//         name="Madrasa-Taleem-ul-Quran-Taaruf"
//         options={{
//           title: "مدرسہ تعلیم القرآن تعارف",
//           gestureEnabled: true,
//         }}
//       />
//       <Stack.Screen
//         name="Nuqoosh-Ka-Mizaj"
//         options={{
//           title: "نقوش کا مزاج",
//           gestureEnabled: true,
//         }}
//       />
//       <Stack.Screen
//         name="Nuqoosh-Ke-Lawazmaat"
//         options={{
//           title: "نقوش کے لوازمات",
//           gestureEnabled: true,
//         }}
//       />
//       <Stack.Screen
//         name="Hamara-Tareeqa-e-Ilaj"
//         options={{
//           title: "ہمارا طریقہ علاج",
//           gestureEnabled: true,
//         }}
//       />
//       <Stack.Screen
//         name="Mareez-Ke-Liye-Rohani-Ilaj"
//         options={{
//           title: "مریض کے لیے روحانی علاج",
//           gestureEnabled: true,
//         }}
//       />
//       <Stack.Screen
//         name="Rohani-Ilaj-Fehrist"
//         options={{
//           title: "روحانی علاج فہرست",
//           gestureEnabled: true,
//         }}
//       />
//       <Stack.Screen
//         name="Rohani-Ilaj-Ka-Taaruf"
//         options={{
//           title: "روحانی علاج کا مختصر تعارف",
//           gestureEnabled: true,
//         }}
//       />
//       <Stack.Screen
//         name="Jadu-Jinnat-Ki-Alamaat"
//         options={{
//           title: "جادو، جنات کی علامات",
//           gestureEnabled: true,
//         }}
//       />
//       <Stack.Screen
//         name="Rohani-Tashkhees-Tareeqa"
//         options={{
//           title: "روحانی تشخیص کے طریقے",
//           gestureEnabled: true,
//         }}
//       />
//       <Stack.Screen
//         name="Hisaar-Aamaal"
//         options={{
//           title: "حصار اعمال",
//           gestureEnabled: true,
//         }}
//       />
//       <Stack.Screen
//         name="rohani-tashkhees-taaruf"
//         options={{
//           title: "روحانی تشخیص کا تعارف",
//           gestureEnabled: true,
//         }}
//       />
//       <Stack.Screen
//         name="fard-ki-tashkhees"
//         options={{
//           title: "فرد کی تشخیص کرنے کا طریقہ",
//           gestureEnabled: true,
//         }}
//       />
//       <Stack.Screen
//         name="jagah-ki-tashkhees"
//         options={{
//           title: " جگہ کی تشخیص کرنے کا طریقہ",
//           gestureEnabled: true,
//         }}
//       />
//     </Stack>
//   );
// }

import { DrawerToggleButton } from "@react-navigation/drawer";
import { Stack, router } from "expo-router";
import { Platform, View } from "react-native";

import NotificationBell from "../../../components/Notifications/NotificationBell";

export default function StackNavigator() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        gestureEnabled: true,

        headerStyle: {
          height: 56,
          backgroundColor: "#E4DAC1",
        },

        headerTitleStyle: {
          textAlignVertical: "center",
          fontFamily: "NotoNastaliqUrdu-Regular",
          overflow: "visible",
          fontSize: 14,
          color: "#6C472D",
        },

        headerTitleAlign: "center",
        headerTintColor: "#6C472D",

        headerRight: () => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",

              marginRight: Platform.select({
                web: 0,
                android: -16,
                ios: -15,
              }),
            }}
          >
            <NotificationBell onPress={() => router.push("/notifications")} />

            <DrawerToggleButton tintColor="#6C472D" />
          </View>
        ),
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "ادارہ روحانیات",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="Taaruf"
        options={{
          title: "تعارف",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="Wazaif"
        options={{
          title: "وظائف",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="Taweezat"
        options={{
          title: "تعویذات",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="Sarparast-Taaruf"
        options={{
          title: "سرپرست تعارف",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="Idara-Rohaniyat-Taaruf"
        options={{
          title: "ادارہ روحانیات تعارف",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="Taweezat-Usmania-Taaruf"
        options={{
          title: "تعویذات عثمانیہ تعارف",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="Rohani-Ashya-Taaruf"
        options={{
          title: "روحانی اشیاء تعارف",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="Rohani-Ilaj-Taaruf"
        options={{
          title: "روحانی علاج تعارف",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="Amliyat-Course"
        options={{
          title: "عملیات کورس",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="Madrasa-Taleem-ul-Quran-Taaruf"
        options={{
          title: "مدرسہ تعلیم القرآن تعارف",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="Nuqoosh-Ka-Mizaj"
        options={{
          title: "نقوش کا مزاج",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="Nuqoosh-Ke-Lawazmaat"
        options={{
          title: "نقوش کے لوازمات",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="Hamara-Tareeqa-e-Ilaj"
        options={{
          title: "ہمارا طریقہ علاج",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="Mareez-Ke-Liye-Rohani-Ilaj"
        options={{
          title: "مریض کے لیے روحانی علاج",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="Rohani-Ilaj-Fehrist"
        options={{
          title: "روحانی علاج فہرست",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="Rohani-Ilaj-Ka-Taaruf"
        options={{
          title: "روحانی علاج کا مختصر تعارف",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="Jadu-Jinnat-Ki-Alamaat"
        options={{
          title: "جادو، جنات کی علامات",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="Rohani-Tashkhees-Tareeqa"
        options={{
          title: "روحانی تشخیص کے طریقے",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="Hisaar-Aamaal"
        options={{
          title: "حصار اعمال",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="rohani-tashkhees-taaruf"
        options={{
          title: "روحانی تشخیص کا تعارف",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="fard-ki-tashkhees"
        options={{
          title: "فرد کی تشخیص کرنے کا طریقہ",
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="jagah-ki-tashkhees"
        options={{
          title: "جگہ کی تشخیص کرنے کا طریقہ",
          gestureEnabled: true,
        }}
      />
      <Stack.Screen
        name="notifications"
        options={{
          title: "اطلاعات",
          gestureEnabled: true,
          // Bell remove
          headerRight: () => (
            <View
              style={{
                marginRight: Platform.select({
                  web: 0,
                  android: -16,
                  ios: -15,
                }),
              }}
            >
              <DrawerToggleButton tintColor="#6C472D" />
            </View>
          ),
        }}
      />
    </Stack>
  );
}

import React from "react";
import { Stack } from "expo-router";
export default function StackNavigator() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          height: 56,
          backgroundColor: "#E4DAC1",
        },
        headerTintColor: "#6C472D",
        headerTitleStyle: {
          fontFamily: "Jameel-Noori-Regular",
          fontSize: 22,
          color: "#6C472D",
         
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "ادارہ روحانیت",
          headerShown: true,
          gestureEnabled: true,
        }}
      />
    </Stack>
  );
}

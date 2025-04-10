import React from "react";
import { Stack } from "expo-router";

export default function StackNavigator() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          height: 56,
          backgroundColor: "#E4DAC1",
        },
        headerTitleAlign: "center",
        // headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="home"
        options={{
          title: "Home",

          headerShown: false,
          gestureEnabled: true, // Ensure gesture support
        }}
      />
    </Stack>
  );
}

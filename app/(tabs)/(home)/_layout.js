import React from "react";
import { Stack } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { useNavigationState, useNavigation } from "@react-navigation/native";
import { View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function HeaderLeft() {
  const navigation = useNavigation();
  const routesLength = useNavigationState((state) => state.routes.length);

  const canGoBack = routesLength > 1;

  return (
    <View
      style={{
        marginLeft: -16,
      }}
    >
      {canGoBack ? (
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back"
            size={24}
             color="#6C472D"
            style={{
              marginLeft: 12,
            }}
          />
        </Pressable>
      ) : (
        <DrawerToggleButton  />
      )}
    </View>
  );
}

export default function StackNavigator() {
  return (
    <Stack
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
        headerShown: true,
        headerStyle: {
          height: 56,
          backgroundColor: "#E4DAC1",
        },
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

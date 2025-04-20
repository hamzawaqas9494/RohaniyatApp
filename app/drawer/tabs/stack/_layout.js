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
            style={{
              marginLeft: 12,
            }}
          />
        </Pressable>
      ) : (
        <DrawerToggleButton />
      )}
    </View>
  );
}

export default function StackNavigator() {
  return (
    <Stack
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
        headerShown: false,

        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          gestureEnabled: true,
        }}
      />
    </Stack>
  );
}

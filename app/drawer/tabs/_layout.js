import { Tabs } from "expo-router/tabs";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerLeftContainerStyle: { paddingLeft: 16 },

        headerLeft: () => <DrawerToggleButton />,
        headerStyle: {
          height: 56,
          backgroundColor: "#E4DAC1",
        },
        headerTitleAlign: "center",

        tabBarStyle: {
          backgroundColor: "#E4DAC1",
          height: 56,
        },
        tabBarActiveTintColor: "#6C472D",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {
          fontSize: 12,
          // fontWeight: "bold",
        },
      }}
    >
      {/* 🏠 HOME TAB */}
      <Tabs.Screen
        name="stack"
        options={{
          title: "Home",
          // headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
          tabBarLabelPosition: "below-icon",
        }}
      />
      {/* 👤 PROFILE TAB */}
      <Tabs.Screen
        name="profileScreen"
        options={{
          title: "Profile",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
          tabBarLabelPosition: "below-icon",
        }}
      />

      {/* ⚙️ SETTINGS TAB */}
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
          tabBarLabelPosition: "below-icon",
        }}
      />
    </Tabs>
  );
}

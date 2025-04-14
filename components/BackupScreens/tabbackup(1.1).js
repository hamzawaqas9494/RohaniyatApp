import { Tabs } from "expo-router/tabs";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import DrawerButton from "../../../components/CustomButton/DrawerButton";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerLeftContainerStyle: { paddingLeft: 16 },
        headerLeft: () => <DrawerButton />,
        headerStyle: {
          height: 56,
          backgroundColor: "orange",
        },
        headerTitleAlign: "center",

        tabBarStyle: {
          backgroundColor: "#023020",
          height: 56,
        },
        tabBarActiveTintColor: "#FFD700",
        tabBarInactiveTintColor: "#FFFFFF",
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
          headerShown: false,
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
          headerShown: false,
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

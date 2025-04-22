import { Tabs } from "expo-router/tabs";
import { FontAwesome } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="stack"
      screenOptions={{
        headerLeftContainerStyle: { paddingLeft: -16 },
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
          fontWeight: "bold",
        },
      }}
    >
    
      {/* 🏠 Home Tab */}
      <Tabs.Screen
        name="stack"
        options={{
          title: "Home",
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
          tabBarLabelPosition: "below-icon",
        }}
      />
      {/* 👤 Profile Tab */}
      <Tabs.Screen
        name="profileScreen"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
          tabBarLabelPosition: "below-icon",
        }}
      />


      {/* ⚙️ Settings Tab */}
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="cog" size={size} color={color} />
          ),
          tabBarLabelPosition: "below-icon",
        }}
      />
    </Tabs>
  );
}

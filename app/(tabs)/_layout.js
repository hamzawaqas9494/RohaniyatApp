import { Tabs } from "expo-router/tabs";
import { FontAwesome } from "@expo/vector-icons";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
      
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
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
          tabBarLabelPosition: "below-icon",
        }}
      />
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

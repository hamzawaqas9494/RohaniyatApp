import { Drawer } from "expo-router/drawer";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import DrawerButton from "../../components/CustomButton/DrawerButton";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerLeftContainerStyle: { paddingLeft: 16 },
        headerStyle: {
          height: 56,
          backgroundColor: "red",
        },
        headerTitleAlign: "center",
        gestureEnabled: true, // ✅ Ensure gestures work
        swipeEnabled: true, // ✅ Allow swipe gestures
        headerShown: false, // ✅ Hide the header
        swipeEdgeWidth: 50, // Increase swipe detection area
      }}
    >
      <Drawer.Screen
        name="tabs"
        options={{
          title: "Dashboard",
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="aboutus"
        options={{
          headerShown: true,
          headerLeft: () => <DrawerButton />,
          title: "About Us",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="info" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="details"
        options={{
          headerShown: true,
          headerLeft: () => <DrawerButton />,
          title: "Details",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="details" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}

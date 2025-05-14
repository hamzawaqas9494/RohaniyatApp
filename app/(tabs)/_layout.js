import { FontAwesome } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Tabs } from "expo-router/tabs";
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

const DrawerButton = () => {
  const navigation = useNavigation();
 
  const handleTap = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
 
  return (
    <TouchableWithoutFeedback onPress={handleTap}>
      <View  style={styles.floatingButton}>
        <FontAwesome name="bars" size={25} color="#6C472D" />
      </View>
    </TouchableWithoutFeedback>
  );
};
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
          headerRight: () => <DrawerButton />,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="cog" size={size} color={color} />
          ),
          tabBarLabelPosition: "below-icon",
        }}
      />
    </Tabs>
  );
}
 
 const styles = StyleSheet.create({
   floatingButton: {
     position: "absolute",
     top: 16,     
     right: 20,    
     zIndex: 999,
   },
 });
  
  
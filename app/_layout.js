import { FontAwesome } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useFonts } from "expo-font";
import { Drawer } from "expo-router/drawer";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SplashScreenComponent from "../components/SplashScreen/splash";
 

SplashScreen.preventAutoHideAsync();
 
export default function Layout() {
  const [fontsLoaded] = useFonts({
    "Jameel-Noori-Regular": require("../assets/fonts/JameelNooriNastaleeqRegular.ttf"),
  });
 
  const [isSplashVisible, setSplashVisible] = useState(true);
 
 
 
  useLayoutEffect(() => {
    const hide = async () => {
      await SplashScreen.hideAsync();
    };
    hide();
  }, []);
 
 
  useEffect(() => {
    if (fontsLoaded) {
      const timer = setTimeout(() => {
        setSplashVisible(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [fontsLoaded]);
 
  if (!fontsLoaded || isSplashVisible) {
    return <SplashScreenComponent />;
  }
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
  return (

 
    
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
          headerLeft: () => null,
          headerTitleStyle: {
            fontFamily: "Jameel-Noori-Regular",
            fontSize: 25,
            color: "#6C472D",
          },
          headerTitleAlign: "center",
          headerStyle: { height: 56, backgroundColor: "#E4DAC1" },
          drawerStyle: { backgroundColor: "#E4DAC1", width: 240 },
          drawerActiveTintColor: "#6C472D",
          drawerInactiveTintColor: "black",
          drawerLabelStyle: { fontSize: 16 },
          gestureEnabled: true,
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: "ادارہ روحانیت",
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
       <Drawer.Screen
  name="aboutus"
  options={{
    title: "ہماری پہچان",
    headerShown: true,
    headerRight: () => <DrawerButton />,
    drawerIcon: ({ color, size }) => (
      <FontAwesome name="address-card" size={size} color={color} />
    ),
  }}
/>
      </Drawer>
    </GestureHandlerRootView>
 

 
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
 
 
 












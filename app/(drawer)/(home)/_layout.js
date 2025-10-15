import { FontAwesome } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Stack } from "expo-router";
import { Platform, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

const DrawerButton = () => {
  const navigation = useNavigation();
  const handleTap = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <TouchableWithoutFeedback onPress={handleTap}>
      <View style={{
          cursor: Platform.OS === "web" ? "pointer" : "default",
        }}>
        <FontAwesome name="bars" size={25} color="#6C472D" />
      </View>
    </TouchableWithoutFeedback>
  );
};
export default function StackNavigator() {
  return (
  <>  
      <View style={styles.floatingButton}>
        <DrawerButton />
      </View>
      <Stack
        screenOptions={{
          headerShown: true,
          headerStyle: {
            height: 56,
            backgroundColor: "#E4DAC1",
          },
          headerTintColor: "#6C472D",
          headerTitleStyle: {
            fontFamily: "Jameel-Noori-Regular",
             overflow: "visible", 
            fontSize: 22,
            color: "#6C472D",
          },
          headerTitleAlign: "center",
          
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "ادارہ روحانیات",
            gestureEnabled: true,
          }}
        />
      </Stack>
      
    </>
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
 
 

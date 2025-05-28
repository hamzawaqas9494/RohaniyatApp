import { FontAwesome } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Stack } from "expo-router";
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
const DrawerButton = () => {
  const navigation = useNavigation();
  const handleTap = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <TouchableWithoutFeedback onPress={handleTap}>
      <View>
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
            // fontSize: 22,
            lineHeight:10,
            paddingTop:10,
            // marginTop: 20,
            color: "#6C472D",
          },
          headerTitleAlign: "center",
          
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "ادارہ روحانیت",
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
 
 
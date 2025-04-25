import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const DraggableBar = () => {
  const navigation = useNavigation();

  const handleTap = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <TouchableWithoutFeedback onPress={handleTap}>
      <View style={styles.sideLayer}>
        <FontAwesome name="bars" size={25} color="#6C472D" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
    sideLayer: {
        position: "absolute",
        top: 16,
        right: 20,
        justifyContent: "center",
        alignItems: "center",
      },
});

export default DraggableBar;

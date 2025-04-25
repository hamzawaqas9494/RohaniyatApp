// components/SplashScreenComponent.js
import React, { useEffect } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

const SplashScreenComponent = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Callback when splash screen is finished
      SplashScreen.hideAsync(); // Hide splash screen
    }, 2000); // Duration of splash screen

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.splash}>
      <Image
        source={require("../assets/images/SplashScreen.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center the content
    backgroundColor: '#fff',
  },
  logo: {
    width: '80%', // Adjust size as necessary
    height: '80%', // Adjust size as necessary
  },
});

export default SplashScreenComponent;

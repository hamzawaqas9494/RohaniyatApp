import { Link } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Easing, View } from "react-native";
import CustomBackground from "../components/Background/Background";
import UniversalButton from "../components/UniversalButton/UniversalButton";

export default function NotFoundScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  // Animation start
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <CustomBackground>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Animated.Text
          style={{
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
            fontSize: 40,
            fontWeight: "bold",
            color: "#6C472D",
            marginBottom: 10,
          }}
        >
          404
        </Animated.Text>

        <Animated.Text
          style={{
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
            fontSize: 22,
            marginBottom: 20,
            color: "#6C472D",
            textAlign: "center",
          }}
        >
          Page Not Found
        </Animated.Text>

        <Animated.View style={{ opacity: fadeAnim }}>
          <Link href="/" asChild>
            <View>
              <UniversalButton
                icon="home"
                text="Back to Home"
                link="/"
              />
            </View>
          </Link>
        </Animated.View>
      </View>
    </CustomBackground>
  );
}

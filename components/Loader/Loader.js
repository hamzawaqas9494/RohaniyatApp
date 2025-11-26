import { ActivityIndicator } from "react-native";
import CustomBackground from "../Background/Background";

export default function Loader() {
  return (
    <CustomBackground>
        <ActivityIndicator size="large" color="#6C472D" />
    </CustomBackground>
  );
}

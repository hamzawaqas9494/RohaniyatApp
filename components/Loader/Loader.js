import { ActivityIndicator, View } from "react-native";
import { fehristStyles } from "../../style/globalcss";
import CustomBackground from "../Background/Background";

export default function Loader() {
  return (
    <CustomBackground>
      <View style={fehristStyles.centerContent}>
        <ActivityIndicator size="large" color="#6C472D" />
      </View>
    </CustomBackground>
  );
}

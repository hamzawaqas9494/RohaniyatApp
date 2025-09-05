import { Text, View } from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { fehristStyles } from "../../../style/globalcss";
export default function BarayMareez() {
  return (
    <CustomBackground>
      <View style={fehristStyles.centerContent}>
        <Text style={fehristStyles.text}>برائے مریض سائلین </Text>
        <Text style={fehristStyles.text}>Coming soon</Text>
      </View>
    </CustomBackground>
  );
}

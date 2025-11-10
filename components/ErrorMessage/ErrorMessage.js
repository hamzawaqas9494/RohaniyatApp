import { Text, View } from "react-native";
import { fehristStyles } from "../../style/globalcss";
import CustomBackground from "../Background/Background";

export default function Message({ text }) {
  return (
    <CustomBackground>
      <View style={fehristStyles.centerContent}>
        <Text style={fehristStyles.noRecordText}>{text}</Text>
      </View>
    </CustomBackground>
  );
}

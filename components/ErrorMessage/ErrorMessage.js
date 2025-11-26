import { Text } from "react-native";
import { mainStyles } from "../../style/globalcss";
import CustomBackground from "../Background/Background";

export default function Message({ text }) {
  return (
    <CustomBackground>
        <Text style={mainStyles.noRecordText}>{text}</Text>
    </CustomBackground>
  );
}

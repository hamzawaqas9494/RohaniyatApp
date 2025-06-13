import { ImageBackground, View } from "react-native";
import { backGround } from "../../style/globalcss";
export default function Background({ children }) {
  return (
    <ImageBackground
      source={require("../../assets/images/MainBackground.png")}
      style={backGround.background}
    >
      <View style={backGround.container}>{children}</View>
    </ImageBackground>
  );
}


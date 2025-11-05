import { ScrollView, Text, View } from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { mainStyles } from "../../../style/globalcss";
export default function RohaniIshayatashkhesTaruf() {
  return (
    <CustomBackground>
      <ScrollView>
       <View style={mainStyles.container}>
          <Text style={mainStyles.tashkhesHeading}> روحانی تشخیص.... </Text>
          <Text style={mainStyles.description}>
            عملیات کورس میں روحانی علوم اور عملیات کے اصول سکھائے جاتے ہیں تاکہ
            لوگ قرآنی اور اسلامی طریقے سے اپنی زندگی بہتر بنا سکیں۔
          </Text>
        </View>
      </ScrollView>
    </CustomBackground>
  );
}

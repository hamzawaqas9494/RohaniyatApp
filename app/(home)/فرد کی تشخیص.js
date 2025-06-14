import { ScrollView, Text, View } from "react-native";
import CustomBackground from "../../components/Background/Background";
import { mainStyles } from "../../style/globalcss";
export default function FardkiTashkhess() {
  return (
    <CustomBackground>
      <ScrollView>
        <View>
           <Text style={mainStyles.tashkhesHeading}>فرد کی تشخیص کرنے کا طریقہ</Text> 
          <Text style={mainStyles.tashkhesDescription}>
            انسانوں کی روحانی تشخیص کرنے کے مختلف طریقے:
          </Text>
          <Text style={mainStyles.tashkhesHeading}>پہنے ہوئے کپڑے سے تشخیص کرنے کا طریقہ:</Text>
          <Text style={mainStyles.tashkhesDescription}>
            روحانی تشخیص کیلئے مریض کا 1 رات پہنا ہوا کپڑا لیں جو جسم کے ساتھ لگا ہوا ہو (بنیان، ٹی شرٹ، شمیز، قمیض وغیرہ) اس کپڑے کو اپنے سامنے سیدھا لٹا لیں ۔ اس کپڑے پر بالشت کی مدد سے 4 نشان لگائیں یعنی 3 خانے بنا لیں پھر 7 مرتبہ آیت الکرسی یا 1 مرتبہ منزل پڑھ کے تینوں خانوں میں پھونک مار دیں ، پھونک مارنے کے بعد دوبارہ پالشت کی مدد سے پیمائش کریں ۔ پیمائش کرنے کے بعد اگر نیا نشان پہلے والے نشان سے اندر آیا تو جنات ہونے کی علامت ہے اور نیا نشان پہلے والے نشان سے باہر آئے تو جادو کی علامت ہے اور اگر نشان برابر رہیں تو جسمانی بیماری کی علامت ہے۔
          </Text>
          <Text style={mainStyles.tashkhesHeading}>کھلا کے تشخیص کرنے کا طریقہ:</Text>
          <Text style={mainStyles.tashkhesDescription}>
            آدھا چمچ چینی (شوگر) لیں اس پر 3 مرتبہ یہ عمل پڑھ کے دم کریں ۔  الم ۔ المص ۔ المر ، پھر چینی مریض کو کھلا دیں۔ چینی اگر مریض کو بہت زیادہ میٹھی لگے تو سایہ کی علامت ہے ، اگر چینی کڑوی لگے تو جادو کی علامت ہے ، اگر میٹھا برابر رہے تو جسمانی بیماری ہے ۔ یہ عمل چینی کی جگہ پانی پر بھی کیا جا سکتا ہے۔
          </Text>

          <Text style={mainStyles.tashkhesHeading}>بازو ناپ کے تشخیص کرنے کا طریقہ:</Text>
          <Text style={mainStyles.tashkhesDescription}>
            روحانی تشخیص کیلئے مریض کے داہنے پھر باہنے بازو پر سکیل کی مدد سے 2 نشان لگائیں یعنی 1 خانہ بنا لیں۔ پھر اس خانے میں 7 مرتبہ آیت الکرسی یا 1 مرتبہ منزل پڑھ کے پھونک مار دیں ، پھونک مارنے کے بعد دوبارہ سکیل کی مدد سے پیمائش کریں ۔ پیمائش کرنے کے بعد اگر نیا نشان پہلے والے نشان سے اندر آیا تو جنات ہونے کی علامت ہے اور نیا نشان پہلے والے نشان سے باہر آئے تو جادو کی علامت ہے اور اگر نشان برابر رہیں تو جسمانی بیماری کی علامت ہے ۔ اسی طرح دونوں بازو پر تشخیص کر سکتے ہیں۔
          </Text>
        </View>
      </ScrollView>
    </CustomBackground>
  );
}


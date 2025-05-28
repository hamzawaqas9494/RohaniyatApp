import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomBackground from "../../components/Background/Background";
export default function JagaTashkhess() {
  return (
    <CustomBackground>
      <ScrollView>
        <View>
          <Text style={styles.heading}>جگہ کی تشخیص کرنے کا طریقہ</Text>
          <Text style={styles.description}>
            اگر کسی کو شک ہو کہ اس کے گھر، پلاٹ، یا کاروباری جگہ پر جادو، جنات
            یا بد اثرات ہیں جس کی وجہ سے پلاٹ بک نہیں رہا، گھر میں لڑائی جھگڑے
            اور بے سکونی ہے، یا بلا وجہ کاروباری مسائل دن بدن بڑھ رہے ہیں۔ تو
            جگہ کی تشخیص کر کے اس کا علاج شروع کریں۔
          </Text>
          <Text style={styles.heading}>کپڑے سے تشخیص کرنا:</Text>
          <Text style={styles.description}>
            مطلوبہ جگہ پر کاٹن کے کپڑے کے تقریباً ۴ × ۱۸ انچ کے پیس کاٹ کر رات
            کو رکھ دیں اور صبح ان کو سامنے بجھا کر سکیل کی مدد سے ۲ نشان لگائیں۔
            پھر اس کپڑے پر ۷ مرتبہ آیت الکرسی یا ۱ مرتبہ منزل پڑھ کے دم کریں اور
            نشان کی دوبارہ پیمائش کریں۔ نشان اگر بڑھ گیا تو جنات، اگر کم ہو گیا
            تو جادو۔ یاد رکھیں کپڑے کے پیس گھر کے تمام کمروں میں، صحن، گیلری،
            باتھ روم، ٹاپ چھت اور سیڑھی وغیرہ پر علیحدہ علیحدہ رکھیں۔ یہی طریقہ
            فیکٹری، کاروباری جگہ اور پلاٹ وغیرہ پر بھی استعمال کر سکتے ہیں۔
          </Text>

          <Text style={styles.heading}>مٹی سے تشخیص:</Text>
          <Text style={styles.description}>
            مطلوبہ جگہ کی مٹی حاصل کریں اور اس کو سونگھ لیں۔ پھر 7 مرتبہ آیت
            الکرسی یا 1 مرتبہ منزل پڑھ کے دم کریں۔ پھر دوبارہ سونگھیں۔ اگر مٹی
            میں سے پاخانے کی بدبو آئے تو جادو ہے، اگر مچھلی کی آئے تو جنات ہیں۔
          </Text>
          <Text style={styles.heading}>دیواروں سے تشخیص کرنا:</Text>
          <Text style={styles.description}>
            مطلوبہ جگہ کے کمرے کے چاروں کونوں کی علیحدہ علیحدہ تشخیص کریں۔ ایک
            کونے میں سکیل کی مدد سے 2 نشان لگائیں، اس پر 7 مرتبہ آیت الکرسی یا 1
            مرتبہ منزل پڑھ کے دم کریں اور نشان کی دوبارہ پیمائش کریں۔ نشان اگر
            بڑھ گیا تو جنات، کم ہو گیا تو جادو ہے۔
          </Text>
          <Text style={styles.description}>
            (یعنی) کپڑے پر شروع میں 1 نشان لگایا تو یہ نشان نمبر 1 ہوا، پھر
            دوسری طرف نشان لگایا تو یہ نشان نمبر 2 ہوا۔ اب آپ دم کریں گے، دم
            کرنے کے بعد جو نشان لگائیں گے تو وہ نشان نمبر 3 ہو گا۔ نشان نمبر 3
            اہم ہوتا ہے۔ یہ نشان اگر 2 نمبر نشان کے اندر آیا تو جنات ہیں، اور
            اگر نشان نمبر 3 باہر گیا تو جادو کی علامت ہے۔
          </Text>
        </View>
      </ScrollView>
    </CustomBackground>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    paddingTop: 6,
    paddingRight: 6,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  description: {
    fontSize: 20,
    paddingRight: 4,
    lineHeight: 30,
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "right",
    writingDirection: "rtl",
  },
});

import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomBackground from "../../../components/Background/Background";


export default function JagaTashkhess() {
  return (
    <CustomBackground>
      <ScrollView>
        <View>
          <Text style={styles.heading}>جگہ کی تشخیص کرنے کا طریقہ</Text>

          <Text style={styles.description}>
            اگر کسی کو شک ہو کہ اس کے گھر، پلاٹ، یا کاروباری جگہ پر جادو، جنات یا بد اثرات ہیں جس کی وجہ سے پلاٹ بک نہیں رہا، گھر میں لڑائی جھگڑے اور بے سکونی ہے، یا بلا وجہ کاروباری مسائل دن بدن بڑھ رہے ہیں۔ تو جگہ کی تشخیص کر کے اس کا علاج شروع کریں۔
          </Text>

          <Text style={styles.subheading}>کپڑے سے تشخیص کرنا:</Text>
          <Text style={styles.description}>
            مطلوبہ جگہ پر کاٹن کے کپڑے کے تقریبا 18 x 4 انچ کے پیس کاٹ کر رات کو رکھ دیں اور صبح ان کو سامنے بجھا کر سکیل کی مدد سے 2 نشان لگائیں۔ پھر اس کپڑے پر 7 مرتبہ آیت الکرسی یا 1 مرتبہ منزل پڑھ کے دم کریں اور نشان کی دوبارہ پیمائش کریں۔ نشان اگر بڑھ گیا تو جنات، اگر کم ہو گیا تو جادو۔ یاد رکھیں کپڑے کے پیس گھر کے تمام کمروں میں، صحن، گیلری، باتھ روم، ٹاپ چھت اور سیڑھی وغیرہ پر علیحدہ علیحدہ رکھیں۔ یہی طریقہ فیکٹری، کاروباری جگہ اور پلاٹ وغیرہ پر بھی استعمال کر سکتے ہیں۔
          </Text>

          <Text style={styles.subheading}>مٹی سے تشخیص:</Text>
          <Text style={styles.description}>
            مطلوبہ جگہ کی مٹی حاصل کریں اور اس کو سونگھ لیں۔ پھر 7 مرتبہ آیت الکرسی یا 1 مرتبہ منزل پڑھ کے دم کریں۔ پھر دوبارہ سونگھیں۔ اگر مٹی میں سے پاخانے کی بدبو آئے تو جادو ہے، اگر مچھلی کی آئے تو جنات ہیں۔
          </Text>

          <Text style={styles.subheading}>دیواروں سے تشخیص کرنا:</Text>
          <Text style={styles.description}>
            مطلوبہ جگہ کے کمرے کے چاروں کونوں کی علیحدہ علیحدہ تشخیص کریں۔ ایک کونے میں سکیل کی مدد سے 2 نشان لگائیں، اس پر 7 مرتبہ آیت الکرسی یا 1 مرتبہ منزل پڑھ کے دم کریں اور نشان کی دوبارہ پیمائش کریں۔ نشان اگر بڑھ گیا تو جنات، کم ہو گیا تو جادو ہے۔
          </Text>
          <Text style={styles.description}>
            (یعنی) کپڑے پر شروع میں 1 نشان لگایا تو یہ نشان نمبر 1 ہوا، پھر دوسری طرف نشان لگایا تو یہ نشان نمبر 2 ہوا۔ اب آپ دم کریں گے، دم کرنے کے بعد جو نشان لگائیں گے تو وہ نشان نمبر 3 ہو گا۔ نشان نمبر 3 اہم ہوتا ہے۔ یہ نشان اگر 2 نمبر نشان کے اندر آیا تو جنات ہیں، اور اگر نشان نمبر 3 باہر گیا تو جادو کی علامت ہے۔
          </Text>
        </View>
      </ScrollView>
    </CustomBackground>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
    lineHeight:100,
  },
  subheading: {
    fontSize: 30,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
    lineHeight:80,
  },
  description: {
    fontSize: 20,
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "right",
    writingDirection: "rtl",
  },
  list: {
    paddingRight: 10,
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    paddingRight: 10,
  },
  item: {
    fontSize: 20,
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "right",
  },
});

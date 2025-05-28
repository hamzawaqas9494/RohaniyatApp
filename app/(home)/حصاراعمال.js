import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomBackground from "../../components/Background/Background";
export default function HisarAmaalScreen() {
  return (
    <CustomBackground>
      <ScrollView>
        <View>
          <Text style={styles.heading}>حصار</Text>
          <Text style={styles.description}>
            عملیات کورس میں روحانی علوم اور عملیات کے اصول سکھائے جاتے ہیں تاکہ لوگ قرآنی اور اسلامی طریقے سے اپنی زندگی بہتر بنا سکیں۔
          </Text>
          <Text style={styles.subheading}>روحانی حصار کا مختصر تعارف:</Text>
          <Text style={styles.description}>
            روحانی حصار سے مراد ایسے اعمال ہیں، جو عام عوام اور عاملین کا روحانی دفاع کرتے ہیں۔ جادو، جنات اور شیاطین سے لڑنے والے عاملین اور جادو جنات کے مریضوں کو اس کی حد سے زیادہ ضرورت پڑتی ہے۔
            اسی طرح دینِ اسلام کا کام کرنے والے افراد کو بھی روحانی دفاع کی بہت ضرورت ہوتی ہے تاکہ باطل قوتیں ان پر اگر روحانی طور پر وار کریں تو ان کا دفاع ہو سکے۔
          </Text>
          <Text style={styles.subheading}>حصار (حفاظت) کتنی مرتبہ کرنی چاہئے:</Text>
          <Text style={styles.description}>
            روحانی حفاظت صبح سورج نکلنے سے پہلے، سورج غروب ہونے سے پہلے، رات سونے سے پہلے، اور جب بھی گھر سے نکلنے لگیں تو لازمی کریں۔
          </Text>
          <Text style={styles.subheading}>جگہ کا حصار کرنے کا طریقہ:</Text>
          <Text style={styles.description}>
            جگہ کے تمام پاک کونوں کا تصور کر کے پھونک مار دیں، یا پانی دم کر کے سپرے کریں یا شہادت کی انگلی پر دم کر کے گھما دیں۔
          </Text>
          <Text style={styles.subheading}>انسانی حصار کرنے کا طریقہ:</Text>
          <Text style={styles.description}>
            ہر فرد اپنا حصار خود کرے۔ والدین اپنے بچوں کو سکھائیں۔ اعمال کی پڑھائی کے بعد ہاتھوں پر دم کر کے جسم پر پھیر لیں، پھر گھر کے کونوں پر پھونک ماریں۔
          </Text>
          <Text style={styles.subheading}>خواتین کیلئے (ناپاکی کے ایام میں):</Text>
          <Text style={styles.description}>
            • يا حَافِظُ يَا حَفِيْظُ (100 مرتبہ){'\n'}
            • اَعُوْذُ بِکَلِمَاتِ اللہِ التَّامَّۃِ... (7 مرتبہ){'\n'}
            • لَا حَوْلَ وَلَا قُوَّةَ... (7 مرتبہ){'\n'}
            • بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ... (7 مرتبہ)
          </Text>
          <Text style={styles.subheading}>مرد حضرات و خواتین (پاکی کیلئے):</Text>
          <Text style={styles.description}>
            • آیت الکرسی (7 مرتبہ){'\n'}
            • سورۃ الفلق، سورۃ الناس (7 مرتبہ){'\n'}
            • سورۃ اخلاص، الفلق، الناس (3 مرتبہ){'\n'}
            • سورۃ البقرہ کی آخری 2 آیات (1 مرتبہ)
          </Text>
        </View>
      </ScrollView>
    </CustomBackground>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  subheading: {
    fontSize: 24,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  description: {
    fontSize: 20,
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "right",
    writingDirection: "rtl",
  },

});


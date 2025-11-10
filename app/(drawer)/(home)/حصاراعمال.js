import { ScrollView, Text, View } from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { mainStyles } from "../../../style/globalcss";
export default function HisarAmaalScreen() {
  return (
    <CustomBackground>
      <ScrollView>
         <View style={mainStyles.container}>
          <Text style={mainStyles.heading}>حصار</Text>
          <Text style={mainStyles.description}>
            عملیات کورس میں روحانی علوم اور عملیات کے اصول سکھائے جاتے ہیں تاکہ لوگ قرآنی اور اسلامی طریقے سے اپنی زندگی بہتر بنا سکیں۔
          </Text>
          <Text style={mainStyles.heading}>روحانی حصار کا مختصر تعارف:</Text>
          <Text style={mainStyles.description}>
            روحانی حصار سے مراد ایسے اعمال ہیں، جو عام عوام اور عاملین کا روحانی دفاع کرتے ہیں۔ جادو، جنات اور شیاطین سے لڑنے والے عاملین اور جادو جنات کے مریضوں کو اس کی حد سے زیادہ ضرورت پڑتی ہے۔
            اسی طرح دینِ اسلام کا کام کرنے والے افراد کو بھی روحانی دفاع کی بہت ضرورت ہوتی ہے تاکہ باطل قوتیں ان پر اگر روحانی طور پر وار کریں تو ان کا دفاع ہو سکے۔
          </Text>
          <Text style={mainStyles.heading}>حصار (حفاظت) کتنی مرتبہ کرنی چاہئے:</Text>
          <Text style={mainStyles.description}>
            روحانی حفاظت صبح سورج نکلنے سے پہلے، سورج غروب ہونے سے پہلے، رات سونے سے پہلے، اور جب بھی گھر سے نکلنے لگیں تو لازمی کریں۔
          </Text>
          <Text style={mainStyles.heading}>جگہ کا حصار کرنے کا طریقہ:</Text>
          <Text style={mainStyles.description}>
            جگہ کے تمام پاک کونوں کا تصور کر کے پھونک مار دیں، یا پانی دم کر کے سپرے کریں یا شہادت کی انگلی پر دم کر کے گھما دیں۔
          </Text>
          <Text style={mainStyles.heading}>انسانی حصار کرنے کا طریقہ:</Text>
          <Text style={mainStyles.description}>
            ہر فرد اپنا حصار خود کرے۔ والدین اپنے بچوں کو سکھائیں۔ اعمال کی پڑھائی کے بعد ہاتھوں پر دم کر کے جسم پر پھیر لیں، پھر گھر کے کونوں پر پھونک ماریں۔
          </Text>
          <Text style={mainStyles.heading}>خواتین کیلئے (ناپاکی کے ایام میں):</Text>
          <View>
          <Text style={mainStyles.item}>
            • يا حَافِظُ يَا حَفِيْظُ (100 مرتبہ)</Text>
            <Text style={mainStyles.item}>
            • اَعُوْذُ بِکَلِمَاتِ اللہِ التَّامَّۃِ... (7 مرتبہ)</Text>
             <Text style={mainStyles.item}>
            • لَا حَوْلَ وَلَا قُوَّةَ... (7 مرتبہ)</Text>
            <Text style={mainStyles.item}>
            • بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ... (7 مرتبہ)</Text>
          </View>
          <Text style={mainStyles.heading}>مرد حضرات و خواتین (پاکی کیلئے):</Text>
         <View>
          <Text style={mainStyles.item}>
            • آیت الکرسی (7 مرتبہ) </Text>
             <Text style={mainStyles.item}>
            • سورۃ الفلق، سورۃ الناس (7 مرتبہ)</Text>
             <Text style={mainStyles.item}>
            • سورۃ اخلاص، الفلق، الناس (3 مرتبہ)</Text>
             <Text style={mainStyles.item}>
            • سورۃ البقرہ کی آخری 2 آیات (1 مرتبہ)</Text>
           </View>
        </View>
      </ScrollView>
    </CustomBackground>
  );
}


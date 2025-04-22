import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomBackground from "../../../../../components/Background/Background";

export default function RohaniIshayaScreen() {
  return (
    <CustomBackground>
      <ScrollView>
        <View>
          <Text style={styles.heading}>روحانی اشیاء</Text>
          <Text style={styles.description}>
            ادارہ روحانیات کے زیرِ تحت "روحانی دکان" روحانی علاج کرنے والے
            عاملین کے ساتھ ساتھ روحانی مریضوں اور روحانی علوم سیکھنے والے طالب
            علموں کے لیے قائم کی گئی ہے، تاکہ روحانی علاج معالجہ، روحانی تجربات
            کرنے کے لیے جن اشیاء کی ضرورت پڑتی ہے، وہ ایک جگہ بآسانی، مناسب قیمت
            پر دستیاب ہو سکیں۔ مختلف مقاصد کے لیے مختلف تعویذات (چھپے ہوئے اور
            ہاتھ کے لکھے ہوئے) دستیاب ہیں جو کئی سالوں سے روحانی معالجین اعتماد
            سے اپنے مریضوں کو استعمال کروا رہے ہیں۔ روحانی مریضوں اور روحانی
            معالجین کے لیے مختلف مقاصد کے لیے تیار روحانی علاج اور روحانی مجربات
            بھی موجود ہیں۔ منتخب کریں اور اعتماد سے استعمال کرکے فائدہ اٹھائیں۔
            عاملین اپنے مریضوں کو اعتماد سے استعمال کروا سکتے ہیں۔ ادارہ یہ
            سہولت بھی دیتا ہے کہ اگر کسی سائل / مریض یا کسی عامل کو کوئی خاص
            علاج تیار کروانا ہو، تعویذات لکھوانے ہوں، کوئی خاص کلام کے تعویذات
            زیادہ تعداد میں تیار کروانے ہوں، کسی خاص وقت یا اوقات میں تعویذات یا
            الواح تیار کروانی ہوں — تو ان کے لیے بھی انتظام موجود ہے۔ بہت احتیاط
            اور توجہ سے مطلوبہ کام کیا جاتا ہے۔ تعویذات عام کالی سیاہی، خاص کالی
            سیاہی، دیسی کالی سیاہی، زعفرانی سیاہی، مشک و زعفران کی سیاہی اور
            مشک، زعفران و عنبر کی سیاہی سے بھی لکھے جاتے ہیں۔ اسی طرح کوئی سورت
            یا خاص کلام خاص تعداد میں پانی یا تیل پر دم کروا کر دینے کی بھی
            سہولت موجود ہے۔
          </Text>
          <Text style={styles.heading}>روحانی دکان میں 2 شعبے ہیں</Text>
          <View style={styles.list}>
            <Text style={styles.item}>• دم شدہ اشیاء</Text>
            <Text style={styles.item}>• تیار روحانی علاج</Text>
          </View>
          <Text style={styles.description}>
            سب کی تفصیل ذیل میں دی گئی ہے۔گھر بیٹھے تمام اشیاء منگوائیں۔ ڈاک خرچ
            بذمہ خریدار۔ پیشگی رقم کے بغیر اشیاء نہیں بھیجیں جائیں گی۔
          </Text>
          <Text style={styles.heading}>
            مریض اور معالجین کیلئے دم شدہ روحانی اشیاء
          </Text>
          <Text style={styles.description}>
            ادارہ روحانیات کے زیرِ تحت "روحانی دکان" کی خصوصیت ایسی اشیاء ہیں جن
            پر مختلف مقاصد کے لیے مختلف دم کیے گئے ہیں۔ اور تجربے میں بہت مفید
            ثابت ہوئی ہیں۔ ان تمام روحانی اشیاء پر پہلے عاملین دم کرتے ہیں، پھر
            استاد محترم خود دم کرتے ہیں۔ اس کے بعد جنات سے دم کروایا جاتا ہے۔ یہ
            اشیاء عوام کے ساتھ ساتھ عاملین کے لیے بہت کارآمد اور آسانی کا ذریعہ
            ہیں تاکہ عامل حضرات بآسانی یہ اشیاء مریضوں کو استعمال کروا سکیں۔ آج
            کے دور میں وقت کی کمی اور برکت نہ ہونے کی وجہ سے دوسرے افراد کی طرح
            روحانی معالجین کو بھی مشکل پیش آتی ہے کہ کس طرح کم وقت میں زیادہ
            علاج تیار کیا جائے؟ پھر افرادی قوت کی کمی بھی ایک بہت بڑا مسئلہ ہے۔
            ان مسائل کو مدنظر رکھتے ہوئے کئی طرح کی روحانی اشیاء تیار کی گئی
            ہیں۔ آرڈر کی تکمیل کے وقت جو قیمت ہوگی، وہی تصور کی جائے گی۔ تمام
            اشیاء گھر بیٹھے منگوا سکتے ہیں۔
          </Text>
          <View>
            <ScrollView contentContainerStyle={styles.listContainer}>
              <View style={styles.column}>
                <Text style={styles.item}>• الشفاء اگر بتی</Text>
                <Text style={styles.item}>• الشفاء پانی</Text>
                <Text style={styles.item}>• الشفاء تیل</Text>
                <Text style={styles.item}>• الشفاء شہد</Text>
                <Text style={styles.item}>• الشفاء عطر</Text>
                <Text style={styles.item}>• الشفاء باخور</Text>
                <Text style={styles.item}>• الشفاء پرفیوم سپرے</Text>
                <Text style={styles.item}>• الشفاء دھونی</Text>
                <Text style={styles.item}>• الشفاء گوگل</Text>
                <Text style={styles.item}>• الشفاء ہرمل</Text>
                <Text style={styles.item}>• الشفاء لوبان</Text>
                <Text style={styles.item}>• الشفاء صابن</Text>
                <Text style={styles.item}>• الشفاء مہندی</Text>
                <Text style={styles.item}>• الشفاء ابٹن</Text>
                <Text style={styles.item}>• الشفاء کلونجی</Text>
                <Text style={styles.item}>• الشفاء چھوہارے</Text>
              </View>

              <View style={styles.column}>
                <Text style={styles.item}>• الشفاء چھلہ</Text>
                <Text style={styles.item}>• الشفاء کڑا</Text>
                <Text style={styles.item}>• الشفاء دھاگہ</Text>
                <Text style={styles.item}>• الشفاء ڈوری</Text>
                <Text style={styles.item}>• الشفاء گنڈا</Text>
                <Text style={styles.item}>• الشفاء چراغ</Text>
                <Text style={styles.item}>• الشفاء موم بتی</Text>
                <Text style={styles.item}>• الشفاء مٹی</Text>
                <Text style={styles.item}>• الشفاء راکھ</Text>
                <Text style={styles.item}>• الشفاء کیل</Text>
                <Text style={styles.item}>• الشفاء مرچیں</Text>
                <Text style={styles.item}>• الشفاء چینی</Text>
                <Text style={styles.item}>• الشفاء نمک</Text>
                <Text style={styles.item}>• الشفاء پھکی</Text>
                <Text style={styles.item}>• الشفاء شکر</Text>
                <Text style={styles.item}>• الشفاء عرق گلاب</Text>
              </View>
            </ScrollView>
          </View>
          <Text style={styles.description}>
            جس طرح ایک میڈیکل سٹور میں تیار دوائی ملتی ہیں، اسی طرح ہمارے ادارے
            نے تیار روحانی علاج بنائے جاتے ہیں۔ یہ علاج مریضوں پر کامیاب تجربات
            کے بعد منظرِ عام پر لائے گئے ہیں۔ مریضوں کے ساتھ ساتھ روحانی معالجین
            بھی اعتماد سے استعمال کروا سکتے ہیں۔ علاج کی مکمل تفصیل، پرہیز اور
            طریقۂ استعمال کا پرچہ ہمراہ ہوتا ہے۔ دورانِ علاج کسی بھی قسم کی
            علاج سے متعلق پریشانی ہو تو مکمل رہنمائی کی جاتی ہے۔
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

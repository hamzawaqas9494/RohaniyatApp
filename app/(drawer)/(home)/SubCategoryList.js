import NetInfo from "@react-native-community/netinfo";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Platform, Text, TouchableOpacity } from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import Loader from "../../../components/Loader/Loader";
import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
import { mainStyles } from "../../../style/globalcss";

export default function SubCategoryList() {
  const { tableName, category } = useRoute().params || {};
  const navigation = useNavigation();
  const { fetchSubcategories } = useData();

  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const load = async () => {
      if (!tableName || !category) return;
      setLoading(true);
      setErrorMsg("");

      try {
        // 🔌 Internet Check
        const netState = await NetInfo.fetch();
        if (!netState.isConnected) {
          setErrorMsg("📴 انٹرنیٹ کنکشن موجود نہیں ہے۔");
          return;
        }

        const data = await fetchSubcategories(tableName, category);
        const sorted = sortUrduData(
          data.map((item) => ({ label: item.subcategory }))
        );
        setSubcategories(sorted);

        if (sorted.length === 0) {
          setErrorMsg("📂 کوئی سب کیٹیگری موجود نہیں ہے۔");
          navigation.replace("ItemList", { tableName, category });
        }
      } catch (e) {
        console.warn("سب کیٹیگریز فیل:", e);
        setErrorMsg("⚠️ مواد لوڈ کرنے میں مسئلہ آیا۔");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [tableName, category, navigation]);

  // useEffect(() => {
  //   navigation.setOptions({ title: category || "..."  });
  // }, [navigation, category]);





useEffect(() => {
  const titleText = category || "...";

  navigation.setOptions({
    headerTitle: () => (
      <Text
        style={{
          color: "#6C472D",
          fontFamily: "NotoNastaliqUrdu-Regular",
          textAlign: "center",
          fontSize: 14,
                   width: "100%",
          //  width: Platform.OS === "web" ? "100%" : "95%",
           maxWidth: Platform.OS === "web" ? "100%" : "90%",
        }}
      >
        {titleText}
      </Text>
    ),
  });
}, [navigation, category]);















  if (loading) return <Loader />;
  if (errorMsg) return <ErrorMessage text={errorMsg} />;

  return (
    <CustomBackground>
    <FlatList
  data={subcategories}
  keyExtractor={(item, index) => index.toString()}
 
  contentContainerStyle={{
    flexGrow: 1,
    justifyContent: "center",
    padding: 15,
  }}
    showsVerticalScrollIndicator={false}  
  renderItem={({ item }) => (
    <TouchableOpacity
      style={mainStyles.carditems}
      onPress={() =>
        navigation.navigate("ItemList", {
          tableName,
          category,
          subcategory: item.label,
        })
      }
    >
      <Text style={mainStyles.carditemstext} numberOfLines={1} ellipsizeMode="tail">{item.label}</Text> 
    </TouchableOpacity>
  )}
/>

    </CustomBackground>
  );
}

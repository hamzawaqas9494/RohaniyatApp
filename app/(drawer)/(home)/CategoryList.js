import NetInfo from "@react-native-community/netinfo";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import Loader from "../../../components/Loader/Loader";
import { sortUrduData } from "../../../components/SortUrduData/SortUrduData";
import { mainStyles } from "../../../style/globalcss";

export default function CategoryList() {
  const { tableName, label } = useRoute().params || {};
  const navigation = useNavigation();
  const { fetchCategories, fetchSubcategories } = useData();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const load = async () => {
      if (!tableName) return;
      setLoading(true);
      setErrorMsg("");

      try {
        const netState = await NetInfo.fetch();
        if (!netState.isConnected) {
          setErrorMsg("انٹرنیٹ کنکشن موجود نہیں ہے۔");
          return;
        }

        const data = await fetchCategories(tableName);

        if (!data || data.length === 0) {
          setErrorMsg("کوئی مواد موجود نہیں ہے۔");
          navigation.replace("ItemList", { tableName, label });
          return;
        }

        const sorted = sortUrduData(
          data.map((item) => ({ label: item.category }))
        );

        setCategories(sorted);
      } catch (e) {
        console.warn("کیٹیگریز فیل:", e);
        setErrorMsg("انٹرنیٹ کنکشن موجود نہیں ہے۔");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [tableName, navigation, label]);



  // useEffect(() => {
  //   navigation.setOptions({ title: label || "..." });
  // }, [navigation, label]);


useEffect(() => {
  const titleText =  label || "..." ;

  navigation.setOptions({
    headerTitle: () => (
      <Text
        style={{
          color: "#6C472D",
          fontFamily: "NotoNastaliqUrdu-Regular",
          textAlign: "center",
          fontSize: 14,
                width: "100%",
          // //  width: Platform.OS === "web" ? "100%" : "95%",
          //  maxWidth: Platform.OS === "web" ? "100%" : "90%",
        }}
      >
        {titleText}
      </Text>
    ),
  });
 }, [navigation, label]);




  const handleCategoryPress = async (categoryLabel) => {
    try {
     
      const subcats = await fetchSubcategories(tableName, categoryLabel);

      if (subcats && subcats.length > 0) {
        navigation.navigate("SubCategoryList", {
          tableName,
          category: categoryLabel,
        });
      } else {
        navigation.navigate("ItemList", {
          tableName,
          category: categoryLabel,
        });
      }
    } catch (err) {
      console.warn("سب کیٹیگری چیک کرنے میں ایشو:", err);
      navigation.navigate("ItemList", {
        tableName,
        category: categoryLabel,
      });
    }
  };

  if (loading) return <Loader />;
  if (errorMsg) return <ErrorMessage text={errorMsg} />;

  return (
 <CustomBackground>
  <FlatList
    data={categories}
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
  onPress={() => handleCategoryPress(item.label)}>
    <Text style={mainStyles.carditemstext} numberOfLines={1} ellipsizeMode="tail">{item.label}</Text>
</TouchableOpacity>

    )}
  />
</CustomBackground>

  );
}
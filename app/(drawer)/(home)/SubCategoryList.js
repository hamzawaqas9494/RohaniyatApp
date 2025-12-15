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

export default function SubCategoryList() {
  const route = useRoute();
  const navigation = useNavigation();
  const { tableName, categoryId, categoryLabel } = route.params || {};

  const { fetchSubcategories } = useData();

  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const load = async () => {
      if (!tableName || !categoryId) {
        setErrorMsg("معلومات غائب ہے");
        setLoading(false);
        return;
      }

      setLoading(true);
      setErrorMsg("");

      try {
        const netState = await NetInfo.fetch();
        if (!netState.isConnected) {
          setErrorMsg("📴 انٹرنیٹ کنکشن موجود نہیں ہے۔");
          setLoading(false);
          return;
        }

        const data = await fetchSubcategories(tableName, categoryId);

        console.log(data, "data on subcategory");

        if (!data || data.length === 0) {
          setErrorMsg("📂 کوئی سب کیٹیگری موجود نہیں ہے۔");
          navigation.replace("ItemList", {
            tableName,
            categoryId,
            label: categoryLabel || "آئٹمز" 
          });
          setLoading(false);
          return;
        }

      const sorted = sortUrduData(
  data.map((item) => ({
    id: item.id,
    label: item.label || item.subcategory_name || item.name || item.title || item.subcategory || "بغیر نام"
  }))
);

        setSubcategories(sorted);
      } catch (e) {
        console.warn("سب کیٹیگریز فیل:", e);
        setErrorMsg("⚠️ مواد لوڈ کرنے میں مسئلہ آیا۔");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [tableName, categoryId, navigation]);


  useEffect(() => {
    navigation.setOptions({ title: categoryLabel || "سب کیٹیگریز" });
  }, [navigation, categoryLabel]);

  if (loading) return <Loader />;
  if (errorMsg) return <ErrorMessage text={errorMsg} />;

  return (
    <CustomBackground>
      <FlatList
        data={subcategories}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
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
                categoryId,
                subcategoryId: item.id,
                label: item.label 
              })
            }
          >
            <Text style={mainStyles.carditemstext}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </CustomBackground>
  );
}
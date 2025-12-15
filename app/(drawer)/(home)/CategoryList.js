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
  const route = useRoute();
  const navigation = useNavigation();
  const { tableName, label } = route.params || {};
  const { fetchCategories, fetchSubcategories } = useData();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const load = async () => {
      if (!tableName) {
        setErrorMsg("ٹیبل کی معلومات غائب ہے");
        setLoading(false);
        return;
      }

      setLoading(true);
      setErrorMsg("");

      try {
        const netState = await NetInfo.fetch();
        if (!netState.isConnected) {
          setErrorMsg("انٹرنیٹ کنکشن موجود نہیں ہے۔");
          setLoading(false);
          return;
        }


        const data = await fetchCategories(tableName);
        console.log(data,"data")

        if (!data || data.length === 0) {
          setErrorMsg("کوئی مواد موجود نہیں ہے۔");
          navigation.replace("ItemList", { tableName, label });
          setLoading(false);
          return;
        }

        const sorted = sortUrduData(
          data.map((item) => ({
            id: item.id,
            label: item.label || item.name || item.category || "نام نہیں"
          }))
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
  }, [tableName, navigation]);

  useEffect(() => {
    navigation.setOptions({ title: label || "کیٹیگریز" });
  }, [navigation, label]);

  const handleCategoryPress = async (category) => {
    try {
      const subcats = await fetchSubcategories(tableName, category.id);

      if (subcats && subcats.length > 0) {
        navigation.navigate("SubCategoryList", {
          tableName,
          categoryId: category.id,        
          categoryLabel: category.label
        });
      } else {
        navigation.navigate("ItemList", {
          tableName,
          categoryId: category.id,          
          categoryLabel: category.label  
        });
      }
    } catch (err) {
      console.warn("سب کیٹیگری چیک کرنے میں ایشو:", err);
      navigation.navigate("ItemList", {
        tableName,
        categoryId: category.id
      });
    }
  };

  if (loading) return <Loader />;
  if (errorMsg) return <ErrorMessage text={errorMsg} />;

  return (
    <CustomBackground>
      <FlatList
        data={categories}
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
            onPress={() => handleCategoryPress(item)}
          >
            <Text style={mainStyles.carditemstext}>
              {item.label}
            </Text>
          </TouchableOpacity>
        )}
      />
    </CustomBackground>
  );
}
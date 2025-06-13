import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomBackground from "../../components/Background/Background";
import { fehristStyles } from "../../style/globalcss";
export default function Noorialviaamal() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetch(
      "https://rohaniyatweb-production-bf29.up.railway.app/api/blog-data/get-table-data?tableName=noorialviaamal"
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result.rows);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);
  return (
     <CustomBackground>
          <View style={fehristStyles.container}>
            {loading ? (
              <View style={fehristStyles.centerContent}>
                <ActivityIndicator size="large" color="#6C472D" />
              </View>
            ) : data.length === 0 ? (
              <View style={fehristStyles.centerContent}>
                <Text style={fehristStyles.noRecordText}>کوئی ریکارڈ موجود نہیں ہے</Text>
              </View>
            ) : (
              <FlatList
                contentContainerStyle={fehristStyles.fehristcenter}
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={fehristStyles.card}
                    onPress={() =>
                      navigation.navigate("نوری علوی اعمال کی تفصیل", {
                        id: item.id,
                      })
                    }
                  >
                    <Text style={fehristStyles.fehristText}>{item.title}</Text>
                  </TouchableOpacity>
                )}
              />
            )}
          </View>
        </CustomBackground>
  );
}

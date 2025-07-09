import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomBackground from "../../components/Background/Background";
import { BASE_URL } from "../../config/api";
import { fehristStyles } from "../../style/globalcss";
export default function MujrabNakoshkiFehrist() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    fetch(`${BASE_URL}/api/blog-data/get-table-data?tableName=taweez`)
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
            <Text style={fehristStyles.noRecordText}>
              کوئی ریکارڈ موجود نہیں ہے
            </Text>
          </View>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={fehristStyles.fehristcenter}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={fehristStyles.card}
                onPress={() =>
                  navigation.navigate("مجرب نقوش تفصیل", {
                    id: item.id,
                  })
                }
              >
                <Text style={fehristStyles.text}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </CustomBackground>
  );
}

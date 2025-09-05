import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { BASE_URL } from "../../../config/api";
import { fehristStyles } from "../../../style/globalcss";
export default function Jadujinnatkailaj() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    fetch(
     `${BASE_URL}/get?tableName=rohaniilaaj`
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
            <Text style={fehristStyles.noRecordText}>
              کوئی ریکارڈ موجود نہیں ہے
            </Text>
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
                  navigation.navigate("جادو کے علاج کی تفصیل", {
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
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { BASE_URL } from "../../../config/api";
import { fehristStyles, rohaniDokan } from "../../../style/globalcss";
const { width } = Dimensions.get("window");
export default function Kutbkifehrist() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    fetch(`${BASE_URL}/get?tableName=qutb`)
      .then((res) => res.json())
      .then((result) => {
        setData(result.rows);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);

  
const numCols =
  Platform.OS === "web" && width > 768 // web ya large tab screens
    ? 3
    : 2; // default mobile par 2
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
            numColumns={numCols} // 2 کالم
            columnWrapperStyle={rohaniDokan.spaceHorizontally}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={rohaniDokan.card}
                onPress={() =>
                  navigation.navigate("کتاب کی تفصیل", {
                    id: item.id,
                  })
                }
              >
{data.image && (
  <Image
    source={{ uri: data.image }}
    style={fehristStyles.image}
    resizeMode="contain"
  />
)}


              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </CustomBackground>
  );
}

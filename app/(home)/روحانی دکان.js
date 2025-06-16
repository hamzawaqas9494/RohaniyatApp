import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomBackground from "../../components/Background/Background";
import { fehristStyles, rohaniDokan } from "../../style/globalcss";
export default function RohaniDukan() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    fetch(
      "https://rohaniyatweb-production-bf29.up.railway.app/api/blog-data/get-table-data?tableName=rohanidokan"
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
            data={data}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2} // 2 کالم
            columnWrapperStyle={rohaniDokan.spaceHorizontally}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={rohaniDokan.card}
                onPress={() =>
                  navigation.navigate("روحانی دکان کی تفصیل", {
                    id: item.id,
                  })
                }
              >
                {item.image ? (
                  <Image
                    source={{
                      uri: `https://rohaniyatweb-production-bf29.up.railway.app${item.image}`,
                    }}
                    style={rohaniDokan.image}
                    resizeMode="contain"
                  />
                ) : (
                  <Image
                    source={require("../../assets/images/content-image.jpg")}
                    style={rohaniDokan.image}
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

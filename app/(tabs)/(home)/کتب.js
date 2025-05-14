import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomBackground from "../../../components/Background/Background";
const { width } = Dimensions.get("window");
export default function TitleScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    fetch(
      "https://rohaniyatweb-production-99fc.up.railway.app/api/card-data/get-table-data?tableName=qutb"
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
      <View style={styles.container}>
        {loading ? (
          <View style={styles.centerContent}>
            <ActivityIndicator size="large" color="#6C472D" />
          </View>
        ) : data.length === 0 ? (
          <View style={styles.centerContent}>
            <Text style={styles.noDataText}>کوئی ریکارڈ موجود نہیں ہے</Text>
          </View>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2} // 2 کالم
            columnWrapperStyle={{ justifyContent: "space-between" }} // کالمز کے بیچ میں gap
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.card}
                onPress={() =>
                  navigation.navigate("کتاب کی تفصیل", {
                    id: item.id,
                  })
                }
              >
                  
                
          {data?.image ? (
            <Image
              source={{ uri: data.image }}
              style={styles.image}
              resizeMode="contain"
            />
          ):  <Image
                  source={require("../../../assets/images/book.webp")}
                  style={styles.image}
                  resizeMode="cover"
                />}
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </CustomBackground>
  );
}
const CARD_MARGIN = 15;
const CARD_WIDTH = (width - CARD_MARGIN * 3) / 2; // Dynamic 2 card width with margin
const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 1.1,
    backgroundColor: "#E4DAC1",
    borderRadius: 5,
    overflow: "none",
    gap:20,
    marginBottom:'14',
  },
  image: {
    width: "100%",
    height: "100%", 
    borderRadius: 5, 
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    margin: 8,
  },
  content: {
    fontSize: 14,
    color: "#666",
    marginHorizontal: 8,
  },
});

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomBackground from "../../../components/Background/Background";


export default function TitleScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetch(
      "https://rohaniyatweb-production-99fc.up.railway.app/api/card-data/get-table-data?tableName=wazaif"
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
      <View>
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
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.card}
                onPress={() =>
                  navigation.navigate("وَظَائف کی تفصیل", {
                    id: item.id,
                  })
                }
              >
                <Text style={styles.text}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    fontSize: 18,
    color: "#6C472D",
    fontWeight: "600",
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "#E4DAC1",
    paddingVertical: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "center",
  },
});

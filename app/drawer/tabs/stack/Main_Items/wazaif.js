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
import CustomBackground from "../../../../../components/Background/Background";

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
        console.log(result.rows, "get from db");

        setData(result.rows);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);
  // console.log(data.rows[0].title, "get from db");
  return (
    <CustomBackground>
      <View>
        {loading ? (
          <ActivityIndicator size="large" color="#6C472D" />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => {
              return item ? (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() =>
                    navigation.navigate("WazaifDetail/wazaifDetail", {
                      id: item.id,
                    })
                  }
                >
                  <Text style={styles.text}>{item && item.title}</Text>
                </TouchableOpacity>
              ) : null;
            }}
          />
        )}
      </View>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  card: {
    width: 300,
    backgroundColor: "#E4DAC1",
    paddingVertical: 15,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
  },
});

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
        setData(result.rows);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);
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
                    navigation.navigate(
                      "rohani_ilaj/jadu_jinnat_ilaaj_detail",
                      {
                        id: item.id,
                      }
                    )
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
  list: {
    // alignItems: "center",
    // justifyContent: "center",
    // flexGrow: 1,
    // width: "100%", // full width
  },
  card: {
    flexGrow: 1,
    width: "100%", // full width
    backgroundColor: "#E4DAC1",
    paddingVertical: 15,
    paddingHorizontal: 20, // horizontal padding for text inside
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6C472D",
    textAlign: "center",
  },
});

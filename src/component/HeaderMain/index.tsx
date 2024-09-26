import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Entypo from "@expo/vector-icons/Entypo";

const index = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }}
        />
        <View style={styles.headerOneView}>
          <Text style={{ fontWeight: 600, fontSize: 16 }}>Home</Text>
          <Text
            style={{
              fontWeight: 500,
              fontSize: 11.5,
              color: "#6E7480",
              marginLeft: 6,
              marginRight: 2,
            }}
          >
            Kemalpaşa Blv. Ataşehir Mah...
          </Text>
          <Entypo name="chevron-right" size={22} color="#58983B" />
        </View>
        <View style={styles.headerTwo}>
          <Text style={{ fontSize: 10, fontWeight: "bold", color: "#FFF" }}>
            TVS
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FFF" }}>
            13<Text style={{ fontSize: 16 }}>dk</Text>
          </Text>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default index;

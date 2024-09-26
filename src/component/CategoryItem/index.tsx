import React from "react";
import { TouchableOpacity, Image, Text, Dimensions } from "react-native";
import { Category } from "../../models";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

type categoryItemProps = {
  item: Category;
};

const index = ({ item }: categoryItemProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CategoryDetails")}
      style={{
        width: width * 0.25,
        height: width * 0.24,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
      }}
    >
      <Image
        style={{ width: width * 0.18, height: width * 0.18, borderRadius: 10 }}
        source={{ uri: item.src }}
      />
      <Text style={{ fontSize: 12, color: "#616161", fontWeight: "500" }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default index;

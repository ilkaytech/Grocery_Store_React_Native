import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import categoriesGetir from "../../../assets/categoriesGetir";
import CategoryItem from "../CategoryItem";
import { Category } from "../../models";

const index = () => {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);

  return (
    <View>
      <View style={styles.listController}>
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listController: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
});

export default index;

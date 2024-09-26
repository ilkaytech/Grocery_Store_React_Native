import React from "react";
import { ScrollView } from "react-native";
import HeaderMain from "../../component/HeaderMain";
import BannerCarousel from "../../component/BannerCarousel";
import MainCategories from "../../component/MainCategories";

const index = () => {
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <HeaderMain />
      <BannerCarousel />
      <MainCategories />
    </ScrollView>
  );
};

export default index;

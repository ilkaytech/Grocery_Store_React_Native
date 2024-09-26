import React, { useState } from "react";
import { FlatList, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("window");

const Index = () => {
  const [banners, setBanners] = useState([
    require("../../../assets/banner.png"),
    require("../../../assets/banner1.png"),
    require("../../../assets/banner3.png"),
    require("../../../assets/banner4.png"),
  ]);

  return (
    <FlatList
      data={banners}
      renderItem={({ item }) => (
        <Image
          source={item}
          style={{ width: width, height: height * 0.25, resizeMode: "stretch" }}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      snapToAlignment={"center"}
      decelerationRate={"fast"}
    />
  );
};

export default Index;

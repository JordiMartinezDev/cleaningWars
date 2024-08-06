import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const CustomIcon = ({ icon, size, color }) => {
  const [isFontAwesome, setIsFontAwesome] = useState(false);
  const [isAntDesign, setIsAntDesign] = useState(false);
  const [isMaterialIcons, setIsMaterialIcons] = useState(false);

  //not optimized but the idea is...
  useEffect(() => {
    if (icon == "baby" || icon == "baby-carriage") setIsFontAwesome(true);
    if (icon == "local-laundry-service") setIsMaterialIcons(true);
  }, []);

  return (
    <>
      {isFontAwesome && <FontAwesome5 name={icon} size={size} color={color} />}
      {isMaterialIcons && (
        <MaterialIcons name={icon} size={size} color={color} />
      )}
    </>
  );
};

export default CustomIcon;

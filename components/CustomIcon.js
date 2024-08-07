import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const iconMap = {
  baby: FontAwesome5,
  baby: FontAwesome5,
  dog: FontAwesome5,
  toilet: FontAwesome5,
  checkroom: MaterialIcons,
  iron: MaterialCommunityIcons,
  broom: MaterialCommunityIcons,
  suitcase: Entypo,
  trash: Entypo,
  tree: Entypo,
  cart: EvilIcons,
  "baby-carriage": FontAwesome5,
  "kitchen-set": FontAwesome6,
  "local-laundry-service": MaterialIcons,
  "iron-board": MaterialCommunityIcons,

  // Add more mappings here as needed
};

const CustomIcon = ({ icon, size, color }) => {
  const IconComponent = iconMap[icon];
  return IconComponent ? (
    <IconComponent name={icon} size={size} color={color} />
  ) : null;
};

export default CustomIcon;

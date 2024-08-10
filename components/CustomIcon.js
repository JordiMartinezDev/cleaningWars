import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

const iconMap = {
  baby: FontAwesome5,
  baby: FontAwesome5,
  dog: FontAwesome5,
  toilet: FontAwesome5,
  trash: FontAwesome5,
  tshirt: FontAwesome5,
  checkroom: MaterialIcons,
  iron: MaterialCommunityIcons,
  broom: MaterialCommunityIcons,
  dresser: MaterialCommunityIcons,
  dishwasher: MaterialCommunityIcons,
  tool: Feather,
  suitcase: Entypo,
  tree: Entypo,
  bowl: Entypo,
  cart: EvilIcons,
  bed: Ionicons,
  "baby-carriage": FontAwesome5,
  "shopping-cart": FontAwesome5,
  "kitchen-set": FontAwesome6,
  "square-check": FontAwesome6,
  "circle-check": FontAwesome6,
  "local-laundry-service": MaterialIcons,
  "dry-cleaning": MaterialIcons,
  "dresser-outline": MaterialCommunityIcons,
  "iron-board": MaterialCommunityIcons,
  "silverware-clean": MaterialCommunityIcons,
  "pot-mix": MaterialCommunityIcons,

  // Add more mappings here as needed
};

const CustomIcon = ({ icon, size, color }) => {
  const IconComponent = iconMap[icon];
  return IconComponent ? (
    <IconComponent name={icon} size={size} color={color} />
  ) : null;
};

export default CustomIcon;

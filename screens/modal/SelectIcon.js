import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import AddOrCancelHeader from "../../components/AddOrCancelHeader";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import CustomIcon from "../../components/CustomIcon";
import { useDispatch } from "react-redux";
import { setIcon } from "../../context/redux/slicers/iconSlicer";
import iconList from "../../data/iconList.json";

const SelectIcon = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <>
      <AddOrCancelHeader goBack={navigation.goBack} />
      <Divider />
      <ScrollView>
        <View style={styles.grid}>
          {iconList.map((icon) => {
            const isSelected = selectedIcon === icon.id;
            return (
              <View
                style={[
                  styles.iconContainer,
                  isSelected && styles.selectedIconContainer,
                ]}
                key={icon.id}
              >
                <Pressable
                  onPress={() => {
                    setSelectedIcon(icon.id);
                    dispatch(setIcon({ iconId: icon.id, iconName: icon.name }));
                    navigation.navigate("newTask");
                  }}
                  style={({ pressed }) => [
                    {
                      opacity: pressed ? 0.5 : 1,
                    },
                  ]}
                >
                  <CustomIcon
                    icon={icon.name}
                    size={48}
                    color={isSelected ? "blue" : "black"}
                  />
                </Pressable>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default SelectIcon;

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding: 10,
  },
  iconContainer: {
    width: "22%", // Ensure there are 4 icons per row with some spacing
    margin: "1.5%",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  selectedIconContainer: {
    borderColor: "blue",
    borderWidth: 2,
  },
});

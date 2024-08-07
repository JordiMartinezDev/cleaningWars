import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import AddOrCancelHeader from "../../components/AddOrCancelHeader";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import CustomIcon from "../../components/CustomIcon";
import { useDispatch } from "react-redux";
import { setIcon } from "../../context/redux/slicers/iconSlicer";
import iconList from "../../data/iconList.json";

const SelectIcon = () => {
  const [selectedIcon, setSelectedIcon] = useState(0);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <>
      <AddOrCancelHeader goBack={navigation.goBack} />
      <Divider />
      <ScrollView>
        <View style={styles.grid}>
          {iconList.map((icon) => {
            return (
              <View style={styles.iconContainer} key={icon.id}>
                <Pressable
                  onPress={() => {
                    dispatch(setIcon({ iconId: icon.id, iconName: icon.name }));
                    navigation.navigate("newTask");
                  }}
                >
                  <CustomIcon icon={icon.name} size={48} color={"black"} />
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
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  iconContainer: {
    width: "15%",
    margin: "5%",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 4,
    elevation: 8,
    //Shadow on iOS
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
});

import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

const WriteHeader = ({ navigation, saveProps }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.goBack();
        }}
        hitSlop={{ top: 32, bottom: 32, left: 32, right: 32 }}
      >
        <Ionicons name="ios-arrow-back" size={25} />
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          hitSlop={{ top: 2, bottom: 2, left: 2, right: 2 }}
        >
          <Ionicons name="ios-image" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            saveProps();
          }}
          hitSlop={{ top: 2, bottom: 2, left: 2, right: 2 }}
        >
          <Ionicons name="ios-save" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  iconContainer: {
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between"
  }
});

export default withNavigation(WriteHeader);

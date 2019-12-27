import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class MainScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <MaterialCommunityIcons
        name="calender-multiselect"
        size={30}
        style={{ color: tintColor }}
      />
    )
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.textstyle}>Main Screen</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  textstyle: {
    fontSize: 40
  }
});

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class WriteScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <MaterialCommunityIcons
        name="lead-pencil"
        size={30}
        style={{ color: tintColor }}
      />
    ),
    tabBarOnPress = ({navigation}) => {
      navigation.navigate('Write')
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.textstyle}>Write Screen</Text>
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

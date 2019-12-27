import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import MainScreen from "./screens/MainScreen";
import DetailScreen from "./screens/DetailScreen";
import WriteScreen from "./screens/WriteScreen";

const BaseNavi = createBottomTabNavigator({
  MainScreen: {
    screen: MainScreen
  },
  DetailScreen: {
    screen: DetailScreen
  },
  WriteScreen: {
    screen: WriteScreen
  }
});

const MyNavi = createAppContainer(BaseNavi);
export default function App() {
  return (
    <View style={styles.container}>
      <MyNavi />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

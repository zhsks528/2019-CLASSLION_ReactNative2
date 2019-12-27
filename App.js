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

const BaseNavi = createBottomTabNavigator(
  {
    MainScreen: {
      screen: MainScreen
    },
    DetailScreen: {
      screen: DetailScreen
    },
    WriteScreen: {
      screen: WriteScreen
    }
  }
  /* 아이콘만 보여주고 싶을 때  */
  // tabBarOptions: {
  //   showLabel: false
  // }
);

const BaseNavi2 = createStackNavigator(
  {
    Write: WriteScreen,
    Tab: BaseNavi
  },
  {
    initialRouteName: "Tab"
    // mode : 'modal' iOS 만 설정
    // headerMode: "screen"
  }
);

const MyNavi = createAppContainer(BaseNavi2);
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

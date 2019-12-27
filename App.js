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
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BaseNavi = createBottomTabNavigator({
  MainScreen: {
    screen: MainScreen
  },
  DetailScreen: {
    screen: DetailScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons
          name="calender-multiselect"
          size={30}
          style={{ color: tintColor }}
        />
      )
    }
  },
  WriteScreen: {
    screen: WriteScreen
  }

  /* 아이콘만 보여주고 싶을 때  */
  // tabBarOptions: {
  //   showLabel: false
  // }
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

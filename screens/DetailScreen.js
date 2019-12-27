import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DetailHeader from "../components/DetailHeader";
import NullPage from "../components/NullPage";

const { width, height } = Dimensions.get("window");

export default class DetailScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <MaterialCommunityIcons
        name="book-open-page-variant"
        size={30}
        color={tintColor}
      />
    )
  };

  post = this.props.navigation.getParam("post");

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <DetailHeader />
        {this.post ? (
          <View>
            <View style={styles.detailbox}>
              <Text style={styles.detailtitle}>제목 : {this.post.title}</Text>
            </View>
            <View style={styles.detailbox}>
              <Text style={styles.detailcontent}>
                내용 : {this.post.content}
              </Text>
            </View>
          </View>
        ) : (
          <NullPage />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  },
  textstyle: {
    fontSize: 40
  },
  detailbox: {
    marginVertical: 30,
    marginLeft: 30,
    borderLeftColor: "grey",
    borderLeftWidth: 5,
    paddingLeft: 20
  },
  detailtitle: {
    fontSize: 40
  },
  detailcontent: {
    fontSize: 20
  }
});

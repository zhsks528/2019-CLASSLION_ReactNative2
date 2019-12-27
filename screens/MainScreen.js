import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";

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

  state = {
    selectedDate: "",
    Posts: [
      {
        title: "12월 27일에 쓴 글 1",
        content: "본문2",
        date: "2019-12-27"
      },
      {
        title: "12월 27일에 쓴 글 2",
        content: "본문2",
        date: "2019-12-27"
      }
    ]
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Calendar
          onDayPress={day => {
            this.setState((this.state.selectedDate = day));
          }}
          current={new Date()}
        />
        <ScrollView>
          <FlatList
            data={this.state.Posts.filter(data => {
              return data.date == this.state.selectedDate.dateString;
            })}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={styles.listitem}
                  onPress={() => {
                    this.props.navigation.navigate("Detail", { post: item });
                  }}
                >
                  <View>
                    <Text style={styles.listtext}>제목 : {item.title}</Text>
                    <Text style={styles.listtext}>내용 : {item.content}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  listitem: {
    marginLeft: 50,
    marginTop: 20,
    borderLeftColor: "black",
    borderLeftWidth: 4,
    paddingLeft: 30
  },
  container: {
    flex: 1,
    paddingTop: 100
  },
  textstyle: {
    fontSize: 40
  },
  listtext: {
    fontSize: 20
  }
});

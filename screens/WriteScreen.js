import React, { Component } from "react";
import { StyleSheet, View, Dimensions, TextInput } from "react-native";
import { SafeAreaView } from "react-navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Writeheader from '../components/WriteHeader';

const { width, height } = Dimensions.get('window');

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
        <View style={styles.contentContainer}>
        <Writeheader />
        <TextInput
          placeholder="제목을 입력하세요"
          style={styles.title}
          returnKeyType="done" />
        <TextInput 
          placeholder="내용을 입력하세요"
          multiline={true}
          style={styles.content} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems : 'center',
    paddingTop : 50
  },
  contentContainer : {
    width: width - 60,
  },
  title : {
    marginVertical : 30,
    fontSize : 30,
    paddingBottom : 12,
    borderBottomWidth : 2,
  },
  content : {
    fontSize : 20
  }

});

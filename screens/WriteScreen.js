import React, { Component } from "react";
import { StyleSheet, View, Dimensions, TextInput } from "react-native";
import { SafeAreaView } from "react-navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Writeheader from '../components/WriteHeader';
import uuid from "uuid/v1";

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
      navigation.navigate('Write');
    }
  };

  state = {
    inputtitle : "",
    inputcontent : ""
  }

  _changetitle = (value) => {
    this.setState({
      inputtitle : value
    })  
  }

  _changecontent = (value) => {
    this.setState({
      inputcontent : value
    })  
  }

  
  _gettoday = () => {
    tyear = new Date().getFullYear().toString();
    tmonth = (new Date().getMonth()+1).toString();
    tday = new Date().getDay().toString();

    if (parseInt(tmonth) < 10){
      tmonth = '0' + tmonth;
    }

    if (parseInt(tday) < 10){
      tday = '0' + tday;
    }

    return (tyear + "-" + tmonth + "-" + tday)
  }

  _saveText = () => {
    if (this.state.inputtitle !== ''){
      const id = uuid();
      const date = this._gettoday()
      const newpost = {
        id : id,
        title : this.state.inputtitle,
        content : this.state.inputcontent,
        date : date,
      }
      this.setState({
        inputtitle : '',
        inputcontent : ''
      })
      this.props.navigation.navigate('MainScreen', {myparam : newpost});
    }
    else {
      this.props.navigation.navigate('MainScreen');
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Writeheader saveProps={this._saveText}/>
          <TextInput
            onChangeText={this._changetitle}
            value={this.state.inputtitle}
            placeholder="제목을 입력하세요"
            style={styles.title}
            returnKeyType="done" />
          <TextInput
            onChangeText={this._changecontent}
            value={this.state.inputcontent}
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

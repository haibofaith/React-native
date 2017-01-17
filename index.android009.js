import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Picker, 
} from 'react-native';

var PickerDemo = React.createClass({
  getInitialState(){
    return{
        language:'',
    };
  },

  render: function() {
    return (
      <View style = {styles.container}>
        <Text>
          Picker选择器
        </Text>
        <Picker
          prompt="请选择编程语言"
          style={{width:200}}
          selectedValue={this.state.language}
          onValueChange={(value) => this.setState({language:value})}
          >
          <Picker.Item label="Java" value="java"/>
          <Picker.Item label="JavaScript" value="JavaScript"/>
        </Picker>  
        <Text>当前选择的是：{this.state.language}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
AppRegistry.registerComponent('HelloWorld', () => PickerDemo);
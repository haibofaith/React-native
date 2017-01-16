import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

var HelloWor = React.createClass({
  render: function() {
    return (
      /**
      TextInput组件设置高度40,边框粗细和边框的颜色，切可以输入多行信息。
      第二个TextInput设置左右额边距以及自动获取到焦点。
      第三个TextInput设置不可编辑状态。
      */
      <View style = {styles.container}>
          <Text style = {styles.titleBase}>Welcome To React Native</Text>
          <TextInput style = {{height:40,borderColor:'red',borderWidth:1}} multiline={true} defaultValue='默认信息1'/>
          <TextInput style = {{marginLeft:10,marginRight:10}} autoFocus={true} defaultValue='默认信息2'/>
          <TextInput editable={false} defaultValue='默认信息3'/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#F5FCFF',
  },
  titleBase :{
    margin:10,
    textAlign:'center',
    color:'red',
    fontSize:28,
    fontFamily:'Cochin'
  },
});
AppRegistry.registerComponent('HelloWorld', () => HelloWor);
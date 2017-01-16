import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

var HelloWor = React.createClass({
  render: function() {
    return (
      <View style = {{marginLeft:10,marginRight:10}}>
          <Text style = {styles.titleBase}>测试本地图片</Text>
          //注意本地路径地址，根目录为HelloWorld项目文件夹
          <Image source = {require('./android/img/my_icon.jpg')}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  titleBase :{
    margin:10,
    textAlign:'center',
    color:'red',
    fontSize:28,
    fontFamily:'Cochin'
  },
});
AppRegistry.registerComponent('HelloWorld', () => HelloWor);
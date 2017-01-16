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
          /**
          *1. 注意本地路径地址，根目录为HelloWorld项目文件夹(此注释不能放在view内部)
          */
      <View style = {{marginLeft:10,marginRight:10}}>
          <Text style = {styles.titleBase}>测试本地图片</Text>
          <Image source = {require('./android/img/my_icon.jpg')}  style = {{width:40,height:40}}/>
          <Text style = {styles.titleBase}>测试app资源文件</Text>
          <Image source = {{uri:'ic_launcher'}} style = {{width:40,height:40}}/>
          <Text style = {styles.titleBase}>测试加载网络图片</Text>
          <Image source = {{uri:'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D200/sign=8e07ecabb7fb4316051f7d7a10a54642/5882b2b7d0a20cf482c772bf73094b36acaf997f.jpg'}} style = {{width:100,height:100}}/>
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
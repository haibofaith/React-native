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
      <Text style = {styles.titleBase}>
      I am root text!
        <Text style = {styles.title}>
          I am child Text!
        </Text>
      </Text>
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
  title:{
    color:'green',
    fontWeight:'bold',
  },
});
AppRegistry.registerComponent('HelloWorld', () => HelloWor);

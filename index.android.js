import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
} from 'react-native';

var HelloWor = React.createClass({
  render: function() {
    return (
      <View style={styles.first_view}>
        <View style={styles.second_view}>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  first_view:{
    flexDirection:'row',
    height:100,
    margin:20
  },
  second_view:{
    backgroundColor:'blue',
    flex:1
  },
});
AppRegistry.registerComponent('HelloWorld', () => HelloWor);

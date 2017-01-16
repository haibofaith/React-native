import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  DrawerLayoutAndroid,
  StyleSheet,
} from 'react-native';

var DrawerLayoutDemo = React.createClass({
render: function() {
    var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Im in the Drawer!</Text>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>功能1</Text>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>功能2</Text>
    </View>
  );
  return (
    <DrawerLayoutAndroid
      drawerWidth={150}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
      </View>
    </DrawerLayoutAndroid>
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
    fontSize:12,
    fontFamily:'Cochin'
  },
});
AppRegistry.registerComponent('HelloWorld', () => DrawerLayoutDemo);
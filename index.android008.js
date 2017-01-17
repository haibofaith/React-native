import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Switch, 
} from 'react-native';

var ToolBarAndroid = React.createClass({
  getInitialState(){
    return{
        trueSwitchIsOn: true,
        falseSwitchIsOn: false,
    };
  },

  render: function() {
    return (
      <View style = {styles.container}>
        <Text>
          Switch实例
        </Text>
        <Switch
          disabled = {true}
          onValueChange={(value) => this.setState({falseSwitchIsOn:value})}
          style={{marginBottom:10,marginTop:10}}
          value={this.state.falseSwitchIsOn} />
        <Switch
          disabled = {false}
          onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
          value={this.state.trueSwitchIsOn} />
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
AppRegistry.registerComponent('HelloWorld', () => ToolBarAndroid);
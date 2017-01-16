import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  ProgressBarAndroid,
  StyleSheet,
} from 'react-native';

//第一种写法
var ProgressBarDemo = React.createClass({
render: function() {
    return (
      /**
      不同风格的progressBar
      1.Inverse 旋转
      2.indeterminate进度条
      3.indeterminate滚动的进度条
      4.SmallInverse 小旋转
      5.LargeInverse 大旋转
      */
      <View style = {styles.container}>
          <Text style = {styles.titleBase}>ProgressBarAndroid控件实例</Text>
          <ProgressBarAndroid  color="blue" styleAttr='Inverse'/>
          <ProgressBarAndroid  color="green" styleAttr='Horizontal' progress={0.2} 
            indeterminate={false} style={{marginTop:10}}/>
          <ProgressBarAndroid color="green" styleAttr='Horizontal' indeterminate={true} style={{marginTop:10}}/>
          <ProgressBarAndroid  color="black" styleAttr='SmallInverse'
            style={{marginTop:10}}/>
            <ProgressBarAndroid  styleAttr='LargeInverse'
            style={{marginTop:10}}/>
      </View>
    );
  }
});

/**
第二种写法：注意：此处继承Component后，render后面不再加function
class ProgressBarDemo extends Component {
  render() {
    return (
      <View >
        <Text>
            ProgressBarAndroid控件实例
        </Text>
        <ProgressBarAndroid  color="red" styleAttr='Inverse'/>
        <ProgressBarAndroid  color="green" styleAttr='Horizontal' progress={0.2} 
            indeterminate={false} style={{marginTop:10}}/>
        <ProgressBarAndroid  color="green" styleAttr='Horizontal'
            indeterminate={true} style={{marginTop:10}}/>
        <ProgressBarAndroid  color="black" styleAttr='SmallInverse'
            style={{marginTop:10}}/>
        <ProgressBarAndroid  styleAttr='LargeInverse'
            style={{marginTop:10}}/>
      </View>
    );
  }
}
*/

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
AppRegistry.registerComponent('HelloWorld', () => ProgressBarDemo);
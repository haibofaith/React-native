import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  ViewPagerAndroid, 
} from 'react-native';

var ViewPagerDemo = React.createClass({
  /**定义变量*/
  getInitialState: function(){
    return {
      page:1,
    };
  },
  
  /**
  *给变量设置数值
  */
  onPageSelected:function(e){
    this.setState({page:1+e.nativeEvent.position});
  },
  render: function() {
    return (
      <View>
        <Text >
          ViewPager
        </Text>
        <ViewPagerAndroid
          style={styles.pageStyle}
          onPageSelected={this.onPageSelected}
          initialPage={0}>
          <View style={{backgroundColor:"red"}}>
                   <Text>First Page!</Text>
             </View>
             <View style={{backgroundColor:"yellow"}}>
                   <Text>Second Page!</Text>
             </View>
             <View style={{backgroundColor:"blue"}}>
                   <Text>Third Page!</Text>
             </View>
        </ViewPagerAndroid>  
        <Text >
          当前第{this.state.page}页
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  pageStyle: {
    padding:20,
    alignItems: 'center',
    height: 200,
  },
});
AppRegistry.registerComponent('HelloWorld', () => ViewPagerDemo);
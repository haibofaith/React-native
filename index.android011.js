import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
} from 'react-native';
//图片资源
var THUMB_URLS = [
  require('./android/img/my_icon.jpg'),
  require('./android/img/my_icon.jpg'),
  require('./android/img/my_icon.jpg'),
  require('./android/img/my_icon.jpg'),
  require('./android/img/my_icon.jpg'),
  require('./android/img/my_icon.jpg'),
  require('./android/img/my_icon.jpg'),
  require('./android/img/my_icon.jpg'),
  ];

var ListViewDemo = React.createClass({
  getInitialState: function(){
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    return {
          dataSource: ds.cloneWithRows(['第1行数据', '第2行数据','第3行数据','第4行数据','第5行数据','第6行数据','第7行数据','第8行数据']),
        };
  },

  _renderRow: function(rowData: string){
    var imgSource = THUMB_URLS[rowID];
    return (
        <View>
          <View style={styles.row}>
            <Image style={styles.imgStyle} source={imgSource} />
            <Text style = {{flex:1,fontSize:16,color:'blue',textAlign:'center'}}>
              {rowData }
            </Text>
          </View>
        </View>
      );
  },

  render: function() {
    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this._renderRow}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textStyle:{
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  imgStyle: {
    width:40,
    height:40,
  },
});
AppRegistry.registerComponent('HelloWorld', () => ListViewDemo);
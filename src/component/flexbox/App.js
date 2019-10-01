import React, { Component } from 'react';
import { View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex:1}}>
          <View style={{flex:1,flexDirection: 'row',width: '100%',top:0}}>
                <View style={{width: '33.3%', height: 50, backgroundColor: 'powderblue'}}>
                </View>
                <View style={{width: '33.4%', height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: '33.3%', height: 50, backgroundColor: 'steelblue'}} />
          </View>
          <View style={{flex:12,flexDirection: 'row',width: '100%',bottom:0}}>
               
          </View>
          <View style={{flex:1,flexDirection: 'row',width: '100%',bottom:0}}>
                <View style={{width: '33.3%', height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: '33.4%', height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: '33.3%', height: 50, backgroundColor: 'steelblue'}} />
          </View>
      </View>
      
      
    );
  }
};

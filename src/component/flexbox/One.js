import React, { Component } from 'react';
import { View } from 'react-native';

export default class One extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection:'row',backgroundColor: 'powderblue'}}>
            <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
            <View style={{flex: 1, backgroundColor: 'blue'}}/>
            <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
        </View>
        <View style={{flex: 10, backgroundColor: 'skyblue'}} />
        <View style={{flex: 1, flexDirection:'row',backgroundColor: 'powderblue'}}>
            <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
            <View style={{flex: 1, backgroundColor: 'blue'}}/>
            <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
        </View>
      </View>
    );
  }
}

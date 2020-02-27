import React, { Component } from 'react';
import { View,  } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  render() {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12]
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'orange'}} />
        <View style={{flex: 1,justifyContent:'center', alignItems:'center' }}>
          <View style={{borderColor:'blue',justifyContent:'center',alignItems:'center', borderWidth:4,borderRadius:600, margin:20, width:180, height:180}}>
            {
              arr.map((item, key)=>(
                <View style={{transform:[{ rotateZ: `${15*key}deg` }],position:'absolute', backgroundColor:'blue', height:180, width:2}}></View>
              ))
            }
            <View style={{position:'absolute', zIndex:2, height:5, width:5, borderRadius:5, backgroundColor:'white'}}></View>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: 'green'}} />
      </View>
    );
  }
}

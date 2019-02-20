/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Alert, AppRegistry} from 'react-native';



export default class App extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <View style={{ flex:1,backgroundColor: 'powderblue' }}>
            <View style={{align:'center', margin:16}}>
              <Button title={'powderblue'} onPress={() => {Alert.alert('click')}} color={'green'} ></Button>
              <Button title={'powderblue'} onPress={() => {Alert.alert('click')}} color={'green'} ></Button>
              <Text>Hello {this.props.name}</Text>
            </View>
          </View>
          <View style={{ flex:1,backgroundColor: 'skyblue' }}></View>
          <View style={{ flex:1,backgroundColor: 'steelblue' }}></View>
        </View >
    )
  }
}

// AppRegistry.registerComponent(appName, () => MyView);

// const styles = StyleSheet.create({
//   title: {
//     textAlign: 'center',
//     color: 'green',
//     fontSize: 30
//   }
// })



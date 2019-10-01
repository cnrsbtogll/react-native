import React, {Component} from 'react';
import {StyleSheet, Text,View} from 'react-native';
export default class Header extends Component {
  render() {
      const{header,headerText}=styles;
    return (
      <View style={header}>
        <Text style={headerText}>{this.props.headerText}</Text>
      </View>
    );
  }
  
}
const styles = StyleSheet.create({
header: {
    height: 80,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

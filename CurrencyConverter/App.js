/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,  
  StatusBar,  
} from 'react-native';
import Header from './src/components/header';

export default class App extends Component {
  constructor(props) {
    super(props);    
  }
 
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <Header headerText='Currency Converter'/>
          <View style={styles.contentWrapper}></View> 
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  contentWrapper: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonWrapper:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    
  },
  input: {
    height: 40,
  },
  simpleText: {
    height: 30,
    fontSize: 14,
  },
  
});

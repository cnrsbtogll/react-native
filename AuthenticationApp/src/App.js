import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import firebase from 'firebase';
import Banner from './components/banner';
import LoginForm from './components/loginForm';
import {Spinner, MyButton} from './components/common';

export default class App extends Component {
  state = {
    loggedIn: null,
  };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBvFUuxK5ZBL-nLEP7yRcYlJUgLoK8Id60',
      authDomain: 'authentication-4de89.firebaseapp.com',
      databaseURL: 'https://authentication-4de89.firebaseio.com',
      projectId: 'authentication-4de89',
      storageBucket: '',
      messagingSenderId: '17694656237',
      appId: '1:17694656237:web:ed2936517cc6022649aee4',
      measurementId: 'G-3VTWBKG0RG',
    });
    firebase.auth().onAuthStateChanged(user => {
      const loggedIn = user ? true : false;
      this.setState({
        loggedIn: loggedIn,
      });
    });
  }
  renderContet() {
    const {loggedIn} = this.state;

    switch (loggedIn) {
      case true:
        return (<MyButton spinner={false} onPress={()=>firebase.auth().signOut()} title="Logout" color="#E87B79"></MyButton>)
        
      case false:
        return (<LoginForm></LoginForm>)

      default:
        return (<Spinner></Spinner>)
    }
  }
  render() {
    return (
      <ScrollView style={styles.appContainer}>
        <Banner text="Authentication"></Banner>
        {this.renderContet()}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#f3f3f3',
    flex: 1,
  },
});

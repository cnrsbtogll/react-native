import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/loginForm'

export default class App extends Component {
  componentDidMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyD5FhptRcmEJyurmIrFEzDNDrbAL2UZuIE",
      authDomain: "twitterklon-d9b2f.firebaseapp.com",
      databaseURL: "https://twitterklon-d9b2f.firebaseio.com",
      projectId: "twitterklon-d9b2f",
      storageBucket: "",
      messagingSenderId: "18606348536",
      appId: "1:18606348536:web:dd2e55646c77c8c778830d",
      measurementId: "G-7N55HJYFL9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
  }
  render() {
    const store=createStore(reducers,{},  applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <View style={{flex:1, backgroundColor:'#ddd', justifyContent:'center'}}>
          <LoginForm></LoginForm>
        </View>
      </Provider>
    );
  }
}

import React, { Component } from 'react';
import {KeyboardAvoidingView, View, StyleSheet} from 'react-native';
import firebase from 'firebase';
import Banner from './components/banner';
import LoginForm from './components/loginForm';

export default class App extends Component {
    componentDidMount(){
        firebase.initializeApp(
            {
                apiKey: "AIzaSyBvFUuxK5ZBL-nLEP7yRcYlJUgLoK8Id60",
                authDomain: "authentication-4de89.firebaseapp.com",
                databaseURL: "https://authentication-4de89.firebaseio.com",
                projectId: "authentication-4de89",
                storageBucket: "",
                messagingSenderId: "17694656237",
                appId: "1:17694656237:web:ed2936517cc6022649aee4",
                measurementId: "G-3VTWBKG0RG"
              }
        )
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.appContainer}>
                <Banner text='Authentication'></Banner>
                <LoginForm></LoginForm>
            </KeyboardAvoidingView>
        )
    }
}
const styles=StyleSheet.create({
    appContainer:{
        backgroundColor:'#f3f3f3',
        flex:1,
    }
})

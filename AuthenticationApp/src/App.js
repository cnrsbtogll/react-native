import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Banner from './components/banner';
import LoginForm from './components/loginForm';

export default class App extends Component {
    render() {
        return (
            <View style={styles.appContainer}>
                <Banner text='Authentication'></Banner>
                <LoginForm></LoginForm>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    appContainer:{
        backgroundColor:'#f3f3f3',
        flex:1,
    }
})

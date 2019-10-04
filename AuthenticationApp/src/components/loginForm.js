import React, { Component } from 'react';
import {KeyboardAvoidingView,View,Button,Text,StyleSheet} from 'react-native';
import firebase from 'firebase';
import {Input} from './common';
class LoginForm extends Component {
    state={
        email:'',
        password:'',
        error:'',
    }
    onButtonClicked(){
        const {email,password}=this.state;
        this.setState({
            error:''
        })
        firebase.auth().signInWithEmailAndPassword(email,password).catch((err)=>{
           
            firebase.auth().createUserWithEmailAndPassword(email,password).catch((error)=>{
                
                console.log('hata'); //TODO 
                this.setState({
                    error:'Authentication Failed'
                })
            })
        });
    }
    render() {
        const {error}=this.state;
        const errMsg=error?(
            <Text style={styles.errorStyle}>
                {error}
            </Text>
        ): null;
        
        return (
            <KeyboardAvoidingView style={{padding:30}}>
                <View>
                    <Input text='Email' inputPlaceHolder='Enter Email'
                                onChangeText={(text)=>{
                                this.setState({
                                    email:text
                                })            
                                }}
                                value={this.state.email}/>
                    
                </View>
                <View>
                    <Input text='Password' inputPlaceHolder='Enter Password'
                                onChangeText={(text)=>{
                                this.setState({
                                    password:text
                                })            
                                }}
                                secureTextEntry
                                value={this.state.password}/>
                    
                </View>
                {errMsg}
                <View>
                    <Button onPress={this.onButtonClicked.bind(this)} color='#E87B79' title='Login'></Button>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
const styles=StyleSheet.create({
    errorStyle:{
        fontSize:20,
        color:'red',
        paddingTop:5,
        alignSelf:'center',
    }
})
export default LoginForm;
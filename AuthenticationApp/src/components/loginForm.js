import React, { Component } from 'react';
import {View,Button,Text} from 'react-native';
import {Input} from './common';
class LoginForm extends Component {
    state={
        email:'',
        password:'',
    }
    render() {
        return (
            <View style={{padding:30}}>
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
                                secureTextEntryc
                                value={this.state.password}/>
                    
                </View>
                <View>
                    <Button color='#E87B79' title='Login'></Button>
                </View>
            </View>
        )
    }
}
export default LoginForm;
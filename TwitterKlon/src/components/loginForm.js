import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import firebase from 'firebase';
import {connect} from 'react-redux';
import {Input, MyButton} from './common';
import {emailChanged,passwordChanged,loginUser  } from '../actions';

class LoginForm extends Component {

  onButtonClicked() {
    const {email, password} = this.props;
    
this.props.loginUser(email, password);
  }

  onEmailChanged(text){
    this.props.emailChanged(text);
  }

  onPasswordChanged(text){
    this.props.passwordChanged(text);
  }
  render() {
    const {error, loading} = this.props;
    const errMsg = error ? (
      <Text style={styles.errorStyle}>{error}</Text>
    ) : null;
    
    return (
      <View style={{padding: 30}}>
        <View>
          <Input
            text="Email"
            inputPlaceHolder="Enter Email"
            onChangeText={this.onEmailChanged.bind(this)}
            value={this.props.email}
          />
        </View>
        <View>
          <Input
            text="Password"
            inputPlaceHolder="Enter Password"
            onChangeText={this.onPasswordChanged.bind(this)}
            secureTextEntry
            value={this.props.password}
          />
        </View>
        {errMsg}
        <MyButton spinner={loading} title='Login' onPress={this.onButtonClicked.bind(this)} color='#e87b79'></MyButton>
      </View>
    ) 
  }
}
const styles = StyleSheet.create({
  errorStyle: {
    fontSize: 20,
    color: 'red',
    paddingTop: 5,
    alignSelf: 'center',
  },
});

const mapStateToProps=state=>{
  const {email, password,loading,error}=state.auth;
  return{
    email:email,
    password:password,
    loading:loading,
    error:error,
  }
}
export default connect(mapStateToProps, {emailChanged, passwordChanged,loginUser})(LoginForm);
 
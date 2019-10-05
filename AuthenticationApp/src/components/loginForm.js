import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import firebase from 'firebase';
import {Input, Spinner} from './common';
class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };
  onButtonClicked() {
    const {email, password} = this.state;
    this.setState({
      error: '',
      loading: true,
    });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSucces.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSucces.bind(this))
          .catch(this.onLoginFailed.bind(this))
      });
  }
  onLoginSucces() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
  }
  onLoginFailed() {
    this.setState({
      error: 'Authentication Failed',
      loading: false,
    });
  }
  render() {
    const {error, loading} = this.state;
    const errMsg = error ? (
      <Text style={styles.errorStyle}>{error}</Text>
    ) : null;
    const loginButton = loading ? (
      <Spinner></Spinner>
    ) : (
      <Button
        onPress={this.onButtonClicked.bind(this)}
        color="#E87B79"
        title="Login"></Button>
    );

    return (
      <View style={{padding: 30}}>
        <View>
          <Input
            text="Email"
            inputPlaceHolder="Enter Email"
            onChangeText={text => {
              this.setState({
                email: text,
              });
            }}
            value={this.state.email}
          />
        </View>
        <View>
          <Input
            text="Password"
            inputPlaceHolder="Enter Password"
            onChangeText={text => {
              this.setState({
                password: text,
              });
            }}
            secureTextEntry
            value={this.state.password}
          />
        </View>
        {errMsg}
        <View>{loginButton}</View>
      </View>
    );
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
export default LoginForm;

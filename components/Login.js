import React, { Component } from "react";
import { Text, View, Keyboard, TextInput } from "react-native";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: "please type your text",
      typedPassword: "Password Show"
    };
  }
  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidShow
    );
  }
  _keyboardDidShow() {
    alert("Keyboard Shown");
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
  }
  render() {
    return (
      <View>
        <TextInput
          style={{
            height: 40,
            margin: 20,
            padding: 10,
            borderColor: "gray",
            borderWidth: 1
          }}
          keyboardType="email-address"
          placeholder="Enter your email"
          placeholderTextColor="red"
          onChangeText={text => {
            this.setState(prev => {
              return {
                typedText: text
              };
            });
          }}
          underlineColorAndroid="transparent"
        />
        <Text style={{ marginLeft: 20 }}>{this.state.typedText}</Text>

        <TextInput
          style={{
            height: 40,
            margin: 20,
            padding: 10,
            borderColor: "gray",
            borderWidth: 1
          }}
          keyboardType="default"
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={text => {
            this.setState(prev => {
              return {
                typedPassword: text
              };
            });
          }}
        />
        <Text style={{ marginLeft: 20 }}>{this.state.typedPassword}</Text>
        <TextInput
          style={{
            height: 100,
            margin: 20,
            padding: 10,
            borderColor: "gray",
            borderWidth: 1
          }}
          multiline={true}
          blurOnSubmit={true}
          editable={true}
          returnKeyType="go"
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={text => {
            this.setState(prev => {
              return {
                typedPassword: text
              };
            });
          }}
        />
      </View>
    );
  }
}

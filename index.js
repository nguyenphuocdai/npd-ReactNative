import { AppRegistry, StyleSheet, Text, View } from "react-native";
import App from "./App";
import robot from "./components/robot";
import multipleGreetings from "./components/multipleGreetings";
import TextBlink from "./components/TextBlink";

import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.firstText}>First Text</Text>
        <Text style={styles.secondText}>First Text</Text>
        <Text style={(styles.firstText, styles.secondText)}>First Text</Text>
        <Text style={(styles.secondText, styles.firstText)}>First Text</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#28B463",
    borderWidth: 2,
    borderColor: "#1F618D"
  },
  firstText: {
    margin: 5,
    color: "white"
  },
  secondText: {
    margin: 5,
    color: "yellow",
    fontWeight: "bold",
    fontSize: 20
  }
});

AppRegistry.registerComponent("ReactNativeApp", () => index);

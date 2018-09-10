import React, { Component } from "react";
import { Text, View } from "react-native";

export default class FixedDismension extends Component {
  render() {
    return (
      <View>
        <View style={{ width: 100, height: 200, backgroundColor: "blue" }} />
        <View style={{ width: 200, height: 200, backgroundColor: "yellow" }} />
        <View style={{ width: 300, height: 200, backgroundColor: "blue" }} />
      </View>
    );
  }
}

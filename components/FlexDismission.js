import React, { Component } from "react";
import { Text, View } from "react-native";

export default class FlexDismission extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 20, backgroundColor: "blue" }} />
        <View style={{ flex: 20, backgroundColor: "yellow" }} />
        <View style={{ flex: 120, backgroundColor: "red" }} />
      </View>
    );
  }
}

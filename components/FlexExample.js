import React, { Component } from "react";
import { Text, View } from "react-native";

export default class FlexExample extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column", margin: 20,justifyContent:"flex-start" }}>
        <Text
          style={{
            width: 50,
            height: 50,
            backgroundColor: "red",
            marginRight: 5
          }}
        />
        <Text
          style={{
            width: 50,
            height: 50,
            backgroundColor: "yellow",
            marginRight: 5
          }}
        />
        <Text
          style={{
            width: 50,
            height: 50,
            backgroundColor: "violet",
            marginRight: 5
          }}
        />
        <Text style={{ width: 50, height: 50, backgroundColor: "purple" }} />
      </View>
    );
  }
}

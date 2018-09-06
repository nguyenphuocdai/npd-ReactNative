import React, { Component } from "react";
import { Image } from "react-native";
export default class robot extends Component {
  render() {
    return (
      <Image
        source={{
          uri:
            "https://images-na.ssl-images-amazon.com/images/I/513SMv7R-0L._SY606_.jpg"
        }}
        style={{ width: 300, height: 300 }}
      />
    );
  }
}

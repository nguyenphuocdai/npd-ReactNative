import React, { Component } from "react";
import { Text, View } from "react-native";
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true
    };
    var taskTodo = () => {
      this.setState(previousState => {
        return {
          showText: !previousState.showText
        };
      });
    };
    const timetoBlink = 1000;
    setInterval(taskTodo, timetoBlink);
  }
  render() {
    let textToDisplay = this.state.showText ? this.props.inputText : " ";
    return <Text>{textToDisplay}</Text>;
  }
}
export default class TextBlink extends Component {
  render() {
    return (
      <View>
        <Blink inputText="Hello, How are you?" />
        <Blink inputText="Hello, I am fine" />
      </View>
    );
  }
}

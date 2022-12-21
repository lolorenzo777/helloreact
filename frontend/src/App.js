// app.js
import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from './components/header/header';
import ChatHistory from './components/chathistory/chathistory';
import ChatInput from './components/chatinput/chatinput';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   connect();
  // }

  constructor(props) {
    super(props);
    this.state = {
      chathistory: []
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message")
      this.setState(prevState => ({
        chathistory: [...this.state.chathistory, msg]
      }))
      console.log(this.state);
    });
  }

  send(event) {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chathistory={this.state.chathistory} />
        <ChatInput send={this.send} />
        <button onClick={this.send}>Hit</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./chathistory.scss";
import Message from '../message/message';

class ChatHistory extends Component {
    render() {
        console.log(this.props.chatHistory);
        const messages = this.props.chathistory.map(msg => <Message message={msg.data} />);

        return (
            <div className="ChatHistory">
                <h2>Chat History</h2>
                {messages}
            </div>
        );
    }
}

export default ChatHistory;
import React from 'react';
import ReactDOM from 'react-dom';
import MessageItem from './messageItem.js';

const renderIfData = (messageItems) => {
    if (Session.get("convoType") == "destructive"){
        console.log("Executed");
        //setTimeout(function(){ Meteor.call('convo.delete',Session.get('convoId')); }, 10000);
    }
    if (messageItems && messageItems.length > 0) {
        return messageItems.map((data) => {
            return <MessageItem key={data._id} data={data}/>;
        });
    } else {
        return <p>No messages yet!</p>;
    }
};

const MessageList = React.createClass({
    render() {
        const {messageItems} = this.props;
        return (
            <div id='conversationList'>{renderIfData(messageItems)}</div>
        )
    },
    componentWillUpdate() {
        var node = ReactDOM.findDOMNode(this);
        this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
    },
    componentDidUpdate() {
        if (this.shouldScrollBottom) {
            var node = ReactDOM.findDOMNode(this);
            node.scrollTop = node.scrollHeight
        }
    },
    componentDidMount() {
        var node = ReactDOM.findDOMNode(this);
        node.scrollTop = node.scrollHeight
    }
});

export default MessageList;
import React from 'react';
import ReactDOM from 'react-dom';
import MessageItem from './messageItem.js';

const renderIfData = (messageItems) => {
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
        const {messageItems} = this.props;
        try {
            var explosive = messageItems[0];
        } catch (TypeError) {}
        if(explosive.explosive){
            Meteor.call('convo.delayedDelete', FlowRouter.getParam('convo'));
        }else{
            console.log("No boom");
        }
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
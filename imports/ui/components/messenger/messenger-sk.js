import React from 'react';
import ConversationList from './conversationList'
import MessageList from './messageList.jsx'


const skMessenger = () => ({


    render() {
        return (
            <div className="messenger-card-contain">
                <div id="messenger-card" className="card">
                    <div className="messenger-title-bar row">
                        <div id="messenger-title" className="col-xs-12 col-sm-6  col-md-5 col-lg-4">
                            <h4>Conversations</h4>
                        </div>
                        <div id="messenger-title" className="hidden-xs-down col-sm-6 col-md-5 col-lg-6">
                            <h4>Title-2</h4>
                        </div>
                        <div id="messenger-title" className="hidden-sm-down col-md-2 hidden-xs">
                            <h4>Title-3</h4>
                        </div>
                    </div>
                    <div className="row messenger-body">
                        <div id="convoListContain" className="col-xs-12 col-sm-6 col-md-5 col-lg-4">
                            <ConversationList/>
                        </div>
                        <div id="messageListContain" className="col-xs-12 col-sm-6 col-md-5 col-lg-6">
                            <MessageList/>
                        </div>
                        <div className="hidden-sm-down col-md-2">
                            <h4>Col-3</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default skMessenger;

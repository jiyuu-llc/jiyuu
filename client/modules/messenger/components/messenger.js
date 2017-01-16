import React from 'react';
import ConversationList from '../containers/conversationList.js'
import MessageList from '../containers/messageList.js'
import NewMsgPop from './newMsgPop.js'
import NewDMsgPop from './newDMsgPop';

const sendMsg = () => {
    const text = $("#messageInput").val();
    const convoId = FlowRouter.getParam('convo');
    const uploader = new Slingshot.Upload("myFileUploads");
    try {
        var file = document.getElementById('uploadr').files[0];
    } catch (TypeError){}

    if (file) {
        uploader.send(file, (error, downloadUrl) => {
            if (!error) {
                Meteor.call('msg.send', convoId, text, downloadUrl, file.type);
                console.log("Success");
                $("#messageInput").val('');
            } else {
                // Log service detailed response
                console.error('Error uploading', uploader.xhr.response);
                alert(error);
            }
        });
    }else{
        const data = "";
        var dataType = "text";
        Meteor.call('msg.send', convoId, text, data, dataType);
        $("#messageInput").val("");
    }
};

const Messenger = () => ({

    newMsg(){
        $("#newMsgPop").modal("toggle");
    },
    
    dMsgPop(){
        $("#newDMsgPop").modal("toggle");
    },


    render() {
        return (
            <div className="messenger-card-contain">
            <div id="messenger-card" className="card">
                <div className="messenger-title-bar row">
                    <div id="messenger-title" className="col-xs-12 col-sm-6  col-md-5 col-lg-4">
                        <h3 id="newMsgBtn" onClick={this.newMsg.bind(this)}><i className="fa fa-pencil-square-o" aria-hidden="true"/></h3>
                        <div id="dMsg" onClick={this.dMsgPop.bind(this)}>
                            <i className="fa fa-user-secret" aria-hidden="true"/>
                        </div>
                    </div>
                    <div id="messenger-title" className="hidden-xs-down col-sm-6 col-md-5 col-lg-6">
                        <h4></h4>
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
                        <div className="msg-input-contain">


                            <button type="button" id="uploadButton" className="btn btn-info-outline btn-contain">
                                <i className="fa fa-plus-square" aria-hidden="true"/>
                                <input id="uploadr" size="100" type="file" className="input-overlay"/>
                            </button>
                            <input type="text" className="form-control" id="messageInput" placeholder="Enter a message."/>
                            <button type="button" id="sendButton" onClick={sendMsg.bind(this)} className="btn btn-info-outline">Send</button>
                        </div>
                    </div>
                    <div className="hidden-sm-down col-md-2">
                        <h4>Col-3</h4>
                    </div>
                </div>
            </div>
              <NewMsgPop/>
              <NewDMsgPop/>
            </div>
        );
    }
});

export default Messenger;

import React from 'react';
import Hammer from 'react-hammerjs';
import Render from '../../core/components/render.jsx'


const MessageItem = ({data}) => ({


    handleTap: function(data){
        const dId = ("#d-" + data._id);
        /* const fdId = ("#fd-" + data._id); */
        if(data.userId == Meteor.userId()){
            $(dId).toggle();
        }else{
            return false;
        }
    },
    
    deleteMsg(data){
        Meteor.call('msg.delete',Session.get("convoId"),data._id);
    },

    fakeDeleteMsg(data){
        Meteor.call('msg.fakeDelete',Session.get("convoId"),data._id);
    },

    render() {
      var color;
      if (data.userId !== Meteor.userId()){
          color = "message-them";
      } else {
          color = "message-you";
      }
        return (
            <Hammer onDoubleTap={this.handleTap.bind(this, data)}>
            <div id={data._id} className="message-item">
                <div className={color}>
                    <div id={"d-" + data._id} onClick={this.deleteMsg.bind(this, data)} className="message-delete"><i className="fa fa-times" aria-hidden="true"/>1</div>
                    <div id={"fd-" + data._id} onClick={this.fakeDeleteMsg.bind(this, data)} className="message-delete"><i className="fa fa-times" aria-hidden="true"/></div>
                    <div>{data.text}</div>
                    <Render data={data}/>
                </div>
            </div>
            </Hammer>    
        );
    }
});

export default MessageItem;

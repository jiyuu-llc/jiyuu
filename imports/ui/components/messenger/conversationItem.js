import React from 'react';
import _ from 'lodash';
import Hammer from 'react-hammerjs';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

const ConvoItem = ({data}) => ({

    renderName(users){
        _.pull(users, Meteor.userId());
        return getUserInfo('_id', users[0] || Meteor.userId(), 'name');
    },

    renderPicture(users){
        _.pull(users, Meteor.userId());
        return getUserInfo('_id', users[0] || Meteor.userId(), 'avatar');
    },
    
    convoClick(users){
        _.pull(users, Meteor.userId());
        Session.set('convoName', getUserInfo('_id', users[0], 'name'));
        Session.set('convoId', data._id);
        history.push("/messages/convo/" + data._id);
        if(data.type == "destructive"){
            Session.set('convoType','destructive');
        }
        $("#convoListContain").addClass("card-bottom");
        $(".messenger-title-bar").addClass("card-bottom");
    },

    handleSwipe(data){
        const cId = ("#c" + data._id);
        $(cId).toggle();
    },

    deleteConvo(data){
        Meteor.call("convo.delete", data._id);
    },

    render() {
        if (data.explosive){
        }else{
            var theClass = "no-boom";
        }

        return (
         <Hammer onSwipe={this.handleSwipe.bind(this, data)}>
          <div className={"conversation-item " + theClass} onClick={this.convoClick.bind(this, data.users)}>
            <div className="convoImageContain">
              <img className="convoImage" height="55px" width="55px" src={this.renderPicture(data.users)} />
            </div>
            <div className="convoInfoContain">
              <div className="convoInfo">
                <h6>{this.renderName(data.users)}</h6>
                <p className="convoText">{data.prevText}</p>
              </div>
            </div>
             <div onClick={this.deleteConvo.bind(this, data)} id={"c" + data._id} className="convoDelete">
                 X
             </div>
          </div>
         </Hammer>
        );
    }
});

export default ConvoItem;

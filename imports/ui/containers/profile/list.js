import List from '../../components/feed/postList.jsx';
import {composeWithTracker} from 'react-komposer';
import {Feed} from '/lib/collections';

export const composer = (props, onData) => {
    console.log(props.user.username);
    if (subsManager.subscribe('userFeed', props.user.username, Session.get('paginationLimit')).ready()
        && connectedUserSub.ready()) {
      
        var user = Meteor.users.findOneFaster({username: props.user.username}, {fields: {_id: 1}});
        var feed = fakeFeed;
        if (user){
            feed = Feed.find(
                      {$or: [
                        {userId: user._id},
                        {tagged: {$in: [user._id]}}
                      ]},
                      {sort: {createdAt: -1}}
                    ).fetch();
          onData(null, {feed});
        }
    }
};

export default composeWithTracker(composer, List)(List);

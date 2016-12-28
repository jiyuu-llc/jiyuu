import List from '../../components/list.jsx';
import {composeWithTracker} from 'react-komposer';
import {Feed} from '/lib/collections';

export const composer = (props, onData) => {

    if (subsManager.subscribe('userFeed', FlowRouter.getParam('username'), Session.get('paginationLimit')).ready()
        && connectedUserSub.ready()) {
      
        var user = Meteor.users.findOneFaster({username: FlowRouter.getParam('username')}, {fields: {_id: 1}});
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

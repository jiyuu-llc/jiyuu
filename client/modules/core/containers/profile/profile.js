import ProfileOverview from '../../components/profile/profileOverview.jsx';
import {composeWithTracker} from 'react-komposer';

export const composer = (props, onData) => {
  // blank container for enabling getUserInfo global function
  if (connectedUserSub.ready()){

    let user = Meteor.users.findOneFaster({username: FlowRouter.getParam('username')}) || fakeUser;

    onData(null, {user});
  }
};

export default composeWithTracker(composer, ProfileOverview)(ProfileOverview);

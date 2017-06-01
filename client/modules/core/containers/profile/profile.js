import Profile from '../../components/profile/profile.jsx';
import {composeWithTracker} from 'react-komposer';

export const composer = (props, onData) => {
  // blank container for enabling getUserInfo global function
  if (connectedUserSub.ready()){
    let user = Meteor.users.findOne({username: FlowRouter.getParam('username')}) || fakeUser;
    onData(null, {user});
  }
};

export default composeWithTracker(composer, Profile)(Profile);

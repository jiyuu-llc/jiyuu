import Profile from '../../components/profile/profile.jsx';
import {composeWithTracker} from 'react-komposer';

export const composer = (props, onData) => {
  // blank container for enabling getUserInfo global function
  if (connectedUserSub.ready()){
    let user = Meteor.users.findOneFaster({username: FlowRouter.getParam('username')});
    onData(null, {user});
  }
};

export default composeWithTracker(composer, Profile)(Profile);

import Profile from '../../../../../ui/components/profile/profile.jsx';
import {composeWithTracker} from 'react-komposer';

export const composer = (props, onData) => {
  // blank container for enabling getUserInfo global function
  const username = FlowRouter.getParam('username');

  if (connectedUserSub.ready()){
    const user = Meteor.users.findOneFaster({username: username});

    onData(null, {user});
  }
};

export default composeWithTracker(composer, Profile)(Profile);

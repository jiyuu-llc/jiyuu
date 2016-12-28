import ProfileOverview from '../../components/profile/profileOverview.jsx';
import {composeWithTracker} from 'react-komposer';

export const composer = (props, onData) => {
  // blank container for enabling getUserInfo global function
  if (connectedUserSub.ready()){
    onData(null, {ready: true});
  }
};

export default composeWithTracker(composer, ProfileOverview)(ProfileOverview);

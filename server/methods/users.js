import {Meteor} from 'meteor/meteor';

Meteor.methods({
  'user.getInfo': function(infoType, info, requested){
      return getUserInfo(infoType, info, requested);
    }
});

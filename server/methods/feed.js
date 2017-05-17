import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Feed} from '/lib/collections';

Meteor.methods({

    'feed.add'(content, canView, data, dataType) {
        check(content, String);
        check(canView, Array);
        
        if (Meteor.user()){

            var obj = {
                _id: Random.id(),
                userId: Meteor.userId(),
                content: content,
                data: data,
                dataType: dataType,
                createdAt: new Date(),
                canView: canView
            };

            Feed.insert(obj);
        }
    },


    'feed.remove'(postId){
        Feed.remove({_id:postId});
    },

    'post.update': (postId, userId, newBody) => {
      if (userId == Meteor.userId()) {
          if (Meteor.isClient){
              $("#p-" + postId).empty();
          }
          Feed.update({_id: postId}, {$set: {content: newBody, createdAt: new Date()}});
      } else {
          console.log("Not your post!");
      }
    },

    'feed.react'(postId, reaction) {
        Feed.update({_id: postId}, {$pull: {reactions: {userId: Meteor.userId()}}});
        Feed.update({_id: postId}, {$addToSet: {reactions: {userId: Meteor.userId(), reaction: reaction}}});
    }

});

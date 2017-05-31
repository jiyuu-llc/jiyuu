import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import { Feed, Convos, Messages, Connections, Files, Comments, Notifications, Experiences} from '/lib/collections';
import _ from 'lodash';

Meteor.publish('connectedUsers', function(requestedIds, requestedUsernames){
    const userId = this.userId;
    if (!requestedUsernames){ requestedUsernames = [] }
    this.autorun(function(){
        let userIds = [];
        Connections.findFaster({userId: userId}, {fields: {groups: 1}}).forEach(function(doc){
            doc.groups.forEach(function(doc){
                _.each(doc.users, function(doc){
                    userIds.push(doc);
                });
            });
        });
        userIds = _.uniq(_.concat(userIds, requestedIds));
        return Meteor.users.findFaster({$or: [{_id: userId}, {_id: {$in: userIds}}, {username: {$in: requestedUsernames}}]},
            {fields: {_id: 1, username: 1, avatar: 1, cover: 1, firstName: 1, lastName: 1, color: 1, navPosition: 1}});
    });
});

Meteor.publish('connections', function(){
  return Connections.findFaster({userId: this.userId});
});

Meteor.publish('mainFeed', function(limit){
    const userId = this.userId;
    let userIds = [];
    let inGroups = [];

    this.autorun(function(){
        userIds = [];
        Connections.findFaster({userId: userId}, {fields: {groups: 1}}).forEach(function(doc){
            doc.groups.forEach(function(doc){
                _.each(doc.users, function(doc){
                    userIds.push(doc);
                });
            });
        });
    });

    this.autorun(function(){
        inGroups = [];
        Connections.findFaster({userId: {$in: userIds}}, {fields: {groups: 1}}).forEach(function(doc){
            doc.groups.forEach(function(doc){
                if(_.indexOf(doc.users, userId) != -1){
                    inGroups.push(doc._id);
                }
            });

        });
        inGroups.push("public");
    });

    return Feed.find({$or: [{userId: userId}, {canView: {$in: inGroups}}]}, {sort: {createdAt: -1}, limit: limit || 7});

});

Meteor.publish('userFeed', function(username, limit){
    const userId = this.userId;
    let inGroups = [];
    let profileId;
    try {
        profileId = Meteor.users.findOneFaster({username: username}, {fields: {_id: 1}})._id;
    } catch (TypeError) {}

    if (profileId === userId) {

        return Feed.find(
          {$or: [
              {userId: userId},
              {tagged: {$in: [userId]}}
           ]
          },
          {
            sort: {createdAt: -1},
             limit: limit || 7
          });

    } else {
        try {
            this.autorun(function () {
                inGroups = [];
                Connections.findFaster({userId: profileId}, {fields: {groups: 1}}).forEach(function (doc) {
                    doc.groups.forEach(function (doc) {
                        if (_.indexOf(doc.users, userId) != 1) {
                            inGroups.push(doc._id);
                        }
                    });
                });
                inGroups.push("public");
            });

            return Feed.find(
              {$or: [
                {userId: profileId, canView: {$in: inGroups}},
                {tagged: {$in: [profileId]}, canView: {$in: inGroups}}
               ]
              },
              {
                sort: {createdAt: -1},
                limit: limit || 7
              });
        } catch (TypeError) {}
    }
});

Meteor.publish('messages', function(convoId, limit) {
    return Messages.findFaster({convoId: convoId}, {sort: {createdAt: 1}, limit: limit})
});

Meteor.publish('convos', function() {
    return Convos.findFaster({users: {$in: [this.userId]}});
});

Meteor.publish('files', function() {
    return Files.find({});
});

Meteor.publish('comments', function() {
    return Comments.find({});
});

Meteor.publish('userList', function() {
    return Meteor.users.find({});
});

Meteor.publish('notifications', function(){
    return Notifications.find();
});

Meteor.publish('experiences', function(){
    return Experiences.find();
});
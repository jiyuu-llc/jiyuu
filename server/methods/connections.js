import {Meteor} from 'meteor/meteor';
import {Connections} from '/lib/collections';
import _ from 'lodash';

Meteor.methods({

    // group level commands

    'addConnectionGroup': function(groupName) {
        Connections.upsert({userId: Meteor.userId()}, {$addToSet: { groups: { _id: Random.id(), name: groupName }}});
    },

    'renameConnectionGroup': function(groupName, newName) {
        Connections.update({userId: Meteor.userId(), 'groups.name': groupName}, {$set: { 'groups.$.name': newName }});
    },

    'deleteConnectionGroup': function(groupName) {
        // cannot delete default groups
        if (!_.includes(defaultConnectionGroups, groupName)) {
            Connections.update({userId: Meteor.userId(), 'groups.name': groupName}, {$pull: { groups: { name: groupName }}}, { multi: true });
        }
    },

    // user level commands

    'addConnectionToGroup': function(groupName, incomingId) {
        var userId;
        try {
          userId = Meteor.users.findOne({username: incomingId}, {fields: {_id: 1}})._id;
        } catch(TypeError) {}

        if (userId){
          Connections.update({userId: Meteor.userId(), 'groups.name': groupName}, {$addToSet: { 'groups.$.users': userId}});
        }
    },

    'deleteConnectionFromGroup': function(groupName, incomingId) {
        Connections.update({userId: Meteor.userId(), 'groups.name': groupName}, {$pull: { 'groups.$.users': incomingId}});
    }
});

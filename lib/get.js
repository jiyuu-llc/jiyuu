import _ from 'lodash';
import React from "react";

requestUsers = (infoType, info) =>{
    if (infoType === '_id'){
        var users = Session.get('requestedIds') || [];
        if (_.indexOf(users, info) === -1 && info != Meteor.userId()){
            users.push(info);
            Session.set('requestedIds', users);
        }
    } else if (infoType === 'username'){
        var users = Session.get('requestedUsernames') || [];
        if (_.indexOf(users, info) === -1){
            users.push(info);
            Session.set('requestedUsernames', users);
        }
    }
};

// TODO make these values come from db
resolveScraperUserInfo = (infoType, info, requested) => {
    var scraperUsers = [
        {_id: "__scraped__TheMindUnleashed", username: "TheMindUnleashed", avatar: "https://pbs.twimg.com/profile_images/527547888394440704/74I0Q1Xd_400x400.jpeg", name: "The Mind Unleashed"},
        {_id: "__scraped__TheAntiMedia", username: "TheAntiMedia", avatar: "http://ucy.tv/uploads/images/TAMRUCYAvatar.png", name: "The Anti-Media"},
        {_id: "__scraped__Futurism", username: "Futurism", avatar: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Futurism_Logo.jpg", name: "Futurism"}
    ];

    var filter = {};
    filter[infoType] = info;

    var userFound = _.find(scraperUsers, filter);
    if (userFound) {
        return userFound[requested];
    }
};

getUserInfo = (infoType, info, requested) => {

    if (!(infoType && info && requested)){
        return '';
    }

    // send user to subscription
    if (Meteor.isClient){
        requestUsers(infoType, info);
    }

    var scraped = resolveScraperUserInfo(infoType, info, requested);
    if (scraped) {
        return scraped;
    } else {
        var query = {};
        query[infoType] = info;

        try {
            if (requested === "name") {
                var user = Meteor.users.findOneFaster(query, {fields: {firstName: 1, lastName: 1}});
                return (user.firstName + " " + user.lastName);
            } else {
                var field = {};
                field[requested] = 1;
                return _.get(Meteor.users.findOneFaster(query, {fields: field}), requested);
            }
        } catch (TypeError) { }
    }
};

/*_getUserInfo = (infoType, info, requested) => {
 return ReactiveMethod.call('user.getInfo', infoType, info, requested) || "Loading...";
 };*/

resolveFeedUsers = (feed) => {
    for (var i = 0; i < feed.length; i++) {
        feed[i].legalName = getUserInfo('_id', feed[i].userId, 'name');
    }

    if (feed[feed.length-1].legalName){
        return feed;
    }

    /*var resolved = [];
     var userIds = [];
     var users = {};

     for (var i = 0; i < feed.length; i++) {
     if (userIds.indexOf(feed[i].userId) === -1) {
     userIds.push(feed[i].userId);
     }
     }

     for (var i = 0; i < userIds.length; i++){
     if (!users[userIds[i]]) {
     users[userIds[i]] = getUserInfo('_id', userIds[i], "name");
     }
     }

     for (var i = 0; i < feed.length; i++) {
     resolved[i] = feed[i];
     resolved[i].legalName = users[feed[i].userId];
     }

     if (resolved[resolved.length-1].legalName){
     return resolved;
     }*/
};
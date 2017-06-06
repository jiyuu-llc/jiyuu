import {Meteor} from 'meteor/meteor';
import {Feed, Convos, Mind, Files, Comments, Notifications, Requests, Rooms, Experiences} from '/lib/collections';
import {check} from 'meteor/check';
import {Random} from 'meteor/random';
import _ from 'lodash';

Meteor.methods({
    'convo.delete'(id){
        Convos.remove({_id:id});
    },

    'convo.delayedDelete'(id){
        Meteor.setTimeout(function(){Convos.remove({_id:id});}, 30000);
        console.log("woooooo!")
    },

    'convo.create'(id1,un2 ,data) {
        // XXX: Do some user authorization

        var id2;
        try {
            id2 = Meteor.users.findOneFaster({username:un2})._id;
        } catch (TypeError) {}
        if(id2){
            const users = [id1,id2];
            /*const convoName = [
                {id1: id2},
                {id2: id1}
            ];*/

            Convos.upsert({users: users},
                {
                    $set: {
                        //convoName: convoName,
                        prevText: data,
                        lastActive: new Date()
                    },
                    $push: {
                        messages: {
                            _id: Random.id(),
                            userId: Meteor.userId(),
                            text: data,
                            deleted: false,
                            explosive: false,
                            createdAt: Date.now()
                        }
                    }
                });
        }
    },

    'comment.create'(postId, comment){
        /*const userId = Feed.findOne({_id:postId},{fields: {userId: 1}}).userId;
        const name = Meteor.users.findOne({_id:userId},{fields: {firstName: 1}}).firstName;
        const title = name + "commented on your post"; */

        Comments.insert({postId:postId, userId: Meteor.userId(), comment: comment, replies: []});
        /*console.log("Notification user set: " + userId);
        Meteor.call('server.push',title,comment,userId); */
    },

    'comment.delete'(id){
        Comments.remove({_id: id});
    },

    'comment.reply'(postId, commentId, comment){
        var replyId = Random.id();
        Comments.update({_id: commentId}, {$addToSet: {replies: [replyId]}});
        Comments.insert({_id: replyId, postId: postId, commentId: commentId, userId: userId ,comment:comment,replies:[]});
    },

    'dmsg.send'(id1,un2,data) {
        var id2;
        try {
            id2 = Meteor.users.findOneFaster({username:un2})._id;
        } catch (TypeError) {}
        if(id2){
            const users = [id1,id2];

            Convos.upsert({_id: Random.id(), users: users},
                {
                    $set: {
                        prevText: data,
                        lastActive: new Date()
                    },
                    $push: {
                        messages: {
                            _id: Random.id(),
                            userId: Meteor.userId(),
                            text: data,
                            deleted: false,
                            explosive: true,
                            createdAt: Date.now()
                        }
                    }
                });
        }
    },
    'msg.send'(convoId,text,data,dataType){
        var chatId = Convos.findOne({_id: convoId, users: Meteor.userId()}, {fields: {users: 1}}).users;
        var i = chatId.indexOf(Meteor.userId());
        if(i != -1) { chatId.splice(i, 1); }
        var userId = chatId[0];
        console.log(userId);
        Convos.update(
            {"_id": convoId },
            {
              $set: {
                  prevText: text,
                  lastActive: new Date()
              },
                $push: {
                    messages: {
                        _id: Random.id(),
                        userId: Meteor.userId(),
                        text: text,
                        data: data,
                        dataType: dataType,
                        createdAt: Date.now()
                    }
                }
            });
        Meteor.call('server.push',"New Message",data,userId);
    },

    'msg.fakeDelete'(convoId,msgId,){
        Convos.update({_id: convoId, "messages._id": msgId}, {$set: {"messages.$.deleted": true}});
    },

    'msg.delete'(convoId,msgId,){
        Convos.update({_id: convoId}, {$pull: {messages: {_id: msgId}}});
    },

    'insertScrapedSite': function(data) {
        _.extend(data, {_id: Random.id(), createdAt: new Date()});
        Mind.insert(data);
    },
    'getScrapedSite': function(siteId) {
      return Mind.findOne({siteId: siteId}, {sort: {createdAt: -1}});
    },
    'scrapetmu': ()=>{
      return scrapeTheMindUnleashed();
    },
    'scrapeanti': ()=>{
        return scrapeTheAntiMedia();
    },
    'scrapefuturism': ()=>{
        return scrapeFuturism();
    },
    'stopCron': () => {
      SyncedCron.stop();
    },
    'startCron': () => {
      SyncedCron.start();
    },
    'updateProfilePic'(userId,url){
        Meteor.users.update(userId, {$set: {avatar:url}});
    },
    'saveFile': function(fileType, fileUrl, postId){
        console.log(fileType);
        console.log(fileUrl);
        Files.upsert({userId: Meteor.userId()}, {$push: { files: {_id: Random.id(), type: fileType, url: fileUrl}}});
    },

    'removePhotoData': function (selectedPhoto) {

        var userId = Meteor.userId();
        var bucket = 'jiyuuu';

        var fileKey = selectedPhoto.replace('https://jiyuuu.s3.amazonaws.com/', '');
        var fileId = Files.findOne({userId: userId, "files.url": selectedPhoto}, {
            fields: {
                "files._id": 1,
                "files.url": 1
            }
        });

        if (Meteor.isServer) {

            var s3 = new AWS.S3();
            var params = {
                Bucket: bucket,
                Key: fileKey
            };

            Meteor.wrapAsync(
                s3.deleteObject(params, Meteor.bindEnvironment((err, res) => {
                    if (!err && res) {

                        var file = _.find(fileId.files, {url: selectedPhoto});
                        Files.update({userId: userId}, {$pull: {files: {_id: file._id}}});

                    } else {
                        console.log('err ', res);
                    }
                }))
            );

        }
    },
    'server.push': function(title, text, userId) {
        Push.send({
            from: 'push',
            title: title,
            text: text,
            badge: 1,
            query: {
                userId: userId
            }
        });
        console.log("Notification Sent");
    },

    'user.delete'(userId){
        Meteor.users.remove({_id:userId});
    },

    'changeColor'(color){
        Meteor.users.update({_id: Meteor.userId()}, {$set: {color: color}});
    },

    'changeNav'(position){
        Meteor.users.update({_id: Meteor.userId()}, {$set: {navPosition: position}});
    },

    'updateCoverPic'(url){
        Meteor.users.update({_id: Meteor.userId()}, {$set: {cover:url}});
    },


    'createRoom'(receiver, roomId){
        console.log(receiver);

        var receiverUserId = Meteor.users.findOne({username: receiver})._id;
        var senderUserName = Meteor.users.findOne({_id: Meteor.userId()}).username;

        console.log(receiverUserId);
        Rooms.insert({
            roomId: roomId,
            users: [Meteor.userId(), receiverUserId]
        });
        Meteor.call("notification.create", receiverUserId, senderUserName, roomId)
    },

    'notification.create'(receiverId, senderUserName, roomId){
        Notifications.insert({
            userId: receiverId,
            text: senderUserName + " is calling you.",
            type: "request",
            token: roomId
        });
    },

    'notification.remove'(id){
        Notifications.remove({_id: id});
    },

    'experience.create'(userId, expName, media){
        Experiences.insert({
            userId: userId,
            Name: expName,
            Cover: media[0].url,
            Media: media
        });
    },

    'experience.addTo'(id, media){
        Experiences.upsert({_id:id}, {
                $push: {media: {media},
            }
        });
    }
});
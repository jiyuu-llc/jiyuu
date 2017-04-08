import React from 'react';
import SimpleWebRTC from '../../../configs/simplewebrtc.bundle';
import { Random } from 'meteor/random';
import Notificationlist from "../containers/notifications";




const callUser = (roomId) =>{
    var user = $('#sessionInput').val();
    console.log(user);
    Meteor.call('createRoom', user, roomId);
    $('#createRoom').hide();
};



const VideoTest = () =>({


    render(){
        return(
            <div>
                <div className="app-title">
                    <center>WebRTC Test</center>
                    <center><h2>{ FlowRouter.getParam('id') || "Call a user!"}</h2></center>
                </div>
                <br/>
                <center>
                    <form id="createRoom">
                        <input id="sessionInput"/>
                        <button type="submit">Call</button>
                    </form>
                </center>
                <br/>
                <center><video id="localVideo" className="video"/></center>

                <center>
                    <div id="remotes">
                    </div>
                </center>
                <Notificationlist/>
            </div>
        )
    },

    componentDidMount(){

        var room = FlowRouter.getParam("id") || false;

        // create our webrtc connection
        var webrtc = new SimpleWebRTC({
            // the id/element dom element that will hold "our" video
            localVideoEl: 'localVideo',
            // the id/element dom element that will hold remote videos
            remoteVideosEl: 'remotes',
            // immediately ask for camera access
            autoRequestMedia: true,
            debug: false,
            detectSpeakingEvents: true
        });

        // when it's ready, join if we got a room from the URL
        webrtc.on('readyToCall', function () {
            // you can name it anything
            if (room) webrtc.joinRoom(room);
        });

        webrtc.on('videoAdded', function (video, peer) {
            console.log('video added', peer);
        });

        $('form').submit(function () {
            //Old Code
            // $('#sessionInput').val().toLowerCase().replace(/\s/g, '-').replace(/[^A-Za-z0-9_\-]/g, ''
            var val = Random.id();
            webrtc.createRoom(val, function (err, name) {
                console.log(' create room cb', arguments);
                var newUrl = '/room/' + name;
                callUser(val);
                FlowRouter.go(newUrl);
            });

            return false
        });

    }
});

export default VideoTest;
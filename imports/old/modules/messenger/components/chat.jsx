import React from 'react';
import SimpleWebRTC from '../../../configs/simplewebrtc.bundle';



const Chat = () =>({

    render(){
        return(
            <div>
                <div className="app-title">
                    <center>WebRTC Test</center>
                    <center><h2>{ FlowRouter.getParam('id')}</h2></center>
                </div>
                <br/>

                <center><video id="localVideo" className="video"/></center>

                <center>
                    <div id="remotes">
                    </div>
                </center>
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
    }
});

export default Chat;
import SimplePeer from "simple-peer";
import React from 'react';

/* navigator.getUserMedia({ video: true, audio: true }, gotMedia, function () {}); */

function gotMedia (stream) {
    var peerId = new SimplePeer({ initiator: true, stream: stream });

    peerId.on('signal', function (data) {
    });

    peer2.on('stream', function (stream) {
        // got remote video stream, now let's show it in a video tag
        var video = document.querySelector('video');
        video.src = window.URL.createObjectURL(stream);
        video.play()
    });
}

const Call = () => ({

    render() {


        return (
            <div className="call">
            <input className="form-control" id="id1" placeholder="theirId"/>
                <br/>
            <video/>
                <button className="btn btn-primary-outline">Call</button>
            </div>
        );
    }
});

export default Call;




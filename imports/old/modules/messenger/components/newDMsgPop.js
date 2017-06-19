import React from 'react';
import { Meteor } from 'meteor/meteor';


const NewDMsgPop = () => ({
    dMsg(){
        const un2 = $("#receiverSel2").val();


        /*
        var uploader = new Slingshot.Upload("myFileUploads");

        uploader.send(document.getElementById('dMsgUpload').files[0], function (error, downloadUrl) {
            if (error) {
                // Log service detailed response
                console.error('Error uploading', uploader.xhr.response);
                alert (error);
            }
            else {
                Meteor.call('send.dmsg',Meteor.userId(),un2,downloadUrl);
                console.log(downloadUrl);
            }
        });
        */

        Meteor.call('dmsg.send', Meteor.userId(), un2, $("#newMessage").val());
    },

    render() {
        return (
            <div className="modal fade" id="newDMsgPop" role="dialog">
                <div className="modal-dialog">

                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">New Self-Destructing Message</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Username" id="receiverSel2"/>
                            </div>
                            <div className="form-group">
                                Send Message
                                <input type="text" className="form-control" placeholder="Message" id="newMessage"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={this.dMsg.bind(this)} data-dismiss="modal">Send</button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
});

export default NewDMsgPop;


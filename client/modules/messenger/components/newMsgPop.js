import React from 'react';
import { Meteor } from 'meteor/meteor';


const NewMsgPop = () => ({

    convoCreate(){
      const type = $("#messageType:checked").val() ? true : false;
      const un2 = $("#receiverSel").val();
      const data = $("#message").val();
      Meteor.call("convo.create",Meteor.userId(),un2, type, data);
    },

    render() {
        return (
            <div className="modal fade" id="newMsgPop" role="dialog">
                <div className="modal-dialog">

                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">New Message</h4>
                        </div>
                        <div className="modal-body">
                          <div className="form-group">
                            <input type="text" className="form-control" id="receiverSel"/>
                          </div>
                          <div className="form-group">
                            <textarea className="form-control" rows="5" id="message"/>
                          </div>
                        </div>
                        <div className="modal-footer">
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Private</label>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={this.convoCreate.bind(this)} data-dismiss="modal">Send</button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
});

export default NewMsgPop;




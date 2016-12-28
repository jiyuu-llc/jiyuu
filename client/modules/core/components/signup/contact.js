import React from 'react';

const Contact = () => ({


  contactNext(){
    var data = $("#questionInput").val();
    if(data){
      Session.set('contact', data);
      FlowRouter.go("/register/6");
    }else{
      alert("Please enter your email.");
    }
  },

  contactEnter(event){
    if(event.key == 'Enter') {
      var data = $("#questionInput").val();
      if(data){
        Session.set('contact', data);
        FlowRouter.go("/register/6");
      }else{
        alert("Please enter your email.");
      }
    }
  },

  render() {
    return (
      <div id="jiyuu">
        <h2 className="question">What's your email?</h2>
        <div id="question-card" className="form-group">
          <div id="questionInputContain">
            <input id="questionInput" type="text" onKeyPress={this.contactEnter.bind(this)} className="form-control"/>
          </div>
          <div className="qnext" onClick={this.contactNext.bind(this)}>
            <i className="fa fa-caret-right" aria-hidden="true"/>
          </div>
        </div>
      </div>
    );
  }
});

export default Contact;


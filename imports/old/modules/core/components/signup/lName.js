import React from 'react';


const LName = () => ({

  lNameNext(){
    var data = $("#questionInput").val();
    if(data){
      Session.set('lname', data);
      FlowRouter.go("/register/4");
    }else{
      alert("Please enter your last name.")
    }
  },

  lNameEnter(event){
    if(event.key == 'Enter') {
      var data = $("#questionInput").val();
      if(data){
        Session.set('lname', data);
        FlowRouter.go("/register/4");
      }else{
        alert("Please enter your last name.")
      }
    }
  },

  render() {
    return (
      <div id="jiyuu">
        <h2 className="question">What's your last name?</h2>
        <div id="question-card" className="form-group">
          <div id="questionInputContain">
            <input id="questionInput" onKeyPress={this.lNameEnter.bind(this)} type="text" className="form-control"/>
          </div>
          <div className="qnext" onClick={this.lNameNext.bind(this)}>
            <i className="fa fa-caret-right" aria-hidden="true"/>
          </div>
        </div>
      </div>
    );
  }
});

export default LName;


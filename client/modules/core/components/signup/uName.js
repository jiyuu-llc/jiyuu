import React from 'react';


const UName = () => ({
  usernameNext(){
    var data = $("#questionInput").val();
    if(data){
      Session.set('username', data);
      FlowRouter.go("/register/5");
    }else{
      alert("Please enter a username.");
    }
  },

  usernameEnter(event){
    if(event.key == 'Enter') {
      var data = $("#questionInput").val();
      if(data){
        Session.set('username', data);
        FlowRouter.go("/register/5");
      }else{
        alert("Please enter a username.");
      }
    }
  },


  render() {
    return (
      <div id="jiyuu">
        <h2 className="question">What would you like your Username to be?</h2>
        <div id="question-card" className="form-group">
          <div id="questionInputContain">
            <input id="questionInput" onKeyPress={this.usernameEnter.bind(this)} type="text" className="form-control"/>
          </div>
          <div className="qnext" onClick={this.usernameNext.bind(this)}>
            <i className="fa fa-caret-right" aria-hidden="true"/>
          </div>
        </div>
      </div>
    );
  }
});

export default UName;


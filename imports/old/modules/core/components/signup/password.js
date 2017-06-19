import React from 'react';


const Password = () => ({

  passwordNext(){
    var data = $("#questionInput").val();
    var confirm = $("#passwordConfirm").val();
    if(data){
      if(data = confirm){
        Session.set('password', data);
        FlowRouter.go("/register/7");
      }else{
        alert("Please enter a password.");
      }
    }
  },

  passwordEnter(event){
    if(event.key == 'Enter') {
      var data = $("#questionInput").val();
      var confirm = $("#passwordConfirm").val();
      if(data){
        if(data = confirm){
          Session.set('password', data);
          FlowRouter.go("/register/7");
        }else{
          alert("Please enter a password.");
        }
      }
    }
  },


  render() {
    return (
      <div id="jiyuu">
        <h2 className="question">Enter a password.</h2>
        <div id="question-card" className="form-group">
          <div id="questionInputContain">
            <input id="questionInput" type="password" className="form-control"/>
          </div>
          <div id="questionInputContain">
            <input id="passwordConfirm" type="password" onKeyPress={this.passwordEnter.bind(this)} className="form-control"/>
          </div>
          <div className="qnext" onClick={this.passwordNext.bind(this)}>
            <i className="fa fa-caret-right" aria-hidden="true"/>
          </div>
        </div>
      </div>
    );
  }
});

export default Password;


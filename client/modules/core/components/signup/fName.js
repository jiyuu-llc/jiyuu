import React from 'react';


const FName = () => ({


  fNameNext(){
    var data = $("#questionInput").val();
    if(data){
      Session.set('fname', data);
      FlowRouter.go("/register/3");
    }else{
      alert("Please enter your first name.")
    }
  },


  fNameEnter(event){
    if(event.key == 'Enter'){
      console.log('enter press here! ');
      var data = $("#questionInput").val();
      if(data){
        Session.set('fname', data);
        FlowRouter.go("/register/3");
      }else{
        alert("Please enter your first name.")
      }
    }
  },

  render() {
    return (
      <div id="jiyuu">
        <h2 className="question">What's your first name?</h2>
        <div id="question-card" className="form-group">
          <div id="questionInputContain">
            <input id="questionInput" onKeyPress={this.fNameEnter.bind(this)} type="text" tabindex="1" className="form-control"/>
          </div>
          <div className="qnext" onClick={this.fNameNext.bind(this)}>
            <i className="fa fa-caret-right" aria-hidden="true"/>
          </div>
        </div>
      </div>
    );
  }
});

export default FName;


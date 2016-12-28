import React from 'react';


const DOB = () => ({


  dobNext(){
    var data = $("#questionInput").val();
    if(data){
      Session.set('dob', data);
      FlowRouter.go("/register/8");
    }else{
      alert("Please enter your birthday.");
    }
  },

  render() {
    return (
      <div id="jiyuu">
        <h2 className="question">When's your Birthday?</h2>
        <div id="question-card" className="form-group">
          <div id="questionInputContain">
            <input id="questionInput" type="text" tabindex="1" placeholder="06/04/1996" className="form-control"/>
          </div>
          <div className="qnext" onClick={this.dobNext.bind(this)}>
            <i className="fa fa-caret-right" aria-hidden="true"/>
          </div>
        </div>
      </div>
    );
  }
});

export default DOB;


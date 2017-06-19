import React from 'react';


const Welcome = () => ({

    welcomeClick(){
        FlowRouter.go("/");
    },

  render() {
    return (
      <div id="jiyuu">
        <h2 className="question">Welcome to jiyuu. We are glad to have you as a part of the Community.</h2>
        <div id="question-card" className="form-group">
          <div id="questionInputContainLg">
            <br />
            <br />
            <h4 className="qnext-text-sm">Continue to Answer Questions?</h4>
            <h5>or</h5>
            <h4 className="qnext-text-sm" onClick={this.welcomeClick.bind(this)}>Begin the experience?</h4>
          </div>
        </div>
      </div>
    );
  }
});

export default Welcome;

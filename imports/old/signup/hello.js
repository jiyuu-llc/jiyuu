import React from 'react';


const Hello = () => ({


  helloNext(){
    FlowRouter.go("/register/1");
  },

  render() {
    return (
      <div id="jiyuu">
        <h2 className="question">Hello there. Would you like to join jiyuu?</h2>
        <div id="question-card" className="form-group">
            <br/>
              <div className="btn-center" onClick={this.helloNext.bind(this)}>
                    <h1 className="qYes qnext-text">Yes</h1> <h3>or</h3> <h1 className="qYes qnext-text">Yes</h1>
              </div>
          </div>
      </div>
    );
  }
});

export default Hello;

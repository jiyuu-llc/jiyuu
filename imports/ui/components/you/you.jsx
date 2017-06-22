import React from 'react';


const You = () => ({

  render() {
    return (
      <div id="jiyuu">
        <h2 className="question">Questions!</h2>
        <div id="question-card" className="form-group">
          <div id="questionInputContain">
          <input id="questionInput" type="text" tabIndex="1" className="form-control"/>
          </div>
          <div className="qnext">
          <i className="fa fa-caret-right" aria-hidden="true"/>
          </div>
        </div>
      </div>
    );
  }
});

export default You;

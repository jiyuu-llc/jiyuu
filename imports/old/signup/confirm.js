import React from 'react';

const Confirm = () => ({


  confirmNext(){
    const firstName = Session.get("fname");
    const lastName = Session.get("lname");
    const username = Session.get('username');
    const email = Session.get('contact');
    const dob =Session.get('dob');
    const password = Session.get('password');
    const accountType = Session.get('aType');
    const theme = "jiyuu";
    const interests = Session.get("interests") || [];
    var user = {email:email,password:password,username:username,theme:theme,type:accountType,firstName:firstName,lastName:lastName,avatar:'/images/users.png',cover:'/images/cover.png',dob:dob, interests: interests};
    Accounts.createUser(user,function(error){
      if(error){
        alert("Sorry something went wrong.")
      } else{
        Meteor.call('addConnectionGroup', 'Friends', (err, res)=>{
          if (!err){
            Meteor.call('addConnectionGroup', 'Following', (err, res)=>{
              if (!err){
                Meteor.call('addConnectionGroup', 'Blocked');

                if (interests.indexOf('news') != -1){
                  // adds the anti media
                  Meteor.call('addConnectionToGroup', 'Following', 'TheAntiMedia');
                }

                if (interests.indexOf('technology') != -1){
                  // adds futurism
                  Meteor.call('addConnectionToGroup', 'Following', 'Futurism');
                }

                if (interests.indexOf('hippie') != -1){
                  // adds the mind unleashed
                  Meteor.call('addConnectionToGroup', 'Following', 'TheMindUnleashed');
                }

              }
            });
          }
        });


        FlowRouter.go('/register/10');
      }
    });
  },

  render() {
    return (
      <div id="jiyuu">
        <h2 className="question">We have sent you a confirmation code.</h2>
        <div id="question-card" className="form-group">
          <div id="questionInputContain">
            <input id="questionInput" type="text" tabindex="1" placeholder="Confirmation Code" className="form-control"/>
          </div>
          <div className="qnext" onClick={this.confirmNext.bind(this)}>
            <i className="fa fa-caret-right" aria-hidden="true"/>
          </div>
        </div>
      </div>
    );
  }
});

export default Confirm;

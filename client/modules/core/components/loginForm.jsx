import React from 'react';
import ReactDOM from 'react-dom';

const LoginForm = () => ({
    
    clickReset() {
        event.preventDefault();
        $("#reset-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
    },

    handleSubmit(event) {
        event.preventDefault();
        var emailVar = ReactDOM.findDOMNode(this.refs.email).value.trim();
        var passwordVar = ReactDOM.findDOMNode(this.refs.password).value.trim();
        Meteor.loginWithPassword(emailVar, passwordVar, function(err){
            if (!err){
                console.log("Success!");
                FlowRouter.go('/');
            } else {
                $('span#forgotPass').remove();
                $('a.forgot-password').prepend("<span id='forgotPass'>Incorrect information, please try again. </span>");
                console.log("Nooooo!");
            }
        });
    },

    registerClick(){
        FlowRouter.go("/register");
    },

    render() {
        return (
     <div className="login-card-contain">     
     <div id="loginCard" className="card">
        <form id="login-form" role="form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <input type="text" name="loginEmail" ref="email" className="form-control" placeholder="Email or Username"/>
            </div>
            <div className="form-group">
                <input type="password" name="loginPassword" ref="password" className="form-control" placeholder="Password"/>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="btn-center col-sm-12">
                        <input type="submit" id="login-submit"  className="form-control btn btn-login btn-primary-outline" defaultValue="Login"/>
                        <input className="form-control btn btn-login btn-primary-outline" onClick={this.registerClick.bind(this)} defaultValue="Register"/>
                    </div>
                </div>
            </div>
        </form>
      </div>
         <h5 className="loginText"><a href="tel://302-489-9067">Contact us at 302-489-9067</a></h5>
     </div>   
    );
    }
});

export default LoginForm;

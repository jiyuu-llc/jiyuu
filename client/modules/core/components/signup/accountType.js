import React from 'react';


const AccountType = () => ({


    aTypeNext(){
        var data = $( "select#accountSel option:selected").val();
        if(data){
            Session.set('aType', data);
            FlowRouter.go("/register/2");
        }else{
            alert("Please select an option");
        }
    },

    render() {
        return (
            <div id="jiyuu">
                <h2 className="question">What kind of user are you?</h2>
                <div id="question-card" className="form-group">
                    <div id="questionInputContain">
                        <center>
                        <select className="form-control" id="accountSel">
                            <option value="EverydayUser">Everyday User</option>
                            <option value="PublicFigure">Public Figure</option>
                            <option value="News/MediaOutlet">News/Media Outlet</option>
                            <option value="Business">Business</option>
                        </select>
                        </center>
                    </div>
                    <div className="qnext" onClick={this.aTypeNext.bind(this)}>
                        <i className="fa fa-caret-right" aria-hidden="true"/>
                    </div>
                </div>
            </div>
        );
    }
});

export default AccountType;

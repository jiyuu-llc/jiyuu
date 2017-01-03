import React from 'react';
import Search from '../containers/search.js';

const newPostToggle = () => {
    if (Meteor.userId()) {
        $('#siteModal').modal('toggle');
    } else {
        FlowRouter.go("/login");
    }
};

const searchClick = () => {
    $('#searchInput').focus();
};

const cogClick = () => {
    FlowRouter.go("/settings");
};

const profileClick = () => {
    FlowRouter.go("/profile");
};

const homeClick = () => {
    FlowRouter.go("/");
};

const messageClick = () => {
    FlowRouter.go("/messages");
};

const notifiClick = () => {
    FlowRouter.go("/notifications");
};

const connectClick = () => {
    FlowRouter.go("/connect");
};

const questionClick = () => {
    FlowRouter.go("/questions");
};

const messageListHide = () => {
    $("#convoListContain").removeClass("card-bottom");
    $(".messenger-title-bar").removeClass("card-bottom");
};

const Navigation = ({userColor}) => (
       <div id="nav-contain" className={userColor} onClick={messageListHide.bind(this)}>
        <nav className="navbar navbar-jiyuu">
            <div className={"navbar-toggler " + userColor + "-btn"} type="button" onClick={homeClick.bind(this)}>
                <i className="fa fa-home" aria-hidden="true"/>
            </div>
            <div className={"navbar-toggler " + userColor + "-btn"} type="button" onClick={newPostToggle.bind(this)}data-toggle="collapse" data-target="#">
                <i className="fa fa-pencil" aria-hidden="true"/>
            </div>
            <div className={"navbar-toggler " + userColor + "-btn"} type="button" onClick={messageClick.bind(this)}>
                <i className="fa fa-envelope" aria-hidden="true"/>
            </div>
            <div className={"navbar-toggler " + userColor + "-btn"} type="button" onClick={searchClick.bind(this)} data-toggle="collapse" data-target="#searchContain">
                <i className="fa fa-search" aria-hidden="true"/>
            </div>
            <div className={"navbar-toggler " + userColor + "-btn"} type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                <i className="fa fa-bars" aria-hidden="true"/>
            </div>
        </nav>
           <div className="collapse" id="exCollapsingNavbar">
               <div id="button-drawer" className="bg-inverse p-a-1">
                   <div className={"navbar-toggler " + userColor + "-btn"} type="button" onClick={connectClick.bind(this)} data-toggle="collapse" data-target="#exCollapsingNavbar">
                       <i className="fa fa-connectdevelop" aria-hidden="true"/>
                   </div>

                   <div className={"navbar-toggler " + userColor + "-btn"} type="button" onClick={questionClick.bind(this)} data-toggle="collapse" data-target="#exCollapsingNavbar">
                       <i className="fa fa-question" aria-hidden="true"/>
                   </div>
                   <div className={"navbar-toggler " + userColor + "-btn"} type="button" onClick={profileClick.bind(this)} data-toggle="collapse" data-target="#exCollapsingNavbar">
                       <i className="fa fa-user" aria-hidden="true"/>
                   </div>
                   <div className={"navbar-toggler " + userColor + "-btn"} type="button" onClick={cogClick.bind(this)} data-toggle="collapse" data-target="#exCollapsingNavbar">
                       <i className="fa fa-cog" aria-hidden="true"/>
                   </div>
                   <div className={"navbar-toggler " + userColor + "-btn"} type="button" onClick={notifiClick.bind(this)} data-toggle="collapse" data-target="#exCollapsingNavbar">
                       <i className="fa fa-bell" aria-hidden="true"/>
                   </div>
               </div>
           </div>
           <Search/>
    </div>
);

export default Navigation;
import React, {Component} from 'react';
import Modal from '../../old/modules/core/components/dypop/modal'
import NewPost from '../../old/modules/core/components/newPost.jsx';
import Search from '../../old/modules/core/containers/search.js';
import { Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

const searchClick = () => {
    $('.searchResults').show();
    $('#searchInput').focus();
};

const profileClick = () => {
    history.push('/profile');
   /* FlowRouter.go("/profile"); */
};

const notifiClick = () => {
    history.push('/notifications');
   /* FlowRouter.go("/notifications"); */
};

const questionClick = () => {
    history.push('/questions');
    /* FlowRouter.go("/questions"); */
};

const closeNavDrawer = () =>{
    $('#exCollapsingNavbar').collapse('hide');
};

const messageListHide = () => {
    $("#convoListContain").removeClass("card-bottom");
    $(".messenger-title-bar").removeClass("card-bottom");
};

class Navigation extends Component{

    constructor(props) {
        super(props);
        this.state = { isModalOpen: false, media: null }
    }

    openModal() {
        if (Meteor.userId()) {
            console.log("clicked");
            this.setState({ isModalOpen: true })
        } else {
            /* FlowRouter.go("/login"); */
        }
    }

    closeModal() {
        this.setState({ isModalOpen: false })
    }

    render(){
        const {user} = this.props;
        return(
            <div id={user.navPosition} className={"box-shadow " + user.color} onClick={messageListHide.bind(this)}>
                <nav className={"navbar navbar-jiyuu-" + user.navPosition}>
                    <Link to="/" className={"navbar-toggler " + user.color + "-btn"}>
                        <i className="fa fa-home" aria-hidden="true"/>
                    </Link>
                    <div className={"navbar-toggler " + user.color + "-btn"} onClick={this.openModal.bind(this)}
                         data-toggle="collapse">
                        <i className="fa fa-pencil" aria-hidden="true"/>
                    </div>
                    <Link to="/messages" className={"navbar-toggler " + user.color + "-btn"}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                    </Link>
                    <div className={"navbar-toggler " + user.color + "-btn"} onClick={searchClick.bind(this)}
                         data-toggle="collapse" data-target="#searchContain">
                        <i className="fa fa-search" aria-hidden="true"/>
                    </div>
                    <div className={"navbar-toggler " + user.color + "-btn"} data-toggle="collapse"
                         data-target="#exCollapsingNavbar">
                        <i className="fa fa-bars" aria-hidden="true"/>
                    </div>
                </nav>
                <div className="collapse" id="exCollapsingNavbar">
                    <div id={"button-drawer-" + user.navPosition} className="bg-inverse p-a-1">
                        <Link to="/connect" className={"navbar-toggler " + user.color + "-btn"} onClick={closeNavDrawer.bind(this)}>
                            <i className="fa fa-connectdevelop" aria-hidden="true"/>
                        </Link>
                        <div className={"navbar-toggler " + user.color + "-btn"} onClick={questionClick.bind(this)}
                             data-toggle="collapse" data-target="#exCollapsingNavbar">
                            <i className="fa fa-question" aria-hidden="true"/>
                        </div>
                        <div className={"navbar-toggler " + user.color + "-btn"} onClick={profileClick.bind(this)}
                             data-toggle="collapse" data-target="#exCollapsingNavbar">
                            <i className="fa fa-user" aria-hidden="true"/>
                        </div>
                        <Link to="/settings" className={"navbar-toggler " + user.color + "-btn"} onClick={closeNavDrawer.bind(this)}>
                            <i className="fa fa-cog" aria-hidden="true"/>
                        </Link>
                        <div className={"navbar-toggler " + user.color + "-btn"} onClick={notifiClick.bind(this)}
                             data-toggle="collapse" data-target="#exCollapsingNavbar">
                            <i className="fa fa-bell" aria-hidden="true"/>
                        </div>
                    </div>
                </div>
                <Search/>
                <Modal className="popupModal" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                        <NewPost/>
                </Modal>
            </div>
        )
    }
}

export default Navigation;

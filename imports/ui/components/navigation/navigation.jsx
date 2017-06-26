import React, {Component} from 'react';
import Modal from '../dypop/modal'
import NewPost from '../feed/newPost.jsx';
import ConnectSelect from '../../containers/connections/connectSelect.js';
import Search from '../../containers/navigation/search.js';
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
        this.state = { isModalOpen: false, media: null, newPost: null};
        this.handler = this.handler.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handler(postObject) {
        this.setState({
            newPost: postObject
        });
    }

    openModal() {
        if (Meteor.userId()) {
            console.log("clicked");
            this.setState({ isModalOpen: true });
        } else {
            /* FlowRouter.go("/login"); */
        }
    }

    closeModal() {
        this.setState({ isModalOpen: false, newPost: null });
    }

    render(){
        const {user} = this.props;

        if(!this.state.newPost){
            var content = <NewPost action={this.handler}/>
        }else{
             content = <ConnectSelect action={this.closeModal} newPost={this.state.newPost}/>
        }
        return(
            <div id="navBar" className={"box-shadow " + user.color + " " + user.navPosition} onClick={messageListHide.bind(this)}>
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
                        <Link to="/you" className={"navbar-toggler " + user.color + "-btn"} onClick={closeNavDrawer.bind(this)}>
                            <i className="fa fa-question" aria-hidden="true"/>
                        </Link>
                        <Link to={"/profile/" + user.username} className={"navbar-toggler " + user.color + "-btn"} onClick={closeNavDrawer.bind(this)}>
                            <i className="fa fa-user" aria-hidden="true"/>
                        </Link>
                        <Link to="/settings" className={"navbar-toggler " + user.color + "-btn"} onClick={closeNavDrawer.bind(this)}>
                            <i className="fa fa-cog" aria-hidden="true"/>
                        </Link>
                        <Link to="/notifications" className={"navbar-toggler " + user.color + "-btn"} onClick={closeNavDrawer.bind(this)}>
                            <i className="fa fa-bell" aria-hidden="true"/>
                        </Link>
                    </div>
                </div>
                <Search/>
                <Modal className="popupModal" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    {content}
                </Modal>
            </div>
        )
    }
}

export default Navigation;

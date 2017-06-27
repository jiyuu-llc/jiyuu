import React, {Component} from 'react';
import RemovePost from './removePost.jsx';



class PostOptions extends Component{


    constructor(props) {
        super(props);
        this.state = {
            option: "menu"
        }
    }

    editPost = (post, action) =>{
        console.log("CLICKED!");
        if (post.userId === Meteor.userId()) {
            const pId = ("#p-" + post._id);
            const sId = ("#s-" + post._id);
            $(pId).attr('contenteditable', 'true');
            $(pId).focus();
            $(sId).show();
        }
        action("options");
    };

    removePost(){
        this.setState({option: "remove"});
    };


    Menu(){
        return(
            <div>
                <div className="menu-item" onClick={this.editPost.bind(this, this.props.post, this.props.action)}>
                    Edit Post
                </div>
                <div className="menu-item" onClick={this.removePost.bind(this)}>
                    Remove Post
                </div>
                <div className="menu-item">
                    Change Privacy
                </div>
                <div className="menu-item">
                    Share
                </div>
            </div>
        )
    };

    render() {

        switch(this.state.option){
            case 'menu':
                var Option = this.Menu();
                break;
            case 'remove':
                Option = <RemovePost action={this.props.action} post={this.props.post}/>;
                break;
            case 'privacy':
                var Option = this.Menu();
                break;
            default:
                return false;
                break;
        }

        return (
            <div>
                {Option}
            </div>
        )
    }
}


export default PostOptions;

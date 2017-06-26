import React, {Component} from 'react';
import RemovePost from './removePost.jsx';



class PostOptions extends Component{


    constructor(props) {
        super(props);
        this.state = {
            option: "menu"
        }
    }

    editPost = (post) =>{
        console.log("CLICKED!");
        if (post.userId === Meteor.userId()) {
            const pId = ("#p-" + post._id);
            const sId = ("#s-" + post._id);
            $(pId).attr('contenteditable', 'true');
            $(pId).focus();
            $(sId).show();
        }
    };


    Menu(){
        return(
            <div>
                <div className="menu-item" onClick={this.editPost.bind(this)}>
                    Edit Post
                </div>
                <div className="menu-item">
                    Delete Post
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
                Option = this.menu;
                break;
            case "edit":
                this.editPost.bind(this, this.props.post);
                var Option = null;
                break;
            case 'remove':
                Option = <RemovePost/>;
                break;
            default:
                return false;
                break;
        }

        return (
            <div>
                {Option || this.Menu()}
            </div>
        )
    }
}


export default PostOptions;

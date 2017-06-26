import React, {Component} from 'react';
import PostItem from './postItem.jsx';
import PostOptions from './postOptions.jsx';
import Modal from '../dypop/modal';

class PostList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mediaModal: false,
            optionsModal: false,
            media: null,
            currentPost: null
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal(type, postId, media){
        if(type != "options"){
            this.setState({media:media, mediaModal: !this.state.mediaModal});
        }else{
            this.setState({currentPost: postId, optionsModal: !this.state.optionsModal});
        }
    }


    closeModal(type) {
        if(type != "options"){
            this.setState({mediaModal: !this.state.mediaModal});
        }else{
            this.setState({optionsModal: !this.state.optionsModal});
        }
    }

    renderIfData = (feed) => {
        if (feed && feed.length > 0) {
            return feed.map((post) => {
                return <PostItem action={this.openModal} key={post._id} post={post} />
            });
        }
    };

    render(){
        console.log(this.state.mediaModal);
        return(
            <div>
                <div className="postList col-md-12">
                    {this.renderIfData(this.props.feed)}
                </div>
                <Modal isOpen={this.state.mediaModal} onClose={() => this.closeModal("media")}>
                    <img className="popupLightBox-img" src={this.state.media}/>
                </Modal>
                <Modal className="popupModal" isOpen={this.state.optionsModal} onClose={() => this.closeModal("options")}>
                    <PostOptions post={this.state.currentPost}/>
                </Modal>
            </div>
        )
    }
}

export default PostList;
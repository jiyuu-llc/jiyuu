import React, {Component} from 'react';
import PostItem from './postItem.jsx';
import PostModal from './postModal.js'
import Modal from '../dypop/modal'

class PostList extends Component {

    constructor(props) {
        super(props);
        this.state = { isModalOpen: false, media: null };
        this.setMedia = this.setMedia.bind(this);
    }

    setMedia(media){
        this.setState({media:media, isModalOpen: !this.state.isModalOpen});
    }


    closeModal() {
        this.setState({ isModalOpen: false })
    }

    renderIfData = (feed) => {
        if (feed && feed.length > 0) {
            return feed.map((post) => {
                return <PostItem action={this.setMedia} key={post._id} post={post} />
            });
        }
    };

    render(){
        var media = this.state.media;
        console.log(media || "yolo");
        return(
            <div>
                <div className="postList col-md-12">
                    {this.renderIfData(this.props.feed)}
                </div>
                <PostModal/>
                <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <img className="popupLightBox-img" src={this.state.media}/>
                </Modal>
            </div>
        )
    }
}

export default PostList;
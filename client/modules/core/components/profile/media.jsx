import React, { Component } from 'react';
import ProfileSidebar from './profileSidebar.jsx';
import Modal from '../dypop/modal'

const deleteImage = (file) => {
    console.log(file.url);
    Meteor.call('removePhotoData', file.url);
};

const test = (object) =>{
    console.log(object);
};

class Media extends Component {

    constructor(props) {
        super(props);
        this.state = { isModalOpen: false, media: null }
    }


    mediaList(files){
        if ( files && files.length > 0 ) {
            return files.map( ( file ) => {
                return <div className="gallery-item-c"  key={file._id}>
                    <div onClick={deleteImage.bind(this, file)} className="image-delete fa fa-times" id={file._id}></div>
                    <img onClick={() => this.openModal(file.url)} className="gallery-item" key={file.id} src={file.url}/>
                </div>
            });
        } else {
            return (
                <div>Loading...</div>
            )
        }
    };

    render(){
        const {user, files} = this.props;
        return(
            <div className="profile-container">
                <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <img className="popupLightBox-img" src={this.state.media}/>
                    <p><button onClick={() => this.closeModal()}>Close</button></p>
                </Modal>
                <ProfileSidebar user={user || fakeUser}/>
                <div id="profile-filler-2" className="hidden-sm-down">
                </div>
                <div id="gallery-contain">
                    {this.mediaList(files)}
                </div>
            </div>
        )
    }


    openModal(media) {
        console.log("clicked");
        this.setState({ isModalOpen: true, media: media })
    }

    closeModal() {
        this.setState({ isModalOpen: false })
    }
}



export default Media;

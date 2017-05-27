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

class Experiences extends Component {

    constructor(props) {
        super(props);
        this.state = { isModalOpen: false }
    }

    openModal() {
        console.log("clicked");
        this.setState({ isModalOpen: true })
    }

    closeModal() {
        this.setState({ isModalOpen: false })
    }

    experienceList(files){
        if ( files && files.length > 0 ) {
            return files.map( ( file ) => {
                return <div className="gallery-item-c"  key={file._id}>
                    <div onClick={deleteImage.bind(this, file)} className="image-delete fa fa-times" id={file._id}></div>
                    <img onClick={() => this.openModal()} className="gallery-item" key={file.id} src={file.url}/>
                    <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                        <img className="popupLightBox-img" src={file.url}/>
                        <p><button onClick={() => this.closeModal()}>Close</button></p>
                    </Modal>
                </div>
            });
        }
    };

    render(){
        return(
            <div className="profile-container">
                <ProfileSidebar/>
                <div id="profile-filler-2" className="hidden-sm-down">
                </div>
                <div id="gallery-contain">
                    {this.experienceList(this.props.files)}
                </div>
            </div>
        )
    }
}



export default Experiences;

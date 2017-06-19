import React, { Component } from 'react';
import ProfileSidebar from './profileSidebar.jsx';
import Modal from '../dypop/modal'
import ExperienceSlider from './experienceSlider.jsx';

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
        this.state = { isModalOpen: false, media: null }
    }


    experienceList(experiences){
        if ( experiences && experiences.length > 0 ) {
            return experiences.map( ( experience ) => {
                return <div className="gallery-item-c"  key={experience._id}>
                    <img onClick={() => this.openModal(experience.media)} className="gallery-item" key={file.id} src={file.url}/>
                </div>
            });
        } else {
            return <div>Loading...</div>
        }
    };

    render(){
        const {user, experiences} = this.props;
        return(
            <div className="profile-container">
                <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <ExperienceSlider media={this.state.media} />
                </Modal>
                <ProfileSidebar user={user || fakeUser} />
                <div id="profile-filler-2" className="hidden-sm-down">
                </div>
                <div id="gallery-contain">
                    {this.experienceList(experiences)}
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



export default Experiences;

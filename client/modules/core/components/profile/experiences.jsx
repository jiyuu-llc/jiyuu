import React from 'react';
import ProfileSidebar from './profileSidebar.jsx';

const deleteImage = (file) => {
    console.log(file.url);
    Meteor.call('removePhotoData', file.url);
};


const renderIfData = ( files ) => {
    if ( files && files.length > 0 ) {
        return files.map( ( file ) => {
            return <div className="gallery-item-c" onClick={deleteImage.bind(this, file)} key={file._id}>
                <div className="image-delete fa fa-times" id={file._id}></div>
                <img className="gallery-item" key={file.id} src={file.url}/>
            </div>
        });
    }
};

const Experiences = ( { files } ) => (
    <div className="container profile-container">
        <ProfileSidebar/>
        <div className="col-md-9">
          <div id="gallery-contain">
              { renderIfData( files ) }
          </div>
        </div>
    </div>
);

export default Experiences;

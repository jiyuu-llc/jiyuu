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
        <div className="col-md-3 hidden-sm-down">
            <div className="profile-stuff">
                <div className="tab-content">
                    <div className="tab-pane active" id="home">
                        <div className="row">
                            <div className="card card-mini">
                                <div className="card-block"><h4>{FlowRouter.getParam('username')}</h4></div>
                                <div className="card-block">
                                    <a className="profile-link" href={"/profile/" + FlowRouter.getParam('username') + "/experiences"}>Experiences</a>
                                    <a className="profile-link" href="/">Files</a>
                                    <a className="profile-link" href="/">Cards</a>
                                </div>
                            </div>
                            <ProfileSidebar/>
                        </div>
                    </div>
                    <div className="tab-pane" id="profilePhotos">
                    </div>
                    <div className="tab-pane" id="profileModules">
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-9">
          <div id="gallery-contain">
              { renderIfData( files ) }
          </div>
        </div>
    </div>
);

export default Experiences;

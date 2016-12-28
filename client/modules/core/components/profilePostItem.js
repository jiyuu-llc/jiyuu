import React from 'react';

const ProfilePostItem = ({}) => ({

    render() {
        return (
            <div className="post-item">
                <div className="card panel-flipside">
                    <div className="post-heading">
                        <div className="post-info">
                            <p className="post-name">Alec Wantoch</p>
                            <h5 className="postDate">June 4th, 1996</h5>
                        </div>
                        <img className="post-profile-image" height="70px" width="70px" src="/images/alec.jpg" alt="Profile" />
                        <div className="post-options">
                            <i className="fa fa-ellipsis-h options-button" aria-hidden="true"/>
                        </div>
                    </div>

                    <div className="card-block">
                        <p className="postBody" id="editable-id">
                            This is an automatically generated test post.
                        </p>
                    </div>
                    <div className="card-block post-interact">
                        <div id="id-vote" className="voteButtons">
                            <button type="button" className="btn btn-danger voteButton"><i className="fa fa-thumbs-o-up" aria-hidden="true"/></button>
                            <button type="button" className="btn btn-info voteButton"><i className="fa fa-heart" aria-hidden="true"/></button>
                            <button type="button" className="btn btn-default voteButton"><i className="fa fa-thumbs-o-down" aria-hidden="true"/></button>
                        </div>
                        <input type="text" className="form-control commentInput" placeholder="Reply"/>
                    </div>
                </div>

            </div>
        );
    }
});

export default ProfilePostItem;

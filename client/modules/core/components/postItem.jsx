import React from 'react';
import moment from 'moment';
import Hammer from 'react-hammerjs';
import Render from '../components/render.jsx';
import togglePop from '../../../pops';

const postOptionsClick = (post) => {
    console.log("Clicked!");
    if (post.userId === Meteor.userId()){
        Session.set('postId', post._id);
        $("#postOptions").modal("toggle");
    }
};

const handleTap = (post) =>{
    if (post.userId === Meteor.userId()){
        const pId = ("#p-" + post._id);
        const sId = ("#s-" + post._id);
        $(pId).attr('contenteditable', 'true');
        $(pId).focus();
        $(sId).show();
    }
};

const savePost = (post) => {
    const pId = ("#p-" + post._id);
    const sId = ("#s-" + post._id);
    $(pId).attr('contenteditable', 'false');
    $(sId).hide();
    const newContent = $(pId).text();
    Meteor.call('post.update',post._id,Meteor.userId(),newContent);
};

const commentClick = (post) =>{
    var btnId = "#cmt" + post._id;
    $(btnId).css('display','inline-flex');
};

const commentClickOff = (post) =>{
    var btnId = "#cmt" + post._id;
    $(btnId).css('display','none');
};

const commentSubmit = (post) =>{
    const postId = post._id;
    const btnId = "#cmtd" + postId;
    const comment = $(btnId).val();
    Meteor.call("comment.create",postId, comment, function(error, result){
        commentClickOff(post);
    });
};

const picTap = (post) =>{
    var renderId = "#render-" + post._id;
    $(renderId).toggleClass("r-expanded");
};

const testClick = () =>{
    togglePop();
};

const renderIfData = (post) => {
    return (
            <div className="card">
                <div className="post-heading">
                    <div className="post-info">
                        <a href={"profile/" + getUserInfo('_id', post.userId, 'username')}>
                            <img className="post-profile-image" height="57px" width="57px" src={getUserInfo('_id', post.userId, 'avatar') || '/images/users.png'} alt=""/>
                            <p className="post-name">{post.legalName || getUserInfo('_id', post.userId, 'name')}</p>
                        </a>
                        <h5 className="postDate">{post.createdAt ? moment(post.createdAt).fromNow() : null}</h5>
                    </div>
                    <div className="post-options">
                        <i className="fa fa-ellipsis-h options-button" aria-hidden="true"/>
                    </div>
                </div>
                    <Hammer onDoubleTap={handleTap.bind(this, post)}>
                        <p id={"p-" + post._id} className="postBody" dangerouslySetInnerHTML={{__html: post.content}} />
                    </Hammer>
                <Hammer onTap={picTap.bind(this, post)}>
                    <Render data={post}/>
                </Hammer>
                    <button style={{display:"none"}} id={"s-" + post._id} onClick={savePost.bind(this, post)} className="btn btn-primary-outline">Save</button>
                <div className="card-block post-interact">
                    <div id="id-vote" className="voteButtons">
                        <button type="button" className="btn btn-danger voteButton"><i className="fa fa-thumbs-o-up" aria-hidden="true"/></button>
                        <button type="button" className="btn btn-info voteButton"><i className="fa fa-heart" aria-hidden="true"/>
                        </button>
                        <button type="button" className="btn btn-default voteButton">
                            <i className="fa fa-thumbs-o-down"/>
                        </button>
                    </div>
                    <input id={"cmtd" + post._id} type="text" onClick={commentClick.bind(this, post)} className="form-control commentInput" placeholder="Reply"/>
                    <button id={"cmt" + post._id} type="button" onClick={commentSubmit.bind(this, post)} className="commentBtn"><i className="fa fa-comment-o" aria-hidden="true"/></button>
                </div>
            </div>
    )
};

const PostItem = React.createClass({
    render() {
        const {post} = this.props;
        return (
            <div id={post._id} className="post-item">
                {renderIfData(post)}
            </div>
        )
    },
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.post.createdAt.getUTCMilliseconds() !== nextProps.post.createdAt.getUTCMilliseconds();
    }
});

export default PostItem;

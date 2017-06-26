import React, {Component} from 'react';
import moment from 'moment';
import Hammer from 'react-hammerjs';
import _ from 'lodash';
import Render from '../render.jsx';
import CommentsList from "../../containers/feed/comments.js"
import Modal from '../dypop/modal'
import {Link} from 'react-router-dom'

const handleTap = (post) => {
    if (post.userId === Meteor.userId()) {
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
    Meteor.call('post.update', post._id, Meteor.userId(), newContent);
};

const commentClick = (post) =>{
    var btnId = "#cmt-" + post._id;
    var voteId = "#vote-" + post._id;
     $(btnId).show();
     $(voteId).hide();
};

const commentClickOff = (post) =>{
        var voteId = "#vote-" + post._id;
        $(voteId).show();
};

const commentSubmit = (post) => {
    const postId = post._id;
    const inputId = "#cmtd" + postId;
    const btnId = "#cmt-" + postId;
    const comment = $(inputId).val();
    Meteor.call("comment.create",postId, comment, function(error, result){
        commentClickOff(post);
    });
    $(btnId).hide();
    $(inputId).val("");
};

const reactionCount = (reactions, reaction) => {
    return _.filter(reactions, {reaction: reaction}).length;
};

class PostItem extends Component {

    constructor(props) {
        super(props);
        this.state = { isModalOpen: false, media: null }
    }

    react(postId, reaction) {
        Meteor.call('feed.react', postId, reaction);
    }

    mediaClick(action, media){
        action("media", null, media.data);
    }

    postOptionsClick = (action, post) => {
        action("options", null, post._id);
    };

    renderIfData(post){
        return (
            <div className="card box-shadow">
                <div className="post-heading">
                    <div className="post-info">
                        <Link to={"/profile/" + getUserInfo('_id', post.userId, 'username')}>
                            <img className="post-profile-image" height="57px" width="57px" src={getUserInfo('_id', post.userId, 'avatar') || fakeUser.avatar} alt=""/>
                            <p className="post-name">{post.legalName || getUserInfo('_id', post.userId, 'name')}</p>
                        </Link>
                        <h5 className="postDate">{post.createdAt ? moment(post.createdAt).fromNow() : null}</h5>
                    </div>
                    <div className="post-options" onClick={this.postOptionsClick.bind(this, this.props.action, post,)}>
                        <i className="fa fa-ellipsis-h options-button" aria-hidden="true"/>
                    </div>
                </div>
                <Hammer onDoubleTap={handleTap.bind(this, post)}>
                    <p id={"p-" + post._id} className="postBody" dangerouslySetInnerHTML={{__html: post.content}} />
                </Hammer>
                <div onClick={this.mediaClick.bind(this, this.props.action, post)}>
                    <Render data={post}/>
                </div>

                <button style={{display:"none"}} id={"s-" + post._id} onClick={savePost.bind(this, post)} className="btn btn-primary-outline">Save</button>
                <div className="card-block post-interact">
                    <div id={"vote-" + post._id} className="voteButtons">
                        <button type="button" onClick={() => this.react(post._id, 'like')} className="btn btn-danger voteButton">
                            <span className="voteButton-inner">
                                {reactionCount(post.reactions, 'like')} <i className="fa fa-thumbs-o-up" aria-hidden="true"/>
                            </span>
                        </button>
                        <button type="button" onClick={() => this.react(post._id, 'symp')} className="btn btn-info voteButton">
                            <span className="voteButton-inner">
                                {reactionCount(post.reactions, 'symp')} <i className="fa fa-heart" aria-hidden="true"/>
                            </span>
                        </button>
                        <button type="button" onClick={() => this.react(post._id, 'dislike')} className="btn btn-default voteButton">
                            <span className="voteButton-inner">
                                {reactionCount(post.reactions, 'dislike')} <i className="fa fa-thumbs-o-down"/>
                            </span>
                        </button>
                    </div>
                    <input id={"cmtd" + post._id} type="text" onClick={commentClick.bind(this, post)} onBlur={commentClickOff.bind(this, post)} className="form-control commentInput" placeholder="Reply"/>
                    <button id={"cmt-" + post._id} type="button" onClick={commentSubmit.bind(this, post)} className="commentBtn">
                        <i className="fa fa-comment-o" aria-hidden="true"/>
                    </button>
                </div>
                <CommentsList data={post._id}/>
            </div>
        )
    };

    render() {
        const {post} = this.props;
        return (
            <div id={post._id} className="post-item">
                {this.renderIfData(post)}
            </div>
        )
    }

    /* TODO separate reaction component like comments so this can be enabled again,
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.post.createdAt.getUTCMilliseconds() !== nextProps.post.createdAt.getUTCMilliseconds();
    }*/
}

export default PostItem;

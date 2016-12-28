import React from 'react';

const UserItem = ({data}) => ({


    deleteUser(){
        console.log(data._id);
        Meteor.call('user.delete',data._id);
    },


    render() {
        return (
                <div className="user-item">
                    <img className="user-image" src={data.avatar}/>
                    {data.firstName} {data.lastName}
                    <button onClick={this.deleteUser.bind(this)} className="user-rm btn btn-danger">Delete</button>
                </div>
        );
    }
});

export default UserItem;

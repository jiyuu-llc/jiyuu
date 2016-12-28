import React from 'react';
import UserItem from '../components/userItem.jsx';

const renderIfData = ( userItems ) => {

    if ( userItems && userItems.length > 0 ) {
        return userItems.map( ( data) => {
            return <UserItem key={data._id} data={data} />;
        });
    } else {
        return <p>No User Data</p>;
    }
};

const UserList = ( { userItems } ) => (
    <div id='userList'>{ renderIfData( userItems ) }</div>
);

export default UserList;
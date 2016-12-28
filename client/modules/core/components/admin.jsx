import React from 'react';

import UserList from '../containers/userList.js';

const Admin = () => ({

    render() {
        return (
                <div className="admin-panel">
                    <div className="col-sm-2">
                        Uitlity
                    </div>
                    <div className="col-sm-6">
                        <UserList/>
                    </div>
                    <div className="col-sm-4">
                        Options
                    </div>
                </div>
        );
    }
});

export default Admin;

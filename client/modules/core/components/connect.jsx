import React from 'react';
import _ from 'lodash';

const addConnectionToGroup = (groupName) => {
    var user = $('input#'+groupName).val();
    if (user){
      Meteor.call('addConnectionToGroup', groupName, user);
      $('input#' + groupName).val(null);
      location.reload();
    }
}

const addConnectionGroup = () => {
    var groupName = $('input#createGroup').val();
    if (groupName){
      Meteor.call('addConnectionGroup', groupName);
      $('input#createGroup').val(null);
      location.reload();
    }
}

const deleteConnection = (groupName, userId) => {
    if (groupName && userId){
      Meteor.call('deleteConnectionFromGroup', groupName, userId);
      location.reload();
    }
}

const renderGroup = (group) => {
    if (group.users && group.users.length != 0){
        return group.users.map((user)=>{
          return (
            <li key={user} className="list-group-item">
              <img height="18px" width="18px" className="connect-pic" src={getUserInfo('_id', user, 'avatar')} alt />
              <p className="connect-text">{getUserInfo('_id', user, 'name')}</p>
              <div onClick={deleteConnection.bind(this, group.name, user)} className="delete-connect">
                <i className="fa fa-trash" aria-hidden="true" />
              </div>
            </li>
          )
        })
      } else {
        return "Add a friend to connect!";
      }
}

const renderConnections = (connections) => {
  if (Meteor.userId && connections) {
    return connections.map((group) => {
        return (
          <div key={group._id} className="card">
            <div className="card-header">
              {group.name}
            </div>
            <ul className="list-group list-group-flush">
            {renderGroup(group)}
            </ul>
            <div className="card-footer">
              <div className="form-flex">
                <input type="text" className="form-control" id={group.name} placeholder="Connect to user"/>
                <button onClick={addConnectionToGroup.bind(this, group.name)} className="btn btn-primary">Add</button>
              </div>
            </div>
          </div>
        )
    });
  }
}

const Connect = ({connections}) => ({

  render() {
    return (
      <div id="connectCardContain">
        <div className="card-deck">
          {renderConnections(connections)}
        </div>

        <div className="form-flex card-block">
          <input type="text" className="form-control" id="createGroup" placeholder="Create Connection group"/>
          <button onClick={addConnectionGroup.bind(this)} className="btn btn-primary">Add</button>
        </div>
      </div>
    );
  }
});

export default Connect;

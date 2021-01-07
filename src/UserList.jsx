import React from 'react'
import UseResources from './UseResources';

const UserList =()=>{
    const users = UseResources('users');

    return(
        <ul>
            {users.map(({id,username})=><li key={id}>{username}</li>)}
        </ul>
    )
}

export default UserList
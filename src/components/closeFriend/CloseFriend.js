import React from 'react'
import './CloseFriend.css'

function CloseFriend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src={PF+user.profilePicture}
              alt=""
            />
            <span className="sidebarFriendNam3">{user.username}</span>
          </li>
    )
}

export default CloseFriend

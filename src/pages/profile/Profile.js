import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'
import './Profile.css'

function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
            <Topbar />
            <div className="profile">
            <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                    <img className="profileCoverImg" src={`${PF}uploads/2.jpeg`} alt="" />
                    <img className="profileCoverUserImg" src={`${PF}images/1.jpeg`} alt="" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Naresh Chowdary</h4>
                        <span className="profileInfoDesc">Hey Guys</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                <Feed />
            <Rightbar profile />
                </div>
            </div>
            </div>
        </>
    )
}

export default Profile

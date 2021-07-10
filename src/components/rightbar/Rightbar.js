import React from "react";
import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

function Rightbar({ profile }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Paul Walker</b> and <b>3 other friend</b> have a birthday today
          </span>
        </div>
        <img src="assets/Add1.jpeg" className="rightbarAd" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightFriendList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relation:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${PF}images/4.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Sk Rossi</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}images/5.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Emma Watson</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}images/6.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Olivia Paul</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}images/7.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Ean Bell</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}images/8.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Rokki Dan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}images/9.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Sam Prasad</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar />: <HomeRightbar/>}
      </div>
    </div>
  );
}

export default Rightbar;

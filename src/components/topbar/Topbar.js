import React from "react";
import "./Topbar.css";
import { Person, Search, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link style={{ textDecoration: "none" }} to="/">
          <span className="logo">Dexter</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search" className="topbarInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
            <span className="topbarLink">Home</span>
          </Link>
          <span className="topbarLink">Timeline</span>
          <span className="topbarLink">Settings</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to="/login">
        <img src="/assets/images/1.jpeg" alt="" className="topbarImg" />
        </Link>
      </div>
    </div>
  );
}

export default Topbar;

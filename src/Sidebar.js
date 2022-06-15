import { Avatar, IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/** Header */}
      <div className="sidebar__header">
        <Avatar />
        <div classname="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon className="icon" />
          </IconButton>
          <IconButton>
            <ForumIcon className="icon" />
          </IconButton>
          <IconButton>
            <MoreVertIcon className="icon" />
          </IconButton>
        </div>
      </div>
      {/** Search Bar */}
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      {/** Chat */}
          <div className="sidebar__chats">
              <h3>Chat</h3>
              <h3>Chat</h3>
              <h3>Chat</h3>
              <h3>Chat</h3>
              <h3>Chat</h3>
              <h3>Chat</h3>
      </div>
    </div>
  );
}

export default Sidebar;

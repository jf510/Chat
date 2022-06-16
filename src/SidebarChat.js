import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";

function SidebarChat({ addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1000));
  }, []);

  // When the createChat function is called, the user is prompted the create a room name
  // This prompt input is saved in a variable named roomName.
  // If roomName exists, meaning that, if the user entered a room name, then the room name is appended to the chat room name in the side bar
  const createChat = () => {
    const roomName = prompt("Please enter a chat room name");

    if (roomName) {
      // do some database stuff here
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>last message...</p>
      </div>
    </div>
  ) : (
    // createChat, is called on a click
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;

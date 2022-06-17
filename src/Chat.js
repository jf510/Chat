import "./Chat.css";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { Avatar, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import MicIcon from "@mui/icons-material/Mic";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

function Chat() {
  {
    /** This allows us to keep track of the seed and input. Thay're stored in pieces of state */
  }
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  {
    /** Every time the page loads, this useEffect will set the seed to a random number up to 5000. 5000 possible random avatar faces */
  }

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input)
    setInput('');
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          {/** IconButton makes the wrapped icon styled and clickable */}
          <IconButton>
            <SearchOutlined className="icon" />
          </IconButton>
          <IconButton>
            <AttachFileIcon className="icon" />
          </IconButton>
          <IconButton>
            <MoreVertIcon className="icon" />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name">Jordan Fontaine</span>
          Hey Guys
          <span className="chat__timestamp">4:20pm</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          {/** We want to keep track of what the user inputs so that we can push it somewhere. We set the input the most recent typed entry */}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button type="submit" onClick={sendMessage}>
            Send a Message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;

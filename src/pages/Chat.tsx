import React from "react";
import "../styles/Chat.scss";
import ChatCard from "../helper/chatCard";
//import IconButton from "@mui/material/IconButton";

const Chat : React.FC = () => {
  return (
    <div className="Chat">
     <ChatCard />
    <ChatCard />
    <ChatCard />
    <ChatCard />
    <ChatCard />
    <ChatCard />
    <ChatCard />
    <ChatCard />
    
    </div>
    )
}
export default Chat
import React/*{useEffect}*/from "react"
import "../styles/chatCard.scss"
import AvatarComp from "../helper/Avatar"
//import IconButton from "@mui/material/IconButton"
import {ChatCardEvent} from "../FX/EventListner"
const ChatCard : React.FC = () => {
  
  
  return (
    <div className="chatCard" onClick={()=>alert("chatcard is clicked")}
    //onDoubleClick={()=>alert("chatcard is clicked and clicked")}
    //onSelect={()=>alert("press")}
    //onMouseOver={()=>alert("mouse")}
    >
     <AvatarComp 
     clsName="Avatar-chat-card"
     width="50px"
     height="50px"
     />
     <div className="content-chat-card">
       <p className="user_name chat-card">
        mohamed abifitah Ahmed Mohamed 
      </p>
      <p className="message last-message chat-card">
        Asc waryaa ku aawey
      </p>
     </div>
    </div>
    )
}
export default ChatCard
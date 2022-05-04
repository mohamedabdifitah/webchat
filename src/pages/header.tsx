import React from "react"
import { Avatar} from "@mui/material"
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import "../styles/header.scss"

const Header : React.FC = () => {
  return (
      <div className="header">
      <div className="right-icons">
       <IconButton 
         onClick={()=> alert("hello")}
       
          style ={{
            //"backgroundColor":"rgb(0,127,255)",
            //"width":"40px"
           "borderRadius":"8",
           "top":"-3px",
       
           }}>
           <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png "
              style={{
               "margin":"0",
               "color":"white"
                //"top":"-1px"
             }}
             />
           </IconButton>
         <p className="headerTitle" >Chat</p>
       </div>
       <div className="left-icons">
       <IconButton onClick={()=> alert("hello world")}>
         <SearchIcon style={{
         "position":"relative",
         "color":"white",
         "margin":"0",
         "left":"8px",
         //"top":"12px"
         
       }} />
       </IconButton>
       <IconButton onClick={()=> alert("menu")
       }>
        <MoreVertIcon 
         style={{
           "color":"white" ,
           "position":"relative",
           "left":"8px"
           
         }}
        />
       </IconButton>
       </div>
       </div>
    )
}
export default Header
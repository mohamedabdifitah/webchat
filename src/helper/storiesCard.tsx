import React from "react";
import "../styles/storiesCard.scss";
import AvatarComp from "../helper/Avatar"
//import Avatar from '@mui/material/Avatar';
//import Badge from '@mui/material/Badge';
//import { makeStyles } from '@mui/styles';
//import { withStyles } from "@material-ui/core/styles";
//import IconButton from "@mui/material/IconButton"
// StoryCard component 
const StoryCard:React.FC = ()=> {
  return (
    <div className="story__card">
     <AvatarComp
     clsName="story__card"
     width="55px"
     height="55px"
     //className={"story__card"}
     //lastseen={"Sun May 01 2022 23:04:02 GMT+0300 (East Africa Time)"}
     
     />
     <p className="user_name">mohamed abdifitah </p>
    </div>
    )
}
export default StoryCard
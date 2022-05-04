import React from "react";
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
//import { makeStyles } from '@mui/styles';
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@mui/material/IconButton"
// interface of  of AvatarComp

interface IAvatarComp{
  clsName:string | undefined;
  width:string | undefined;
  height:string | undefined;
  
}

// Badge means online or offline 
const StyledBadge = withStyles(theme => ({
  badge: {
    backgroundColor: "#14ba46",
    color: "#14ba46",
    //border: "1px solid black",
    width:"9px",
    //height:"25px",
    boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100",
      height: "100",
      borderRadius: "55",
      //border: "1px solid currentColor",
      content: '""'
      
    }
  }
}))(Badge)
export 
// StoryCard component 
const AvatarComp:React.FC<IAvatarComp> = ({clsName,width,height}) => {
   console.log(clsName)
  return (
    <div className={clsName === undefined ?"story__card":clsName}>
     <IconButton >
       <StyledBadge 
       overlap="circular"
       anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
       variant="dot" > <Avatar
       alt="Remy Sharp" 
       style={{
         width:width,height:height,
         color:"white",
         //background:"radial-gradient(rgb(0,0,0,0.15) 60% transparent 0), radial-gradient(white 65% transparent 0),linear-gradient(to top right orange deeppink) ",
         //"objectFit":"cover",
         //"clipPath":"circle(42)"
         
       }}
       src={"https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png" }/>
     </StyledBadge>
     </IconButton>
    </div>
    )
}
export default AvatarComp
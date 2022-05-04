import React,{useState} from "react";
import "../styles/Tabs.scss";
import {BsChatFill,BsPeopleFill} from "react-icons/bs";
import {CgStories} from "react-icons/cg"
import {IoCallSharp} from "react-icons/io5"
import IconButton from '@mui/material/IconButton';

/*const handleClick = (name:string) => {
    //alert(setTabSelected)
    setTabSelected(name)
  }
  */
export const TabsListed = [
   {
     "Name":"chatTab",
     "Color":"white",
     "Icon":BsChatFill,
     
   },
   {
     "Name":"contacts",
     "Color":"white",
     "Icon":BsPeopleFill,
     
   },
   {
     "Name":"story",
     "Color":"white",
     "Icon":CgStories,
     
   },
   {
     "Name":"call-logs",
     "Color":"white",
     "Icon":IoCallSharp,
     
   }
   
   
  ]
/*interface IHandleClick{
  event:React.MouseEventHandler<HTMLAnchorElement>,
  name:string
} 
*/
const Tabs:React.FC = ()=>{
  const [TabSelected,setTabSelected] = useState<number>(0)
  //alert(TabSelected)
  const handleClick= (index:number) => {
    //alert(setTabSelected)
    return ()=>{
      //event.preventDefault()
      setTabSelected(index)
    }
  
    
  }
  return(
    <div className="tabs" >
     {TabsListed.map((Tab,index) =>{
      return (
        <div className={"tab-1"+index}>
        <IconButton 
          // onClick event Handler
          onClick ={ handleClick(index)}
          style={{
            position:"relative",
          //left:"25px",
          //top:"5px"
            width:"100%",
            height:"100%",
            color:Tab.Color
         
          }}
         >
         <Tab.Icon color={TabSelected!== index?"grey":"white"} style={{
           position:"relative",
           top:"-5px"
          }} />
        </IconButton>
       </div>
        )
    })}
      

    </div>
    
  )
  
}
export default Tabs 
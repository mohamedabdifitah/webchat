
// exporting a ChatCardEvent listner 
var list:number = 0;
export const ChatCardEvent = () =>{
  const ChatCard = document.querySelector(".chatCard");
  ChatCard?.addEventListener("mouseover",(e)=>{
    list++
    
  });
  ChatCard?.addEventListener("mouseout",(e)=>{
    list = 0
    
  })
  if(list>=2){
    alert(list)
    
  }else{
    alert("list is 0")
  }
}

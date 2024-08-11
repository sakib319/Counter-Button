var counter=0;
var plusBtn=document.getElementById("plusBtn");
var minBtn=document.getElementById("minBtn");
let counterH=document.getElementById("counterH");

plusBtn.addEventListener("click",function (){
  updateCounter(1);
})

minBtn.addEventListener("click",function(){
  // Tab to edit
  updateCounter(-1);
})

function updateCounter(value){
  counter=counter+value;
  counterH.innerHTML=counter;
  
  if (counter>=10){
    
    plusBtn.setAttribute("disabled",true)
  } else {
    plusBtn.removeAttribute("disabled",false)
  }
  
  if (counter<=0){
    
    minBtn.setAttribute("disabled",true)
  } 
 else {
    minBtn.removeAttribute("disabled",false)
  }
  
  
}


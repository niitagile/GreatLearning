let display = document.getElementById("display");
//buttons is an array of multiple div which are using class ="button"
let buttons = Array.from(document.getElementsByClassName("button"));
//map()-- it is used to iterate array elements
buttons.map((button)=>{
button.addEventListener("click",(e)=>{
//console.log(e.target.innerText);
switch(e.target.innerText){
case "C" :
    display.innerText="";
  break; 


case "=" :
    if(display.innerText=="")
      alert("Please Enter some values");
    else
    // eval is used to solve expression appear in display div. like 67-56 and return back answer
    // like 67-56=11 and we are displaying output . If expression is wrong then it will throw exception
    //which we are handling by using try and catch block. 
    try{
      display.innerText=eval(display.innerText);
     } catch{
      display.innerText="Error";
     }
  break;


case "Backspace" : //89+90
    display.innerText= display.innerText.substring(0,display.innerText.length-1);

break;


default :  
    display.innerText+=e.target.innerText;
}

});




});

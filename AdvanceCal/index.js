let display =document.getElementById("display");

function clearDisplay(){
    display.innerHTML="";

}

function cos(){
    if(display.innerText=="")
        alert("Please Enter some value");
    else    
        display.innerText=Math.cos(display.innerText);    
}

function sin(){
    if(display.innerText=="")
        alert("Please Enter some value");
    else    
        display.innerText=Math.sin(display.innerText);    
}

function tan(){
    if(display.innerText=="")
        alert("Please Enter some value");
    else    
        display.innerText=Math.tan(display.innerText);    
}

function sqrt(){
    if(display.innerText=="")
        alert("Please Enter some value");
    else    
        display.innerText=Math.sqrt(display.innerText);    
}

function ln(){
    if(display.innerText=="")
        alert("Please Enter some value");
    else    
        display.innerText=Math.log(display.innerText);  
        
        
}

function exp(){
    if(display.innerText=="")
        alert("Please Enter some value");
    else    
        display.innerText=Math.exp(display.innerText);    
}

function square(){
    if(display.innerText=="")
    alert("Please Enter some value");
else    
    display.innerText=eval(display.innerText)* eval(display.innerText)
}

function changeSign(){
    if(display.innerText=="")
        alert("Please enter some value");
    else{
        display.innerText= -1 * parseFloat(display.innerText);
    }

/*
    if(display.innerText.substring(0,1)=='-')
        display.innerText=display.innerText.substring(1,display.innerText.length);
    else
        display.innerText="-"+display.innerText    

*/

}


function addChar(character){
    if(display.innerText==null ||display.innerText=="0")
        display.innerText=character;
        else  display.innerText+=character;
}

function deleteChar(){
    display.innerText=display.innerText.substring(0,display.innerText.length-1)
}

function compute(){
    if(display.innerText=="")
            alert("Please eneter some values")
    else{
        try{
            display.innerText=eval(display.innerText);
        }
        catch{
            display.innerText="Error";
        }
    }    
        

}

function checkNum(){

    /*var data=parseFloat(display.innerText);
    if(isNaN(data))
        return true;
    else{    
        alert("Invalid Entry");
        return false;

    }*/
    

    var data=display.innerText;
    for(var i=0;i<data.length;i++){
            var ch=data.charAt(i);
            if(ch<'0' || ch>'9'){
                  if(ch!='/' || ch!='*' || ch!='-' || ch!='.' || ch != '(' || ch!=')'){
                    alert("invalid entry");
                        return false;
                  }
                
                    

                }
            }
            return true;
    }





var button = document.getElementById("b");
var isPurple = false;
button.addEventListener("click", function(){
    if(isPurple){
        document.body.style.backgroundColor="white";
        isPurple=false;
    }else
    {
        document.body.style.backgroundColor="purple";
        isPurple=true;
    }
    
});

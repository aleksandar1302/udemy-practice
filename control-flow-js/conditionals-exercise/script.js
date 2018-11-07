var age=prompt("How old are you");

if(age<0){
alert("Error!");
}
else if(age==21){
    alert("Happy 21st birthday!");
}
else if(age%2==1){
    alert("Your birthday number is odd.")
}
else if (age % Math.sqrt(age) === 0) {
    alert("Perfect sqaure!");
  }
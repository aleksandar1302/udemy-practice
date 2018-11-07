var num=4;
var guess=Number(prompt("Enter a number"));

if(guess===num){
    alert("You guessed it!")
}
else if(guess>num){
    alert("The number is too high. Try again.");
}
else{
    alert("The number is too low. Try again.");
}
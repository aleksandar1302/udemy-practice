function isEven(num){
    if(num%2===0){
        return true;
    }
    else{
        return false;
    }
}
//isEven(4);
//isEven(21);
//isEven(68);
//isEven(333);

function fact(num){
    var total=1;
    for(i=2;i<=num;i++){
        total*=i;
    }
    return total;
}

function kebabToSnake(str) {
    var myString = str.replace(/-/g, "_");
    return myString;
}
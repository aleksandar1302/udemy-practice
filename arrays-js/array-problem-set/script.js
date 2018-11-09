var numb=[];

function printReverse(numb){
    for(i=numb.length;i>=0;i--){
        console.log(numb[i]);
    }
}

var arr=[];

function ifTrue(arr){
    var param=arr[0];
    for(i=1;i<arr.length;i++){
        if(arr[i]!==param){
            return false;
        }
        
    }
    return true;
}

var summ=[];

function sumArray(summ){
    total=0;
    for(i=0;i<summ.length;i++){
        total=total+summ[i];
    }
    console.log(total);
}

var maxx=[];
function maxArray(maxx){
    var max=maxx[0];
    for(var i=1;i<maxx.length;i++){
        if(maxx[i]>max){
            max=maxx[i];
        }
    }
    return max; 
}


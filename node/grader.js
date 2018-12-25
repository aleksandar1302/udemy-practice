var scores = [90, 89, 98, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];


function average(arr){
    var sum=0;
for(var i=0; i<arr.length;i++){
    sum+=arr[i];
}

var result = sum/arr.length;
return Math.round(result);
}
console.log(average(scores));
console.log(average(scores2));
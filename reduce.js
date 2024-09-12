arr = [1,3,9,7,6,8,0,5,4];

let x = arr.reduce(function (a,b){
    return a+b;
});
console.log(x); //43

 x = arr.reduce(function (a,b){
    return a-b;
});
console.log(x); //-41

x = arr.reduce(function (a,b){
    return a*b;
});
console.log(x); //0




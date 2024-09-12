arr = [1,2,5,8,7,0,9,6,6,9,4];
// console.log(arr)

// write a code to filter out even elements

let brr = arr.filter(function (x){
    if(x%2!=0) return true;
    else return false;
});
console.log(brr); //[ 1, 5, 7, 9, 9 ]

// write a code to filter out odd elements

brr = arr.filter((x) =>{
    if(x%2==0) return true;
    else return false;
});
console.log(brr); //[ 2, 8, 0, 6, 6, 4 ]

// write a code to filter out greater then 5 elements

brr = arr.filter((x) =>{
    if(x<=5) return true;
    else return false;
});
console.log(brr); //[ 1, 2, 5, 0, 4 ]


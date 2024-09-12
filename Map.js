arr = [1,9,6,3];
// write a code to insert 2 times of element of array arr into brr
// method 1
brr = [];
brr = arr.map(ele => ele*2);
console.log(brr);
// method 2
brr = [];
brr = arr.map(function (x){
    x *= 2;
});
console.log(brr);








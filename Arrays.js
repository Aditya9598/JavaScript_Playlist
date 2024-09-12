// creation
arr = [1,6,8,3];
console.log(arr); // to print the array ,[ 1, 6, 8, 3 ]

for( i =0;i<arr.length;i++){
    console.log(arr[i]);   
}
console.log(arr[1]); //6,
//push method
arr.push(10); //[ 1, 6, 8, 3, 10 ]
console.log(arr);

// pop method
arr.pop(); // remove last element,[ 1, 6, 8, 3 ]
console.log(arr);

//unshift use to insert element at first
arr.unshift(2); //[ 2, 1, 6, 8, 3 ]
console.log(arr);

//shift use to remove first element,
arr.shift(); //[ 1, 6, 8, 3 ]
console.log(arr);

// const array it will maintain the data type
const brr = [1,6,8,9]; 
brr[0]=10;
console.log(brr); //[ 10, 6, 8, 9 ]
brr.push(15);    //[ 10, 6, 8, 9, 15 ]
console.log(brr);
brr.pop(); //[ 10, 6, 8, 9 ]
console.log(brr);
// brr = 1.25; its not possible in simple array it is posible 
arr = 1.25; // it will ok we able to change the datatype

arr = [1.24,19,true,false,"Aman",brr]; // any datatype is stored in array
console.log(arr); //[ 1.24, 19, true, false, 'Aman', [ 10, 6, 8, 9 ] ]

//2D array
crr = [[1,2,3],[4,5,6,7,8]]; // size of the 2d array does'nt matter
console.log(crr); //[ [ 1, 2, 3 ], [ 4, 5, 6, 7, 8 ] ]

//forof loop
arr = [1,6,9,3]
for (const ele of arr) {
    console.log(ele);
    // ele *= 2;  it is not possible
}

//foreach loop
arr.forEach(ele => {
    console.log(ele);
    // ele *= 2;
    
});










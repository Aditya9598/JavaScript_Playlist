// string
let a = "Aman";
console.log(a);// Aman

console.log(a[1]);//m

console.log(a[2]);//a

for(let i =0;i<a.length;i++){
    console.log(a[i]);
}

//forof loop
for (const ele of a) {
    console.log(ele);
    
}
// forEach is didn't work on string

//stringBuild
let s = "Raghav garg";
console.log(s.toUpperCase()); //RAGHAV GARG
console.log(s.toLowerCase()); //raghav garg
let s2 = s.toLowerCase();
console.log(s2); //raghav garg

//trim is use to remove space from starting and end of the string
let str = "   Raghav Garg  ";
str1 = str.trim(); //Raghav Garg
console.log(str1);

// indexOf
console.log(str1.indexOf('a'));//1
console.log(str1.lastIndexOf('a'));//8

// charAt
console.log(str1.charAt(3)); //h

//slice 
let b = "Raghav garg";
console.log(b.slice(0));//Raghav garg
console.log(b.slice(2,5)); //gha

//split

c = "Aman is the good teacher at apna collage";
let arr = c.split(' '); //
// [
//     'Aman',    'is',
//     'the',     'good',
//     'teacher', 'at',
//     'apna',    'collage'
//   ]

console.log(arr);

for (const ele of arr) {
    console.log(ele);
}
// Aman
// is
// the
// good
// teacher
// at
// apna
// collage






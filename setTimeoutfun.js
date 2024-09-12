function hello(){
    console.log("hello");
}
setTimeout(hello,2*1000);

// print 1 to 10 but with delay of 2 sec in each number

for(let i=1 ;i<=10 ;i++){
    setTimeout(function (){
        console.log(i);
    },i*1000);
}

// print in reverse 10 to 1 in gap of 2sec for each 
for(let i=10 ;i>=1 ;i--){
    setTimeout(function (){
        console.log(11-i);
    },i*1000);
}
  // object behave as map/dictonary 
  var detail = ["Aman",25,92.5]; //  ["Aman",25,92.5]


  let x ={    //{ name: 'Aman', age: 25, percentage: 92.5 } this is the better way
    name:"Aman",
    age:25,
    percentage:92.5
  }
  console.log(x); 
  x.age = 30;
  x.name = "Raghav";
  x.percentage = 99.5;

  console.log(x); //{ name: 'Raghav', age: 30, percentage: 99.5 }
  console.log(x.age); // 30

  for (const key in x) { 
    console.log(key);
  }
//   30
// name
// age
// percentage

  
  for (const key in x) {
    console.log(x[key]);
    
  }
//   Raghav
//   30
//   99.5

  for (const key in x) {
    console.log(key,x[key]);
    
  }
// name Raghav
// age 30
// percentage 99.5

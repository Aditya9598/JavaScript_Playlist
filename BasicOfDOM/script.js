let x = document.querySelector("#ele1");
 x.addEventListener('click',function (){
    x.style.background='red';
    x.style.color="yellow";
 });

 let y = document.querySelector("#ele2");
 y.addEventListener('mousemove',function (){
    y.style.background='red';
    y.style.color="yellow";
    y.style.fontfamily="gills";
 });

 let z = document.querySelector("#ele3"); 
 y.addEventListener('click',function (){ // by click on ele2 the color of ele3 will changed
    z.style.background='purple';
    z.style.color="green";
 });

//  let k = document.querySelector("#ele3");
    z.addEventListener('click',function (){ // by cicking ele3 the value,color,bgcolor of ele1 will get chaniged
        x.innerHTML = ("Kalki");
        x.style.background = "orange";
        x.style.color = "pink";
    } );

    y.addEventListener("mouseleave", function(){ // use when leaving its color will get originaled
        y.style.color = 'black';
        y.style.background = 'white';
    });

    x.addEventListener("mouseleave",function (){
        x.innerHTML="pikachu";
        x.style.background="white";
        x.style.color = "black";
    });

let m = document.querySelector("#ele4");
    setTimeout(function (){  // after 2sec the bgcolor of ele4 has changed;
      m.style.background="pink";
  },2000);

  let a = document.querySelector("#times"); 
   s = "<h1>Hello,ji</h1>"
   for( var i=0;i<10;i++){   // to print muliple string using loop
     s+= "<h1>Hello,ji</h1>";
      
   }
   a.innerHTML=s;
   


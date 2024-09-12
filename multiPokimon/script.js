var a = document.querySelector("#main");
 s= "";


 arr = ["https://th.bing.com/th/id/OIP.np2Dkr-O2hAqmWMc-qpHKgHaEo?w=303&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7","https://th.bing.com/th/id/OIP.-UOaLmn8g3yLaVx71NIkfgHaFL?rs=1&pid=ImgDetMain","https://th.bing.com/th/id/R.91fdeb6c301d99ffaeae91be674e67fa?rik=FWyM%2fhMnC2r8iw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpokemon-hd-png-image-025pikachu-pokemon-mystery-dungeon-explorers-of-sky-png-pokemon-wiki-fandom-powered-by-wikia-1377.png&ehk=zbMABhCJ0nbQqVBVts3YZHqY5CjK8onHG07geaH%2fzrs%3d&risl=&pid=ImgRaw&r=0","https://purepng.com/public/uploads/large/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527784812pkckd.png","https://pngimg.com/uploads/pokemon/pokemon_PNG66.png","https://purepng.com/public/uploads/large/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527784845bdjl3.png","https://mir-s3-cdn-cf.behance.net/project_modules/1400/60fd8180972741.5cf07e84d9571.png","https://purepng.com/public/uploads/large/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527786841sy02u.png"]

 for(let i=0;i<52;i++){
    let m = Math.floor(Math.random()*arr.length);
    s+= `<div class="cards"> <img src=${arr[m]}> </div>`;

 }
 a.innerHTML=s;

 let s5 = document.querySelector("#main");
 let crsr = document.querySelector("#cursor");
    s5.addEventListener("mousemove",function(detail){
    console.log(detail.x, detail.y);
    crsr.style.left=detail.x+"px";
    crsr.style.top=detail.y+"px";



});
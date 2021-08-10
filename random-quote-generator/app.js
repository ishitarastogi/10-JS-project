//Colors array
let quotes = [
    "The purpose of our lives is to be happy.” — Dalai Lama.",
     "Life is what happens when you're busy making other plans.” — John Lennon.",
     " Get busy living or get busy dying.” — Stephen King.",
   " You only live once, but if you do it right, once is enough.” — Mae West. ",
     "When things go wrong, don't go with them.”" 
 ];
//get button
let button = document.getElementById('button');

//add event listener
button.addEventListener('click', function(){
    //randomizer
    var randomColor = quotes[Math.floor(Math.random() * quotes.length)]
    //get container
    let container = document.getElementById('container');

    container.innerHTML = randomColor;
})
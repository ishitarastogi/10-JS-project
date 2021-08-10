let colors = ['blue', 'yellow', 'black', 'red', 'brown', 'orange'];

let button = document.getElementById('button');
button.addEventListener('click', function(){
console.log('f')
var randomColor = colors[Math.floor(Math.random() * colors.length)]

document.body.style.backgroundColor = randomColor;
})

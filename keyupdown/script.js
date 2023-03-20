const input = document.getElementById("input");

input.addEventListener('keydown', function(e){
    display.innerText ="You Have Pressed " + e.key
})

input.addEventListener('keyup', function(e){
    display.innerText ="You Have Released " + e.key
})
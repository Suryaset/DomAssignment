const boxone = document.getElementById("box1");
const boxtwo = document.getElementById("box2");

boxone.addEventListener("mouseover",()=>{
    boxone.style.backgroundColor = "gray";
    boxtwo.style.width = "80vw";
    boxtwo.style.color = "lightgray"
    boxtwo.style.backgroundColor = "green"

});
boxone.addEventListener("mouseout",()=>{
    boxone.style.backgroundColor = "yellow";
});
boxtwo.addEventListener("mouseout",()=>{
    boxtwo.style.backgroundColor = "red"
    boxtwo.style.width = "30vw"; 
       
});
boxtwo.addEventListener("mouseover",()=>{
    boxtwo.style.backgroundColor = "gray"
    boxtwo.style.width = "60vw"; 
       
});
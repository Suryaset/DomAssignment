const btn = document.getElementById("btn");
const circle = document.getElementById("circle");
const reset = document.getElementById("reset");
circle.style.display = "flex";
circle.style.width = "200px";
circle.style.height = "200px";
circle.style.border = "2px solid red";
circle.style.borderRadius = "50%";
circle.style.backgroundColor = "gray";
circle.style.boxShadow = "0px 0px 20px black"


btn.addEventListener("click",()=>{
    circle.style.width = "250px";
    circle.style.height = "250px";
    circle.style.border = "5px solid aqua"; 
    circle.style.backgroundColor = "green";
    circle.style.borderRadius = "50%";
    btn.style.backgroundColor = "aqua";
    btn.style.color = "blue";
});

reset.addEventListener("click",()=>{
    circle.style.display = "flex";
    circle.style.width = "100px";
    circle.style.height = "100px";
    circle.style.border = "2px solid red";
    circle.style.borderRadius = "10%";
    circle.style.backgroundColor = "gray";
});
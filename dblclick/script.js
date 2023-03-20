const btnon = document.getElementById("btnon");
const btnoff = document.getElementById("btnoff");
const one = document.getElementById("one");
const two = document.getElementById("two");

btnon.addEventListener("dblclick",()=>{
    one.innerText = "ON";
    one.style.display = "flex";
});


btnoff.addEventListener("dblclick",()=>{
    one.innerText = "OFF";
    one.style.display = "flex";
});

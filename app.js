
var reset = document.getElementById("change_text")
var change__ = document.getElementById("change_text")

document.getElementById("btnClick").onclick = () =>{
    change__.textContent = "Sokrong, I Love You."
    
}

document.getElementById("btnReset").onclick = () =>{
    reset.textContent = "Hello World"
}
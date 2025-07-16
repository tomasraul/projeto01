let b1 = document.getElementById("botao")
let b2 = document.getElementById("btn")
let par = document.getElementById("par")
let i1 = document.getElementsByClassName("i1")[0]
let i2 = document.getElementsByClassName("i2")[0]
let i3 = document.getElementsByClassName("i3")[0]
let i4 = document.getElementsByClassName("i4")[0]
function ver(){
    b1.style.display = "none"
    b2.style.display = "block"
    par.style.textAlign = "center"
    i1.style.display = "block"
    i2.style.display = "block"
    i3.style.display = "block"
    i4.style.display = "block"
}
function ocult(){
    b1.style.display = "block"
    b2.style.display = "none"
    par.style.textAlign = "center"
    i1.style.display = "none"
    i2.style.display = "none"
    i3.style.display = "none"
    i4.style.display = "none"
}
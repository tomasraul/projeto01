let txtarea = document.getElementById("txtarea")
let comp = document.getElementById("compr")
let larg = document.getElementById("large")
let quant = document.getElementById("quant")
let res = document.getElementById("res")

function areaSelect() {
    txtarea.style.display = "block"
    comp.style.display = "none"
    larg.style.display = "none"
}
function medSelect() {
    comp.style.display = "block"
    larg.style.display = "block"
    txtarea.style.display = "none"
}

function calcArea(l, c, n) {
    return l * (c*n)
}

    
function resultado() {
    
    
    let result = document.createElement("div")
    let large = document.getElementById("larg")
    let compr = document.getElementById("comp")
    let sim = document.getElementById("sim")
    let nao = document.getElementById("nao")
    let area = document.getElementById("area")
    let totArea = Number(large.value) * Number(compr.value)
    let qptr = document.getElementById("qptr")
    let qrpqr = document.getElementById("qrpqr")
    let trpst = document.getElementById("trpst")
    let stpst = document.getElementById("stpst")
    let stpcv = document.getElementById("stpcv")
    let qpcv = document.getElementById("qpcv")
    let slct = document.getElementById("select")
    let numCaixas = 0 

    
    if(sim.checked) {
        if(area.value.length == 0 || quant.value.length == 0) {
            window.alert("Preencha todos os campos vazios")
        }else{
         if(qptr.selected) {
            numCaixas = Number(area.value) / (0.15 * 0.30 * Number(quant.value))
        }
        if(qrpqr.selected) {
            numCaixas = Number(area.value) / (0.40 * 0.40 * Number(quant.value))
        }
        if (trpst.selected) {
            numCaixas = Number(area.value) / (0.30 * 0.60 * Number(quant.value))
        }
        if (stpst.selected) {
            numCaixas = Number(area.value) / (0.60 * 0.60 * Number(quant.value))
        }
        if (stpcv.selected) {
            numCaixas = Number(area.value) / (0.60 * 1.20 * Number(quant.value))
        }
        if (qpcv.selected) {
            numCaixas = Number(area.value) / (0.15 * 1.20 * Number(quant.value))
        }
        if(slct.selected) {
            window.alert("Escolha as tijoleiras que deseja!")
            res.appendChild(result)
        }else{
        
        result.innerText += `Area: ${area.value}m² numero ${numCaixas.toFixed(1)}`
        result.style.display = "inline"
        result.style.padding = "5px"
        result.style.backgroundColor = "#40e0ff"
        result.style.borderRadius = "10px"
        result.style.marginRight = "3px"
        result.style.marginTop = "3px"
        res.appendChild(result) 
        }
      }
    }else{
       if (compr.value.length == 0 || large.value.length == 0 || quant.value.length == 0) {
           window.alert("Preenche todos os campos")
        }else{
        
           if(qptr.selected) {
                numCaixas = totArea / (0.15 * 0.30 * Number(quant.value))
    }
            if(qrpqr.selected) {
            numCaixas = totArea / (0.40 * 0.40 * Number(quant.value))
        }
        if (trpst.selected) {
            numCaixas = totArea / (0.30 * 0.60 * Number(quant.value))
        }
        if (stpst.selected) {
            numCaixas = totArea / (0.60 * 0.60 * Number(quant.value))
        }
        if (stpcv.selected) {
            numCaixas = totArea / (0.60 * 1.20 * Number(quant.value))
        }
        if (qpcv.selected) {
            numCaixas = totArea / (0.15 * 1.20 * Number(quant.value))
        }
        if(slct.selected) {
            window.alert("Escolha as tijoleiras que deseja!")
            res.appendChild(result)
        }else{
           
           
            result.innerText += `Area: ${totArea}m² numero ${numCaixas.toFixed(1)}`
            result.style.display = "inline"
            result.style.padding = "5px"
            result.style.backgroundColor = "#40e0ff"
            result.style.borderRadius = "10px"
            result.style.marginRight = "3px"
            result.style.marginTop = "3px"
            res.appendChild(result)
    }
  } 
}
 
}
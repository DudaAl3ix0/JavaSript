alert("Olá Mundo!");
var nomeDigitado = document.querySelector("input");

function verifica(){ 
    if(nomeDigitado.value == nomeDigitado){ 
    alert("o nome digitado é " + nomeDigitado);

    } 
    
}

var button = document.querySelector("button")
    button.onclick = verifica;
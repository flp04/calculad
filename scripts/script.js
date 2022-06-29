//variavel que recebe o elemento html display e display2
var display = document.querySelector("#display")
var display2 = document.querySelector("#display2")
//variaveis para armazenar os numeros e operação a ser realizada
var numero1 = 0
var numero2 = 0
var operacao = null
//função para inserir um numero no display
function insert(num){
    //se o display estiver zerado ele atribui
    if(display.innerHTML == "0"){
        display.innerHTML = num
    //se não concatena
    }else{
        display.innerHTML += num
    }
}
//função que atribui o operador, o primeiro numeral  e zera o display para receber o segundo
function math(op){
    operacao = op.innerHTML
    numero1 = parseFloat(display.innerHTML)
    display2.innerHTML = numero1 + " " + operacao
    display.innerHTML = 0
}
//atribui o segundo numeral, realiza a operação conforme a variavel e mostra o resultado no display
function resultado(){
    numero2 = parseFloat(display.innerHTML)
    display2.innerHTML += " " + numero2 + " ="
    switch(operacao){
        case "+":
            display.innerHTML = numero1 + numero2
            break
        case "-":
            display.innerHTML = numero1 - numero2
            break
        case "*":
            display.innerHTML = numero1 * numero2
            break
        case "/":
            display.innerHTML = numero1 / numero2
            break
    }
}
function porcento(){
    if(numero1 == 0){
        alert("utilize o % no lugar do =")
    }else{
        numero2 = (numero1/100)*display.innerHTML
        display2.innerHTML += " " + display.innerHTML + "% ="
     switch(operacao){
        case "+":
            display.innerHTML = numero1 + numero2
            break
        case "-":
            display.innerHTML = numero1 - numero2
            break
        case "*":
            display.innerHTML = numero2
            break
        case "/":
            display.innerHTML = numero2
            break
     }
    }
}
//limpa o display e zera as operacões
function limpar(){
    display.innerHTML = 0
    display2.innerHTML = ''
    operador = 0
}
//apaga o ultimo caracter do display
function apagar(){
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length -1)
}
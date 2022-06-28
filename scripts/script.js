//variavel que recebe o elemento html display
var display = document.querySelector("#display")
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
    operacao = op
    numero1 = display.innerHTML
    display.innerHTML = 0
}
//atribui o segundo numeral, realiza a operação conforme a variavel e mostra o resultado no display
function resultado(){
    numero2 = display.innerHTML
    switch(operacao){
        case "somar":
            display.innerHTML = parseFloat(numero1) + parseFloat(numero2)
            break
        case "subtrair":
            display.innerHTML = parseFloat(numero1) - parseFloat(operador2)
            break
        case "multiplicar":
            display.innerHTML = parseFloat(numero1) * parseFloat(numero2)
            break
        case "dividir":
            display.innerHTML = parseFloat(numero1) / parseFloat(numero2)
            break
    }
}
function porcento(){
    if(numero1 == 0){
        alert("utilize o % no lugar do =")
    }else{
        numero2 = (parseFloat(numero1)/100)*parseFloat(display.innerHTML)
     switch(operacao){
        case "somar":
            display.innerHTML = parseFloat(numero1) + parseFloat(numero2)
            break
        case "subtrair":
            display.innerHTML = parseFloat(numero1) - parseFloat(operador2)
            break
        case "multiplicar":
            display.innerHTML = (numero2)
            break
        case "dividir":
            display.innerHTML = (numero2)
            break
     }
    }
}
//limpa o display e zera as operacões
function limpar(){
    display.innerHTML = 0
    operador = 0
}
//apaga o ultimo caracter do display
function apagar(){
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length -1)
}
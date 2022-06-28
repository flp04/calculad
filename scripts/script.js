prompt("Para reiniciar toque no display")

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
    operador1 = display.innerHTML
    display.innerHTML = 0
}
//atribui o segundo numeral, realiza a operação conforme a variavel e mostra o resultado no display
function resultado(){
    operador2 = display.innerHTML
    switch(operacao){
        case "somar":
            display.innerHTML = parseFloat(operador1) + parseFloat(operador2)
            break
        case "subtrair":
            display.innerHTML = parseFloat(operador1) - parseFloat(operador2)
            break
        case "multiplicar":
            display.innerHTML = parseFloat(operador1) * parseFloat(operador2)
            break
        case "dividir":
            display.innerHTML = parseFloat(operador1) / parseFloat(operador2)
            break
    }
}
//limpa o display e zera as operacões
function limpar(){
   // prompt("uai")
    display.innerHTML = 0
    operador = 0
}
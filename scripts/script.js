//cria o array de elementos div pegando pelo Id
const elementos = [
 document.getElementById("red"),
 document.getElementById("blue"),
 document.getElementById("yellow"),
 document.getElementById("green")
]
//cria uma variavel array para armazenar a sequencia aleatoria
var sequencia = []
//cria uma variavel para armazenar o array da sequencia de jogadas
var sequenciaJogador = []
//cria um booleano para nao permitir o jogador de clicar antes fe finalizar a sequencia aleatoria
var play = false

var placar = document.getElementById('placar')
var pontuacao = 0
function acrescentaCor(){
  sequencia.push(Math.floor(Math.random()*4))
}
function piscar(elemento, nivel){
  setTimeout( () => {
    elemento.classList.add('selected')
  }, nivel*1000+250)
  setTimeout( () => {
    elemento.classList.remove('selected')
  }, nivel*1000+1000)
}
function piscarSequencia(sequencia){
 for(i = 0; i < sequencia.length; i++){
  piscar(elementos[sequencia[i]], i)
 }
  
}
function iniciarJogo(){
  acrescentaCor()
  piscarSequencia(sequencia)
  play = true
}
function ativarCliques(){
  for(i = 0; i< elementos.length; i++){
    elementos[i].onclick = "onClick(i)"
  }
}
function proximoNivel(){
  acrescentaCor()
  piscarSequencia(sequencia)
  console.log(play)
  play = true
}
function onClick(cor){
  if(play){
    sequenciaJogador.push(cor)
     if(sequenciaJogador[sequenciaJogador.length-1] == sequencia[sequenciaJogador.length-1]){
      if(sequenciaJogador.length == sequencia.length){
       alert("voce acertou. proximo nivel")
        pontuacao +=1
       sequenciaJogador= []
        play = false
       proximoNivel()
      }
     }else{
       alert("voce errou. inicie novamente")
       sequencia = []
       sequenciaJogador = []
     }
 }
  console.log(play)
}
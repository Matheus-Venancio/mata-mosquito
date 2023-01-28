var largura = 0
var altura = 0
var vidas = 1
var tempo = 10
var cronometro = setInterval(function () {
    tempo -= 1

    if (tempo < 0) {
clearInterval(cronometro)
clearInterval(criaMosca)
alert('vitoria')
window.location.href='vitoria.html'
    } else {
        //Colocando o dado no span
        document.getElementById('cronometro').innerHTML = tempo
    }


}, 1000)
var mosquito = document.createElement('img')
mosquito.className = tamanho() + " " + lado()



mosquito.src = 'imagens/mosca.png'

function iniciarjogo(){
    var nivel = document.getElementById('nivel').value

    if(nivel===""){
        alert("Selecione um nivel")
        return false
    }
    alert(nivel)
}

function ajustaTamanho() {
    altura = window.innerHeight;
    largura = window.innerWidth;
}
ajustaTamanho()

function posicao() {
    //Testando se existe
    if (document.getElementById('mosquito')) {
        //Remover o moesquito anterior
        document.getElementById('mosquito').remove()

        if (vidas > 3) {
            window.location.href = "fim.html"
        } else {
            //Apagando os corações
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            //Depois que passar, ele tira a outra vida
            vidas++
        }

    }

    //Posição aleatoria
    var posixaoX = Math.floor(Math.random() * largura) - 90//floor diuminui as cass decimais, e o rando o numero aleatorio
    var posixaoY = Math.floor(Math.random() * altura) - 90

    //Se a posiçãofor menor que zero, ele nao aceita e vai pára zero
    posixaoX = posixaoX < 0 ? 0 : posixaoX
    posixaoY = posixaoY < 0 ? 0 : posixaoY

    //Adicionando um filho para o body
    document.body.appendChild(mosquito)

    //Posição
    mosquito.style.left = posixaoX + 'px'
    mosquito.style.top = posixaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'

    tamanho()
    lado()
}


function tamanho() {
    var classe = Math.floor(Math.random() * 3)

    //Tomando decisão
    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function lado() {
    var classe = Math.floor(Math.random() * 2)

    //Tomando decisão
    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}



//A cada 1 segundo ele aparece um mosquito
var criaMosca=setInterval(function () {
    posicao()
}, 2000)

//Clicando no mosquito
mosquito.onclick = function () {
    this.remove()//Ajustando o contexto para remover, referencia ao html que executa a função
}

//Incluindo o tempo de forma dinamica
document.getElementById('cronometro').innerHTML = tempo







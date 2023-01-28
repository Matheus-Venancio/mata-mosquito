var largura = 0
var altura = 0
var mosquito = document.createElement('img')
mosquito.className = tamanho()


mosquito.src = 'imagens/mosca.png'

function ajustaTamanho() {
    altura = window.innerHeight;
    largura = window.innerWidth;
}
ajustaTamanho()

function posicao() {
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

    tamanho()
}

posicao()

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








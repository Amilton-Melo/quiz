let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Qual a altura da rede de vôlei nos jogos masculino e feminino?",
    alternativaA : "2,4m para ambos;",
    alternativaB : "2,5m e 2,0m",
    alternativaC : "2,43m e 2,24m",
    alternativaD : "2,45m e 2,15m",
    correta      : "2,43m e 2,24m",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual personagem folclórico costuma ser agradado pelos caçadores com a oferta de fumo?",
    alternativaA : "Caipora",
    alternativaB : "Saci",
    alternativaC : "Lobisomem",
    alternativaD : "Boitatá",
    correta      : "Caipora",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Pessoas fleumáticas são mais...",
    alternativaA : "Explosivas",
    alternativaB : "Calmas",
    alternativaC : "Estressadas",
    alternativaD : "Raivosas",
    correta      : "Calmas",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Açai ou sorvete?",
    alternativaA : "Açaí",
    alternativaB : "Sorvete",
    alternativaC : "gelado",
    alternativaD : "quente",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Dia ou noite?",
    alternativaA : "Dia",
    alternativaB : "Noite",
    alternativaC : "Madrugada",
    alternativaD : "Meio termo",
}

const q6 = {
    numQuestao : 6,
    pergunta : "Que filme tem ursos",
    alternativaA : "Os irmãos ursos",
    alternativaB : "O bicho vai pegar",
    alternativaC : "Os sem florestas",
    alternativaD : "Toy Store 3",
    correta : "Os irmãos ursos",
}

const q7 = {
    numQuestao : 7,
    pergunta : "Qual o maior animal terrestre?",
    alternativaA : "Baleia Azul",
    alternativaB : "Dinossauro",
    alternativaC : "Elefante Africano",
    alternativaD : "Tubarão Branco",
    correta : "Elefante Africano",
}

const q8 = {
    numQuestao : 8,
    pergunta : "Baby do baby do biruleibe leibe é um...",
    alternativaA : "Meme",
    alternativaB : "Motivo de raiva",
    alternativaC : "Texto",
    alternativaD : "História",
    correta : "Meme",
}

const q9 = {
    numQuestao : 9,
    pergunta : "Dias chuvosos ou quentes?",
    alternativaA : "Chuvosos",
    alternativaB : "Quentes",
    alternativaC : "Úmidos",
    alternativaD : "Secos",
    correta : "Chuvosos",
}

const q10 = {
    numQuestao : 10,
    pergunta : "O sol é...",
    alternativaA : "Quente",
    alternativaB : "Frio",
    alternativaC : "Morno",
    alternativaD : "Vermelho",
    correta : "Quente",
}


// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Parabéns por responder ao quiz 😌"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 6000)
}
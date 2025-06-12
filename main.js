const CaixaPrincipal = document.querySelector(".caixa-principal");
const CaixaPerguntas = document.querySelector(".caixa-perguntas");
const CaixaAlternativas = document.querySelector(".caixa-alternativas");
const TextoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    },
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    },
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    },
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    }
]
let atual = 0;
 let perguntaAtual;

function mostraPergunta(){

perguntaAtual = perguntas [atual];
 
CaixaPerguntas.textContent = perguntaAtual.enunciado;
}
 mostraPergunta();

console.log(perguntas)



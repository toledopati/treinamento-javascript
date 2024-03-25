//Função sem retorno (void)
function saudar (nome){
    console.log('Olá' + nome);
}
saudar ('Patricia');

//Função com retorno
function somar (a,b){
    return a + b;
}
let resultado = somar (5, 13);
console.log (resultado);

// Função expressão
let calculaAreaQuadrado = function (b,a){
    return b * a;
}
console.log(calculaAreaQuadrado (5,5));

//Arrow function
let soma = (a, b) => a + b;
console.log(soma (5,5));

let parOuImpar = numero => {
    if (numero % 2 == 0){
        return 'Par';
    }else{
        return 'Impar';
    }
};
console.log(parOuImpar(5));

function criarMensagem(nome = 'Cliente não informado', saudacao = 'oi'){
    return `${nome}, ${saudacao} SEJA BEM VINDO!`;
}

console.log(criarMensagem('Patricia'));
console.log(criarMensagem('Patricia', 'Olá'));
console.log(criarMensagem());


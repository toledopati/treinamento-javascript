 let condicao = true;

 //ESTRUTURA DE REPATIÇÃO
for (let i = 0; i < 10; i++){
    //Executa enquanto a condição for verdadeira
}

while (condition){
     //Executa enquanto a condição for verdadeira
     condicao = false;
}

do{
    //Executa enquanto a condição for verdadeira
}while (condition);

//LOOPS

let array = [1,2,3,4,5,6,7,8,9,10];
array.forEach(function(elemento){
    //Ação sobre cada elementos do array
    console.log(elemento+2);
});

let novaLista = array.map(numero => numero * numero);
console.log(novaLista);

let idades = [5,10,12,15,18,22,15,35,49];
let maiores = idades.filter(idade => idade > 20);
console.log(maiores);

console.log("#################")
let numeros = [1,2,3,4,5];
let soma = array.reduce ((acumular, numero) => acumular + numero, 10);
console.log(soma);

idades = [5,10,12,15,18,22,15,35,49];
primeiroMaiorQue20 = idades.find(idade => idade > 20);
console.log(primeiroMaiorQue20);



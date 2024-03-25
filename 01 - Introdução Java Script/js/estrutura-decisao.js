let condicao = true;
let condicao2 = false;

if(condicao){
    //Excuta se a condição for verdadeira
}

if(condicao){
    //Excuta se a condição for verdadeira
}else{
    //Excuta se a condição for false
}

if(condicao){
    //Excuta se a condição for verdadeira
}else if (condicao2){
    //Excuta se a condição for verdadeira
}
else{
    //Excuta se a condição for verdadeira
}

//operador ternário
let resultado = condicao2 ? 'passou no teste' : 'reprovado';
console.log(resultado);

//OPERADOS LÓGICOS
if (condicao && condicao2){
    //Excuta se as duas condições foram verdadeiras
}

if (condicao || condicao2){
    //Excuta se uma das condições for verdadeiras
}

if (!condicao){
    //Excuta se a condição for inversa
}

switch(condicao){
    
    case true:
        //Executa se a condição for verdadeira
        break;
    case false:
        //Executa se a condição for falsa
        break;
    default:
        //Executa se a condição for diferente das anteriores
        break;
}

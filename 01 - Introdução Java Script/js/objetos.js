let teste = 'teste'

const pessoa ={ 
    nome: 'Patricia',
    idade: 23,
    falar: function() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
};

console.log(pessoa.nome);
pessoa.falar();
pessoa.profissao = 'Desenvolvedor';
console.log(pessoa);
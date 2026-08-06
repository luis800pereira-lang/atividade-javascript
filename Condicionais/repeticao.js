/*let contador = 1;

while (contador <= 5) {
    console.log("Contagem: ", contador)

    contador++
}
*/

/*let tempo = 10;

while (tempo > 0) {
    console.log(`${tempo}...`);

    tempo--;
}

console.log("Feliz ano Novo!!!");
*/

/*const senhaCorreta = "123456";
let tentativa = "";

while (tentativa !== senhaCorreta) {

    tentativa = prompt("Digite a senha: ");

    if (tentativa === senhaCorreta) {
        console.log("Senha correta! Acesso Liberado.")
    } else {
        console.log("Senha incorreta! Tente Novamente.")
    }
}
*/

//SOMAR NÚMEROS até ultrapassar 100

/*let soma = 0;
let numero = 1;

console.log("Somando números até passar de 100...");

while (soma < 100) {
    
    soma += numero

    console.log(`${numero} Soma parcial: ${soma}`);

    numero++;
}
*/

//Mostre a tabuada do número que o usuário escolher

/*const numero = Number(prompt("Qual tabuada voce quer ver?"));

if (Number.isNaN(numero)) {
    console.log("Digite um número válido!");
} else {
    let multiplicador = 1;

    console.log(`\n Tabuada do ${numero} \n`);

    while (multiplicador <= 10) {
        const resultado = numero * multiplicador;
        console.log(`${numero} x ${multiplicador} = ${resultado}`);

        multiplicador++
    }
}
*/

/*let opcao;

do {
    console.log("\n====== Menu ======");
    console.log("1 - Ver Saldo");
    console.log("2 - Fazer Depósito");
    console.log("0 - Sair");
    console.log("==============");

    opcao = prompt("Escolha uma opção:");

    if (opcao === "1") {
        console.log("Seu saldo é de R$ 1000,00");
    } else if (opcao === "2") {
        console.log("Depósito Realizado!");
    } else if (opcao === "3") {
        console.log("Saque realizado!");
    } else if (opcao === "0") {
        console.log("Até logo!");
    } else {
        console.log("Opção inválida!");
    }
} while (opcao !== "0");
*/

/*const numeroSecreto = Math.floor(Math.random() * 10) + 1;

let palpite
let tentativas = 0;

console.log("Adivinhe o número entre 1 e 10!");

do {
    palpite = Number(prompt("Seu palpite"));
    tentativas++

    if (Number.isNaN(palpite)) {
        console.log("Digite um número válido")
    } else if (palpite < numeroSecreto) {
        console.log("Muito baixo! Tente um número maior.")
    } else if (palpite < numeroSecreto) {
        console.log("Muito baixo! Tente um número menor.")
    } else {
        console.log(`ACERTOU! O número era ${numeroSecreto}`);
        console.log(`Voce precisou de ${tentativas} tentativas.`);
    }
        
} while (palpite !== numeroSecreto);
*/

/*for (let i = 1; i <= 10; i++) {
    console.log(`Número: ${i}`)
}

const numero = Number(prompt("Tabuada de qual número?"));

if (Number.isNaN(numero)) {
    console.log("Número inválido!")
} else {
    
    for (let i = 1; i <= 10; i++) {

        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`)
        
    }
}
*/

/*const numeros = [5, 412, 8, 3, 19, 7, 25];

const procurado = 19;

for (const num ===*/

//SENHA com limite de 3 tentativas

/*const senhaCorreta = "abc123";

const maxTentativas = 3;

for (let tentativas = 1; tentativa <= maxTentativas; tentativas++){

    const senha = prompt(`Tentativa ${tentativas}/${maxTentativas} - Digite a Senha:`);

    if (senha === senhaCorreta) {

        console.log("Acesso Liberado!");

        break;
        
    } else {
        
        console.log("Senha incorreta!");

        if (tentativa === maxTentativas) {

            console.log("Conta Bloqueada!");
        }
    }
}
*/

/*for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        continue;
    }
    console.log(i)
}
*/

//Mostrar apenas APROVADOS (nota >= 7)
/*const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 5.0 },
  { nome: "Carlos", nota: 9.0 },
  { nome: "Diana", nota: 4.5 },
  { nome: "Eduardo", nota: 7.5 }
];


for (const aluno of alunos) {

    if (aluno.nota < 7) {
        continue;
    }
    
    console.log(`${aluno.nome} - Nota: ${aluno.nota}`)
}
*/

//Contar vogais

/*const frase = prompt("Digite uma frase:");

const vogais ="aeiouAEIOU";

let contador = 0;

let vogaisEncontradas = [];

for (const letra of frase) {

    if (vogais.includes(letra)) {

        contador++

        vogaisEncontradas.push(letra)
        
    }
    
}
*/

/*console.log(`/nFrase: "${frase}"`);

console.log(`Quantidade de vogais: "${contador}`);

console.log(`Vogais encontradas: "${vogaisEncontradas.join(",")}"`);
*/

/*const frase = prompt("Digite uma frase:");

let vogais = [];

let consoante = [];

for (const letra of frase) {

    const caractere = letra.toLowerCase();

    if (caractere >= "a" && caractere <= "z") {
        
        if ("aeiou".includes(caractere)) {

            vogais.push()
            
        }
    } else {
        
        consoantes.push(letra)
    }
}
*/

/*Array.metodo((elemento, index, array) => {
    return;
})
*/

/*const frutas = ["Maçã", "Banana", "Uva"];

frutas.forEach((element, index) => {
    console.log(index, element)
});

for (let i = 0; i < frutas.length ; i++) {

}
*/

//Filter

/*const novoArray = Array.filter((element) => {
    return condicao;
});

const pessoas = [
  { nome: "Lucas", idade: 20 },
  { nome: "Maria", idade: 17 },
  { nome: "João", idade: 18 },
  { nome: "Ana", idade: 22 },
];

const maioresDeIdade = pessoas.filter((pessoa) => {

  return pessoa.idade >= 18;
});

console.log(maioresDeIdade)
*/

/*const numeros = [1,2,3,4,5,6,7,8];

const pares = numeros.filter((numero) => {
    return numero % 2 === 0
});

console.log(pares)
*/

/*const pessoas = [
  { nome: "Lucas", idade: 20 },
  { nome: "Maria", idade: 17 },
  { nome: "João", idade: 18 },
  { nome: "Ana", idade: 22 },
];

const idosos = pessoas.filter((pessoa) => {
    return pessoa.idade > 80;
});

console.log(idosos)
*/

//Crie um array com vários números.
//Use filter para mostrar apenas os números maiores que 50

/*const numeros = [10,20,30,40,50,60,70,80];

const MaioresQue50 = numeros.filter((numero) => {
    return numero > 50;
});

console.log(MaioresQue50)
*/

//MAP   

/*const pessoas = [
  { nome: "Lucas", idade: 20 },
  { nome: "Maria", idade: 17 },
  { nome: "João", idade: 18 },
  { nome: "Ana", idade: 22 },
];

const nomes = pessoas.map((pessoa) => {
    return pessoa.nome.toUpperCase();
});
console.log(nomes)

const numeros = [1, 2, 3, 4, 5];

const dobro = numeros.map((numero) => {
    return numero * 2;
});
console.log(dobro);
*/

/*const produtos = ["Mouse", "Teclado", "Monitor"];

const frases = produtos.map((produto) => {
    return `Produto:${produto}`
});

console.log((frases));
*/

/*const pessoas = [
  { nome: "Lucas", idade: 20 },
  { nome: "Maria", idade: 17 }
];

const resultado = pessoas.map((pessoa) => {
    return {
        nome: pessoa.nome,

        maiorIdade: pessoa.idade >= 18
    }
});
console.log(resultado);
*/

//Use o map para transformar um array de preços em preços com desconto de 10%

/*const precos = [100, 200, 300];

const desconto = precos.map((preco) => {
    return preco * 0.9;
});

console.log(desconto);
*/

/*Use map para transformar:
[1,2,3,4]
em 
["Número 1", "Número 2"...]
*/

/*const numeros = [1,2,3,4];

const resultado = numeros.map((numero) => {
    return `Número ${numero}`
});
console.log(resultado);
*/

//Find

/*const pessoas = [
  { nome: "Lucas", idade: 20 },
  { nome: "Maria", idade: 17 },
  { nome: "João", idade: 18 },
  { nome: "Ana", idade: 22 },
];

const maria = pessoas.find((pessoa) => {
    return pessoa.nome === "Maria";
});

console.log(maria);

if (maria) {
    console.log("Pessoa encontrada;");
    console.log(maria)
} else {
    console.log("Pessoa encontrada:");
}
*/

/*const numeros = [5,10,15,20,25];
/// Procurar primeiro número maior que 18

const encontrado = numeros.find((numeros) => {
    return
});
*/

/*const usuarios = [
  { id:1, nome:"Lucas" },
  { id:2, nome:"Maria" },
  { id:3, nome:"João" }
];

const usuario = usuarios.find((u) => {
    return u.id === 2;
});

console.log(usuario);
*/

//Reduce

/*Array.reduce((acc, element) => {
    return novoAcc
} valorInicial);
*/

/*const numeros = [10, 20, 30];

const soma = numeros.reduce((acc, numero) => {

    console.log("ACC", acc);
    console.log("Número atual", numero);

    return acc + numero
}, 0);

console.log(soma)
*/

/*const pessoas = [
  { nome: "Lucas", idade: 20 },
  { nome: "Maria", idade: 17 },
  { nome: "João", idade: 18 },
  { nome: "Ana", idade: 22 },
];

const totaLidades = pessoas.reduce((acumulador, pessoa) => {
    return acumulador + pessoa.idade;
}, 0);
*/

/*const pessoas = [
    { nome: "Lucas"},
    { nome: "Maria"},
    { nome: "João"},
];

const nomes = pessoas.reduce((acc, pessoa) => {
    return acc + " " + pessoa.nome;

}, "");

console.log(nomes);
*/

/*const nomes = ["Lucas", "Mario", "João"];

const frase = nomes.reduce((acc, nome) => {
    return acc + " " + nome;
});
console.log(frase);

const inicio = prompt("Digite o início da frase:");

const frase = nomes.reduce((acumulador, nome) => {
    return acumulador + " " + nome
}, inicio);

console.log(frase)
*/

/*const nomes = ["Lucas", "Maria", "João"];

const frase = prompt("Digite uma frase:");

const palavras = frase.split(" ");

const resultado = palavras.reduce((acumulador, palavra) => {
    return acumulador + " " + palavra
});

console.log(resultado);
*/

//Use reduce para descobrir:
//qual o maior número do array.

const numeros= [10,50,30,100,25];

const maior = numeros.reduce((acc, numero) => {
    if (numero > acc) {
       return numero 
    }

    return acc
}, numeros[0]);
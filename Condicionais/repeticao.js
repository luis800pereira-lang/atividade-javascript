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

const pessoas = [
  { nome: "Lucas", idade: 20 },
  { nome: "Maria", idade: 17 },
  { nome: "João", idade: 18 },
  { nome: "Ana", idade: 22 },
];

const idosos = pessoas.filter((pessoa) => {
    return pessoa.idade > 80;
});
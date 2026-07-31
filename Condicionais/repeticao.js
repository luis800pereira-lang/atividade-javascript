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

for (let i = 1; i <= 10; i++) {
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
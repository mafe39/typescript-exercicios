import readlinesync = require("readline-sync");
import { Queue } from "./Queue";

const filaDoBanco = new Queue<string>();

let opcao: number;

do {
console.log("\n*****************************************************");
console.log("1 - Adicionar Cliente na Fila");
console.log("2 - Listar todos os Clientes");
console.log("3 - Retirar Cliente da Fila");
console.log("0 - Sair");
console.log("*****************************************************");

opcao = readlinesync.questionInt("\nEntre com a opção desejada: ");
switch (opcao) {
case 1: 
const nome = readlinesync.question("Digite o nome: ");
filaDoBanco.enqueue(nome);
console.log("\nFila:");

filaDoBanco.printQueue();
console.log("Cliente Adicionado!");
break;

case 2: 
console.log("\nLista de Clientes na Fila: ");
filaDoBanco.printQueue();
break;

case 3:
if(filaDoBanco.isEmpty()){
console.log("A Fila está vazia!");

} else{
 filaDoBanco.dequeue()

 console.log("\nFila: ");
 filaDoBanco.printQueue();

 console.log("O Cliente foi Chamado!")

}
break;

case 0:
 console.log("\nPrograma Finalizado!");
    break;

    default:
        console.log("Opção invalida! Digite um número de 0 a 3.");
        break;
} 
} while (opcao !== 0);

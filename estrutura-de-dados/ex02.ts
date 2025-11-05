import readlinesync = require("readline-sync");

import { Stack } from "./stack";

const pilhaDeLivros = new Stack<string>();
let opcao: number;

do{
    console.log("\n*****************************************************");
    console.log("1 - Adicionar novo livro");
    console.log("2 - Listar todos os livros");
    console.log("3 - Retirar um livro");
    console.log("0 - Sair");
    console.log("*****************************************************");


    opcao = readlinesync.questionInt("Entre com a opcao desejada:");

    switch(opcao){
        case 1:
            let nomeLivro = readlinesync.question("Digite o nome do livro que deseja adicionar:");
            pilhaDeLivros.push(nomeLivro);
            
            console.log("\nPilha:");
            pilhaDeLivros.printStack();
            console.log("Livro adicionado!");
        break;
        
        case 2:
             console.log("\nLista de Livros na Pilha:");
            pilhaDeLivros.printStack(); 
        break;
        case 3:
             if (pilhaDeLivros.isEmpty()) {
                console.log("\nA pilha está vazia!");
            } else {
                const livroRemovido = pilhaDeLivros.pop();
                
                console.log("\nPilha:");
                pilhaDeLivros.printStack();
                console.log("Um livro foi retirado da pilha!");
            }
        break;

        case 0:
             console.log("\nFinalizando programa!");
        break;

        default:
            console.log("\nHouve um erro! Digite um numero de 0 a 3!");
        break;
    }


}while(opcao !== 0);
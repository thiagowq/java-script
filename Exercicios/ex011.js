//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numero = prompt("Digite um numero: ");

if(numero < 0){
    while(numero < 0){
        console.log(numero);
        numero++;
    }
}
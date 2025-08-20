// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = prompt("Digite um numero: ");

if(numero > 0){
    alert(`${numero} é maior que 0`);
}else if (numero < 0){
    alert(`${numero} é menor que 0`);
}else{
    alert(`o número é ${numero}`);
}
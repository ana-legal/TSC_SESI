/*
Atalho comentário de várias lindas:
alt + shift + A

Desafio: Criar uma função que receba preço e desconto em %
e mostre o valor final com desconto.
Criar outra função que receba preço e quantidade
e mostre o valor da compra.

*/

function calcularDesconto (preco, desconto) {
    const valorFinal = preco - (preco * (desconto / 100));
    console.log(`O valor final do produto foi de: ${valorFinal}`);
}
 
function calcularTotal (preco, quantidade) {
    const valorTotal = preco * quantidade;
    console.log(`O valor total é de: ${valorTotal}`);
}
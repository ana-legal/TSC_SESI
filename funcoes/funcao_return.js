function calcularTotal (preco1, preco2) {
    return preco1 + preco2;
}

let resultado = calcularTotal(30, 50); // Somar

// Desafio: Inmprimir concatenando e com tamplate string

console.log("O total da compra é: " + resultado); // Concatenando
console.log(`O total da compra é: ${resultado}`); // Template string
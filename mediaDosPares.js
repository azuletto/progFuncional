const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usamos map() para multiplicar cada número por 2 criando um segundo vetor
const numerosMultiplicadosPor2 = numeros.map(num => num * 2);

// Usamos filter() para obter apenas os números pares
const numerosPares = numerosMultiplicadosPor2.filter(num => num % 2 === 0);

// Usamos reduce() para somar todos os números pares
const soma = numerosPares.reduce((acc, cur) => acc + cur, 0);

// Média dos números pares
const quantidade = numerosPares.length;
const media = soma / quantidade;


console.log(media);
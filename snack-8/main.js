let value = prompt('inserisci un numero di 4 cifre'),
    sum = 0;

while (value) {
    sum += value % 10;
    
    value = Math.floor(value / 10);
}

console.log(sum);
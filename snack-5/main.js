const array = [];

// for (let i = 0; i < 6; i++) {
//     const askNumber = parseInt(prompt('inserisci un numero'));

//     if (askNumber % 2 != 0) {
//         array.push (askNumber)
//     }
// }
// console.log(array);

let i = 0;
while (i < 6) {
    const askNumber = parseInt(prompt('inserisci un numero'));
    i++

    if (askNumber % 2 != 0) {
        array.push (askNumber)
    }
}

console.log(array);

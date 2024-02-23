const firstWord = prompt ('scrivi la prima parola');
const secondWord = prompt ('scrivi la seconda parola');

const firstWordLength = firstWord.length;
const secondWordLength = secondWord.length;

if (firstWordLength > secondWordLength) {
    console.log('la prima parola è più lunga');
} else if (firstWordLength < secondWordLength) {
    console.log('la seconda parola è più lunga');
} else {
    console.log('le parole inserite sono uguali');
}
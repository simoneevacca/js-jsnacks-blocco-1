const partecipants = ['simone', 'giulio', 'marco'];
const userName = prompt('chi sei?');

for (let i = 0; i < partecipants.length; i++) {
    const element = partecipants[i];

    if (userName === element){
        console.log('Puoi entrare');
        break;
    } else {
        console.log('non puoi entrare');
    } 
    
    
}
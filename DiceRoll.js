function diceRoll() {
    let roll = Math.floor(Math.random() * 6) + 1;
    let message = (
        roll === 1 ? 'You rolled 1!':
        roll === 2 ? 'You rolled 2!':
        roll === 3 ? 'You rolled 3!':
        roll === 4 ? 'You rolled 4!':
        roll === 5 ? 'You rolled 5!':
        'You rolled 6!'
    );
    return message;
};

console.log(diceRoll());
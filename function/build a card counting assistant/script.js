let count = 0;

function cardCounter(card) {
    if (card >= 2 && card <= 6) {
        count++;
    } else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
        count--;
    }

    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}

console.log(cardCounter(5)); // output bernilai dengan " 1 Bet " 
console.log(cardCounter('K'));// output bernilai dengan " 0 Hold "
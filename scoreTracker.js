const rolls = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]
let score = 0;

function getBowlingScore(rolls) {
    if (rolls.length < 20) {
        throw new Error('Inputs are not correct');

    }

    for (let index = 0; index < rolls.length; index++) {
        if (rolls[index] < 9 && rolls[index + 1] < 9) {
            score = rolls[index] + rolls[index + 1];
        }

        else {
            if ((rolls[index] + rolls[index + 1]) == 10) {
                score = 10 + rolls[index + 2];
            }
        }


    }

}

module.exports = { getBowlingScore };
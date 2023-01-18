const rolls = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
const roll = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
function getBowlingScore(rolls) {
	let score = 0;

	for (let index = 0; index < rolls.length - 1; index++) {

		if ((rolls[index] + rolls[index + 1]) < 10) {
			score += rolls[index] + rolls[index + 1];
			index = index + 1;
		}
		else if (rolls[index] == 10) {
			score = score + 10;
			if (index < rolls.length - 2) {
				score = score + rolls[index + 1] + rolls[index + 2];
			}
			if (index == 18) {
				index += 2;
			}
		}
		else if((rolls[index]+rolls[index+1])==10){
            score+=10+rolls[index+2];
            index++;
        }

	}
	return score;

}
console.log(getBowlingScore(rolls));
console.log(getBowlingScore(roll));
console.log(getBowlingScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));

module.exports = { getBowlingScore };
const rolls = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
const roll=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
function getBowlingScore(rolls) {
	let score=0;
 
	for (let index = 0; index < rolls.length-1; index++) {
        
		if((rolls[index]+rolls[index+1])<10){
			score+=rolls[index]+rolls[index+1];
			index=index+1;
		}
       
	}
	return score;

}
console.log(getBowlingScore(rolls));
console.log(getBowlingScore(roll));

module.exports = { getBowlingScore };
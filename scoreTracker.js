const rolls = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];

function getBowlingScore(rolls) {
	//let frame=1;
	let score=0;
	//let checkFrame=1;
	if (rolls.length < 20) {
		return -1;

	}

	for (let index = 0; index < rolls.length; index++) {
		//if(checkFrame==1){
		if((rolls[index]+rolls[index+1])<10){
			score+=rolls[index]+rolls[index+1];
			index+=1;
		}

		
	}
	return score;

	

}
console.log(getBowlingScore(rolls));
module.exports = { getBowlingScore };
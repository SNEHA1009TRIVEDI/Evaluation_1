
const { getBowlingScore } = require('./scoreTracker');
describe('Calculate Bowling score',()=>
{
	describe('Frame',()=>{
		it('case 1',()=>
		{
			expect(getBowlingScore()).toBe(90);
		});
    
	});
});
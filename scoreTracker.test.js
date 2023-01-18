
const { getBowlingScore } = require('./scoreTracker');
describe('Calculate Bowling score',()=>
{
	describe('Frame',()=>{
		it('case 1',()=>
		{
			expect(getBowlingScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
		});
		it('case 2',()=>
		{
			expect(getBowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toBe(30);
		});
		it('case 3',()=>
		{
			expect(getBowlingScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(16);
		});
    
	});
});

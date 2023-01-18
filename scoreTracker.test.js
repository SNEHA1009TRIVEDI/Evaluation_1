
const { getBowlingScore } = require('./scoreTracker');
describe('Calculate Bowling score',()=>
{
    describe('Frame',()=>{
        it('case 1',()=>
        {
            expect(getBowlingScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
        });
    
    });
});
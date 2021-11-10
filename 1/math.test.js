/**
 * Grouping test => describe fn
 * it() is an alias of test()
 *      - code cleaner
 *      - better error messages
 */
describe('in the math global object', () => {

    describe('the random function', () => {
        it('should return a number', () => {
            expect(typeof Math.random()).toEqual('number');
        })
        it('it should return a number between 0 and 1', () => {
            const randomNb = Math.random();
            expect(randomNb).toBeGreaterThanOrEqual(0);
            expect(randomNb).toBeLessThanOrEqual(1);
        })
    });

    describe('the round function', () => {
        it('should return a rounded value of 4.5 being 5', () => {
            expect(Math.round(4.5)).toBe(5);
        })
    })
})

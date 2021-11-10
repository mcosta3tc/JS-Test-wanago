const divide = require('./divide');

/**
 * test fn => 3 args
 *      - name of the test
 *      - fn containing the expectations
 *      - a timeout in ms (default: 5s), how long to wait before aborting the test if it takes too long
 *
 * expect fn
 *      - test a fn
 *      - arg : value we want to test, here the return of devide fn
 *      - we can call a set of matcher fn, ex toBe()
 */
test('dividing 6 by 3 equals 2', () => {
    expect(divide(6,3)).toBe(2);
})

import {sum} from '../src/js/sum';

describe('Finding the sum of elements',()=>{

    test('Finding the sum of elements', () => {
        expect(sum(5)(2)).toBeCloseTo(7);
    });
    test('Finding the sum of elements', () => {
        expect(sum(10)(2)).toBeCloseTo(12);
    });
    test('Finding the sum of elements', () => {
        expect(sum(77)(8)).toBeCloseTo(85);
    });
    test('Finding the sum of elements', () => {
        expect(sum(15)(20)).toBeCloseTo(35);
    });
});

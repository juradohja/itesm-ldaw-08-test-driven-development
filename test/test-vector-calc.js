const assert = require('assert');
const VectorCalculator = require('../app/VectorCalculator');

describe('VectorCalc', () => {
    describe('#sum', () => {
        let v1 = { x: 4, y: 3};
        let v2 = { x: 1, y: 3};
        it('Should sum the vectors', () => {
            assert.deepStrictEqual({x: 5, y: 6}, VectorCalculator.sum(v1, v2));
        })
    })

    describe('#sub', () => {
        let v1 = {x: 4, y: 3};
        let v2 = {x: 1, y: 3};
        it('Should substract the vectors', () => {
            assert.deepStrictEqual({x: 3, y: 0}, VectorCalculator.sub(v1, v2));
        })
    })

    describe('#scalar', () => {
        let v1 = {x: 4, y: 3};
        let s = 3;
        it('Should scale the vector', () => {
            assert.deepStrictEqual({x: 12, y: 9}, VectorCalculator.scalar(v1, s));
        })
    })

    describe('#dot', () => {
        let v1 = {x: 4, y: 3};
        let v2 = {x: 1, y: 2};
        it('Should calculate the dot product', () => {
            assert.strictEqual(10, VectorCalculator.dot(v1, v2));
        })
    })
})


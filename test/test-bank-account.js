const assert = require('assert');
const BankAccount = require('../app/BankAccount');

describe('BankAccount', () => {
    describe('#current', () => {
        let account = new BankAccount(3000.0);
        it("Should return current account state", () => {
            assert.deepStrictEqual(3000.0, account.current());
        })
    })
    describe('#append', () => {
        let account = new BankAccount(3000.0);
        it("Should add amount to the account and return final balance", () => {
            assert.deepStrictEqual(3100.0, account.append(100.0));
        })
        it("Should not modify balance if amount is negative", () => {
            assert.deepStrictEqual(3000.0, account.append(-100.0));
        })
    })
    describe('#substract', () => {
        let account = new BankAccount(3000.0);
        it("Should substract amount to the account and return final balance", () => {
            assert.deepStrictEqual(2900.0, account.substract(100.0));
        })
        it("Should not modify balance if amount is negative", () => {
            assert.deepStrictEqual(3000.0, account.substract(-100.0));
        })
    })
    describe('#merge', () => {
        let acc1 = new BankAccount(3000.0);
        let acc2 = new BankAccount(3000.0);
        acc1.append(200.0);
        acc2.substract(100.0);

        let acc3 = new BankAccount(6000.0);
        acc3.append(200.0);
        acc3.substract(100.0);
        it("Should copy accounts histories", () => {
            acc1.merge(acc2);
            assert.deepStrictEqual(acc3.history(), acc1.history())
        })
        it("Should append balance if it's positive", () => {
            acc1.merge(acc2);
            assert.deepStrictEqual(acc3.current(), acc1.current())
        })
        it("Should substract balance if it's negative", () => {
            let acc4 = new BankAccount(-500.0);
            let acc5 = new BankAccount(2500.0);
            acc1.merge(acc4);
            assert.deepStrictEqual(acc5.current(), acc1.current())
        })
    })
})
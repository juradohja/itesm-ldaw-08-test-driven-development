const assert = require('assert');
const BankAccount = require('../app/BankAccount');

describe('BankAccount', () => {
    describe('#current', () => {
        it("Should return current account state", () => {
            let account = new BankAccount(3000.0);
            assert.strictEqual(account.current(), 3000.0);
        })
    })
    describe('#append', () => {
        it("Should add amount to the account and return final balance", () => {
            let account = new BankAccount(3000.0);
            assert.strictEqual(account.append(100.0), 3100.0);
        })
        it("Should not modify balance if amount is negative", () => {
            let account = new BankAccount(3000.0);
            assert.strictEqual(account.append(-100.0), 3000.0);
        })
    })
    describe('#substract', () => {
        it("Should substract amount to the account and return final balance", () => {
            let account = new BankAccount(3000.0);
            assert.strictEqual(account.substract(100.0), 2900.0);
        })
        it("Should not modify balance if amount is negative", () => {
            let account = new BankAccount(3000.0);
            assert.strictEqual(account.substract(-100.0), 3000.0);
        })
    })
    describe('#merge', () => {
        it("Should copy accounts histories", () => {
            let acc1 = new BankAccount(3000.0);
            acc1.append(200.0);
            let acc2 = new BankAccount(3000.0);
            acc2.substract(100.0);
            let acc3 = new BankAccount(6000.0);
            acc3.append(200.0);
            acc3.substract(100.0);
            acc1.merge(acc2);
            assert.deepStrictEqual(acc1.history(), acc3.history())
        })
        it("Should append balance if it's positive", () => {
            let acc1 = new BankAccount(3000.0);
            let acc2 = new BankAccount(3000.0);
            let acc3 = new BankAccount(6000.0);
            acc1.merge(acc2);
            assert.deepStrictEqual(acc1.current(), acc3.current())
        })
        it("Should substract balance if it's negative", () => {
            let acc1 = new BankAccount(3000.0);
            let acc2 = new BankAccount(-500.0);
            let acc3 = new BankAccount(2500.0);
            acc1.merge(acc2);
            assert.deepStrictEqual(acc1.current(), acc3.current())
        })
    })
})
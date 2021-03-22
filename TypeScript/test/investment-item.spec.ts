import { expect } from 'chai';
import { InvestmentItem } from '../app/models/investment-item';

describe('Investment Item', function () {
    it('should update single investment item 99-Year-Old-Port', () => {
        const item = new InvestmentItem('99-Year-Old-Port', 4, 40);
        item.updateValue();
        expect(item.name).to.equal('99-Year-Old-Port');
        expect(item.sellIn).to.equal(3);
        expect(item.quality).to.equal(41);
    })

    it('should update single investment item maximum quality 99-Year-Old-Port', () => {
        const item = new InvestmentItem('99-Year-Old-Port', 7, 50);
        item.updateValue();
        expect(item.name).to.equal('99-Year-Old-Port');
        expect(item.sellIn).to.equal(6);
        expect(item.quality).to.equal(50);
    })

    it('should update single investment item increased degradation 99-Year-Old-Port', () => {
        const item = new InvestmentItem('99-Year-Old-Port', 0, 30);
        item.updateValue();
        expect(item.name).to.equal('99-Year-Old-Port');
        expect(item.sellIn).to.equal(-1);
        expect(item.quality).to.equal(32);
    })

    it('should update 7 days single investment item 99-Year-Old-Port', () => {
        const item = new InvestmentItem('99-Year-Old-Port', 4, 30);
        item.updateValue(7);
        expect(item.name).to.equal('99-Year-Old-Port');
        expect(item.sellIn).to.equal(-3);
        expect(item.quality).to.equal(40);
    })
});
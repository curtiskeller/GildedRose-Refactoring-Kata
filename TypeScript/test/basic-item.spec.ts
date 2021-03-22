import { expect } from 'chai';
import { BasicItem } from '../app/models/basic-item';

describe('Basic Item', function () {

    it('should handle 1 day updateValues', () => {
        const item = new BasicItem('Flask of the Titans', 7, 50);
        item.updateValue();
        expect(item.name).to.equal('Flask of the Titans');
        expect(item.sellIn).to.equal(6);
        expect(item.quality).to.equal(49);
    })

    it('should handle 7 day updateValues', () => {
        const item = new BasicItem('Flask of the Titans', 7, 50);
        item.updateValue(7);
        expect(item.name).to.equal('Flask of the Titans');
        expect(item.sellIn).to.equal(0);
        expect(item.quality).to.equal(43);
    })

    it('should handle 30 day updateValues', () => {
        const item = new BasicItem('Flask of the Titans', 7, 50);
        item.updateValue(30);
        expect(item.name).to.equal('Flask of the Titans');
        expect(item.sellIn).to.equal(-23);
        expect(item.quality).to.equal(0);
    })
});
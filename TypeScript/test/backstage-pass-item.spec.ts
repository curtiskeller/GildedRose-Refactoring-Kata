import { expect } from 'chai';
import { BackstagePassItem } from '../app/models/backstage-pass-item';

describe('Backstage Pass', function () {

    it('should handle backstage pass to Karazhan Opera', () => {
        const item = new BackstagePassItem("Backstage passes to a Karazhan Opera", 15, 20);
        item.updateValue();
        expect(item.name).to.equal('Backstage passes to a Karazhan Opera');
        expect(item.sellIn).to.equal(14);
        expect(item.quality).to.equal(21);
    })

    it('should handle 14 days backstage pass to Karazhan Opera', () => {
        const item = new BackstagePassItem("Backstage passes to a Karazhan Opera", 15, 20);
        item.updateValue(14);
        expect(item.name).to.equal('Backstage passes to a Karazhan Opera');
        expect(item.sellIn).to.equal(1);
        expect(item.quality).to.equal(49);
    })

    it('should handle backstage pass expired', () => {
        const item = new BackstagePassItem("Backstage passes to a Karazhan Opera", 0, 49)
        item.updateValue();
        expect(item.name).to.equal('Backstage passes to a Karazhan Opera');
        expect(item.sellIn).to.equal(-1);
        expect(item.quality).to.equal(0);
    })
});
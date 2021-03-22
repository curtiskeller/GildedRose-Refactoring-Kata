import { expect } from 'chai';
import { GildedRose } from '../app/gilded-rose';
import { ConjuredItem } from '../app/models/conjured-item';

describe('Conjured Item', function () {
    it('should update a single conjured item', () => {
        const item = new ConjuredItem("Conjured Sweet Roll", 3, 6);
        item.updateValue();
        expect(item.name).to.equal('Conjured Sweet Roll');
        expect(item.sellIn).to.equal(2);
        expect(item.quality).to.equal(4);
    })

    it('should update a single conjured item with  increased degradation', () => {
        const item = new ConjuredItem("Conjured Sweet Roll", -1, 7);
        item.updateValue();
        expect(item.name).to.equal('Conjured Sweet Roll');
        expect(item.sellIn).to.equal(-2);
        expect(item.quality).to.equal(1);
    })

    it('should update 7 days of degredation single conjured item', () => {
        const item = new ConjuredItem("Conjured Sweet Roll", 3, 30);
        item.updateValue(7);
        expect(item.name).to.equal('Conjured Sweet Roll');
        expect(item.sellIn).to.equal(-4);
        expect(item.quality).to.equal(8);
    })
});
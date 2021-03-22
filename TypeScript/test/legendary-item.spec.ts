import { expect } from 'chai';
import { LegendaryItem } from '../app/models/legendary-item';

describe('Legendary Item', function () {
    it('should update Thunderfury, Blessed Blade of the Windseeker', () => {
        const item = new LegendaryItem('Thunderfury, Blessed Blade of the Windseeker', 0, 80);
        item.updateValue();
        expect(item.name).to.equal('Thunderfury, Blessed Blade of the Windseeker');
        expect(item.sellIn).to.equal(0);
        expect(item.quality).to.equal(80);
    })

    it('should update increased degradation Thunderfury, Blessed Blade of the Windseeker', () => {
        const item = new LegendaryItem('Thunderfury, Blessed Blade of the Windseeker', -1, 80);
        item.updateValue();
        expect(item.name).to.equal('Thunderfury, Blessed Blade of the Windseeker');
        expect(item.sellIn).to.equal(-1);
        expect(item.quality).to.equal(80);
    })

    it('should update 7 days degradation on Thunderfury, Blessed Blade of the Windseeker', () => {
        const item = new LegendaryItem('Thunderfury, Blessed Blade of the Windseeker', 0, 46);
        item.updateValue(7);
        expect(item.name).to.equal('Thunderfury, Blessed Blade of the Windseeker');
        expect(item.sellIn).to.equal(0);
        expect(item.quality).to.equal(46);
    })
});
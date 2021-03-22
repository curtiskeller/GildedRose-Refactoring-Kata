import { expect } from 'chai';
import { GildedRose } from '../app/gilded-rose';
import { BackstagePassItem } from '../app/models/backstage-pass-item';
import { BasicItem, Item } from '../app/models/basic-item';
import { ConjuredItem } from '../app/models/conjured-item';
import { InvestmentItem } from '../app/models/investment-item';
import { LegendaryItem } from '../app/models/legendary-item';


describe('Gilded Rose', function () {
    // basic items

    it('should handle basic item', () => {
        const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', 7, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Elixir of the Mongoose');
        expect(items[0].sellIn).to.equal(6);
        expect(items[0].quality).to.equal(49);
    })

    it('should handle minimum quality', () => {
        const gildedRose = new GildedRose([new BasicItem('Heavy Leather', 1, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Heavy Leather');
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(0);
    })

    it('should handle increased degradation', () => {
        const gildedRose = new GildedRose([new BasicItem('Drake Fang Talisman', 0, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Drake Fang Talisman');
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(48);
    })

    it('should handle increased degradation with minimum quality', () => {
        const gildedRose = new GildedRose([new BasicItem('Peacebloom', -2, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Peacebloom');
        expect(items[0].sellIn).to.equal(-3);
        expect(items[0].quality).to.equal(0);
    })

    //legacy investment item
    it('should handle Aged Brie', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 7, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(6);
        expect(items[0].quality).to.equal(11);
    })

    it('should handle maximum quality Aged Brie', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 7, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(6);
        expect(items[0].quality).to.equal(50);
    })

    it('should handle increased degradation Aged Brie', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 40)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(42);
    })

    //typed investment items
    it('should handle 99-Year-Old-Port', () => {
        const gildedRose = new GildedRose([new InvestmentItem('99-Year-Old-Port', 4, 40)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('99-Year-Old-Port');
        expect(items[0].sellIn).to.equal(3);
        expect(items[0].quality).to.equal(41);
    })

    it('should handle maximum quality 99-Year-Old-Port', () => {
        const gildedRose = new GildedRose([new InvestmentItem('99-Year-Old-Port', 7, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('99-Year-Old-Port');
        expect(items[0].sellIn).to.equal(6);
        expect(items[0].quality).to.equal(50);
    })

    it('should handle increased degradation 99-Year-Old-Port', () => {
        const gildedRose = new GildedRose([new InvestmentItem('99-Year-Old-Port', 0, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('99-Year-Old-Port');
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(32);
    })

    //legacy legendary item
    it('should handle Sulfuras, Hand of Ragnaros', () => {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(80);
    })

    it('should handle increased degradation Sulfuras, Hand of Ragnaros', () => {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -1, 79)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(79);
    })

    //typed item
    it('should handle Thunderfury, Blessed Blade of the Windseeker', () => {
        const gildedRose = new GildedRose([new LegendaryItem('Thunderfury, Blessed Blade of the Windseeker', 0, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Thunderfury, Blessed Blade of the Windseeker');
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(80);
    })

    it('should handle increased degradation Thunderfury, Blessed Blade of the Windseeker', () => {
        const gildedRose = new GildedRose([new LegendaryItem('Thunderfury, Blessed Blade of the Windseeker', -1, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Thunderfury, Blessed Blade of the Windseeker');
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(80);
    })

    //legacy backstage pass
    it('should handle backstage pass over 10 days away', () => {
        const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(14);
        expect(items[0].quality).to.equal(21);
    })

    it('should handle backstage pass 10 days or less away', () => {
        const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(42);
    })

    it('should handle backstage pass 5 days or less away', () => {
        const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(43);
    })

    it('should handle backstage pass 10 days or less away with maximum quality', () => {
        const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(50);
    })

    it('should handle backstage pass 5 days or less away with maximum quality', () => {
        const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(50);
    })

    it('should handle backstage pass expired', () => {
        const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0);
    })

    //legacy conjured item
    it('should handle legacy conjured item', () => {
        const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 3, 6)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Conjured Mana Cake');
        expect(items[0].sellIn).to.equal(2);
        expect(items[0].quality).to.equal(4);
    })

    it('should handle increased degradation legacy conjured item', () => {
        const gildedRose = new GildedRose([new Item("Conjured Mana Cake", -1, 7)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Conjured Mana Cake');
        expect(items[0].sellIn).to.equal(-2);
        expect(items[0].quality).to.equal(1);
    })

    //typed conjured item
    it('should handle conjured item', () => {
        const gildedRose = new GildedRose([new ConjuredItem("Conjured Sweet Roll", 3, 6)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Conjured Sweet Roll');
        expect(items[0].sellIn).to.equal(2);
        expect(items[0].quality).to.equal(4);
    })

    it('should handle increased degradation conjured item', () => {
        const gildedRose = new GildedRose([new ConjuredItem("Conjured Sweet Roll", -1, 7)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Conjured Sweet Roll');
        expect(items[0].sellIn).to.equal(-2);
        expect(items[0].quality).to.equal(1);
    })

    // variable days/items

    it('should handle multiple items', () => {
        const gildedRose = new GildedRose([new BasicItem('Flask of the Titans', 7, 50), new InvestmentItem('Aged Brie', 7, 10), new LegendaryItem('Sulfuras, Hand of Ragnaros', 0, 80), new BackstagePassItem("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Flask of the Titans');
        expect(items[0].sellIn).to.equal(6);
        expect(items[0].quality).to.equal(49);

        expect(items[1].name).to.equal('Aged Brie');
        expect(items[1].sellIn).to.equal(6);
        expect(items[1].quality).to.equal(11);

        expect(items[2].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[2].sellIn).to.equal(0);
        expect(items[2].quality).to.equal(80);

        expect(items[3].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[3].sellIn).to.equal(14);
        expect(items[3].quality).to.equal(21);
    })


    it('should handle multiple days and items', () => {
        const gildedRose = new GildedRose([new BasicItem('Flask of the Titans', 7, 50), new InvestmentItem('Aged Brie', 7, 10), new LegendaryItem('Sulfuras, Hand of Ragnaros', 0, 80), new BackstagePassItem("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
        let items = gildedRose.updateQuality(3);

        expect(items[0].name).to.equal('Flask of the Titans');
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(47);

        expect(items[1].name).to.equal('Aged Brie');
        expect(items[1].sellIn).to.equal(4);
        expect(items[1].quality).to.equal(13);

        expect(items[2].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[2].sellIn).to.equal(0);
        expect(items[2].quality).to.equal(80);

        expect(items[3].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[3].sellIn).to.equal(12);
        expect(items[3].quality).to.equal(23);
    })

    // bad data items 

    it('should handle no items', () => {
        const gildedRose = new GildedRose([]);
        const items = gildedRose.updateQuality();
        expect(items.length).to.equal(0);
    })

    it('should handle null array', () => {
        const gildedRose = new GildedRose(null as any);
        const items = gildedRose.updateQuality();
        expect(items.length).to.equal(0);
    })

    it('should handle null items', () => {
        const gildedRose = new GildedRose([null as any]);
        const items = gildedRose.updateQuality();
        expect(items.length).to.equal(0);
    })

    it('should handle null values', () => {
        const gildedRose = new GildedRose([new Item(null, null, null)]);
        const items = gildedRose.updateQuality();
        expect(items.length).to.equal(0);
    })
});

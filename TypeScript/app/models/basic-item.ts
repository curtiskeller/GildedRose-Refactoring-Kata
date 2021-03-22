import { GildedValeConstants } from "./gilded-constants";
import { ItemType } from "./item-type";


export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export interface IUpdateValues {
    updateValue(daysPassed: number): Item
}

export class BasicItem extends Item implements IUpdateValues {
    type: ItemType = ItemType.BasicItem

    public updateValue(daysPassed: number = 1) {
        let updatedQuality = this.quality - daysPassed;

        // increased quality degradation
        if (this.sellIn < daysPassed) {
            const remainder = daysPassed - this.sellIn;
            updatedQuality = updatedQuality - remainder
        }
        this.sellIn -= daysPassed;
        this.quality = Math.max(GildedValeConstants.MinimumQuality, updatedQuality);

        return this;
    }
}

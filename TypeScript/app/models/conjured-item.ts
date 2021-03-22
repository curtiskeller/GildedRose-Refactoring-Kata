import { BasicItem } from "./basic-item";
import { GildedValeConstants } from "./gilded-constants";
import { ItemType } from "./item-type";


export class ConjuredItem extends BasicItem {
    type = ItemType.ConjuredItem

    public updateValue(daysPassed: number = 1) {
        let updatedQuality = this.quality - (daysPassed * 2);

        // increased quality degradation
        if (this.sellIn < daysPassed) {
            const remainder = daysPassed - this.sellIn;
            updatedQuality = updatedQuality - (remainder * 2)
        }
        this.sellIn -= daysPassed;
        this.quality = Math.max(GildedValeConstants.MinimumQuality, updatedQuality);

        return this;
    }
}
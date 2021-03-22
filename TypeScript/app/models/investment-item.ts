import { BasicItem } from "./basic-item";
import { GildedValeConstants } from "./gilded-constants";
import { ItemType } from "./item-type";

export class InvestmentItem extends BasicItem {
    type = ItemType.InvestmentItem

    public updateValue(daysPassed: number = 1) {
        let updatedQuality = this.quality + daysPassed;

        // increased quality degradation
        if (this.sellIn < daysPassed) {
            const remainder = daysPassed - this.sellIn;
            updatedQuality = updatedQuality + remainder
        }

        this.sellIn -= daysPassed;

        // upper quality bound
        this.quality = Math.min(GildedValeConstants.MaximumQuality, updatedQuality);

        return this
    }
}
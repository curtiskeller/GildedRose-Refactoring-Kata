import { BasicItem } from "./basic-item";
import { GildedValeConstants } from "./gilded-constants";
import { ItemType } from "./item-type";

export class LegendaryItem extends BasicItem {
    type = ItemType.LegendaryItem

    public updateValue(daysPassed: number = 1) {
        //handle bad input for quality
        this.quality = Math.min(GildedValeConstants.MaximumLegendaryQuality, this.quality)
        return this;
    }
}

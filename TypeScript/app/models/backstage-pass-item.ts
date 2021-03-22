import { BasicItem } from "./basic-item";
import { GildedValeConstants } from "./gilded-constants";
import { ItemType } from "./item-type";

export class BackstagePassItem extends BasicItem {
    type = ItemType.BackstagePassItem

    public updateValue(daysPassed: number = 1) {

        //concert pass is expired
        if (this.sellIn - daysPassed < 0) {
            this.sellIn = this.sellIn - daysPassed;
            this.quality = 0
            return this;
        }

        //concert is more than 10 days away
        if (this.sellIn - daysPassed > 10) {
            this.sellIn = this.sellIn - daysPassed;
            this.quality = Math.min(GildedValeConstants.MaximumQuality, this.quality + daysPassed)

            return this;
        }

        let remainingDays = daysPassed;
        while (remainingDays > 0) {
            const daysTillConcert = this.sellIn - remainingDays;

            //concert is less than 5 days away
            if (daysTillConcert <= 5)
                this.quality += 3
            //concert is between 5 and 10 days away
            else if (daysTillConcert <= 10)
                this.quality += 2
            //concert is more than 10 days away
            else
                this.quality++;
            remainingDays--;
        }

        this.sellIn -= daysPassed;
        this.quality = Math.min(GildedValeConstants.MaximumQuality, this.quality)
        return this;
    }
}

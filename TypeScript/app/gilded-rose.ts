import { BackstagePassItem } from "./models/backstage-pass-item";
import { BasicItem, Item } from "./models/basic-item";
import { ConjuredItem } from "./models/conjured-item";
import { GildedValeConstants } from "./models/gilded-constants";
import { InvestmentItem } from "./models/investment-item";
import { ItemType } from "./models/item-type";
import { LegendaryItem } from "./models/legendary-item";

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality(daysPassed: number = 1) {
        const updatedItems: BasicItem[] = [];
        const validatedList = (this.items || [])
        for (let item of validatedList) {
            if (!item || item.name == null || item.quality == null || item.sellIn == null)
                continue;

            if (item instanceof BasicItem)
                updatedItems.push(item.updateValue(daysPassed));
            else {
                //handle legacy items
                const itemType = GildedValeConstants.KnownLegacyItemTypeMap[item.name];
                switch (itemType) {
                    case ItemType.InvestmentItem:
                        {
                            const legacyItem = new InvestmentItem(item.name, item.sellIn, item.quality);
                            updatedItems.push(legacyItem.updateValue(daysPassed));
                            break;
                        }
                    case ItemType.LegendaryItem:
                        {
                            const legacyItem = new LegendaryItem(item.name, item.sellIn, item.quality);
                            updatedItems.push(legacyItem.updateValue(daysPassed));
                            break;
                        }
                    case ItemType.BackstagePassItem:
                        {
                            const legacyItem = new BackstagePassItem(item.name, item.sellIn, item.quality);
                            updatedItems.push(legacyItem.updateValue(daysPassed));
                            break;
                        }
                    case ItemType.ConjuredItem:
                        {
                            const legacyItem = new ConjuredItem(item.name, item.sellIn, item.quality);
                            updatedItems.push(legacyItem.updateValue(daysPassed));
                            break;
                        }
                    default:
                        {
                            const legacyItem = new BasicItem(item.name, item.sellIn, item.quality);
                            updatedItems.push(legacyItem.updateValue(daysPassed));
                        }
                }
            }
        }

        this.items = updatedItems
        return this.items;
    }
}

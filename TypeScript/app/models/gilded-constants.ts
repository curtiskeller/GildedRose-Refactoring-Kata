import { ItemType } from "./item-type";

export class GildedValeConstants {
    public static MaximumQuality = 50;
    public static MaximumLegendaryQuality = 80;
    public static MinimumQuality = 0;

    // Either migrate existing data to have a type or employ this type map
    public static KnownLegacyItemTypeMap: { [name: string]: ItemType } = {
        'Aged Brie': ItemType.InvestmentItem,
        'Sulfuras, Hand of Ragnaros': ItemType.LegendaryItem,
        'Backstage passes to a TAFKAL80ETC concert': ItemType.BackstagePassItem,
        'Conjured Mana Cake': ItemType.ConjuredItem,
        'Elixir of the Mongoose': ItemType.BasicItem
    }
}
class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.decreaseQuality(this.items[i])
      this.agedBrieQuality(this.items[i])
      this.backstagePassQuality(this.items[i])
      this.decreaseSellIn(this.items[i])
      return this.items;
    }
  }

  decreaseQuality(item) {
    if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert' && item.name != 'Sulfuras, Hand of Ragnaros' && item.quality > 0) { 
      if (item.sellIn > 0) {
        item.quality -= 1 
      } else {
        item.quality -= 2
      }
    }
  }
  
  agedBrieQuality(item) {
    if (item.name == 'Aged Brie' && item.quality < 50) { 
      item.quality += 1;
    }
  }

  backstagePassQuality(item) {
      if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.sellIn > 11) {
          item.quality += 1
        } else if (item.sellIn > 6) {
          item.quality += 2
        } else if (item.sellIn > 0) {
          item.quality += 3
        } else {
          item.quality = 0
        }
      }
    }

  decreaseSellIn(item) {
    for (var i = 0; i < this.items.length; i++) {
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn -= 1
      }
    }
  }
}


module.exports = {
  Item,
  Shop
}

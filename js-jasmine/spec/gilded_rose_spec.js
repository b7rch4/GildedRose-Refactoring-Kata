var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it("Item sellIn reduced by 1", function() {
    const gildedRose = new Shop([ new Item("foo", 1, 1) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(0);
  });

  it("Item quality reduced by 1", function() {
    const gildedRose = new Shop([ new Item("foo", 1, 1) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  it("Passed sell by date, quality reduced by 2", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 4) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(2);
  });

  it("Quality cannot be negative", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  })

  it("'Aged Brie' quality increases with time", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(1);
  });

  it("Quality never > 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 5, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("Sulfuras sellIn does not change", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 5, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(5);
  });

  it("Sulfuras quality does not change", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 5, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
  });

  it("'Backstage passes' quality increases with time", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(21);
  });

  it("'Backstage passes' quality increases by 2 when sellIn < 10", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 7, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(22);
  });

  it("'Backstage passes' quality increases by 3 when sellIn < 5", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 3, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(23);
  });


});

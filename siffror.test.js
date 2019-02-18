const p = require("./siffror");
describe("parser", () => {
  it.skip("should parse single digits", () => {
    expect(p("ett")).toEqual(1);
    expect(p("två")).toEqual(2);
    expect(p("tre")).toEqual(3);
    expect(p("fyra")).toEqual(4);
    expect(p("fem")).toEqual(5);
    expect(p("sex")).toEqual(6);
    expect(p("sju")).toEqual(7);
    expect(p("åtta")).toEqual(8);
    expect(p("nio")).toEqual(9);
  });

  it.skip("should parse numbers ten to nineteen", () => {
    expect(p("tio")).toEqual(10);
    expect(p("elva")).toEqual(11);
    expect(p("tolv")).toEqual(12);
    expect(p("fjorton")).toEqual(14);
    expect(p("tretton")).toEqual(13);
    expect(p("femton")).toEqual(15);
    expect(p("sexton")).toEqual(16);
    expect(p("sjutton")).toEqual(17);
    expect(p("arton")).toEqual(18);
    expect(p("nitton")).toEqual(19);
  });

  it.skip("should parse numbers twenty to ninety-nine", () => {
    expect(p("tjugo")).toEqual(20);
    expect(p("tjugoett")).toEqual(21);
    expect(p("tjugotvå")).toEqual(22);
    expect(p("tjugotre")).toEqual(23);
    expect(p("tjugofyra")).toEqual(24);
    expect(p("tjugofem")).toEqual(25);
    expect(p("tjugosex")).toEqual(26);
    expect(p("tjugosju")).toEqual(27);
    expect(p("tjugoåtta")).toEqual(28);
    expect(p("tjugonio")).toEqual(29);
    expect(p("trettio")).toEqual(30);
    expect(p("trettiofem")).toEqual(35);
    expect(p("fyrtio")).toEqual(40);
    expect(p("fyrtiofem")).toEqual(45);
    expect(p("femtio")).toEqual(50);
    expect(p("femtiofem")).toEqual(55);
    expect(p("sextio")).toEqual(60);
    expect(p("sextiofem")).toEqual(65);
    expect(p("sjuttio")).toEqual(70);
    expect(p("sjuttiofem")).toEqual(75);
    expect(p("åttio")).toEqual(80);
    expect(p("åttiofem")).toEqual(85);
    expect(p("nittio")).toEqual(90);
    expect(p("nittiofem")).toEqual(95);
    expect(p("nittionio")).toEqual(99);
  });
  it("should parse numbers one hundred to nine hundred ninety-nine", () => {
    expect(p("hundra")).toEqual(100);
  });
});

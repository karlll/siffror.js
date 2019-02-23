describe("scan", () => {
  it("should scan a valid number", () => {
    const s = require("./scan");
    expect(s("etttusentvåhundrafemtiofem")).toEqual({
      res: [
        { p: 1, v: 1 },
        { p: 2, v: 1000 },
        { p: 3, v: 2 },
        { p: 4, v: 100 },
        { p: 5, v: 50 },
        { p: 6, v: 5 }
      ]
    });
    expect(s("ett")).toEqual({ res: [{ p: 1, v: 1 }] });
    expect(s("åttahundraåttioåttatusenåttahundraåttioåtta")).toEqual({
      res: [
        { p: 1, v: 8 },
        { p: 2, v: 100 },
        { p: 3, v: 80 },
        { p: 4, v: 8 },
        { p: 5, v: 1000 },
        { p: 6, v: 8 },
        { p: 7, v: 100 },
        { p: 8, v: 80 },
        { p: 9, v: 8 }
      ]
    });
    expect(s("tremiljonertrehundratusen")).toEqual({
      res: [
        { p: 1, v: 3 },
        { p: 2, v: 1000000 },
        { p: 3, v: 3 },
        { p: 4, v: 100 },
        { p: 5, v: 1000 }
      ]
    });
  });
  it("should return an empty list for invalid tokens", () => {
    const s = require("./scan");
    expect(s("etttusentvåhundrafemtiofemxxxxx")).toEqual({
      res: [],
      error: "Unexpected token 'x'"
    });
  });
});

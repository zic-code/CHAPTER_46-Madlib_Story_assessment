const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  describe("addCommas", () => {
  test("works with thousands", () => {
    expect(addCommas(1234)).toBe("1,234");
  });

  test("works with millions", () => {
    expect(addCommas(1000000)).toBe("1,000,000");
  });

  test("works with billions", () => {
    expect(addCommas(9876543210)).toBe("9,876,543,210");
  });

  test("works with small number", () => {
    expect(addCommas(6)).toBe("6");
  });

  test("works with negative number", () => {
    expect(addCommas(-10)).toBe("-10");
  });

  test("works with negative thousands", () => {
    expect(addCommas(-5678)).toBe("-5,678");
  });
});
});


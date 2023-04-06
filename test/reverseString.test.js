const reverseString = require("../functions/reverseString");

test("reverses a string correctly", () => {
    expect(reverseString("hello friends")).toBe("sdneirf olleh");
    expect(reverseString("6789")).toBe("9876");
    expect(reverseString("irarref")).toBe("ferrari");
  });
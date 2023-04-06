const reverseString = require("../functions/reverseString");

test("reverses a string correctly", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
    expect(reverseString("12345")).toBe("54321");
    expect(reverseString("racecar")).toBe("racecar");
  });
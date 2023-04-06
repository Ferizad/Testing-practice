const stringLength = require("../functions/stringthLength");

test("returns the length of the string if it's between 1 and 10 characters", () => {
  expect(stringLength("hello")).toBe(5);
  expect(stringLength("1")).toBe(1);
  expect(stringLength("1234567890")).toBe(10);
});

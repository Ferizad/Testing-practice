const stringLength = require("../functions/stringthLength");

test("returns the length of string if it is between 1 and 10 characters", () => {
  expect(stringLength("Ferizad")).toBe(7);
  expect(stringLength("1")).toBe(1);
  expect(stringLength("0987654321")).toBe(10);
});

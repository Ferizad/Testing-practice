const capitalize = require("../functions/capitalize");

test("capitalizes the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("returns an empty string if the input is empty", () => {
    expect(capitalize("")).toBe("");
  });

  test("throws a TypeError if the input is not a string", () => {
    expect(() => {
      capitalize(42);
    }).toThrow(TypeError);
  });
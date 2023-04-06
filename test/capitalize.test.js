const capitalize = require("../functions/capitalize");

test("capitalize the first letter", () => {
    expect(capitalize("ferizad")).toBe("Ferizad");
  });

  test("input is empty", () => {
    expect(capitalize("")).toBe("");
  });

  test("the input is not a string", () => {
    expect(() => {
      capitalize(42);
    }).toThrow(TypeError);
  });
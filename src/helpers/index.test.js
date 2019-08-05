import { months, years } from "./";

describe("Helpers", () => {
  it("months should return array of 12 months", () => {
    const array = months();
    expect(array.length).toBe(12);
    expect(array[2].value).toBe(3);
    expect(array[2].name).toBe("March");
  });

  it("years should return array of 8 years starting current year", () => {
    const array = years();
    const currentYear = new Date().getFullYear();
    expect(array.length).toBe(8);
    expect(array[0]).toBe(currentYear);
    expect(array[7]).toBe(currentYear + 7);
  });
});

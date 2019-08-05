import {
  required,
  isNumber,
  isValidCC,
  exactLength,
  validate,
  validateExpiry,
} from "./validator";

describe("Validator", () => {
  it("required should make sure value is valid", () => {
    expect(required("my value")).toBeTruthy();
    expect(required(123)).toBeTruthy();
    expect(required("")).toBeFalsy();
    expect(required(null)).toBeFalsy();
    expect(required(undefined)).toBeFalsy();
    expect(required([])).toBeFalsy();
    expect(required({})).toBeFalsy();
  });

  it("isNumber should make sure value is a number", () => {
    expect(isNumber(123)).toBeTruthy();
    expect(isNumber("123")).toBeTruthy();
    expect(isNumber("text")).toBeFalsy();
    expect(isNumber(null)).toBeFalsy();
    expect(isNumber(undefined)).toBeFalsy();
    expect(isNumber([])).toBeFalsy();
    expect(isNumber({})).toBeFalsy();
  });

  it("isValidCC should make sure value is a valid credit card number", () => {
    expect(isValidCC(5326)).toBeTruthy();
    expect(isValidCC(4444)).toBeTruthy();
    expect(isValidCC(3471)).toBeTruthy();
    expect(isValidCC("5326")).toBeTruthy();
    expect(isValidCC("8888")).toBeFalsy();
    expect(isValidCC(8888)).toBeFalsy();
    expect(isValidCC(null)).toBeFalsy();
    expect(isValidCC(undefined)).toBeFalsy();
    expect(isValidCC([])).toBeFalsy();
    expect(isValidCC({})).toBeFalsy();
  });

  it("exactLength should make sure value lenght is correct", () => {
    expect(exactLength(4, "test")).toBeTruthy();
    expect(exactLength(6, "test")).toBeFalsy();
    expect(exactLength(4, 1234)).toBeFalsy();
    expect(exactLength(6, 1234)).toBeFalsy();
    expect(exactLength(0, [])).toBeFalsy();
    expect(exactLength(0, {})).toBeFalsy();
  });

  it("validate should return array of error messeges", () => {
    const rules = {
      field: {
        rules: [required],
        messeges: ["Field is required"]
      }
    };
    expect(validate("field", "value", rules)).toEqual([]);
    expect(validate("noRule", "value", rules)).toEqual([]);
    expect(validate("field", "", rules)).toEqual(["Field is required"]);
  });

  it("validateExpiry should validate if month and year are older than now", () => {
    const now = new Date(2019, 8, 3);
    expect(validateExpiry(3, 2019, now)).toBe("Expiry date is invalid");
    expect(validateExpiry("3", "2019", now)).toBe("Expiry date is invalid");
    expect(validateExpiry(11, 2019, now)).toBe("");
    expect(validateExpiry("11", "2019", now)).toBe("");
    expect(validateExpiry("11", "2019", "date")).toBe("Expiry date is invalid");
  });

});

import { minus } from "./minus";
describe("minus function", () => {
  test("should return the difference of two numbers", () => {
    expect(minus(5, 3)).toBe(2);
    expect(minus(10, 4)).toBe(6);
    expect(minus(-3, -2)).toBe(-1);
    expect(minus(0, 0)).toBe(0);
  });
  it("should return a negative number when the second argument is larger", () => {
    expect(minus(3, 5)).toBe(-2);
  });
});

import { plus } from "./plus";

describe("plus function", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(plus(1, 2)).toBe(3);
  });

  test("adds -1 + 2 to equal 1", () => {
    expect(plus(-1, 2)).toBe(1);
  });

  test("adds 0 + 0 to equal 0", () => {
    expect(plus(0, 0)).toBe(0);
  });
});

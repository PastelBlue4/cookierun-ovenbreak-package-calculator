import { describe, expect, test } from "@jest/globals";

function sum(a: number, b: number) {
  return a + b;
}

describe("sum module", () => {
  test("adds 1 + 2", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds 99", () => {
    expect(sum(4, 5)).toBe(4 + 5);
  });
});

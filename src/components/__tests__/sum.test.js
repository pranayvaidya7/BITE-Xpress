import { sum } from "../Sum";

test("should return sum of 2 numbers", () => {
  const res = sum(3, 4);
  // Assertion
  expect(res).toBe(7);
});

import { sum } from "../sum";

test("should return sum of 2 no", () => {
  const res = sum(3, 4);

  //Asserion
  expect(res).toBe(7);
});

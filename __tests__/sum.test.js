import sum from "../src/components/Sum";

test("", ()=>{
    const res = sum(3,4);

    expect(res).toBe(7);
});
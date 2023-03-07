import addTime from "./addTime";

describe("addTime function tests", () => {
  test("existing properties", () => {
    const now = Date.now();
    const src = addTime({ a: 0 });
    expect(src.time).toBeGreaterThanOrEqual(now);
  });
});

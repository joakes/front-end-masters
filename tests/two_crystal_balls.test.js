import balls from "../src/TwoCrystalBalls";

describe("crystal balls module", () => {
  test("two crystal balls", () => {
    const breaks = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      true,
      true,
    ];
    expect(balls(breaks)).toBe(7);
  });

  test("3 stories", () => {
    const breaks = [false, false, true];
    expect(balls(breaks)).toBe(2);
  });

  test("2 stories", () => {
    const breaks = [false, true];
    expect(balls(breaks)).toBe(1);
  });

  test("1 stories", () => {
    const breaks = [true];
    expect(balls(breaks)).toBe(0);
  });

  test("1 stories doesn't break", () => {
    const breaks = [false];
    expect(balls(breaks)).toBe(-1);
  });

  test("3 stories never breaks", () => {
    const breaks = [false, false, false];
    expect(balls(breaks)).toBe(-1);
  });
});

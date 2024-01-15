import sort from "../../src/BubbleSort";

test("Empty list", () => {
  const input = [];
  sort(input);
  expect(input).toEqual([]);
});

test("One item", () => {
  const input = [5];
  sort(input);
  expect(input).toEqual([5]);
});

test("Two items, no sort required", () => {
  const input = [3, 5];
  sort(input);
  expect(input).toEqual([3, 5]);
});

test("Two items, sort required", () => {
  const input = [3, 1];
  sort(input);
  expect(input).toEqual([1, 3]);
});

test("3 elements", () => {
  const input = [3, 2, 1];
  const expected = [1, 2, 3];
  sort(input);
  expect(input).toEqual(expected);
});

test("5 elements", () => {
  const input = [1, 3, 7, 4, 2];
  const expected = [1, 2, 3, 4, 7];
  sort(input);
  expect(input).toEqual(expected);
});

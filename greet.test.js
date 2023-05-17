import { greet } from "./greet.js";

test('returns "Hello Jane!" if called greet("Jane")', () => {
  const result = greet("Jane");
  expect(result).toBe("Hello Jane!");
});

test('returns "Hello name!" if called greet("name")', () => {
  const result = greet("name");
  expect(result).toBe("Hello name!");
});

test('returns "Hello Donald!" if called greet("Donald")', () => {
  expect(greet("Donald")).toBe("Hello Donald!");
});

test('returns "Hello stranger!" if called greet()', () => {
  expect(greet()).toBe("Hello stranger!");
});

test('returns "Hello coach!" if called greet("Ernst")', () => {
  expect(greet("Ernst")).toBe("Hello coach!");
});

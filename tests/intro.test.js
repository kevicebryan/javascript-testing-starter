import { describe, test, it, expect } from "vitest";
import { calculateAverage, fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return the first argument if it is greater than the second", () => {
    // AAA --> Arrange, Act, Assert
    // Arrange: set up the test // const a, b = 2, 1;
    // Act: execute the code under test  // const result = max(a,b)
    // Assert: check the result
    expect(max(2, 1)).toBe(2);
  });

  it("should return the second argument if it is greater than the first", () => {
    expect(max(1, 2)).toBe(2);
  });

  it("should return the first argument if it is equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz if arg is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return FizzBuzz if arg is divisible by 5 only", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("should return FizzBuzz if arg is divisible by 3 only", () => {
    expect(fizzBuzz(27)).toBe("Fizz");
  });
  it("should return arg as a string if not divisible by 3 nor 5", () => {
    expect(fizzBuzz(1)).toBe("1");
  });
});

describe("calculateAverage", () => {
  it("should return NaN if given empty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });
  it("should calculate the average of the array with single element", () => {
    expect(calculateAverage([1])).toBe(1);
  });
  it("should calculate the average of the array to a single number", () => {
    expect(calculateAverage([5, 5, 5, 10, 10])).toBe(7);
  });
  it("should calculate the average of the array to a single number", () => {
    expect(calculateAverage([5, 10])).toBe(7.5);
  });
});

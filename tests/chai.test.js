import { describe, expect, it } from "vitest";
import { sayHello } from "../src/chai-demo";

describe("sayHello", () => {
  it("should return a greeting message", () => {
    expect(sayHello("World")).toBe("Hello, World!");
  });
});

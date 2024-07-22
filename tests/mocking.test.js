import { describe, expect, it, vi } from "vitest";

describe("mock", () => {
  function sayHello(name, callback) {
    callback("Hello " + name);
  }

  it("should support mock", () => {
    const callback = vi.fn();
    sayHello("Eko", callback);
    expect(callback).toHaveBeenCalledWith("Hello Eko");
  });
});

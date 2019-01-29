"use strict";

describe("tester", () => {
  test("should test once", () => {
    expect.assertions(1);
    const y = jest.fn(() => 1 + 3);
    const res = y();
    expect(res).toEqual(4);
  });

  test("should test not once", () => {
    expect.assertions(1);
    const y = jest.fn(() => 1 + 3);
    const res = y();
    expect(res).toEqual(4);
  });
});

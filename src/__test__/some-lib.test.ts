import { doSomething, checkParam } from "../some-lib";

describe("doSomething", () => {
  it("returns 50", async () => {
    expect(await doSomething()).toBe(50);
  });
});

describe("checkParam", () => {
  it("returns true", () => {
    let data = {
      key: '11',
      val: 2,
    }
    expect(checkParam(data)).toBe(true);
  });

  it("returns false", () => {
    let data = {
      key: '11',
      val: 0,
    }
    expect(checkParam(data)).toBe(false);
  });
});

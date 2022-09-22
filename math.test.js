const { sum, divide, multiply, subtract } = require("./math");

beforeAll(() => {
  console.log("Before All Test");
});

describe("Functions", () => {
  beforeEach(() => {
    console.log("Before each");
  });
  it("should sum two numbers ", () => {
    expect(sum(2, 3)).toBe(5);
  });
  it("should subtract two numbers ", () => {
    expect(subtract(5, 3)).toBe(2);
  });
  it("should multiply two numbers ", () => {
    expect(multiply(2, 3)).toBe(6);
  });
  it("should divide two numbers ", () => {
    expect(divide(2, 2)).toBe(1);
  });
  afterEach(() => {
    console.log("After each");
  });
});

afterAll(() => {
  console.log("After all");
});

const chai = require("chai");
chai.use(require("chai-sinon"));
const { expect } = chai;
const Main = require("./index");
const { stub, restore } = require("sinon");
const calc = require("./calc");

describe("testing ping", () => {
  it("ping should return pong", () => {
    expect(Main.ping()).to.equal("pong");
  });
  it("ping should return pong", () => {
    expect(Main.ping()).to.be.a("string");
  });
});

describe("testing calc", () => {
  it("testing how many times calc is called", () => {
    const calcSpy = stub(calc, "sum");
    Main.testMock(1, 2, "");
    expect(calcSpy).to.have.been.calledOnce;
  });
  it("testing if returns expected value", () => {
    stub(calc, "sum").returns(11);
    const result = Main.testMock(0, 6, "result:");
    expect(result).to.equal("result: 11");
  });
  it("testing if returns ERROR when sum generates an exception", () => {
    stub(calc, "sum").throws();
    const result = Main.testMock(1, 6, "result:");
    expect(result).to.be.a("ERROR");
  });
  it("testing result is a string", () => {
    stub(calc, "sum");
    const result = Main.testMock(1, 6, "result:");
    expect(result).to.be.a("string");
  });
  it("testing result is a Error when throws an error", () => {
    stub(calc, "sum").throws();
    const result = Main.testMock(1, 6, "result:");
    expect(result).to.be.a("ERROR");
  });
  afterEach(() => {
    restore();
  });
});

describe("testing asyncTestMock", () => {
  it("testing how many times calc is called", async () => {
    const calcSpy = stub(calc, "sum");
    return Main.asyncTestMock(1, 2, "").then((res) => {
      expect(calcSpy).to.have.been.calledOnce;
    });
  });
  it("testing if returns expected value", async () => {
    stub(calc, "sum").returns(11);
    return Main.asyncTestMock(0, 6, "result:").then((result) => {
      expect(result).to.equal("result: 11");
    });
  });
  it("testing if returns ERROR when sum generates an exception", async () => {
    stub(calc, "sum").throws();
    return Main.asyncTestMock(1, 6, "result:").then((result) => {
      expect(result).to.be.a("ERROR");
    });
  });
  it("testing result is a string", () => {
    stub(calc, "sum");
    return Main.asyncTestMock(1, 6, "result:").then((result) => {
      expect(result).to.be.a("string");
    });
  });
  it("testing result is a Error when throws an error", () => {
    stub(calc, "sum").throws();
    return Main.asyncTestMock(1, 6, "result:").then((result) => {
      expect(result).to.be.a("ERROR");
    });
  });
  afterEach(() => {
    restore();
  });
});

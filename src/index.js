const calc = require("./calc");

function ping() {
  return "pong";
}

function testMock(a, b, text) {
  try {
    return `${text} ${calc.sum(a, b)}`;
  } catch {
    return new Error("Error");
  }
}

async function asyncTestMock(a, b, text) {
  return testMock(a, b, text);
}

module.exports = {
  ping,
  testMock,
  asyncTestMock,
};

function sum(a, b) {
  return a + b;
}

async function asyncSum(a, b) {
  return sum();
}

module.exports = {
  sum,
  asyncSum,
};

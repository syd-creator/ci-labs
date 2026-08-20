const { add, subtract } = require('./index');

function test(name, actual, expected) {
  if (actual === expected) {
    console.log(`PASS: ${name}`);
  } else {
    console.error(`FAIL: ${name} - expected ${expected}, got ${actual}`);
    process.exitCode = 1;
  }
}

test('add 2 + 3', add(2, 3), 5);
test('subtract 5 - 2', subtract(5, 2), 3);
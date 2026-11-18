const test = require('node:test');
const assert = require('node:assert/strict');

const { sumar, restar } = require('../src');

test('sumar devuelve la suma de dos números', () => {
  assert.equal(sumar(2, 3), 5);
});

test('sumar funciona con cero y números negativos', () => {
  assert.equal(sumar(-4, 0), -4);
  assert.equal(sumar(-4, 7), 3);
});

test('restar devuelve la diferencia entre dos números', () => {
  assert.equal(restar(7, 3), 4);
});

test('restar funciona con cero y números negativos', () => {
  assert.equal(restar(5, 0), 5);
  assert.equal(restar(-4, -7), 3);
});
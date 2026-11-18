const { sumar, restar } = require('../src');

test('sumar devuelve la suma de dos números', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('sumar funciona con cero y números negativos', () => {
  expect(sumar(-4, 0)).toBe(-4);
  expect(sumar(-4, 7)).toBe(3);
});

test('restar devuelve la diferencia entre dos números', () => {
  expect(restar(7, 3)).toBe(4);
});

test('restar funciona con cero y números negativos', () => {
  expect(restar(5, 0)).toBe(5);
  expect(restar(-4, -7)).toBe(3);
});
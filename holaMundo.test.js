const holaMundo = require('./holaMundo.js');

test('Imprime "¡Hola Mundo!" en la consola', () => {
  console.log = jest.fn();
  holaMundo();
  expect(console.log).toHaveBeenCalledWith("¡Hola Mundo!");
});
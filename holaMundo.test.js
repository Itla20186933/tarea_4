const holaMundo = require('./hola_mundo');

test('Imprime "¡Hola Mundo!" en la consola', () => {
  console.log = jest.fn();
  holaMundo();
  expect(console.log).toHaveBeenCalledWith("¡Hola Mundo!");
});
const validacion = require('./correo');

test('Validar correo electrónico válido', () => {
  expect(validacion("davidf.sanchezm@gmail.com")).toBe(true);
  expect(validacion("pipesan55@gmail.com")).toBe(true);
});

test('Validar correo electrónico no válido', () => {
  expect(validacion("davidf.sanchezm@gmail.com")).toBe(true);
  expect(validacion("pipesan55@gmail.com")).toBe(true);
  expect(validacion("correoinvalido@dominio")).toBe(false); 
  expect(validacion("correo@invalido")).toBe(false); 
});
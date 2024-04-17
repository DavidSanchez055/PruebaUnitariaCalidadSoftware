const validacion = require('./correo');

function validarCorreoElectronico(correo) {
  const patron = /^[^@]+@[^@]+\.[^@]+$/;
  return patron.test(correo);
}

test('Validar correo electrónico válido', () => {
  expect(validacion("davidf.sanchezm@gmail.com")).toBe("davidf.sanchezm@gmail.com");
  expect(validacion("pipesan55@gmail.com")).toBe("pipesan55@gmail.com");
});

test('Validar correo electrónico no válido', () => {
  expect(validarCorreoElectronico("davidf.sanchezm@gmail.com")).toBe(true);
  expect(validarCorreoElectronico("pipesan55@gmail.com")).toBe(true);
  expect(validarCorreoElectronico("correoinvalido@dominio")).toBe(false); 
  expect(validarCorreoElectronico("correo@invalido")).toBe(false); 
});
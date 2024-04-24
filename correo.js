function obtenerCorreo (CorreoElectronico){
    return CorreoElectronico
}
function validarCorreoElectronico(correo) {
    const patron = /^[^@]+@[^@]+\.[^@]+$/;
    return patron.test(correo);
  }

module.exports = obtenerCorreo; 
module.exports = validarCorreoElectronico;
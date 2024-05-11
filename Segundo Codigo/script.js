function validarNro() {
  const dniInput = document.getElementById('dni');
  const dniValue = dniInput.value.trim();
  const dniRegex = /^\d{8}$/;

  if (!dniRegex.test(dniValue)) {
    alert('Por favor, ingrese un DNI válido de 8 dígitos.');
    dniInput.value = '';
    dniInput.focus();
    return false;
  }

  return true;
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  if (!validarNro()) {
    return;
  }

  // Aquí puedes agregar la lógica para enviar los datos del formulario a un servidor
  // Por ejemplo, mediante una solicitud AJAX

  // Mostrar un mensaje de éxito
  document.getElementById('response').innerHTML = '¡Gracias por enviar el formulario! Nos pondremos en contacto contigo pronto.';

  // Restablecer el formulario
  event.target.reset();
});


function validarNro() {
  const dniInput = document.getElementById('dni');
  const dniValue = dniInput.value.trim();
  const dniRegex = /^\d{8}$/;

  if (!dniRegex.test(dniValue)) {
    alert('Por favor, ingrese un DNI válido de 8 dígitos.');
    dniInput.value = '';
    dniInput.focus();
    return false;
  }

  return true;
}

function resetForm() {
  document.getElementById('contactForm').reset();
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  if (!validarNro()) {
    return;
  }

  // Aquí puedes agregar la lógica para enviar los datos del formulario a un servidor
  // Por ejemplo, mediante una solicitud AJAX

  // Mostrar un mensaje de éxito
  document.getElementById('response').innerHTML = '¡Gracias por enviar el formulario! Nos pondremos en contacto contigo pronto.';

  // Restablecer el formulario
  event.target.reset();
});
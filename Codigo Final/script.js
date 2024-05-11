function validarApellido() {
  // Validación del apellido
}

function validarNombre() {
  // Validación del nombre
}

function validarDocumento() {
  // Validación del documento
}

function validarFecha() {
  const fechaInput = document.getElementById('fecha');
  const fechaValue = new Date(fechaInput.value);
  const fechaLimite = new Date('2024-02-28');

  if (fechaValue < fechaLimite) {
    alert('La fecha no puede ser anterior al 28 de febrero de 2024.');
    fechaInput.value = '';
    fechaInput.focus();
    return false;
  }

  return true;
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  if (!validarApellido() || !validarNombre() || !validarDocumento() || !validarFecha()) {
    document.getElementById('response').innerHTML = 'Error: Por favor, complete todos los campos correctamente.';
    return;
  }

  document.getElementById('response').innerHTML = 'Sus datos fueron enviados.';
  event.target.reset();
});

document.getElementById('submitButton').addEventListener('mouseover', function() {
  this.style.backgroundColor = '#008CBA';
});

document.getElementById('submitButton').addEventListener('mouseout', function() {
  this.style.backgroundColor = '#4CAF50';
});

function resetForm() {
  document.getElementById('contactForm').reset();
}

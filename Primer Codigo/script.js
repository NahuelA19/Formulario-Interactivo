const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de los campos del formulario
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Aquí puedes realizar cualquier acción adicional con los datos del formulario
  // Por ejemplo, enviar una solicitud AJAX o mostrar un mensaje de confirmación
  console.log('Nombre:', name);
  console.log('Correo electrónico:', email);
  console.log('Mensaje:', message);

  // Restablecer los campos del formulario
  form.reset();
});
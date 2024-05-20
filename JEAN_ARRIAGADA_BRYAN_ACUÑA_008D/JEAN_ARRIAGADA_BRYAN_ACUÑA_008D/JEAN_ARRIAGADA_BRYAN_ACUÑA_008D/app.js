//Aqui estan las validaciones para el formulario de Contacto
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        enviarFormulario();
    });
});

function enviarFormulario() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const pets = document.getElementById('pets').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !pets || !subject || !message) {
        alert('Todos los campos son obligatorios.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return;
    }

    alert('Formulario enviado exitosamente.');
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

//Aqui estan las validaciones del Login
function validateLoginForm() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email) {
        showAlert('Por favor, ingrese su correo electrónico.', 'danger');
        return false;
    }

    if (!validateEmail(email)) {
        showAlert('Por favor, ingrese un correo electrónico válido.', 'danger');
        return false;
    }

    if (!password) {
        showAlert('Por favor, ingrese su contraseña.', 'danger');
        return false;
    }

    showAlert('Has ingresado correctamente.', 'success');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showAlert(message, type){
    const alertContainer = document.getElementById('alertContainer');
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.role = 'alert';
    alert.innerHTML = message;
    alertContainer.appendChild(alert)};
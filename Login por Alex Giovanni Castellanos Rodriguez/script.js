function iniciarSesion() {

    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    const correoCorrecto = "alexgeovannicastellanos@gmail.com";
    const passwordCorrecta = "12345678910";

    const mensaje = document.getElementById("mensaje");

    if (correo === correoCorrecto && password === passwordCorrecta) {
        mensaje.style.color = "green";
        mensaje.textContent = "Acceso permitido, Bienvenido";
    } else {
        mensaje.style.color = "red";
        mensaje.textContent = "Credenciales incorrectas, inténtelo de nuevo";
    }
}
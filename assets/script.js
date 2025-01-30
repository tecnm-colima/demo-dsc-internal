document.addEventListener('DOMContentLoaded', function() {
    let btnEnviar = document.getElementById('btnEnviar');

    btnEnviar.addEventListener('click', function(e) {
        e.preventDefault();
        let nombre = document.getElementById('txtNombre').value;
        let apellido = document.getElementById('txtApellido').value;
        let errores = document.getElementById('errores');
        let mensaje = document.getElementById('mensaje');

        if (nombre === "" || apellido === "") {
            errores.innerText = "Por favor, llena todos los campos";
            return;
        }

        mensaje.innerText = "Hola " + nombre + " " + apellido + "!";
        mensaje.innerText += "\n";
        mensaje.innerText += "Bienvenido al Tecnológico de Colima";
    });
});
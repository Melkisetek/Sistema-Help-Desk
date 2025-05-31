document.getElementById("loginForm")?.addEventListener('submit', async function (e: Event) {
    e.preventDefault();

    const correoInput = document.getElementById("correo") as HTMLInputElement | null;
    const contrasenaInput = document.getElementById("contrasena") as HTMLInputElement | null;

    if (!correoInput || !contrasenaInput) {
        alert("¡Faltan campos del formulario!");
        return;
    }

    const correo = correoInput.value;
    const contrasena = contrasenaInput.value;

    const formData2 = new FormData();
    formData2.append("correo", correo);
    formData2.append("contrasena", contrasena);

    try {
        /**
         * el navegador ejecuta el JS desde el contexto del HTML , 
         * así que tu ruta en el fetch()debe ser desde el HTML, no desde el archivo TypeScript .

         */
        // Enviar la solicitud al servidor
        const respuesta = await fetch('php/cliente/login_cliente.php', {
            method: 'POST',
            body: formData2
        });

        const resultado = await respuesta.text();
        const res = resultado.trim(); // Limpiamos espacios
        console.log('Respuesta del servidor:', res);

        if (res === 'success_cliente') {
            alert("¡Inicio de sesión exitoso como CLIENTE!");
            window.location.href = "view/cliente/clienteMenu.html";

        } 
        else {
            alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
        }
    } catch (error) {
        console.error('Error durante la solicitud:', error);
        alert('Hubo un error al intentar iniciar sesión.');
    }

    // Limpiar los campos del formulario
    if (correoInput) correoInput.value = '';
    if (contrasenaInput) contrasenaInput.value = '';


});
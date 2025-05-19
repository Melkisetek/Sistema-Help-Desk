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

    const formData = new FormData();
    formData.append("correo", correo);
    formData.append("contrasena", contrasena);

    try {
        /**
         * el navegador ejecuta el JS desde el contexto del HTML , 
         * así que tu ruta en el fetch()debe ser desde el HTML, no desde el archivo TypeScript .

         */
        // Enviar la solicitud al servidor
        const respuesta = await fetch('php/login.php', {
            method: 'POST',
            body: formData
        });

        const resultado = await respuesta.text();
        
        if (resultado.trim() === 'success') {
            alert("¡Inicio de sesión exitoso!");
            window.location.href = "view/app.html";
        }
        else {
            alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
        }
    } catch (error) {
        console.error('Error durante la solicitud:', error);
        alert('Hubo un error al intentar iniciar sesión.');
    }


});
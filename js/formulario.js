"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
(_a = document.getElementById("loginForm")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const correoInput = document.getElementById("correo");
        const contrasenaInput = document.getElementById("contrasena");
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
            const respuesta = yield fetch('php/login.php', {
                method: 'POST',
                body: formData
            });
            const resultado = yield respuesta.text();
            if (resultado.trim() === 'success') {
                alert("¡Inicio de sesión exitoso!");
                window.location.href = "view/app.html";
            }
            else {
                alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
            }
        }
        catch (error) {
            console.error('Error durante la solicitud:', error);
            alert('Hubo un error al intentar iniciar sesión.');
        }
    });
});

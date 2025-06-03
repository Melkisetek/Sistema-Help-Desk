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
        const formData2 = new FormData();
        formData2.append("correo", correo);
        formData2.append("contrasena", contrasena);
        try {
            const respuesta = yield fetch('php/cliente/login_cliente.php', {
                method: 'POST',
                body: formData2
            });
            const resultado = yield respuesta.text();
            const res = resultado.trim();
            console.log('Respuesta del servidor:', res);
            if (res === 'success_cliente') {
                alert("¡Inicio de sesión exitoso como CLIENTE!");
                window.location.href = "view/cliente/clienteMenu.html";
            }
            else {
            }
        }
        catch (error) {
            console.error('Error durante la solicitud:', error);
        }
        if (correoInput)
            correoInput.value = '';
        if (contrasenaInput)
            contrasenaInput.value = '';
    });
});

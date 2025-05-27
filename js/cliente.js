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
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const form = document.getElementById('clienteForm');
openBtn.onclick = () => modal.style.display = 'block';
closeBtn.onclick = () => modal.style.display = 'none';
form.onsubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    try {
        const formData = new FormData(form);
        const response = yield fetch('/Sistema_Help_Desk/php/guardar_cliente.php', {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = yield response.text();
        alert(result);
        modal.style.display = 'none';
        form.reset();
    }
    catch (error) {
        console.error('Error al enviar formulario:', error);
        alert('Hubo un error al guardar el cliente 😥');
    }
});

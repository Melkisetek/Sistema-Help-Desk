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
const openBtn2 = document.getElementById('openModal2');
const closeBtn2 = document.getElementById('closeModal2');
const modal2 = document.getElementById('modal2');
const form2 = document.getElementById('empleadoForm2');
openBtn2.onclick = () => modal2.style.display = 'block';
closeBtn2.onclick = () => modal2.style.display = 'none';
form2.onsubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    try {
        const formData = new FormData(form2);
        const response = yield fetch('/Sistema_Help_Desk/php/guardar_empleado.php', {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = yield response.text();
        alert(result);
        modal2.style.display = 'none';
        form2.reset();
    }
    catch (error) {
        console.error('Error al enviar formulario:', error);
        alert('Hubo un error al guardar empleado 😥');
    }
});

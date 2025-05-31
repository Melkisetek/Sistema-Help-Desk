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
const modal4 = document.getElementById("ticketModal");
const openTicket2 = document.getElementById("openTicket");
const closeTicket2 = document.getElementById("closeModal");
openTicket2.addEventListener("click", () => {
    modal4.style.display = "block";
});
closeTicket2.addEventListener("click", () => {
    modal4.style.display = "none";
});
window.addEventListener("click", (e) => {
    if (e.target === modal4) {
        modal4.style.display = "none";
    }
});
const formcliente = document.getElementById("ticketForm");
formcliente.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const formData = new FormData(formcliente);
    try {
        const response = yield fetch("../../php/cliente/guardar_ticketCliente.php", {
            method: "POST",
            body: formData,
        });
        const result = yield response.text();
        alert(result);
    }
    catch (error) {
        console.error("Error al enviar el ticket:", error);
        alert("Error al enviar el ticket.");
    }
}));

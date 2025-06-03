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
const tabla3 = document.getElementById('tablaTickets').querySelector('tbody');
function cargarTickets() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const respuesta = yield fetch('/Sistema_Help_Desk/php/obtener_tickets.php');
            const datos = yield respuesta.json();
            datos.forEach((ticket, index) => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
        <td>${index + 1}</td>
        <td>${ticket.fecha}</td>
        <td>${ticket.serie}</td>
        <td>${ticket.estado_ticket}</td>
        <td>${ticket.nombre_usuario}</td>
        <td>${ticket.email_cliente}</td>
        <td>${ticket.departamento}</td>
        <td><button onclick="generarPDF('${ticket.serie}')" class="pdf"><img src="../img/pdf.png" width="24" title="pdf" alt=""></button>
            <button onclick="abrirModalEditar('${ticket.serie}')" class="edit"><img src="../img/pencil.png" width="25" title="Editar" alt=""></button>
            <button onclick="eliminarTicket('${ticket.serie}')" class="trash" title="Eliminar"><ion-icon name="trash-bin" class="trash_bin"></ion-icon></button>
        </td>
        
      `;
                tabla3.appendChild(fila);
            });
        }
        catch (error) {
            console.error('Error al cargar clientes:', error);
            tabla3.innerHTML = '<tr><td colspan="5">Error al cargar datos</td></tr>';
        }
    });
}
cargarTickets();

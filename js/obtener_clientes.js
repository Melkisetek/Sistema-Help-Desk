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
const tabla = document.getElementById('tablaClientes').querySelector('tbody');
function cargarClientes() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const respuesta = yield fetch('/Sistema_Help_Desk/php/obtener_clientes.php');
            const datos = yield respuesta.json();
            datos.forEach((cliente, index) => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
        <td>${index + 1}</td>
        <td>${cliente.nombre}</td>
        <td>${cliente.correo}</td>
        <td>${cliente.contrasena}</td>
        <td>${cliente.telefono}</td>
        <td><button class="trash" title="Eliminar"><ion-icon name="trash-bin"></ion-icon></button></td>
        
      `;
                tabla.appendChild(fila);
            });
        }
        catch (error) {
            console.error('Error al cargar clientes:', error);
            tabla.innerHTML = '<tr><td colspan="5">Error al cargar datos</td></tr>';
        }
    });
}
cargarClientes();

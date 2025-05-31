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
const tabla2 = document.getElementById('tablaEmpleados').querySelector('tbody');
function cargarEmpleados() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const respuesta = yield fetch('/Sistema_Help_Desk/php/obtener_empleados.php');
            const datos = yield respuesta.json();
            datos.forEach((empleado, index) => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
        <td>${index + 1}</td>
        <td>${empleado.nombre}</td>
        <td>${empleado.email}</td>
        <td>${empleado.contraseña}</td>
        <td>${empleado.telefono}</td>
        <td><button class="trash" title="Eliminar"><ion-icon name="trash-bin"></ion-icon></button></td>
        
      `;
                tabla2.appendChild(fila);
            });
        }
        catch (error) {
            console.error('Error al cargar clientes:', error);
            tabla2.innerHTML = '<tr><td colspan="5">Error al cargar datos</td></tr>';
        }
    });
}
cargarEmpleados();

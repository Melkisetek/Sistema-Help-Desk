//tabla de clientes
const tabla3 = document.getElementById('tablaTickets')!.querySelector('tbody')!;

async function cargarTickets() {
    try {
        const respuesta = await fetch('/Sistema_Help_Desk/php/obtener_tickets.php');
        const datos = await respuesta.json();

        datos.forEach((ticket: any, index: number) => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
        <td>${index + 1}</td>
        <td>${ticket.fecha}</td>
        <td>${ticket.serie}</td>
        <td>${ticket.estado_ticket}</td>
        <td>${ticket.nombre_usuario}</td>
        <td>${ticket.email_cliente}</td>
        <td>${ticket.departamento}</td>
        <td><button class="pdf"><img src="../img/pdf.png" width="24" title="pdf" alt=""></button>
            <button class="edit"><img src="../img/pencil.png" width="25" title="Editar" alt=""></button>
            <button class="trash" title="Eliminar"><ion-icon name="trash-bin" class="trash_bin"></ion-icon></button>
        </td>
        
      `;
            tabla3.appendChild(fila);
        });

    } catch (error) {
        console.error('Error al cargar clientes:', error);
        tabla3.innerHTML = '<tr><td colspan="5">Error al cargar datos</td></tr>';
    }
}

cargarTickets();
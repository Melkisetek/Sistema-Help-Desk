/* function cargarTabla() {
  fetch("../php/ticket/listar_tickets.php")
    .then(res => res.json())
    .then(tickets => {
      const tabla = document.getElementById("tablaTicketsBody");
      tabla.innerHTML = "";
      tickets.forEach(ticket => {
        tabla.innerHTML += `
          <tr>
            <td>${tickets.indexOf(ticket) + 1}</td>
            <td>${ticket.fecha}</td>
            <td>${ticket.serie}</td>
            <td>${ticket.estado_ticket}</td>
            <td>${ticket.nombre_usuario}</td>
            <td>${ticket.email_cliente}</td>
            <td>${ticket.departamento}</td>
            <td>
              <button class="pdf"><img src="../img/pdf.png" width="24" title="pdf" alt=""></button>
              <button onclick="abrirModalEditar('${ticket.serie}')" class="edit"><img src="../img/pencil.png" width="25" title="Editar" alt=""></button>
              <button class="trash" title="Eliminar"><ion-icon name="trash-bin" class="trash_bin"></ion-icon></button>
            </td>
          </tr>`;

      });
    });
} */


function abrirModalEditar(serie) {
  fetch(`../php/ticket/obtener_ticket.php?serie=${serie}`)
    .then(res => res.json())
    .then(ticket => {
      document.getElementById("serieEditar").value = ticket.serie;
      document.getElementById("estadoEditar").value = ticket.estado_ticket;
      document.getElementById("departamentoEditar").value = ticket.departamento;
      document.getElementById("asuntoEditar").value = ticket.asunto;
      document.getElementById("mensajeEditar").value = ticket.mensaje;
      document.getElementById("solucionEditar").value = ticket.solucion;
      document.getElementById("modalEditar").style.display = "flex";
    });
}

function cerrarModal() {
  document.getElementById("modalEditar").style.display = "none";
}

document.getElementById("formEditar").addEventListener("submit", function (e) {
  e.preventDefault();
  const datos = {
    serie: document.getElementById("serieEditar").value,
    estado: document.getElementById("estadoEditar").value,
    departamento: document.getElementById("departamentoEditar").value,
    asunto: document.getElementById("asuntoEditar").value,
    mensaje: document.getElementById("mensajeEditar").value,
    solucion: document.getElementById("solucionEditar").value
  };

  fetch("../php/ticket/actualizar_ticket.php", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  })
    .then(res => res.text())
    .then(() => {
      alert("✅ Ticket actualizado");
      cerrarModal();
      cargarTabla();
    });
});

window.onload = cargarTabla;

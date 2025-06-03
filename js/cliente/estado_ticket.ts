
window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const serie = params.get("serie");
    const correo = params.get("correo");
  
    if (serie && correo) {
      fetch(`../../php/cliente/obtener_ticket.php?serie=${serie}&correo=${correo}`)
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            alert("❌ Ticket no encontrado.");
            window.location.href = "clienteMenu.html";
          /*  window.location.href = "../../view/cliente/consultarTicket.html"; */
          } else {
            (document.getElementById("serie") as HTMLElement).textContent = data.serie;
            (document.getElementById("fecha") as HTMLElement).textContent = data.fecha;
            (document.getElementById("nombre") as HTMLElement).textContent = data.nombre_usuario;
            (document.getElementById("departamento") as HTMLElement).textContent = data.departamento;
            (document.getElementById("mensaje") as HTMLElement).textContent = data.mensaje;
            (document.getElementById("solucion") as HTMLElement).textContent = data.solucion;
            (document.getElementById("estado") as HTMLElement).textContent = data.estado_ticket;
            (document.getElementById("email") as HTMLElement).textContent = data.email_cliente;
            (document.getElementById("asunto") as HTMLElement).textContent = data.asunto;
          }
        });
    }
  };
  
  function eliminarTicketCliente() {
    const serie = new URLSearchParams(window.location.search).get("serie");
    if (serie && confirm("¿Seguro que deseas eliminar este ticket?")) {
      fetch(`../../php/cliente/eliminar_ticket.php?serie=${serie}`)
        .then(() => alert("Ticket eliminado"))
        .then(() => window.location.href = "../../view/cliente/clienteMenu.html");
    }
  }
  
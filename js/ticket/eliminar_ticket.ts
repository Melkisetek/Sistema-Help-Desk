
function eliminarTicket(serie: string) {
  if (confirm("¿Estás seguro de que deseas eliminar este ticket?")) {
    const formData = new FormData();
    formData.append("serie", serie);

    fetch("../php/ticket/eliminar_ticket.php", { // Cambia la ruta según tu estructura de carpetas
      method: "POST",
      body: formData
    })
    .then(res => res.text())
    .then(msg => {
      alert(msg);
      location.reload(); // recarga tabla después de eliminar
    })
    .catch(err => {
      alert("Error al eliminar el ticket");
      console.error(err);
    });
  }
}

"use strict";
function eliminarTicket(serie) {
    if (confirm("¿Estás seguro de que deseas eliminar este ticket?")) {
        const formData = new FormData();
        formData.append("serie", serie);
        fetch("../php/ticket/eliminar_ticket.php", {
            method: "POST",
            body: formData
        })
            .then(res => res.text())
            .then(msg => {
            alert(msg);
            location.reload();
        })
            .catch(err => {
            alert("Error al eliminar el ticket");
            console.error(err);
        });
    }
}

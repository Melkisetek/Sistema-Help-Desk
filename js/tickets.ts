// Mostrar y ocultar modal
const modal3 = document.getElementById("ticketModal")!;
const openTicket = document.getElementById("openTicket")!;
const closeTicket = document.getElementById("closeModal")!;



openTicket.addEventListener("click", () => {
  modal3.style.display = "block";
});

closeTicket.addEventListener("click", () => {
  modal3.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal3) {
    modal3.style.display = "none";
  }
});

// Envío de datos del formulario
document.getElementById("ticketForm")!.addEventListener("submit", async (e) => {
  e.preventDefault();


  const data = {
    fecha: (document.getElementById("fecha") as HTMLInputElement).value,
    nombre_usuario: (document.getElementById("nombre_usuario") as HTMLInputElement).value,
    email_cliente: (document.getElementById("email_cliente") as HTMLInputElement).value,
    departamento: (document.getElementById("departamento") as HTMLSelectElement).value,
    asunto: (document.getElementById("asunto") as HTMLInputElement).value,
    mensaje: (document.getElementById("mensaje") as HTMLTextAreaElement).value
  };

  const response = await fetch("/Sistema_Help_Desk/php/guardar_ticket.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"      
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    alert("Error al enviar el ticket. Por favor, inténtelo de nuevo.");
    return;
  }
 
  console.log("Enviando:", data);
  console.log("Respuesta:", response);



  const result = await response.text();
  alert(result);
  modal3.style.display = "none";
  (document.getElementById("ticketForm") as HTMLFormElement).reset();

});

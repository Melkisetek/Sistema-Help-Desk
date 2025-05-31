// Mostrar y ocultar modal
const modal4 = document.getElementById("ticketModal")!;
const openTicket2 = document.getElementById("openTicket")!;
const closeTicket2 = document.getElementById("closeModal")!;



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

const formcliente = document.getElementById("ticketForm") as HTMLFormElement;

formcliente.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(formcliente); // Incluye campos + archivo

  try {
    const response = await fetch("../../php/cliente/guardar_ticketCliente.php", {
      method: "POST",
      body: formData,
    });

    const result = await response.text();
    alert(result);
  } catch (error) {
    console.error("Error al enviar el ticket:", error);
    alert("Error al enviar el ticket.");
  }
});
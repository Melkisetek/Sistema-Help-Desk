//tabla de clientes
const tabla = document.getElementById('tablaClientes')!.querySelector('tbody')!;

async function cargarClientes() {
  try {
    const respuesta = await fetch('/Sistema_Help_Desk/php/obtener_clientes.php');
    const datos = await respuesta.json();

    datos.forEach((cliente: any, index: number) => {
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

  } catch (error) {
    console.error('Error al cargar clientes:', error);
    tabla.innerHTML = '<tr><td colspan="5">Error al cargar datos</td></tr>';
  }
}

cargarClientes();
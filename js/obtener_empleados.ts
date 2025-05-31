//tabla de clientes
const tabla2 = document.getElementById('tablaEmpleados')!.querySelector('tbody')!;

async function cargarEmpleados() {
  try {
    const respuesta = await fetch('/Sistema_Help_Desk/php/obtener_empleados.php');
    const datos = await respuesta.json();

    datos.forEach((empleado: any, index: number) => {
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

  } catch (error) {
    console.error('Error al cargar clientes:', error);
    tabla2.innerHTML = '<tr><td colspan="5">Error al cargar datos</td></tr>';
  }
}

cargarEmpleados();
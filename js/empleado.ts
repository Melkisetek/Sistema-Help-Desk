const openBtn2 = document.getElementById('openModal2') as HTMLElement;
const closeBtn2 = document.getElementById('closeModal2') as HTMLElement;
const modal2 = document.getElementById('modal2') as HTMLElement;
const form2 = document.getElementById('empleadoForm2') as HTMLFormElement;


openBtn2.onclick = () => modal2.style.display = 'block';
closeBtn2.onclick = () => modal2.style.display = 'none';

form2.onsubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(form2);
      const response = await fetch('/Sistema_Help_Desk/php/guardar_empleado.php', {
        method: 'POST',
        body: formData
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.text();
      alert(result);
      modal2.style.display = 'none';
      form2.reset();
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      alert('Hubo un error al guardar empleado 😥');
    }
  };
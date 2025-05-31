const openBtn = document.getElementById('openModal') as HTMLElement;
const closeBtn = document.getElementById('closeModal') as HTMLElement;
const modal = document.getElementById('modal') as HTMLElement;
const form = document.getElementById('clienteForm') as HTMLFormElement;


openBtn.onclick = () => modal.style.display = 'block';
closeBtn.onclick = () => modal.style.display = 'none';


form.onsubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(form);
      const response = await fetch('/Sistema_Help_Desk/php/guardar_cliente.php', {
        method: 'POST',
        body: formData
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.text();
      alert(result);
      modal.style.display = 'none';
      form.reset();
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      alert('Hubo un error al guardar el cliente 😥');
    }
  };
  




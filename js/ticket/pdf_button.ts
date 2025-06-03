
function generarPDF(serie: string) {
// Esta función genera un PDF del ticket con la serie proporcionada
// y abre una nueva ventana para mostrar el PDF.
if (!serie) {
    console.error('Serie no proporcionada para generar PDF');
    return;
}
if (typeof window === 'undefined') {
    console.error('La función generarPDF solo se puede ejecutar en un entorno de navegador');
    return;
}
// Abre una nueva ventana con el PDF generado
  window.open('../php/ticket/generar_pdf.php?serie=' + serie, '_blank');
}

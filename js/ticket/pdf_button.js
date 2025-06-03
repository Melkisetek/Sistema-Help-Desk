"use strict";
function generarPDF(serie) {
    if (!serie) {
        console.error('Serie no proporcionada para generar PDF');
        return;
    }
    if (typeof window === 'undefined') {
        console.error('La función generarPDF solo se puede ejecutar en un entorno de navegador');
        return;
    }
    window.open('../php/ticket/generar_pdf.php?serie=' + serie, '_blank');
}

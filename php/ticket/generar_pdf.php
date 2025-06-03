
<?php
require('fpdf/fpdf.php'); // Asegúrate de tener FPDF en tu proyecto
$conn = new mysqli("localhost", "root", "", "Help_Desk");

$serie = $_GET['serie'];
$stmt = $conn->prepare("SELECT * FROM Help_Desk.ticket WHERE serie = ?");
$stmt->bind_param("s", $serie);
$stmt->execute();
$result = $stmt->get_result();
$data = $result->fetch_assoc();

$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial','B',16);
$pdf->Cell(0,10,'Ticket #' . $data['serie'],0,1,'C');
$pdf->Image('../../img/sinfondo.png',170,10,30); // Asegúrate de tener un logo en tu proyecto


$pdf->SetFont('Arial','',12);
$pdf->Ln(5);
$pdf->Cell(0,10,'Fecha: ' . $data['fecha'],0,1,'C');
$pdf->Ln(10);
$pdf->Cell(0,10,'Estado: ' . $data['estado_ticket'],0,1);
$pdf->Cell(0,10,'Nombre: ' . $data['nombre_usuario'],0,1);
$pdf->Cell(0,10,'Email: ' . $data['email_cliente'],0,1);
$pdf->Cell(0,10,'Departamento: ' . $data['departamento'],0,1);
$pdf->Cell(0,10,'Asunto: ' . $data['asunto'],0,1);
$pdf->Cell(0,10,'Problema: ' . $data['mensaje'],0,1);
$pdf->Cell(0,10,'Solucion: ' . $data['solucion'],0,1);
$pdf->Ln(10);
$pdf->SetFont('Arial','I',10);
$pdf->Cell(0,10,'Generado por Help Desk',0,1,'C');
$pdf->SetFont('Arial','',12);
$pdf->Ln(10);
$pdf->Cell(0,10,'Firma del usuario: ______________________',0,1);
$pdf->Ln(10);
$pdf->Cell(0,10,'Firma del agente: ______________________',0,1);
$pdf->Ln(10);
$pdf->Cell(0,10,'Gracias por usar nuestro servicio de Help Desk',0,1,'C');
$pdf->Ln(10);
$pdf->SetFont('Arial','I',10);
$pdf->Cell(0,70,'Este ticket fue generado el ' . date('d/m/Y H:i:s'),0,1,'C');
// Cierra la conexión a la base de datos
$stmt->close();
$conn->close();

$pdf->Output();
?>

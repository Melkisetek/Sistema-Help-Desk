<?php
require 'db_config.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
  echo "❌ No se recibió ningún dato JSON.";
  exit;
}


// Escapar datos para evitar inyecciones SQL 
$fecha = $conn->real_escape_string($data['fecha']);
$nombre_usuario = $conn->real_escape_string($data['nombre_usuario']);
$email_cliente = $conn->real_escape_string($data['email_cliente']);
$departamento = $conn->real_escape_string($data['departamento']);
$asunto = $conn->real_escape_string($data['asunto']);
$mensaje = $conn->real_escape_string($data['mensaje']);

$sql = "INSERT INTO Help_Desk.ticket (fecha,	serie,	estado_ticket,	nombre_usuario,	email_cliente,	departamento,	asunto,	mensaje,	solucion)
        VALUES ('$fecha', 'clave28', '', '$nombre_usuario', '$email_cliente', '$departamento', '$asunto', '$mensaje', '')";

if ($conn->query($sql) === TRUE) {
  echo "✅ Ticket guardado correctamente.";
} else {
  echo "❌ Error: " . $conn->error;
}

$conn->close();
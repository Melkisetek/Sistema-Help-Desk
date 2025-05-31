<?php
require 'db_config.php';

$sql = "SELECT id, fecha, serie, estado_ticket, nombre_usuario, email_cliente, departamento, asunto,
mensaje,
solucion
 FROM Help_Desk.ticket";
$result = $conn->query($sql);

$clientes = [];

while ($row = $result->fetch_assoc()) {
    $clientes[] = $row;
}

header('Content-Type: application/json');
echo json_encode($clientes);

$conn->close();

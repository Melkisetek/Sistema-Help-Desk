<?php
require 'db_config.php';

$sql = "SELECT idEmpleado, nombre, email, contraseña, telefono FROM Help_Desk.empleados";
$result = $conn->query($sql);

$clientes = [];

while ($row = $result->fetch_assoc()) {
    $clientes[] = $row;
}

header('Content-Type: application/json');
echo json_encode($clientes);

$conn->close();

<?php
require 'db_config.php';

$sql = "SELECT idCliente, nombre, correo, contrasena, telefono FROM Help_Desk.clientes";
$result = $conn->query($sql);

$clientes = [];

while ($row = $result->fetch_assoc()) {
    $clientes[] = $row;
}

header('Content-Type: application/json');
echo json_encode($clientes);

$conn->close();

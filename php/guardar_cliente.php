<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Include database configuration
require 'db_config.php';

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];
// Hasheada la contraseña
/* $contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT); */
$telefono = $_POST['telefono'];


if (empty($nombre) || empty($correo) || empty($contrasena) || empty($telefono)) {
  echo "Error: Todos los campos son obligatorios.";
  exit;
}
// Create connection

$sql = "INSERT INTO Help_Desk.clientes (nombre, correo, contrasena,	telefono)
        VALUES (?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $nombre, $correo, $contrasena, $telefono);

if($stmt->execute()) {
  echo "Cliente guardado exitosamente ";
} else {
  echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();

?>





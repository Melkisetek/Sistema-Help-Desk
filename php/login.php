<?php
//recibir datos del formulario
$correo = $_POST['correo'?? ''];
$contrasena = $_POST['contrasena'?? ''];
// Configuración de la base de datos
$host = 'localhost';
$usuario = 'root';
$clave = '';
$base_datos = 'Help_Desk';

// Conexión a la base de datos
$conexion = new mysqli($host, $usuario, $clave, $base_datos);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
} else {
    //echo "Conexión exitosa a la base de datos";
}



// Consulta segura usando prepared statements (anti-SQL Injection)
//$stmt = $conexion->prepare("SELECT contrasena FROM Help_Desk.Administradores WHERE Correo = ?");
$stmt = $conexion->prepare("SELECT * FROM Help_Desk.Administradores WHERE correo = ? AND contrasena = ? "); //#2

$stmt->bind_param("ss", $correo, $contrasena);
// Ejecutar y verificar el resultado
$stmt->execute();
$resultado = $stmt->get_result();

// Verificar si se encontró el correo
if ($resultado->num_rows > 0) {
    echo "success";
    
}
else {
    echo "error";
}

$stmt->close();
$conexion->close();
?>
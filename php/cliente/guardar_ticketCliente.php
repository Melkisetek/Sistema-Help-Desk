<?php
// guardar_ticket.php

// Conexión a la BD
$conn = new mysqli("localhost", "root", "", "Help_Desk");

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Captura campos
$fecha = $_POST['fecha'];
$nombre = $_POST['nombre_usuario'];
$email = $_POST['email_cliente'];
$departamento = $_POST['departamento'];
$asunto = $_POST['asunto'];
$problema = $_POST['mensaje'];

// Inicializa la variable para la ruta del archivo

$archivoRuta = null;

// Verifica si hay archivo
if (isset($_FILES['archivo']) && $_FILES['archivo']['error'] === UPLOAD_ERR_OK) {
    // Carpeta destino
    $nombreArchivo = basename($_FILES["archivo"]["name"]);
    $rutaDestino = "uploads/" . $nombreArchivo;

    // Asegura que la carpeta exista
    if (!file_exists("uploads")) {
        mkdir("uploads", 0777, true);
    }

    // Intenta mover el archivo
    if (move_uploaded_file($_FILES["archivo"]["tmp_name"], $rutaDestino)) {
        $archivoRuta = $rutaDestino;
    } else {
        // Muestra error detallado
        echo "⚠️ Error al mover el archivo.<br>";
        echo "Ruta temporal: " . $_FILES["archivo"]["tmp_name"] . "<br>";
        echo "Ruta destino: " . $rutaDestino . "<br>";
        echo "Permisos carpeta: " . substr(sprintf('%o', fileperms("uploads")), -4) . "<br>";
        echo "¿Existe carpeta? " . (is_dir("uploads") ? "Sí" : "No") . "<br>";
        echo "Código de error: " . $_FILES["archivo"]["error"] . "<br>";
        exit; // Detiene ejecución para evitar guardar datos incorrectos
    }
} else {
    echo "⚠️ No se recibió archivo o hubo un error al subirlo.<br>";
    echo "Código de error: " . $_FILES["archivo"]["error"] . "<br>";
    exit;
}

// Inserta datos
$stmt = $conn->prepare("INSERT INTO Help_Desk.ticket (fecha, serie, estado_ticket, nombre_usuario,
email_cliente,
departamento,
asunto,
mensaje,
solucion,
archivo
) 
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

/*Este codigo nos servira para generar un numero diferente para cada ticket*/
$codigo = "";
$longitud = 2;
for ($i = 1; $i <= $longitud; $i++) {
    $numero = rand(0, 9);
    $codigo .= $numero;
}
$num = $conn->query("SELECT id FROM ticket");
$numero_filas = mysqli_num_rows($num);

$numero_filas_total = $numero_filas + 1;
$serie = "TK" . $codigo . "N" . $numero_filas_total;
/*Fin codigo numero de ticket*/

$estado_ticket = "Abierto"; // Estado inicial del ticket
$solucion = ''; // Solución inicial vacía
$stmt->bind_param(
    "ssssssssss",
    $fecha,
    $serie,
    $estado_ticket,
    $nombre,
    $email,
    $departamento,
    $asunto,
    $problema,
    $solucion,
    $archivoRuta
);

if ($stmt->execute()) {
    echo "Ticket guardado exitosamente.";
    // Mostrar como notificación
    echo " ✅ Ticket creado con número de ID: $serie";
    
 
} else {
    echo "Error al guardar el ticket.";
}

$stmt->close();
$conn->close();

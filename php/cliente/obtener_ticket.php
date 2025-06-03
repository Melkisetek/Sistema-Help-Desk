
<?php
$conn = new mysqli("localhost", "root", "", "Help_Desk");

$serie = $_GET['serie'];
$correo = $_GET['correo'];

$sql = "SELECT * FROM Help_Desk.ticket WHERE serie = ? AND email_cliente = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $serie, $correo);
$stmt->execute();

$result = $stmt->get_result();
if ($row = $result->fetch_assoc()) {
  echo json_encode($row);
} else {
  echo json_encode(["error" => "Ticket no encontrado"]);
}
?>

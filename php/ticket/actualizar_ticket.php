
<?php
$conn = new mysqli("localhost", "root", "", "Help_Desk");
$data = json_decode(file_get_contents("php://input"), true);
$stmt = $conn->prepare("UPDATE Help_Desk.ticket SET estado_ticket=?, departamento=?, asunto=?, mensaje=?, solucion=? WHERE serie=?");
$stmt->bind_param("ssssss", $data["estado"], $data["departamento"], $data["asunto"], $data["mensaje"], $data["solucion"], $data["serie"]);
$stmt->execute();
echo "OK";
?>

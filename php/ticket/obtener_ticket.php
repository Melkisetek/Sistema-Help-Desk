
<?php
$conn = new mysqli("localhost", "root", "", "Help_Desk");
$serie = $_GET['serie'];
$stmt = $conn->prepare("SELECT * FROM ticket WHERE serie=?");
$stmt->bind_param("s", $serie);
$stmt->execute();
$result = $stmt->get_result();
echo json_encode($result->fetch_assoc());
?>

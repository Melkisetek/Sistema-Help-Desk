
<?php
$conn = new mysqli("localhost", "root", "", "Help_Desk");
$serie = $_GET['serie'];
$sql = "DELETE FROM Help_Desk.ticket WHERE serie = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $serie);
$stmt->execute();
?>


<?php
$conn = new mysqli("localhost", "root", "", "Help_Desk");
$result = $conn->query("SELECT * FROM Help_Desk.ticket ORDER BY fecha DESC");
$tickets = [];
while ($row = $result->fetch_assoc()) {
    $tickets[] = $row;
}
echo json_encode($tickets);
?>

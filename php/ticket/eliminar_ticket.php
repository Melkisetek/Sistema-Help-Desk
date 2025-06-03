
<?php
$conn = new mysqli("localhost", "root", "", "Help_Desk");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $serie = $_POST["serie"];

    $stmt = $conn->prepare("DELETE FROM Help_Desk.ticket WHERE serie = ?");
    $stmt->bind_param("s", $serie);
    if ($stmt->execute()) {
        echo "Ticket eliminado correctamente.";
    } else {
        echo "Error al eliminar el ticket.";
    }
}
?>
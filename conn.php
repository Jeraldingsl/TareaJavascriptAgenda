<?php
// Configuración de la base de datos
$servername = "localhost";
$username = "id21497228_jeralds";
$password = "100%Stay";
$dbname = "id21497228_agenda";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error al conectar con la base de datos: " . $conn->connect_error);
}

// Función para insertar un registro en la base de datos
function insertarRegistro($actividad, $fecha) {
    global $conn;
    $sql = "INSERT INTO actividades (actividad, fecha) VALUES ('$actividad', '$fecha')";
    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return false;
    }
}

// Función para obtener todos los registros de la base de datos
function obtenerRegistros() {
    global $conn;
    $sql = "SELECT * FROM actividades";
    $result = $conn->query($sql);
    $registros = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $registros[] = $row;
        }
    }
    return $registros;
}

// Cerrar la conexión
$conn->close();
?>

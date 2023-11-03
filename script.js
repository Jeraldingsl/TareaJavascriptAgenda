document.getElementById("agregar-form").addEventListener("submit", function (event) {
    event.preventDefault();
    agregarRegistro();
});

function agregarRegistro() {
    var actividad = document.getElementById("actividad").value;
    var fecha = document.getElementById("fecha").value;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                document.getElementById("mensaje").textContent = "Registro agregado exitosamente.";
                obtenerRegistros();
            } else {
                document.getElementById("mensaje").textContent = "Error al agregar el registro.";
            }
        }
    };
    xhr.open("POST", "conn.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("actividad=" + actividad + "&fecha=" + fecha);
}

function obtenerRegistros() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var registrosElement = document.getElementById("registros");
            if (registrosElement) {
                registrosElement.innerHTML = this.responseText;
            }
        }
    };
    xhr.open("GET", "conn.php", true);
    xhr.send();
}

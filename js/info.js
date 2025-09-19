document.addEventListener("DOMContentLoaded", function() {
    function mostrar() {
        document.getElementById("myModalalphaseo").classList.toggle("mostraralphaseo");
    }
    function cerrar() {
        document.getElementById("myModalalphaseo").classList.remove("mostraralphaseo");
    }
    document.getElementById("modalasinfo").onclick = function() {
        mostrar();
    }
    document.getElementById("close-div").onclick = function() {
        cerrar();
    }
});
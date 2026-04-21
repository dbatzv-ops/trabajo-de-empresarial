const formContacto = document.getElementById("formContacto");
const formOpinion = document.getElementById("formOpinion");
const mensaje = document.getElementById("mensajeExito");

function enviarFormulario(e){
    e.preventDefault();
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.display = "none";
    }, 3000);
}

formContacto.addEventListener("submit", enviarFormulario);
formOpinion.addEventListener("submit", enviarFormulario);
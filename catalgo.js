const planSelect = document.getElementById("plan");
const productos = document.querySelectorAll(".producto");

planSelect.addEventListener("change", actualizarPrecios);

function actualizarPrecios(){
    let plan = planSelect.value;

    productos.forEach(p => {
        let base = parseFloat(p.getAttribute("data-base"));
        let precioFinal = base;

        if(plan === "premium"){
            precioFinal = base * 0.9; // 10% descuento
        }
        else if(plan === "empresa"){
            precioFinal = base * 0.8; // 20% descuento
        }

        p.querySelector(".precio").innerText = "Q" + precioFinal.toFixed(2);
    });
}
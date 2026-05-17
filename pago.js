document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);

    if(params.has("producto")){
        localStorage.setItem("producto", params.get("producto"));
        localStorage.setItem("precio", params.get("precio") || "0");
        localStorage.setItem("imagen", params.get("imagen") || "img/log.png");
    }

    // Obtener datos guardados
    const producto =
localStorage.getItem("producto") || "Producto NutriVital";

const precio =
localStorage.getItem("precio") || "0";

const imagen =
localStorage.getItem("imagen") || "img/log.png";

const precioTexto = Number(precio) === 0 ? "Gratis" : "Q" + precio;

    // Mostrar en pantalla
    document.getElementById(
        "productoNombre"
    ).innerText = producto;

    document.getElementById(
        "productoPrecio"
    ).innerText = precioTexto;

    document.getElementById(
        "subtotalPrecio"
    ).innerText = precioTexto;

    document.getElementById(
        "totalPrecio"
    ).innerText = precioTexto;

    document.getElementById(
    "productoImagen"
).src = imagen;

    // Selección método
    const metodos =
    document.querySelectorAll(".metodo");

    const cardFields =
    document.querySelector(".card_fields");

    metodos.forEach(m => {

        m.addEventListener("click", () => {

            metodos.forEach(x =>
                x.classList.remove("active")
            );

            m.classList.add("active");

            const input = m.querySelector("input");
            if(input){
                input.checked = true;
            }

            if(cardFields){
                const isCardMethod =
                m.textContent.includes("Credit Card");

                cardFields.classList.toggle("show", isCardMethod);

                cardFields.querySelectorAll("input").forEach(field => {
                    field.required = isCardMethod;
                });
            }

        });

    });

    // Pago
    const form =
    document.getElementById("formPago");

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("✅ Pago realizado correctamente");

        localStorage.removeItem("producto");
        localStorage.removeItem("precio");
        localStorage.removeItem("imagen");

        window.location.href = "index.html";

    });

});

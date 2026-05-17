// FILTROS

const filtros =
document.querySelectorAll(".filter_btn");

filtros.forEach(btn => {

    btn.addEventListener("click", () => {

        filtros.forEach(b =>
        b.classList.remove("active"));

        btn.classList.add("active");

        const ratingSeleccionado = btn.dataset.rating;

        document.querySelectorAll(".review_card").forEach(card => {
            const coincide =
            ratingSeleccionado === "todas" ||
            card.dataset.rating === ratingSeleccionado;

            card.style.display = coincide ? "block" : "none";
        });

    });

});

// AGREGAR REVIEW

function agregarReview(){

    const nombre =
    document.getElementById("nombreReview")
    .value;

    const rating =
    document.getElementById("ratingReview")
    .value;

    const texto =
    document.getElementById("textoReview")
    .value;

    if(
        nombre.trim() === "" ||
        texto.trim() === ""
    ) return;

    const container =
    document.getElementById("reviewsContainer");

    const card =
    document.createElement("div");

    card.classList.add("review_card");
    card.dataset.rating = String(rating.length);

    card.innerHTML = `

        <div class="review_top">

            <div class="review_user">

                <div class="avatar">
                    ${nombre.charAt(0)}
                </div>

                <div>
                    <h3>${nombre}</h3>
                    <span>Opinión enviada · Cliente NutriVital</span>
                </div>

            </div>

            <div class="review_rating">
                ${rating}
            </div>

        </div>

        <p>${texto}</p>

        <div class="review_meta">
            <span><i class="fa-solid fa-circle-check"></i> Nueva opinión</span>
            <span>Ahora</span>
        </div>

    `;

    container.prepend(card);

    document.getElementById("nombreReview")
    .value = "";

    document.getElementById("textoReview")
    .value = "";

}

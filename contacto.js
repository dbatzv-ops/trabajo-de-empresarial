const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Mensaje enviado. El equipo de NutriVital te contactará pronto.");
        contactForm.reset();
    });
}

document.querySelectorAll(".faq_item").forEach((item) => {
    const button = item.querySelector(".faq_question");

    if (button) {
        button.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    }
});

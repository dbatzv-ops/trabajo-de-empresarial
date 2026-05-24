document.querySelectorAll(".help_navbar").forEach((navbar) => {
    const menuButton = navbar.querySelector(".mobile_menu_btn");
    const menu = navbar.querySelector(".help_menu");

    if (!menuButton || !menu) {
        return;
    }

    menuButton.addEventListener("click", () => {
        const isOpen = navbar.classList.toggle("nav-open");
        menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
        menuButton.querySelector("i").className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    });
});

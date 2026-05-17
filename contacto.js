const faqItems =
document.querySelectorAll(".faq_item");

faqItems.forEach(item => {

    const btn =
    item.querySelector(".faq_question");

    btn.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle?.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle?.setAttribute("aria-expanded", "false");
    });
});

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("prayerForm");
const message = document.getElementById("formMessage");

form?.addEventListener("submit", (event) => {
    event.preventDefault();
    message.textContent = "Pedido preenchido com sucesso. Para receber os pedidos, conecte este formulário a um serviço de formulário ou WhatsApp.";
    form.reset();
});

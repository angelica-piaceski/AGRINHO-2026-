
// ANIMAÇÃO AO SCROLL
const elements = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.remove("hidden");
        }
    });
}, { threshold: 0.15 });

elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// FORM
document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    alert("🌱 Mensagem enviada com sucesso!");
});

// BOTÃO TO TOP
const btn = document.createElement("button");
btn.id = "topButton";
btn.innerHTML = "⬆";
document.body.appendChild(btn);

window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
});

btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });




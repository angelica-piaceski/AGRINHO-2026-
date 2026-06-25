/* =========================
   ANIMAÇÃO AO SCROLL
========================= */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.remove("hidden");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});


/* =========================
   FORMULÁRIO
========================= */

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("🌱 Mensagem enviada com sucesso! Obrigado por apoiar a sustentabilidade.");

        form.reset();
    });
}


/* =========================
   BOTÃO VOLTAR AO TOPO
========================= */

const topButton = document.createElement("button");
topButton.id = "topButton";
topButton.innerHTML = "⬆";
document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* =========================
   MENU ATIVO (SCROLL)
========================= */

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });

});



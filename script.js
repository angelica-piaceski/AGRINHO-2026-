```javascript
// ===============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===============================

const cards = document.querySelectorAll(".card");
const imagens = document.querySelectorAll(".hero-img, .secao-img");

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

cards.forEach(card => {
    card.classList.add("hidden");
    observer.observe(card);
});

imagens.forEach(img => {
    img.classList.add("hidden");
    observer.observe(img);
});

// ===============================
// FORMULÁRIO
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("🌱 Obrigado pelo contato!\n\nSua mensagem foi enviada com sucesso.");

    form.reset();

});

// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

const topButton = document.createElement("button");

topButton.id = "topButton";
topButton.innerHTML = "⬆";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

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

// ===============================
// MENU ATIVO
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// ANO AUTOMÁTICO NO FOOTER
// ===============================

const footer = document.querySelector("footer p");

footer.innerHTML = `© ${new Date().getFullYear()} Agro Futuro - Projeto Agrinho`;
```





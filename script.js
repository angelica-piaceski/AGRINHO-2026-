// ===============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===============================

const elementos = document.querySelectorAll(".card, .hero-image, .imagem");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.remove("hidden");
        }

    });

}, {
    threshold: 0.15
});

elementos.forEach((elemento) => {
    elemento.classList.add("hidden");
    observer.observe(elemento);
});

// ===============================
// MENU MUDA DE COR AO ROLAR
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(27,94,32,.98)";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";

    } else {

        header.style.background = "rgba(27,94,32,.95)";
        header.style.boxShadow = "none";

    }

});

// ===============================
// MENU ATIVO
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 140;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// FORMULÁRIO
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("🌱 Obrigado!\n\nSua mensagem foi enviada com sucesso.");

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

    if(window.scrollY > 400){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ===============================
// ANO AUTOMÁTICO
// ===============================

const footer = document.querySelector("footer p");

footer.innerHTML = `© ${new Date().getFullYear()} Agro Futuro • Projeto Agrinho`;

// ===============================
// EFEITO SUAVE NOS LINKS
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ===============================
// EFEITO DE ZOOM NAS IMAGENS
// ===============================

const imagens = document.querySelectorAll("img");

imagens.forEach((img)=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transition=".4s";
        img.style.transform="scale(1.03)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});






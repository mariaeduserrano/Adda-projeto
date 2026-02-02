document.addEventListener("DOMContentLoaded", () => {
    const linha = document.querySelector(".linha-toggle");
    const info = document.querySelector(".linha-info");

    linha.addEventListener("click", () => {
        info.classList.toggle("mostrar");
    });
});


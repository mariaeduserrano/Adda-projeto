let login = document.querySelectorAll(".fazerLogin")
let cadastro = document.querySelectorAll(".cadastroModal")
let fecharAba = document.querySelectorAll(".fecharAba")
let fecharSegundaAba = document.querySelectorAll(".fecharDois")
let cadastrar = document.querySelectorAll(".seCadastrar")
let openLogin = document.querySelectorAll(".openLogin")
let fecharSucesso = document.querySelectorAll(".fecharSucesso")


//abrir e fechar Login
login.forEach(buttons => {
    buttons.addEventListener("click", () => {
        let modalId = buttons.getAttribute("data-modal")
        let modalLogin = document.getElementById(modalId)

    modalLogin.showModal();
    });
    
});
fecharAba.forEach(buttons => {
    buttons.addEventListener("click", () => {
        let modalId = buttons.getAttribute("data-modal")
        let modalLogin = document.getElementById(modalId)

    modalLogin.close();
    });
    
});



//abrir e fechar cadastro
cadastro.forEach(buttons => {
    buttons.addEventListener("click", (e) => {
        e.preventDefault();
        let modalId = buttons.getAttribute("data-modal")
        let modalCadastro = document.getElementById(modalId)
        
        let modalLogin = document.querySelector("dialog[open]")
        if (modalLogin) modalLogin.close();
    modalCadastro.showModal();
    });
    
});
fecharSegundaAba.forEach(buttons => {
    buttons.addEventListener("click", () => {
        let modalId = buttons.getAttribute("data-modal")
        let modalCadastro = document.getElementById(modalId)

    modalCadastro.close();
    });
    
});

//finalizar cadastro e logar


cadastrar.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        let modalId = button.getAttribute("data-modal")
        let modalSucesso = document.getElementById(modalId)
        

        let modalCadastro = document.querySelector("dialog[open]")
        if (modalCadastro) modalCadastro.close();
        modalSucesso.showModal();
    })
})

openLogin.forEach(buttons => {
    buttons.addEventListener("click", () => {
        let modalId = buttons.getAttribute("data-modal")
        let modalLogin = document.getElementById(modalId)
        
        let modalSucesso = document.querySelector("dialog[open]")
        if(modalSucesso) modalSucesso.close()
    modalLogin.showModal();

    });
    
});
fecharSucesso.forEach(buttons => {
    buttons.addEventListener("click", () => {
        let modalId = buttons.getAttribute("data-modal")
        let modalSucesso = document.getElementById(modalId)

    modalSucesso.close();
    });
    
});

//menu responsivo

function menuShow() {
    let menuCelular = document.querySelector(".menuCelular");
    let menuIcone = document.querySelector(".menuIcone img");
    let menuWrapper = document.querySelector(".menuIcone");
    if(menuCelular.classList.contains("open")){
        menuCelular.classList.remove("open")
        menuWrapper.classList.remove("open")
        document.querySelector(".icon").src = "img/menu.png"
    } else {
        menuCelular.classList.add("open")
        menuWrapper.classList.add("open")
        document.querySelector(".icon").src = "img/X.png"
    }
}
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
    


    modalLogin.close();
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

        
        modalSucesso.showModal();
    })
})

openLogin.forEach(buttons => {
    buttons.addEventListener("click", () => {
        let modalId = buttons.getAttribute("data-modal")
        let modalLogin = document.getElementById(modalId)

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
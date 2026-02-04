

//modal
let cadastroAluno = document.querySelectorAll(".modalAluno")
let fechar = document.querySelectorAll(".fecharOModal")

cadastroAluno.forEach(buttons => {
    buttons.addEventListener("click", () => {
        let modalId = buttons.getAttribute("data-modal")
        let modalSucess = document.getElementById(modalId)

        modalSucess.showModal()
    })
})

fechar.forEach(buttons => {
    buttons.addEventListener("click", () => {
        let modalId = buttons.getAttribute("data-modal")
        let fecharIsso = document.getElementById(modalId)


        fecharIsso.close()
    })
})


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
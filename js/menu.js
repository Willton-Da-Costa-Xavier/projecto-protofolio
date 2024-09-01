let btnMenu = window.document.getElementById("btn-menu");

let overlay = window.document.getElementById("overlay-menu");

let menu = document.getElementById("menu-mobile");

btnMenu.addEventListener("click", ()=>{
    menu.classList.add("abrir-menu");
})

menu.addEventListener("click", ()=>{
    menu.classList.remove("abrir-menu");
})

overlay.addEventListener("click", ()=>{
    menu.classList.remove("abrir-menu");
})
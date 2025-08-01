let menuMobile = document.querySelector(".mobile-menu ");
let icon = document.getElementById("icon")
function menuShow(){
  menuMobile.classList.toggle("open")
  if (menuMobile.classList.contains("open")) {
    icon.src = "/img/icones/xmark-solid-full.svg"; // Ícone de fechar
    icon.alt = "Fechar menu";
  } else {
    icon.src = "/img/icones/bars-solid-full.svg"; // Ícone de abrir
    icon.alt = "Abrir menu";
  }
}
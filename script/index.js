const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const menu = document.getElementById("menu");

function toggleFunction() {
  if (
    menu.style.display === "none" ||
    getComputedStyle(menu).display === "none"
  ) {
    menu.style.display = "block";
    openMenu.style.display = "none";
    closeMenu.style.display = "inline";
  } else {
    menu.style.display = "none";
    openMenu.style.display = "inline";
    closeMenu.style.display = "none";
  }
}

openMenu.addEventListener("click", toggleFunction);
closeMenu.addEventListener("click", toggleFunction);

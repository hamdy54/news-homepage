const menu = document.getElementById("menu"),
  closeMenuBtn  = document.getElementById("closeMenu"),
  toggleMenuBtn = document.getElementById("toggleMenu");

if (toggleMenuBtn) {
  toggleMenuBtn.addEventListener("click", () => {
    menu.classList.add("isActive");
    document.body.classList.add("menuIsActive");
  })
}

if (closeMenuBtn) {
  closeMenuBtn.addEventListener("click", () => {
    menu.classList.remove("isActive");
    document.body.classList.remove("menuIsActive");
  })
}
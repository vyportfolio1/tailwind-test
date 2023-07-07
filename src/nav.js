const btn = document.querySelector(".fa-bars");
const menu = document.querySelector(".mobile-menu");

 
btn.addEventListener("click", () => {
  menu.classList.toggle("none");
});

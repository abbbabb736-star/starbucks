const hamElement = document.getElementById("ham-btn");
const hamCloseElement = document.getElementById("ham-close");
const hamPanelElement = document.getElementById("ham-panel");

hamElement.addEventListener("click", () => {
  console.log("ss");
  hamCloseElement.classList.remove("nav__x")
  hamElement.classList.add("nav__ham")
});

hamCloseElement.addEventListener("click", () => {
  console.log("s");
  hamElement.classList.remove("nav__ham");
  hamCloseElement.classList.add("nav__ham");
});

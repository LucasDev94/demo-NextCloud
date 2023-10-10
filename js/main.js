const optionsDetails = document.querySelectorAll(".dots-details");
const details = document.querySelector(".main-details");

optionsDetails.forEach((element) =>
  element.addEventListener("click", function saludar() {
    console.log("hola");
  })
);

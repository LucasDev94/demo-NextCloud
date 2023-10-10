const optionsDetails = document.querySelectorAll(".dots-details");
const details = document.querySelector(".main-details");

const buttonNewElement = document.querySelector("#new-element");
const menuNewElement = document.querySelector(".menu-new-elements");
const closeMenuNewElement = document.querySelector(".close-menu-new-element");
const createNewElement = document.querySelector("#create-new-element");

const tableBody = document.querySelector(".docs-body");

optionsDetails.forEach((element) =>
  element.addEventListener("click", function saludar() {
    console.log("hola");
  })
);

buttonNewElement.addEventListener("click", openOptionsNewDocs);
function openOptionsNewDocs() {
  menuNewElement.classList.remove("inactive");
}

closeMenuNewElement.addEventListener("click", closeMenuCreateNewElement);
function closeMenuCreateNewElement() {
  menuNewElement.classList.add("inactive");
}

createNewElement.addEventListener("submit", addNewElement);
function addNewElement (event){
  event.preventDefault();
  
  const nameNewElement = document.querySelector("#name-new-element").value;
  const optionsTypeElement = document.getElementsByName("options-elements");
  
  let optionSelect = undefined;
  for(let i = 0; i < optionsTypeElement.length; i++){
    if (optionsTypeElement[i].checked){
      optionSelect = optionsTypeElement[i].value;
      break;
    }
  }

  let elementToCreate = {
    name: nameNewElement,
    type: optionSelect,
    date: new Date(),
  }
  
  console.log("Creando nuevo elemento. Nombre:", nameNewElement, "Opción seleccionada:", optionSelect, "Objeto creado:", elementToCreate);
}

// <tr>
//   <td><input type="checkbox"></td>
//   <td><span class="material-symbols-outlined folder">folder</span>Documentación tecnica</td>
//   <td><p>CJ</p></td>
//   <td><span class="material-symbols-outlined dots-details">more_horiz</span></td>
//   <td>Tamaño</td>
//   <td>Modificado</td>
// </tr>

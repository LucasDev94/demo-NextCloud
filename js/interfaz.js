const optionsDetails = document.querySelectorAll(".dots-details");
const details = document.querySelector(".main-details");

const buttonNewElement = document.querySelector("#new-element");
const menuNewElement = document.querySelector(".menu-new-elements");
const closeMenuNewElement = document.querySelector(".close-menu-new-element");
const createNewElement = document.querySelector("#create-new-element");

const tableBody = document.querySelector(".docs-body");

/* Se itera cada elemento del array, para que todos sus elementos tengan el addEventListener */
/* Funcion para abrir el aside derecho con las propiedades del archivo*/
optionsDetails.forEach((element) =>
  element.addEventListener("click", function saludar() {
    console.log("hola");
  })
);

/* clic sobre el boton "nuesto" para abrir el menu para crear nuevo elemento */
buttonNewElement.addEventListener("click", openOptionsNewDocs);
function openOptionsNewDocs() {
  menuNewElement.classList.remove("inactive");
}

/* Cierra el menu que crea nuevos elementos */
closeMenuNewElement.addEventListener("click", closeMenuCreateNewElement);
function closeMenuCreateNewElement() {
  menuNewElement.classList.add("inactive");
}

/* Funcion para crear elementos y agregarlos al main-content */
createNewElement.addEventListener("submit", addNewElement);
function addNewElement(event) {
  event.preventDefault();

  const nameNewElement = document.querySelector("#name-new-element").value;
  const optionsTypeElement = document.getElementsByName("options-elements");

  let optionSelect = undefined;
  for (let i = 0; i < optionsTypeElement.length; i++) {
    if (optionsTypeElement[i].checked) {
      optionSelect = optionsTypeElement[i].value;
      break;
    }
  }

  let elementToCreate = {
    name: nameNewElement,
    type: optionSelect,
    date: new Date(),
  };

  const tr = document.createElement("tr");

  const tdCheckbox = document.createElement("td");
  const inputCheckbox = document.createElement("input");
  inputCheckbox.setAttribute("type", "checkbox");

  const tdName = document.createElement("td");
  const tdNameIcon = document.createElement("span");
  tdNameIcon.classList.add("material-symbols-outlined");

  /** Practicando lo aprendido en clase */
  /** Con el objeto y la funicon se valida la opcion seleccionada en el form tipo radio para agregar la clase correspondiente */
  let typeClassNewElement = {
    folder: "folder",
    documento: "docx",
    present: "pptx",
    diagrama: "dwg",
  };

  if (typeClassNewElement[optionSelect]) {
    tdNameIcon.classList.add(typeClassNewElement[optionSelect]);
  }

  /** Objeto para agregar text al span y asi obtener el icono correspondiente */
  let typeTextNewElement = {
    folder: "folder",
    documento: "description",
    present: "stay_primary_landscape",
    diagrama: "analytics",
  };

  if (typeTextNewElement[optionSelect]){
    tdNameIcon.innerText = typeTextNewElement[optionSelect]
  }

  console.log(
    "Creando nuevo elemento. Nombre:",
    nameNewElement,
    "Opción seleccionada:",
    optionSelect,
    "Objeto creado:",
    elementToCreate,
    "Revisando si a tdNameIcon se le agrego correctamente su clase:",
    tdNameIcon
  );
}

{
  /* <tr>
  <td><input type="checkbox"></td>
  <td><span class="material-symbols-outlined dwg">analytics</span>ruta de evacuación.dwg</td>
  <td><span class="material-symbols-outlined dots-details">more_horiz</span></td>
  <td>Tamaño</td>
  <td>hace 10 días</td>
  <td><span class="material-symbols-outlined">delete_forever</span></td>
</tr> */
}

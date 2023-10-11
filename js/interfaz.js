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
  inputNewElem = document.querySelector("#name-new-element");
  inputNewElem.focus();
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
    size: (Math.random()*1000).toFixed(1),
    date: parseInt(Math.random()*365),
  };  

  const tdCheckbox = document.createElement("td");
  const inputCheckbox = document.createElement("input");
  inputCheckbox.setAttribute("type", "checkbox");

  /*1. Anidando elementos*/
  tdCheckbox.appendChild(inputCheckbox);
  /******************* */

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

  /** Objeto para agregar text al span y asi obtener el icono correspondiente ejecutando el condicional if*/
  let typeTextNewElement = {
    folder: "folder",
    documento: "description",
    present: "stay_primary_landscape",
    diagrama: "analytics",
  };

  if (typeTextNewElement[optionSelect]){
    tdNameIcon.innerText = typeTextNewElement[optionSelect]
  }

  const tdNameP = document.createElement("p");
  let typeExtNewElement = {
    folder: "",
    documento: "docx",
    present: "pptx",
    diagrama: "dwg",
  }
  if (typeExtNewElement[optionSelect]){
    tdNameP.innerText = `${elementToCreate.name}.${typeExtNewElement[optionSelect]}`;
  }

  /*2. Anidando elementos*/
  tdName.appendChild(tdNameIcon);  
  tdName.appendChild(tdNameP);
  /****************** */

  const tdDetails = document.createElement("td");
  const tdIconDetails = document.createElement("span");
  tdIconDetails.classList.add("material-symbols-outlined");
  tdIconDetails.classList.add("dots-details");
  tdIconDetails.innerText = "more_horiz";

  /* 3. Anidando elementos*/
  tdDetails.appendChild(tdIconDetails);  
  /****************** */

  const tdSize = document.createElement("td");
  tdSize.innerText = `${elementToCreate.size} KB`

  /* 4. Anidando elementos*/
  //
  /****************** */

  const tdDateCreate = document.createElement("td");
  tdDateCreate.innerText = `hace ${elementToCreate.date} días`

  /* 5.Anidando elementos*/
  //
  /****************** */
  
  const tdDelete = document.createElement("td");
  const tdDeleteIcon = document.createElement("span");
  tdDeleteIcon.classList.add("material-symbols-outlined");
  tdDeleteIcon.innerText = "delete_forever";
  
  /* 6.Anidando elementos*/
  tdDelete.appendChild(tdDeleteIcon)  
  /****************** */

  const tr = document.createElement("tr");
  /*Anidando elementos*/
    tr.appendChild(tdCheckbox);
    tr.appendChild(tdName);
    tr.appendChild(tdDetails);
    tr.appendChild(tdSize);
    tr.appendChild(tdDateCreate);
    tr.appendChild(tdDelete)
  /****************** */

  const tableBody = document.querySelector(".docs-body");
  tableBody.appendChild(tr);

  menuNewElement.classList.add("inactive")
  // console.log(
  //   "Creando nuevo elemento. Nombre:",
  //   nameNewElement,
  //   "Opción seleccionada:",
  //   optionSelect,
  //   "Objeto creado:",
  //   elementToCreate,
  //   "Revisando si a tdNameIcon se le agrego correctamente su clase:",
  //   tdName, tdNameIcon, tdSize
  // );
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

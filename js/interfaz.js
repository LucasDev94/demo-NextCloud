const optionsDetails = document.querySelectorAll(".dots-details");
const details = document.querySelector(".main-details");

const buttonNewElement = document.querySelector("#new-element");
const menuNewElement = document.querySelector(".menu-new-elements");
const closeMenuNewElement = document.querySelector(".close-menu-new-element");
const createNewElement = document.querySelector("#create-new-element");

const tableBody = document.querySelector(".docs-body");

/** Aprendiendo delegación de eventos */
tableBody.addEventListener("click", saludarEnConsola);
function saludarEnConsola(event){
  console.log("Hola desde la consola")
  console.dir(evento);
}

/* Se itera cada elemento del array, para que todos sus elementos tengan el addEventListener */
/* Funcion para abrir el aside derecho con las propiedades del archivo*/
/*optionsDetails.forEach((element) =>
  element.addEventListener("click", function saludar() {
    console.log("hola");
  })
);*/

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

  const inputNewElement = document.querySelector("#name-new-element");
  const nameNewElement = inputNewElement.value
  const optionsTypeElement = document.getElementsByName("options-elements");

  let valueOptionSelect = undefined;
  let optionSelect = undefined;
  for (let i = 0; i < optionsTypeElement.length; i++) {
    if (optionsTypeElement[i].checked) {
      valueOptionSelect = optionsTypeElement[i].value;
      optionSelect = optionsTypeElement[i];
      break;
    }
  }

  let elementToCreate = {
    name: nameNewElement,
    type: valueOptionSelect,
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

  if (typeClassNewElement[valueOptionSelect]) {
    tdNameIcon.classList.add(typeClassNewElement[valueOptionSelect]);
  }

  /** Objeto para agregar text al span y asi obtener el icono correspondiente ejecutando el condicional if*/
  let typeTextNewElement = {
    folder: "folder",
    documento: "description",
    present: "stay_primary_landscape",
    diagrama: "analytics",
  };

  if (typeTextNewElement[valueOptionSelect]){
    tdNameIcon.innerText = typeTextNewElement[valueOptionSelect]
  }

  const tdNameP = document.createElement("p");
  let typeExtNewElement = {
    folder: " ", /*Por alguna razon si el string esta vacio entonces no aparece el nombre d ela nueva carpeta*/
    documento: ".docx",
    present: ".pptx",
    diagrama: ".dwg",
  }

  console.log("valueOptionSelect:", valueOptionSelect);
console.log("nameNewElement:", nameNewElement);
console.log("typeExtNewElement[valueOptionSelect]:", typeExtNewElement[valueOptionSelect]);

  
  if (typeExtNewElement[valueOptionSelect]){
    tdNameP.innerText = `${elementToCreate.name}${typeExtNewElement[valueOptionSelect]}`;
  }
  console.log(elementToCreate);
  
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

  inputNewElement.value = "";
  optionSelect.checked = false;
  menuNewElement.classList.add("inactive")

}


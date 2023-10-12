const optionsDetails = document.querySelectorAll(".dots-details");
const details = document.querySelector(".main-details");

const buttonNewElement = document.querySelector("#new-element");
const menuNewElement = document.querySelector(".menu-new-elements");
const closeMenuNewElement = document.querySelector(".close-menu-new-element");
const createNewElement = document.querySelector("#create-new-element");

const tableBody = document.querySelector(".docs-body");

/** Aprendiendo de manejo de mediaQuery desde JS */
const mediaQuery901to1200 = window.matchMedia(
  "(min-width: 901px) and (max-width: 1200px)"
);

/** Aprendiendo delegación de eventos, al seleccionar un elemento html contenedor en este caso el tbody entonces este podra seleccionar incluso los nuevos elementos creados dinamicamente con JS */
tableBody.addEventListener("click", openDetails);
function openDetails(event) {
  // console.log("Hola desde la consola")
  console.dir(event);

  /** Abre el aside de detalles */
  if (event.target.classList.contains("dots-details")) {
    details.classList.toggle("inactive");
  }

  /** Cambia el tamaño del td del nombre para una mejor visualización */
  let trElements = document.querySelectorAll(".docs-body tr");
  let tdSize = document.querySelectorAll(".docs-body tr td:nth-child(4)");
  let tdModify = document.querySelectorAll(".docs-body tr td:nth-child(5)");

  if (mediaQuery901to1200.matches && !details.classList.contains("inactive")) {
    //console.log("estamos en una pantalla que va de 901ox a 1200px");
    //console.log(trElements);
    //console.log(tdSize)

    /** display: none para td de tamaño */
    tdSize.forEach((tdElmSize) => {
      tdElmSize.classList.add("inactive");
    });

    /** display: none para td de modificado */
    tdModify.forEach((tdMdElem) => {
      tdMdElem.classList.add("inactive");
    });

    /** Cambio del grid con los elementos restantes */
    trElements.forEach((trElem) => {
      trElem.style.gridTemplateColumns = "0.4fr 3fr 0.5fr 0.5fr";
    });

  } else {

    /** display: block para td de tamaño */
    tdSize.forEach((tdElmSize) => {
      tdElmSize.classList.remove("inactive");
    });

    /** display: block para td de modificado */
    tdModify.forEach((tdMdElem) => {
      tdMdElem.classList.remove("inactive");
    });

    trElements.forEach((trElem) => {
      trElem.style.gridTemplateColumns = "0.4fr 4fr 0.4fr 0.7fr 1fr 0.4fr";
    });
  }
}

/** Eliminar elemento */
tableBody.addEventListener("click", deleteElement);
function deleteElement(event) {
  if (event.target.classList.contains("delete-element")) {
    let trElement = event.target.parentElement.parentElement;
    //console.log(trElement)
    tableBody.removeChild(trElement);
  }
}

/* clic sobre el boton "nuevo" para abrir el menu para crear nuevo elemento */
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
  const nameNewElement = inputNewElement.value;
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
    size: (Math.random() * 1000).toFixed(1),
    date: parseInt(Math.random() * 365),
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

  if (typeTextNewElement[valueOptionSelect]) {
    tdNameIcon.innerText = typeTextNewElement[valueOptionSelect];
  }

  const tdNameP = document.createElement("p");
  let typeExtNewElement = {
    folder:
      " " /*Por alguna razon si el string esta vacio entonces no aparece el nombre d ela nueva carpeta*/,
    documento: ".docx",
    present: ".pptx",
    diagrama: ".dwg",
  };

  //console.log("valueOptionSelect:", valueOptionSelect);
  //console.log("nameNewElement:", nameNewElement);
  //console.log("typeExtNewElement[valueOptionSelect]:", typeExtNewElement[valueOptionSelect]);

  if (typeExtNewElement[valueOptionSelect]) {
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
  tdSize.innerText = `${elementToCreate.size} KB`;

  /* 4. Anidando elementos*/
  //
  /****************** */

  const tdDateCreate = document.createElement("td");
  tdDateCreate.innerText = `hace ${elementToCreate.date} días`;

  /* 5.Anidando elementos*/
  //
  /****************** */

  const tdDelete = document.createElement("td");
  const tdDeleteIcon = document.createElement("span");
  tdDeleteIcon.classList.add("material-symbols-outlined");
  tdDeleteIcon.classList.add("delete-element");
  tdDeleteIcon.innerText = "delete_forever";

  /* 6.Anidando elementos*/
  tdDelete.appendChild(tdDeleteIcon);
  /****************** */

  const tr = document.createElement("tr");
  /*Anidando elementos*/
  tr.appendChild(tdCheckbox);
  tr.appendChild(tdName);
  tr.appendChild(tdDetails);
  tr.appendChild(tdSize);
  tr.appendChild(tdDateCreate);
  tr.appendChild(tdDelete);
  /****************** */

  const tableBody = document.querySelector(".docs-body");
  tableBody.appendChild(tr);

  inputNewElement.value = "";
  optionSelect.checked = false;
  menuNewElement.classList.add("inactive");
}

/** Eliminar elemento */

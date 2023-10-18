const optionsDetails = document.querySelectorAll(".dots-details");
const details = document.querySelector(".main-details");
const thanksGenerateLink = document.querySelector(".thanks-generate-link");
const generateLink = document.querySelector(".generate-link");
const sharePeople = document.querySelector(".share-people");
const nameSharePeople = document.querySelector(".nameToFind");
const errorFindPeople = document.querySelector(".error-find-people");
const findPeople = document.querySelector(".find-people");
const closeTextFindPeople = document.querySelector(".close-find-people");

const buttonNewElement = document.querySelector("#new-element");
const menuNewElement = document.querySelector(".menu-new-elements");
const closeMenuNewElement = document.querySelector(".close-menu-new-element");
const createNewElement = document.querySelector("#create-new-element");

const tableBody = document.querySelector(".docs-body");

const accionsGroup = document.querySelector(".accions-group");
const inputSelectGroup = document.querySelector(".check-select-group");
const contador = document.querySelector(".contador");
const deleteGroup = document.querySelector(".delete-group");

/** Aprendiendo de manejo de mediaQuery desde JS */
const mediaQuery901to1200 = window.matchMedia("(min-width: 901px) and (max-width: 1200px)");
const mediaQuery1201to1400 = window.matchMedia("(min-width: 1201px) and (max-width: 1400px")
const mediaQuery1401to1600 = window.matchMedia("(min-width: 1401px) and (max-width: 1600px)");
const mediaQuery1601toUP = window.matchMedia("(min-width: 1601px)");

const showActivity = document.querySelector(".show-activity");
const showLinks = document.querySelector(".show-links");
const showVersions = document.querySelector(".show-versions");

const activity = document.querySelector(".activity");
const links = document.querySelector(".links");
const versions = document.querySelector(".versions");


/** Aprendiendo delegación de eventos, al seleccionar un elemento html contenedor en este caso el tbody entonces este podra seleccionar incluso los nuevos elementos creados dinamicamente con JS */
tableBody.addEventListener("click", openDetails);
function openDetails(event) {
  // console.log("Hola desde la consola")
  //console.dir(event);

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
  } 
  
  if (mediaQuery901to1200.matches && details.classList.contains("inactive")) {
    /** display: block para td de tamaño */
    tdSize.forEach((tdElmSize) => {
      tdElmSize.classList.remove("inactive");
    });

    /** display: block para td de modificado */
    tdModify.forEach((tdMdElem) => {
      tdMdElem.classList.remove("inactive");
    });

    trElements.forEach((trElem) => {
      //trElem.style.gridTemplateColumns = "0.4fr 4fr 0.4fr 0.7fr 1fr 0.4fr";
      trElem.removeAttribute("style")
    });

  }
  
  if(mediaQuery1201to1400.matches && !details.classList.contains("inactive")){
    trElements.forEach((trElem) => {
      trElem.style.gridTemplateColumns = "0.5fr 4fr 0.5fr 1.3fr 1.5fr 0.5fr"
    })
    //console.log("Estoy en pantalla mayor a 1201px")
  }

  if (mediaQuery1201to1400.matches && details.classList.contains("inactive")){
    trElements.forEach((trElem) => {
      trElem.style.gridTemplateColumns = "0.5fr 8fr 0.5fr 1.5fr 2fr 0.5fr";
      trElem.removeAttribute("style")
    })
  }
  
  if(mediaQuery1401to1600.matches && !details.classList.contains("inactive")){
    trElements.forEach((trElem) => {
      trElem.style.gridTemplateColumns = "0.4fr 4fr 0.35fr 1fr 1fr 0.4fr"
    })
  }

  if(mediaQuery1401to1600.matches && details.classList.contains("inactive")){
    trElements.forEach((trElem) => {
      //trElem.style.gridTemplateColumns = "0.4fr 7fr 0.4fr 1fr 1fr 0.4fr"
      trElem.removeAttribute("style")
    })
  }

  if(mediaQuery1601toUP.matches && !details.classList.contains("inactive")){
    trElements.forEach((trElem) => {
      trElem.style.gridTemplateColumns = "0.6fr 11fr 0.5fr 1.5fr 1.5fr 0.6fr"
    })
  }

  if(mediaQuery1601toUP.matches && details.classList.contains("inactive")){
    trElements.forEach((trElem) => {
      //trElem.style.gridTemplateColumns = "0.4fr 7fr 0.4fr 1fr 1fr 0.4fr"
      trElem.removeAttribute("style")
    })
  }

  //0.6fr 11fr 0.5fr 1.5fr 1.5fr 0.6fr
  
  /** Usando el event que se imprime en la consolo se navego por sus propiedades hasta encontrar el segundo td, ahi con querySelector se selecciono el p y luego se contenido */

  /** Icono del elemento para llevarlo al aside */
  let iconInAside = document.querySelector(".main-details-title-icon span");
  let tdIconElm = event.target.parentElement.parentElement.children[1].querySelector("span").textContent;
  iconInAside.innerText = tdIconElm;

  /** nombre del elemento para pasarlo al aside*/
  let nameInAside = document.querySelector(".main-details-title-name h3");
  let tdPText = event.target.parentElement.parentElement.children[1].querySelector("p").textContent;
  nameInAside.innerText = tdPText;

  /** Seleccionando el tamaño de cada elemento para pasarlo al aside de details */
  let sizeInAside = document.querySelector(".size span");  
  let tdSizeValue = event.target.parentElement.parentElement.children[3].textContent;
  sizeInAside.innerText = tdSizeValue;

  /** Seleccionando la fecha cuando fue creado y mandandola a details */
  let dateInAside = document.querySelector(".date-create span")
  let tdDateValue = event.target.parentElement.parentElement.children[4].textContent;
  dateInAside.innerText = tdDateValue;

  /** Para borrar busquedas anteriores en el apartado de compartir informacion con una persona en especifico */
  nameSharePeople.value = "";
  findPeople.classList.add("inactive");
  errorFindPeople.classList.add("inactive");
}

/** Eliminar elemento */
tableBody.addEventListener("click", deleteElement);
function deleteElement(event) {
  if (event.target.classList.contains("delete-element")) {
    let trElement = event.target.parentElement.parentElement;
    //console.log(trElement)
    tableBody.removeChild(trElement);

    if (!details.classList.contains("inactive")) {
      details.classList.add("inactive");
      //console.log("hola");
    }
  }
}

/* clic sobre el boton "nuevo" para abrir el menu para crear nuevo elemento */
buttonNewElement.addEventListener("click", openOptionsNewDocs);
function openOptionsNewDocs() {
  menuNewElement.classList.remove("inactive");
  inputNewElem = document.querySelector("#name-new-element");
  inputNewElem.focus();

  if (!details.classList.contains("inactive")){
    details.classList.add("inactive")
  }
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
  inputCheckbox.classList.add("check-select");
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
  tr.classList.add("docs-body-tr");

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

const iconCloseDetails = document.querySelector(".icon-close");

iconCloseDetails.addEventListener("click", closeAsideDetails)

function closeAsideDetails(){
  if (!details.classList.contains("inactive")){
    details.classList.add("inactive")

    /** Cambia el tamaño del td del nombre para una mejor visualización */
    let trElements = document.querySelectorAll(".docs-body tr");
    let tdSize = document.querySelectorAll(".docs-body tr td:nth-child(4)");
    let tdModify = document.querySelectorAll(".docs-body tr td:nth-child(5)");
  
    if (mediaQuery901to1200.matches && details.classList.contains("inactive")) {
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
}

/** Navega entre los menus de details */
// const showActivity = document.querySelector(".show-activity");
// const showLinks = document.querySelector(".show-links");
// const showVersions = document.querySelector(".show-versions");

// const activity = document.querySelector(".activity");
// const links = document.querySelector(".links");
// const versions = document.querySelector(".versions");

showActivity.addEventListener("click", showDetailActivity)
function showDetailActivity(){
  activity.classList.remove("inactive");
  
  showActivity.classList.add("item-focus");
  if(showLinks.classList.contains("item-focus") || showVersions.classList.contains("item-focus")){
    showLinks.classList.remove("item-focus");
    showVersions.classList.remove("item-focus");
  }
  
  if(!links.classList.contains("inactive")){
    links.classList.add("inactive")
  }
  if(!versions.classList.contains("inactive")){
    versions.classList.add("inactive")
  }
}

showLinks.addEventListener("click", showDetailLinks)
function showDetailLinks(){
  links.classList.remove("inactive");
  showLinks.classList.add("item-focus");
  if(showActivity.classList.contains("item-focus") || showVersions.classList.contains("item-focus")){
    showActivity.classList.remove("item-focus");
    showVersions.classList.remove("item-focus");
  }
  
  if(!activity.classList.contains("inactive")){
    activity.classList.add("inactive")
  }
  if(!versions.classList.contains("inactive")){
    versions.classList.add("inactive")
  }
}

showVersions.addEventListener("click", showDetailversions)
function showDetailversions(){
  versions.classList.remove("inactive");

  showVersions.classList.add("item-focus");
  if(showLinks.classList.contains("item-focus") || showActivity.classList.contains("item-focus")){
    showLinks.classList.remove("item-focus");
    showActivity.classList.remove("item-focus");
  }
  
  if(!activity.classList.contains("inactive")){
    activity.classList.add("inactive")
  }
  if(!links.classList.contains("inactive")){
    links.classList.add("inactive")
  }
}


//const generateLink = document.querySelector(".generate-link");
generateLink.addEventListener("click", genLink);

function genLink (){
  thanksGenerateLink.classList.toggle("inactive");
  generateLink.classList.toggle("rotate");
  generateLink.classList.toggle("rotate-reset");
}


//const sharePeople = document.querySelector(".share-people");
//const findPeople = document.querySelector(".find-people");
//const namesharePeople = document.querySelector(".nameToFind");
//const errorFindPeople = document.querySelector(".error-find-people");

sharePeople.addEventListener("submit", showLinksPeople)

function showLinksPeople(event){
  event.preventDefault();
  const reGexFindPeople = /^@([a-zA-Z0-9]){1,20}$/;
  if (reGexFindPeople.test(nameSharePeople.value)){
    //console.log("Hola")
    findPeople.classList.remove("inactive");
    if(!errorFindPeople.classList.contains("inactive")){
      errorFindPeople.classList.add("inactive")
    }
  } else {
    if(!findPeople.classList.contains("inactive")){
      findPeople.classList.add("inactive")
    }
    errorFindPeople.classList.remove("inactive");
  }
}

//const closeTextFindPeople = document.querySelector(".close-find-people");
closeTextFindPeople.addEventListener("click", closeMesFindPeople);

function closeMesFindPeople () {
  findPeople.classList.add("inactive")
}

/** Agregar fondo azul claro para elementos seleccionados */

tableBody.addEventListener("change", selectItem)

function selectItem (event) {
  let checkboxSelect = event.target.classList.contains("check-select");
  let trContent = event.target.parentElement.parentElement;
  
  if (checkboxSelect){
    trContent.classList.toggle("docs-body-tr");
    trContent.classList.toggle("selected");
  }
}


/** Contador y opcion grupal para eliminar */
//const accionsGroup = document.querySelector(".accions-group");

tableBody.addEventListener("change", countAndDelete)

function countAndDelete(){
  let groupCheckboxSelect = document.querySelectorAll(".check-select:checked");
  //const groupCheckboxSelectChecked = groupCheckboxSelect.change;
  
  if (groupCheckboxSelect.length >= 1){
    accionsGroup.classList.remove("inactive");  
  } 
  if (groupCheckboxSelect.length == 0) {
    accionsGroup.classList.add("inactive");  
  }
  contador.innerText = groupCheckboxSelect.length
}

/** Funcion para marcar todos los inputs tipo checkbox */
//const inputSelectGroup = document.querySelector(".check-select-group");

inputSelectGroup.addEventListener("change", selectGroup)

function selectGroup (event){
  let groupCheckboxSelect = document.querySelectorAll(".check-select");
  
  if (inputSelectGroup.checked){
    groupCheckboxSelect.forEach((item) =>{
      item.checked = true; /** El cheked toca asignarle true para que se marquen */
      item.parentElement.parentElement.classList.add("selected")
    })
  }

  if (inputSelectGroup.checked == false){
    groupCheckboxSelect.forEach((item) => {
      item.checked = false;
      item.parentElement.parentElement.classList.remove("selected")
    })
  }

  countAndDelete();  
}


/** Eliminar seleccion */
//const deleteGroup = document.querySelector(".delete-group");
deleteGroup.addEventListener("click", deleteGroupElements);

function deleteGroupElements(){
  let groupCheckboxSelect = document.querySelectorAll(".check-select:checked");

  groupCheckboxSelect.forEach((item) => {
    tableBody.removeChild(item.parentElement.parentElement)
  })

  inputSelectGroup.checked = false;
  countAndDelete();
}
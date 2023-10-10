const inputUser = document.querySelector("#user");
const inputPssw = document.querySelector("#pssw");

const errorUser = document.querySelector(".login-form-user-error");
const errorPssw = document.querySelector(".login-form-pssw-error");

const loginForm = document.querySelector(".login-form");

function showErrorUser() {
  let userReGex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$", "i");
  let valueInputUser = inputUser.value;
  
  if (!valueInputUser) return; //para que no haga nada
  
  if (!userReGex.test(valueInputUser)) {
    return errorUser.classList.remove("inactive");
  }
}

function validCredentials(event) {
  let user = "luisc@example.com";
  let pssw = "123";
  
  event.preventDefault();
  
  let valueInputUser = inputUser.value;
  let valueInputPssw = inputPssw.value;

  valueInputUser === user && valueInputPssw === pssw
    ? (window.location.href = "interfaz.html")
    : errorPssw.classList.remove("inactive");
}

inputUser.addEventListener("blur", showErrorUser);
loginForm.addEventListener("submit", validCredentials);
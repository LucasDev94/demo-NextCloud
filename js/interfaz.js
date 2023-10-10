const optionsDetails = document.querySelectorAll(".dots-details");
const details = document.querySelector(".main-details");

optionsDetails.forEach((element) =>
  element.addEventListener("click", function saludar() {
    console.log("hola");
  })
);









// <tr>
//   <td><input type="checkbox"></td>
//   <td><span class="material-symbols-outlined folder">folder</span>Documentación tecnica</td>
//   <td><p>CJ</p></td>
//   <td><span class="material-symbols-outlined dots-details">more_horiz</span></td>
//   <td>Tamaño</td>
//   <td>Modificado</td>
// </tr>
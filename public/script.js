import { iniciarSesion } from "../controller/ControllerUsuario.js";

iniciarSesion();
let inputs = document.querySelectorAll("input");
const validarCampos = (e) => {
  switch (e.target.name) {
    case "usuario":
      console.log(e);
      break;

    default:
      break;
  }
};
inputs.forEach((input) => {
  input.addEventListener("keyup", validarCampos);
});
console.log(inputs);

/* querySelector(#id) */
/* querySelector(etiqueta) */
/* querySelector(.clase) */

/* getElementById() */
/* getElementsByTagName() */
/* getElementsByClassName() */

/* querySelectorAll() */

document
  .getElementById("boton-registro")
  .addEventListener("click", mostrarRegistro);
document.getElementById("boton-login").addEventListener("click", mostrarLogin);

function mostrarLogin() {
  console.log("Formulario Login");
  document.getElementById("form-title").textContent = "Iniciar Sesión";
  document.getElementById("register-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}
function mostrarRegistro() {
  console.log("Formulario Registro");
  document.getElementById("form-title").textContent = "Registrar Usuario";
  document.getElementById("register-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";
}

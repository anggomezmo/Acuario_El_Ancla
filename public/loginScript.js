import { validateUser } from "../controller/ControllerUsers.js";

document.querySelector('#login-button').addEventListener('click',validateUser)
document.querySelector('#accept').addEventListener('click', hideModal)

function hideModal(){
    document.querySelector('#modal').classList.add('hidden')
}
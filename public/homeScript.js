import { changeTitleUser } from "../controller/ControllerUsers.js"
import { showUsers } from "../controller/ControllerUsers.js"
// ACTUAL BUTTON PRESSED;
let buttonPressed


// add functionality to entitie buttons.
let buttons = document.querySelectorAll('.entitie')
buttons.forEach(button => {
    button.addEventListener('click', showSideBar)
})

function showSideBar() {

    document.getElementById('main-container').classList.toggle('configure-main-container')

    document.getElementById('side-bar').classList.toggle('hidden')
    let uls = document.querySelectorAll('.button-list')
    uls.forEach(ul => ul.classList.toggle('hidden'))
}

// add functionality to back-button in side-bar
function setDefaultTitle(){
    document.getElementById('logo-title').textContent='Gestor Acuario el Ancla'
}
document.getElementById('back-button').addEventListener('click',hideSideBar)
document.getElementById('back-button').addEventListener('click',setDefaultTitle)

function hideSideBar(){
    document.getElementById('main-container').classList.toggle('configure-main-container')
    document.getElementById('side-bar').classList.toggle('hidden')
    let uls = document.querySelectorAll('.button-list')
    uls.forEach(ul => ul.classList.toggle('hidden'))
}

//add functionality to cerrar sesión button

document.querySelector('#log-out-button').addEventListener('click',logOut)
function logOut(){
    window.location.href = '../index.html'
}


//Usuarios button 

let userButton = document.getElementById('users')
// add events
userButton.addEventListener('click',pressedEntitie)
userButton.addEventListener('click',changeTitleUser)

function pressedEntitie(event){
buttonPressed = event.target.id

}

//show button functionality

document.getElementById('show-button').addEventListener('click',showEntitie)

function showEntitie(){
    switch (buttonPressed) {
        case 'users':
            showUsers()
            break;
    
        default:
            break;
    }
}

//MODAL LOGIC

document.querySelector('#accept').addEventListener('click', hideModal)
function hideModal(){
    document.querySelector('#modal').classList.add('hidden')
}
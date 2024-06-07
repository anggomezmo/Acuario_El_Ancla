import { changeTitleUser } from "../controller/ControllerUsers.js"
import { changeTitleCustomer } from "../controller/ControllerCustomer.js"
import { changeTitleSales } from "../controller/ControllerSales.js"
import { changeTitleProduct } from "../controller/ControllerProduct.js"
import { changeTitlePurchase } from "../controller/ControllerPurchase.js"
import { changeTitleSupplier } from "../controller/ControllerSuppliers.js"

import { showPurchases } from "../controller/ControllerPurchase.js"
import { showProductos } from "../controller/ControllerProduct.js"
import { showSales } from "../controller/ControllerSales.js"
import { showUsers } from "../controller/ControllerUsers.js"
import { showCustomers } from "../controller/ControllerCustomer.js"
import { showSuppliers } from "../controller/ControllerSuppliers.js"

import { addUser } from "../controller/ControllerUsers.js"
import { addSupplier } from "../controller/ControllerSuppliers.js"
import { addSale } from "../controller/ControllerSales.js"
import { addPurchase } from "../controller/ControllerPurchase.js"
import { addProduct } from "../controller/ControllerProduct.js"
import { addCustomer } from "../controller/ControllerCustomer.js"



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
function setDefaultTitle() {
    document.getElementById('logo-title').textContent = 'Gestor Acuario el Ancla'
}
document.getElementById('back-button').addEventListener('click', hideSideBar)
document.getElementById('back-button').addEventListener('click', setDefaultTitle)
document.getElementById('back-button').addEventListener('click', hideMainContent)

function hideMainContent() {
    document.getElementById('show-container').classList.add('hidden')
}

function hideSideBar() {
    document.getElementById('main-container').classList.toggle('configure-main-container')
    document.getElementById('side-bar').classList.toggle('hidden')
    let uls = document.querySelectorAll('.button-list')
    uls.forEach(ul => ul.classList.toggle('hidden'))
}

//add functionality to cerrar sesión button

document.querySelector('#log-out-button').addEventListener('click', logOut)
function logOut() {
    window.location.href = '../index.html'
}








//Usuarios button 

let userButton = document.getElementById('users')
// add events
userButton.addEventListener('click', pressedEntitie)
userButton.addEventListener('click', changeTitleUser)

function pressedEntitie(event) {
    buttonPressed = event.target.id

}


//Clientes button
let customerButton = document.getElementById('customers')
customerButton.addEventListener('click', pressedEntitie)
customerButton.addEventListener('click', changeTitleCustomer)


//Ventas button
let salesButton = document.getElementById('sales')
salesButton.addEventListener('click', pressedEntitie)
salesButton.addEventListener('click', changeTitleSales)

//Productos button

let productsButton = document.getElementById('products')
productsButton.addEventListener('click', pressedEntitie)
productsButton.addEventListener('click', changeTitleProduct)


//Compras button

let purchasesButton = document.getElementById('purchases')
purchasesButton.addEventListener('click', pressedEntitie)
purchasesButton.addEventListener('click', changeTitlePurchase)

//Proveedores button
let suppliersButton = document.getElementById('suppliers')
suppliersButton.addEventListener('click', pressedEntitie)
suppliersButton.addEventListener('click', changeTitleSupplier)





//show button functionality

document.getElementById('show-button').addEventListener('click', showEntitie)

function showEntitie() {
    switch (buttonPressed) {
        case 'users':
            showUsers()
            break;
        case 'customers':
            showCustomers()
            break;
        case 'sales':
            showSales()
            break;
        case 'products':
            showProductos()
            break;
        case 'purchases':
            showPurchases()
            break;
        case 'suppliers':
            showSuppliers()
            break;

    }
}


// add button Functionality
document.getElementById('add-button').addEventListener('click', addRecord)

function addRecord() {
    switch (buttonPressed) {
        case 'users':
            addUser();
            break
        case 'suppliers':
            addSupplier();
            break
        case 'sales':
            addSale();
            break
        case 'purchases':
            addPurchase()
            break
        case 'products':
            addProduct()
            break
        case 'customers':
            addCustomer()
            break

    }
}

//MODAL LOGIC

document.querySelector('#accept').addEventListener('click', hideModal)
function hideModal() {
    document.querySelector('#modal').classList.add('hidden')
}







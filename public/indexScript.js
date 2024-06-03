let buttons = document.querySelectorAll('.entitie')
// add functionality to entitie buttons.
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

document.getElementById('back-button').addEventListener('click',hideSideBar)

function hideSideBar(){
    document.getElementById('main-container').classList.toggle('configure-main-container')
    document.getElementById('side-bar').classList.toggle('hidden')
    let uls = document.querySelectorAll('.button-list')
    uls.forEach(ul => ul.classList.toggle('hidden'))
}
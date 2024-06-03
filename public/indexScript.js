let buttons = document.querySelectorAll('.entitie')

buttons.forEach(button=>{
    button.addEventListener('click',showSideBar)
})

function showSideBar(){
    console.log('me active')
    document.getElementById('main-container').classList.toggle('configure-main-container')
   console.log( document.getElementById('main-container'))
    document.getElementById('side-bar').classList.toggle('hidden')
    let uls=document.querySelectorAll('.button-list')
    uls.forEach(ul => ul.classList.toggle('hidden'))
}
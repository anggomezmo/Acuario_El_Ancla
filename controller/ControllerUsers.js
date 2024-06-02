import users from "../model/ModelUsers.js";

function findUser(user) {
   let status = users.findIndex(element => element.user === user)
  
   return status
}

export function validateUser() {
   let user = document.querySelector('#user').value
   let password = document.querySelector('#password').value
   let status = findUser(user)
  
   if (status != -1) {//if user exists
      if (users[status].password === password) {
         window.location.href = '../index.html'
      }
      else {
         console.log('entre')
         document.querySelector('#warning').textContent = 'INICIO DE SESIÓN DENEGADO'
         document.querySelector('#message').textContent = 'El usuario o la contraseña ingresados son incorrectos, por favor, inténtelo de nuevo.'
         document.querySelector('#modal').classList.remove('hidden');

      }
   }
   else {

      document.querySelector('#warning').textContent = 'INICIO DE SESIÓN DENEGADO'
      document.querySelector('#message').textContent= 'El usuario que ha ingresado no existe, pongase en contacto con el administrador.'
      
      document.querySelector('#modal').classList.remove('hidden');
   }
}
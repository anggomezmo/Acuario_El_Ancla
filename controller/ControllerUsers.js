import users from "../model/ModelUsers.js";
//LOGIN LOGIC
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
         window.location.href = '/view/home.html'
      }
      else {
         
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

// HOME LOGIC
export function changeTitleUser(){

   document.getElementById('logo-title').textContent='Gestionar Usuarios'
}

export function showUsers(){
      // users length comprobation
   if(users.length==0){
      document.querySelector('#warning').textContent = 'ENTIDAD VACIA'
      document.querySelector('#message').textContent = 'La operación no se puede realizar. Agregue un registro primero.'
      document.querySelector('#modal').classList.remove('hidden');
   }
   else{

      let container = document.querySelector('.show-container')
      document.getElementById('entitie-title').textContent= 'USUARIOS'
      users.forEach(user =>{
         let tarjeta = document.createElement('div')
         let userNameCard  = document.createElement('p')
         let userDocument = document.createElement('p')
         let userEmail = document.createElement('p')
         let userRole = document.createElement('p')
         tarjeta.classList.add('card')
         userNameCard.textContent = `Nombre: ${user.userName} ${user.userLastName}`
         userDocument.textContent = `Documento: ${user.documentNumber}`
         userEmail.textContent = `Email: ${user.userEmail}`
         userRole.textContent = `Rol: ${user.userRole}`

         tarjeta.append(userNameCard,userDocument,userEmail,userRole)
         container.append(tarjeta)

         document.querySelector('#show-container').classList.remove('hidden')
      })
   }


}

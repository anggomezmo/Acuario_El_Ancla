import users from "../model/ModelUsers.js";

//LOGIN LOGIC
function findUser(user) {
   let status = users.findIndex(element => element.user === user)

   return status
}
function findUserRegisterForm(inputUser) {
   let status = users.some(user => user.user == inputUser)
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
      document.querySelector('#message').textContent = 'El usuario que ha ingresado no existe, pongase en contacto con el administrador.'

      document.querySelector('#modal').classList.remove('hidden');
   }
}

// HOME LOGIC
export function changeTitleUser() {

   document.getElementById('logo-title').textContent = 'Gestionar Usuarios'
}



//SHOW BUTTON

export function showUsers() {
   // users length comprobation
   if (users.length == 0) {
      document.querySelector('#warning').textContent = 'ENTIDAD VACIA'
      document.querySelector('#message').textContent = 'La operación no se puede realizar. Agregue un registro primero.'
      document.querySelector('#modal').classList.remove('hidden');
   }
   else {

      let container = document.querySelector('.show-container')

      clearContainer()

      document.getElementById('entitie-title').textContent = 'USUARIOS'
      users.forEach(user => {
         let tarjeta = document.createElement('div')
         let userNameCard = document.createElement('p')
         let userDocument = document.createElement('p')
         let userEmail = document.createElement('p')
         let userRole = document.createElement('p')
         tarjeta.classList.add('card')
         userNameCard.textContent = `Nombre: ${user.userName} ${user.userLastName}`
         userDocument.textContent = `Documento: ${user.documentNumber}`
         userEmail.textContent = `Email: ${user.userEmail}`
         userRole.textContent = `Rol: ${user.userRole}`

         tarjeta.append(userNameCard, userDocument, userEmail, userRole)
         container.append(tarjeta)

         document.querySelector('#show-container').classList.remove('hidden')
      })
   }


}

// ADDUSER
export function addUser() {
   clearContainer();
   document.getElementById('entitie-title').textContent = 'Registrar usuario'
   let container = document.querySelector('.show-container')
   let form = document.createElement('div')
   let title = document.createElement('h1')
   form.classList.add('addForm')
   title.textContent = 'Añadir registro'
   let button = document.createElement('button')
   button.innerText = 'Añadir Usuario'
   buttonAddRecordConfiguration(button) //addEventListener to the button
   container.append(form)
   form.append(title)
   let placeholders = [
      'Usuario de aplicativo',
      'Contraseña de aplicativo',
      'Tipo de documento',
      'Número de documento',
      'Nombre',
      'Apellido',
      'Email',
      'Rol'
   ];
   let inputIds = [
      'user',
      'password',
      'documentType',
      'documentNumber',
      'userName',
      'userLastName',
      'userEmail',
      'userRole'
   ];
   for (let i = 0; i < 8; i++) {
      let input = document.createElement('input');
      input.id = inputIds[i]
      input.placeholder = placeholders[i]
      input.autocomplete = 'off'
      form.appendChild(input);
   }
   document.getElementById('password').type = 'password'
   form.appendChild(button)

   document.querySelector('#show-container').classList.remove('hidden')

}

function buttonAddRecordConfiguration(button) {
   button.addEventListener('click', verifyForm)
}
function verifyForm() {
   // guardar inputs en un array, para recorrerlo, y verificar que no esten vacios, 
   // todos los campos deben tener su expresión regular

   let allInputsCorrect
   let inputs = {

      user: document.getElementById('user').value,
      password: document.getElementById('password').value,
      documentType: document.getElementById('documentType').value,
      documentNumber: document.getElementById('documentNumber').value,
      userName: document.getElementById('userName').value,
      userLastName: document.getElementById('userLastName').value,
      userEmail: document.getElementById('userEmail').value,
      userRole: document.getElementById('userRole').value
   }
   //iterate inputs, inside it, validate inputs
   allInputsCorrect = areAllFieldsValid(inputs)

   if (allInputsCorrect) {

      users.push(inputs)

      document.querySelector('#warning').textContent = 'USUARIO REGISTRADO!'
      document.querySelector('#message').textContent = 'El usuario ha sido registrado con éxito.'
      document.querySelector('#modal').classList.remove('hidden');
      document.getElementById('user').value = ''
      document.getElementById('password').value = ''
      document.getElementById('documentType').value = ''
      document.getElementById('documentNumber').value = ''
      document.getElementById('userName').value = ''
      document.getElementById('userLastName').value = ''
      document.getElementById('userEmail').value = ''
      document.getElementById('userRole').value = ''

   }
   //Verify valid inputs


}

function areAllFieldsValid(inputs) {
   for (const input in inputs) {
      if (!validateInput(input, inputs[input])) { //if test fail ,show modal and return false

         document.querySelector('#warning').textContent = 'FORMATO INVALIDO'
         document.querySelector('#message').textContent = 'Asegurese de que los campos esten en un formato valido para poder ingresar el registro.'
         document.querySelector('#modal').classList.remove('hidden');
         return false;
      }
   }
   
   if (findUserRegisterForm(inputs['user'])) {
      document.querySelector('#warning').textContent = 'REGISTRO YA EXISTENTE'
      document.querySelector('#message').textContent = 'Este registro ya existe en la base de datos.'
      document.querySelector('#modal').classList.remove('hidden');
      return false;
   }
   return true;
}

function validateInput(input, value) {
   if (!value.trim()) { //validate if input is empty
      return false;
   }

   switch (input) {
      case 'user':

         return /^[a-zA-Z0-9]{4,15}$/.test(value);
      case 'password':

         return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
      case 'documentType':

         return /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(value);
      case 'documentNumber':

         return /^[A-Za-z0-9-]+$/.test(value);
      case 'userName':

         return /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(value);
      case 'userLastName':

         return /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(value);

      case 'userEmail':
         console.log('p71')
         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case 'userRole':
         console.log('p81')
         return /^[A-Za-z]+$/.test(value);

   }
}


// DELETE BUTTON

export function deleteUser() {
   if (users.length == 0) {
      document.querySelector('#warning').textContent = 'ENTIDAD VACIA'
      document.querySelector('#message').textContent = 'La operación no se puede realizar. Agregue un registro primero.'
      document.querySelector('#modal').classList.remove('hidden');
   }
   else {

      let container = document.querySelector('.show-container')

      clearContainer()

      document.getElementById('entitie-title').textContent = 'USUARIOS'
      users.forEach((user, index) => { // second parameter refers to the index of the actual element
         let tarjeta = document.createElement('div')
         let userNameCard = document.createElement('p')
         let userDocument = document.createElement('p')
         let userEmail = document.createElement('p')
         let userRole = document.createElement('p')
         let deleteButton = document.createElement('button')
         tarjeta.classList.add('card');
         userNameCard.textContent = `Nombre: ${user.userName} ${user.userLastName}`;
         userDocument.textContent = `Documento: ${user.documentNumber}`;
         userEmail.textContent = `Email: ${user.userEmail}`;
         userRole.textContent = `Rol: ${user.userRole}`;
         deleteButton.textContent = 'Eliminar';
         deleteButton.dataset.documentNumber = user.documentNumber;
         deleteButton.addEventListener('click', detectCardUser);

         tarjeta.append(userNameCard, userDocument, userEmail, userRole, deleteButton);
         container.append(tarjeta);

         document.querySelector('#show-container').classList.remove('hidden');
      });
   }
}


export function editUser() {
   if (users.length == 0) {
      document.querySelector('#warning').textContent = 'ENTIDAD VACIA'
      document.querySelector('#message').textContent = 'La operación no se puede realizar. Agregue un registro primero.'
      document.querySelector('#modal').classList.remove('hidden');
   }
   else {
      let container = document.querySelector('.show-container')

      clearContainer()

      document.getElementById('entitie-title').textContent = 'USUARIOS'
      users.forEach((user, index) => { // second parameter refers to the index of the actual element


         let tarjeta = document.createElement('div')
         let userNameCard = document.createElement('p')
         let userDocument = document.createElement('p')
         let userEmail = document.createElement('p')
         let userRole = document.createElement('p')
         let editButton = document.createElement('button')

         tarjeta.dataset.index = index;

         tarjeta.dataset.userName = user.userName;
         tarjeta.dataset.userLastName = user.userLastName;
         tarjeta.dataset.documentNumber = user.documentNumber;
         tarjeta.dataset.userEmail = user.userEmail;
         tarjeta.dataset.userRole = user.userRole;





         tarjeta.classList.add('card');
         userNameCard.textContent = `Nombre: ${user.userName} ${user.userLastName}`;
         userDocument.textContent = `Documento: ${user.documentNumber}`;
         userEmail.textContent = `Email: ${user.userEmail}`;
         userRole.textContent = `Rol: ${user.userRole}`;
         editButton.textContent = 'Editar';
         editButton.dataset.documentNumber = user.documentNumber;


         editButton.addEventListener('click', () => {
            becomeInputs(tarjeta)
         });

         tarjeta.append(userNameCard, userDocument, userEmail, userRole, editButton);
         container.append(tarjeta);

         document.querySelector('#show-container').classList.remove('hidden');
      })

   }
}





function becomeInputs(card) {

   let index = card.dataset.index;
   let user = users[index];

   let userNameInput = document.createElement('input');
   let userDocumentInput = document.createElement('input');
   let userEmailInput = document.createElement('input');
   let userRoleInput = document.createElement('input');


   userNameInput.value = `${card.dataset.userName} ${card.dataset.userLastName}`;
   userDocumentInput.value = card.dataset.documentNumber;
   userEmailInput.value = card.dataset.userEmail;
   userRoleInput.value = card.dataset.userRole;

   userNameInput.placeholder = 'Nombre'
   userDocumentInput.placeholder = 'Numero documento'
   userEmailInput.placeholder = 'Correo Electronico'
   userRoleInput.placeholder = 'Rol'

   card.innerHTML = '';

   card.append(userNameInput, userDocumentInput, userEmailInput, userRoleInput);

   let saveButton = document.createElement('button');
   saveButton.textContent = 'Guardar';
   card.append(saveButton);

   saveButton.addEventListener('click', () => {

      let inputs = {
         user: userNameInput.value.split(' ')[0],
         userLastName: userNameInput.value.split(' ').slice(1).join(' '),
         documentNumber: userDocumentInput.value,
         userEmail: userEmailInput.value,
         userRole: userRoleInput.value
      };
      if (areAllFieldsValid(inputs)) {



         let nameParts = userNameInput.value.split(' ');
         user.userName = nameParts.slice(0, -1).join(' ');  //user can type name and lastName
         user.userLastName = nameParts.slice(-1).join(' ');

         user.documentNumber = userDocumentInput.value;
         user.userEmail = userEmailInput.value;
         user.userRole = userRoleInput.value;

         card.innerHTML = '';
         let userNameCard = document.createElement('p');
         let userDocument = document.createElement('p');
         let userEmail = document.createElement('p');
         let userRole = document.createElement('p');
         let editButton = document.createElement('button');

         userNameCard.textContent = `Nombre: ${user.userName} ${user.userLastName}`;
         userDocument.textContent = `Documento: ${user.documentNumber}`;
         userEmail.textContent = `Email: ${user.userEmail}`;
         userRole.textContent = `Rol: ${user.userRole}`;
         editButton.textContent = 'Editar';
         editButton.dataset.index = index;

         editButton.addEventListener('click', () => { // restart loop of events
            becomeInputs(card);
         });
         card.append(userNameCard, userDocument, userEmail, userRole, editButton);
      }
   });

}


function detectCardUser(event) {
   console.log(event)
   let parent = event.target.parentElement;
   let documentNumber = event.target.dataset.documentNumber;

   let userIndex = users.findIndex(user => user.documentNumber === documentNumber);
   if (userIndex !== -1) {
      users.splice(userIndex, 1);
   }
   parent.remove();
}











function clearContainer() {
   let container = document.getElementById('show-container')
   while (container.children.length > 1) {
      container.removeChild(container.lastChild);
   }
}
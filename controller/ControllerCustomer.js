import customers from "../model/ModelCustomers.js";

export function changeTitleCustomer(){

    document.getElementById('logo-title').textContent='Gestionar Clientes'
 }
 
 export function showCustomers(){
       // users length comprobation
    if(customers.length==0){
       document.querySelector('#warning').textContent = 'ENTIDAD VACIA'
       document.querySelector('#message').textContent = 'La operación no se puede realizar. Agregue un registro primero.'
       document.querySelector('#modal').classList.remove('hidden');
    }
    else{
      
       let container = document.querySelector('.show-container')
       //deleting previous content
       clearContainer()



       document.getElementById('entitie-title').textContent= 'CLIENTES'
       customers.forEach(customer =>{
          let tarjeta = document.createElement('div')
          let customerNameCard  = document.createElement('p')
          let customerDocument = document.createElement('p')
          let customerEmail = document.createElement('p')
          tarjeta.classList.add('card')
          customerNameCard.textContent = `Nombre: ${customer.customerName} ${customer.customerLastName}`
          customerDocument.textContent = `Documento: ${customer.documentNumber}`
          customerEmail.textContent = `Email: ${customer.customerEmail}`
        
 
          tarjeta.append(customerNameCard,customerDocument,customerEmail)
          container.append(tarjeta)
 
          document.querySelector('#show-container').classList.remove('hidden')
       })
    }
 
 
 }
 //add button
 export function addCustomer() {
   clearContainer();
   document.getElementById('entitie-title').textContent = 'Registrar cliente';
   let container = document.querySelector('.show-container');
   let form = document.createElement('div');
   let title = document.createElement('h1');
   form.classList.add('addForm');
   title.textContent = 'Añadir registro';
   let button = document.createElement('button');
   button.innerText = 'Añadir Cliente';
   buttonAddRecordConfiguration(button); // addEventListener to the button
   container.append(form);
   form.append(title);

   let placeholders = [
       'Tipo de Documento',
       'Número de Documento',
       'Nombre',
       'Apellido',
       'Email'
   ];
   let inputIds = [
       'documentType',
       'documentNumber',
       'customerName',
       'customerLastName',
       'customerEmail'
   ];

   for (let i = 0; i < placeholders.length; i++) {
       let input = document.createElement('input');
       input.id = inputIds[i];
       input.placeholder = placeholders[i];
       input.autocomplete = 'off';
       form.appendChild(input);
   }

   form.appendChild(button);
   document.querySelector('#show-container').classList.remove('hidden');
}

function buttonAddRecordConfiguration(button) {
   button.addEventListener('click', verifyCustomerForm);
}

function verifyCustomerForm() {
   let allInputsCorrect;
   let inputs = {
       documentType: document.getElementById('documentType').value,
       documentNumber: document.getElementById('documentNumber').value,
       customerName: document.getElementById('customerName').value,
       customerLastName: document.getElementById('customerLastName').value,
       customerEmail: document.getElementById('customerEmail').value
   };

   allInputsCorrect = areAllFieldsValid(inputs, 'customer');

   if (allInputsCorrect) {
       customers.push(inputs);

       document.querySelector('#warning').textContent = 'CLIENTE REGISTRADO!';
       document.querySelector('#message').textContent = 'El cliente ha sido registrado con éxito.';
       document.querySelector('#modal').classList.remove('hidden');

       document.getElementById('documentType').value = '';
       document.getElementById('documentNumber').value = '';
       document.getElementById('customerName').value = '';
       document.getElementById('customerLastName').value = '';
       document.getElementById('customerEmail').value = '';
   }
}

function areAllFieldsValid(inputs, type) {
   for (const input in inputs) {
       if (!validateInput(input, inputs[input], type)) {
           document.querySelector('#warning').textContent = 'FORMATO INVALIDO';
           document.querySelector('#message').textContent = 'Asegúrese de que los campos estén en un formato válido para poder ingresar el registro.';
           document.querySelector('#modal').classList.remove('hidden');
           return false;
       }
   }

   if (type === 'customer' && findCustomerByDocument(inputs['documentType'], inputs['documentNumber'])) {
       document.querySelector('#warning').textContent = 'REGISTRO YA EXISTENTE';
       document.querySelector('#message').textContent = 'Este registro ya existe en la base de datos.';
       document.querySelector('#modal').classList.remove('hidden');
       return false;
   }

   return true;
}

function validateInput(input, value, type) {
   if (!value.trim()) {
       return false;
   }

   switch (input) {
       case 'documentType':
           return /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(value);
       case 'documentNumber':
           return /^[A-Za-z0-9-]+$/.test(value);
       case 'customerName':
           return /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(value);
       case 'customerLastName':
           return /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(value);
       case 'customerEmail':
           return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
   }
}

function findCustomerByDocument(documentType, documentNumber) {
   return customers.some(customer => customer.documentType === documentType && customer.documentNumber === documentNumber);
}

function clearContainer() {
   let container = document.getElementById('show-container');
   while (container.children.length > 1) {
       container.removeChild(container.lastChild);
   }
}

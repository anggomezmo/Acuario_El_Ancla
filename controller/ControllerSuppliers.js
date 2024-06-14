import { suppliers } from "../model/ModelSuppliers.js";

export function changeTitleSupplier(){

    document.getElementById('logo-title').textContent='Gestionar Proveedores'
 }
 //show suppliers
 export function showSuppliers(){
       // users length comprobation
    if(suppliers.length==0){
       document.querySelector('#warning').textContent = 'ENTIDAD VACIA'
       document.querySelector('#message').textContent = 'La operación no se puede realizar. Agregue un registro primero.'
       document.querySelector('#modal').classList.remove('hidden');
    }
    else{
 
       let container = document.querySelector('.show-container')
       
       clearContainer();
 
       document.getElementById('entitie-title').textContent= 'PROVEEDORES'
       suppliers.forEach(supplier =>{
          let tarjeta = document.createElement('div')
          let supplierId  = document.createElement('p')
          let supplierName = document.createElement('p')
          let supplierAdress = document.createElement('p')
          let supplierPhone = document.createElement('p')
          let supplierEmail = document.createElement('p')
          let supplierCategory = document.createElement('p')
          tarjeta.classList.add('card')
          supplierId.textContent = `ID del proveedor: ${supplier.supplierId}`
          supplierName.textContent = `Nombre del proveedor: ${supplier.supplierName}`
          supplierAdress.textContent = `Dirección del proveedor: ${supplier.supplierAdress}`
          supplierPhone.textContent = `Télefono del proveedor: ${supplier.supplierPhone}`
          supplierEmail.textContent = `Email del proveedor: ${supplier.supplierEmail}`
          supplierCategory.textContent = `Categoria del proveedor: ${supplier.supplierCategory}`
 
          tarjeta.append(supplierName,supplierId,supplierAdress,supplierAdress,supplierPhone,supplierEmail,supplierCategory)
          container.append(tarjeta)
 
          document.querySelector('#show-container').classList.remove('hidden')
       })
    }
 
 
 }
  // ADD Suppliers
  export function addSupplier() {
   clearContainer();
   document.getElementById('entitie-title').textContent = 'Registrar proveedor';
   let container = document.querySelector('.show-container');
   let form = document.createElement('div');
   let title = document.createElement('h1');
   form.classList.add('addForm');
   title.textContent = 'Añadir registro';
   let button = document.createElement('button');
   button.innerText = 'Añadir Proveedor';
   buttonAddRecordConfiguration(button); // addEventListener to the button
   container.append(form);
   form.append(title);

   let placeholders = [
       'ID del Proveedor',
       'Nombre del Proveedor',
       'Dirección del Proveedor',
       'Teléfono del Proveedor',
       'Email del Proveedor',
       'Categoría del Proveedor'
   ];
   let inputIds = [
       'supplierId',
       'supplierName',
       'supplierAdress',
       'supplierPhone',
       'supplierEmail',
       'supplierCategory'
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
   button.addEventListener('click', verifySupplierForm);
}

function verifySupplierForm() {
   let allInputsCorrect;
   let inputs = {
       supplierId: document.getElementById('supplierId').value,
       supplierName: document.getElementById('supplierName').value,
       supplierAdress: document.getElementById('supplierAdress').value,
       supplierPhone: document.getElementById('supplierPhone').value,
       supplierEmail: document.getElementById('supplierEmail').value,
       supplierCategory: document.getElementById('supplierCategory').value
   };

   allInputsCorrect = areAllFieldsValid(inputs, 'supplier');

   if (allInputsCorrect) {
       suppliers.push(inputs);

       document.querySelector('#warning').textContent = 'PROVEEDOR REGISTRADO!';
       document.querySelector('#message').textContent = 'El proveedor ha sido registrado con éxito.';
       document.querySelector('#modal').classList.remove('hidden');

       document.getElementById('supplierId').value = '';
       document.getElementById('supplierName').value = '';
       document.getElementById('supplierAdress').value = '';
       document.getElementById('supplierPhone').value = '';
       document.getElementById('supplierEmail').value = '';
       document.getElementById('supplierCategory').value = '';
   }
}

function areAllFieldsValid(inputs) {
   for (const input in inputs) {
       if (!validateInput(input, inputs[input])) {
           document.querySelector('#warning').textContent = 'FORMATO INVALIDO';
           document.querySelector('#message').textContent = 'Asegúrese de que los campos estén en un formato válido para poder ingresar el registro.';
           document.querySelector('#modal').classList.remove('hidden');
           return false;
       }
   }

   if (findSupplierById(inputs['supplierId'])) {
       document.querySelector('#warning').textContent = 'REGISTRO YA EXISTENTE';
       document.querySelector('#message').textContent = 'Este registro ya existe en la base de datos.';
       document.querySelector('#modal').classList.remove('hidden');
       return false;
   }

   return true;
}

function validateInput(input, value) {
   if (!value.trim()) {
       return false;
   }

   switch (input) {
       case 'supplierId':
           return /^[A-Za-z0-9-]+$/.test(value);
       case 'supplierName':
       case 'supplierCategory':
           return /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(value);
       case 'supplierAdress':
           return value.length > 0; // Aceptar cualquier dirección no vacía
       case 'supplierPhone':
           return /^[0-9]+$/.test(value);
       case 'supplierEmail':
           return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
   }
}

function findSupplierById(supplierId) {
   return suppliers.some(supplier => supplier.supplierId === supplierId);
}



// DELETE SUPPLIER

export function deleteSuppliers(){
    // users length comprobation
 if(suppliers.length==0){
    document.querySelector('#warning').textContent = 'ENTIDAD VACIA'
    document.querySelector('#message').textContent = 'La operación no se puede realizar. Agregue un registro primero.'
    document.querySelector('#modal').classList.remove('hidden');
 }
 else{

    let container = document.querySelector('.show-container')
    
    clearContainer();

    document.getElementById('entitie-title').textContent= 'PROVEEDORES'
    suppliers.forEach(supplier =>{
       let tarjeta = document.createElement('div')
       let supplierId  = document.createElement('p')
       let supplierName = document.createElement('p')
       let supplierAdress = document.createElement('p')
       let supplierPhone = document.createElement('p')
       let supplierEmail = document.createElement('p')
       let supplierCategory = document.createElement('p')
       let deleteButton = document.createElement('button');

       tarjeta.classList.add('card');
       supplierId.textContent = `ID del proveedor: ${supplier.supplierId}`;
       supplierName.textContent = `Nombre del proveedor: ${supplier.supplierName}`;
       supplierAdress.textContent = `Dirección del proveedor: ${supplier.supplierAdress}`;
       supplierPhone.textContent = `Télefono del proveedor: ${supplier.supplierPhone}`;
       supplierEmail.textContent = `Email del proveedor: ${supplier.supplierEmail}`;
       supplierCategory.textContent = `Categoria del proveedor: ${supplier.supplierCategory}`;
       deleteButton.textContent = 'Eliminar';
       deleteButton.dataset.id = supplier.supplierId; // Guardar el ID del proveedor en el botón
       deleteButton.addEventListener('click', detectCardSupplier); // Añadir el evento de clic

       tarjeta.append(supplierName, supplierId, supplierAdress, supplierPhone, supplierEmail, supplierCategory, deleteButton);
       container.append(tarjeta);

       document.querySelector('#show-container').classList.remove('hidden');
   });
}
}

//edit supplier 

export function editSuppliers() {
    if (suppliers.length == 0) {
        document.querySelector('#warning').textContent = 'ENTIDAD VACIA';
        document.querySelector('#message').textContent = 'La operación no se puede realizar. Agregue un registro primero.';
        document.querySelector('#modal').classList.remove('hidden');
    } else {
        let container = document.querySelector('.show-container');
        clearContainer();

        document.getElementById('entitie-title').textContent = 'PROVEEDORES';
        suppliers.forEach((supplier, index) => {
            let tarjeta = document.createElement('div');
            let supplierId = document.createElement('p');
            let supplierName = document.createElement('p');
            let supplierAdress = document.createElement('p');
            let supplierPhone = document.createElement('p');
            let supplierEmail = document.createElement('p');
            let supplierCategory = document.createElement('p');
            let editButton = document.createElement('button');

            tarjeta.classList.add('card');
            supplierId.textContent = `ID del proveedor: ${supplier.supplierId}`;
            supplierName.textContent = `Nombre del proveedor: ${supplier.supplierName}`;
            supplierAdress.textContent = `Dirección del proveedor: ${supplier.supplierAdress}`;
            supplierPhone.textContent = `Télefono del proveedor: ${supplier.supplierPhone}`;
            supplierEmail.textContent = `Email del proveedor: ${supplier.supplierEmail}`;
            supplierCategory.textContent = `Categoria del proveedor: ${supplier.supplierCategory}`;
            editButton.textContent = 'Editar';
            editButton.dataset.index = index;
            tarjeta.dataset.index=index;

            editButton.addEventListener('click', () => {
                becomeInputs(tarjeta);
            });

            tarjeta.append(supplierId, supplierName, supplierAdress, supplierPhone, supplierEmail, supplierCategory, editButton);
            container.append(tarjeta);

            document.querySelector('#show-container').classList.remove('hidden');
        });
    }
}

function becomeInputs(card) {
    let index = card.dataset.index;
    console.log(index)
    let supplier = suppliers[index];

    let supplierNameInput = document.createElement('input');
    let supplierAdressInput = document.createElement('input');
    let supplierPhoneInput = document.createElement('input');
    let supplierEmailInput = document.createElement('input');
    let supplierCategoryInput = document.createElement('input');

    supplierNameInput.placeholder = "Nombre del proveedor";
    supplierAdressInput.placeholder = "Dirección del proveedor";
    supplierPhoneInput.placeholder = "Télefono del proveedor";
    supplierEmailInput.placeholder = "Email del proveedor";
    supplierCategoryInput.placeholder = "Categoria del proveedor";
                                        
    supplierNameInput.value = supplier.supplierName;
    supplierAdressInput.value = supplier.supplierAdress;
    supplierPhoneInput.value = supplier.supplierPhone;
    supplierEmailInput.value = supplier.supplierEmail;
    supplierCategoryInput.value = supplier.supplierCategory;

    card.innerHTML = ''; 

    card.append(supplierNameInput, supplierAdressInput, supplierPhoneInput, supplierEmailInput, supplierCategoryInput);

    let saveButton = document.createElement('button');
    saveButton.textContent = 'Guardar';
    card.append(saveButton);

    saveButton.addEventListener('click', () => {
       
        let inputs = {
            supplierName: supplierNameInput.value,
            supplierAdress: supplierAdressInput.value,
            supplierPhone: supplierPhoneInput.value,
            supplierEmail: supplierEmailInput.value,
            supplierCategory: supplierCategoryInput.value
        };

        if (areAllFieldsValid(inputs)) {

            supplier.supplierName = inputs.supplierName;
            supplier.supplierAdress = inputs.supplierAdress;
            supplier.supplierPhone = inputs.supplierPhone;
            supplier.supplierEmail = inputs.supplierEmail;
            supplier.supplierCategory = inputs.supplierCategory;


            card.innerHTML = '';
            let supplierId = document.createElement('p');
            let supplierName = document.createElement('p');
            let supplierAdress = document.createElement('p');
            let supplierPhone = document.createElement('p');
            let supplierEmail = document.createElement('p');
            let supplierCategory = document.createElement('p');
            let editButton = document.createElement('button');

            supplierId.textContent = `ID del proveedor: ${supplier.supplierId}`;
            supplierName.textContent = `Nombre del proveedor: ${supplier.supplierName}`;
            supplierAdress.textContent = `Dirección del proveedor: ${supplier.supplierAdress}`;
            supplierPhone.textContent = `Télefono del proveedor: ${supplier.supplierPhone}`;
            supplierEmail.textContent = `Email del proveedor: ${supplier.supplierEmail}`;
            supplierCategory.textContent = `Categoria del proveedor: ${supplier.supplierCategory}`;
            editButton.textContent = 'Editar';
            editButton.dataset.index = index;

            editButton.addEventListener('click', () => {
                becomeInputs(card);
            });

            card.append(supplierId, supplierName, supplierAdress, supplierPhone, supplierEmail, supplierCategory, editButton);
        }
    });
}




function detectCardSupplier(event) {
   let parent = event.target.parentElement;
   let supplierId = event.target.dataset.id; 

   let supplierIndex = suppliers.findIndex(supplier => supplier.supplierId === supplierId); 
   if (supplierIndex !== -1) {
       suppliers.splice(supplierIndex, 1);
   parent.remove(); 
   }
   
}





function clearContainer() {
   let container = document.getElementById('show-container');
   while (container.children.length > 1) {
       container.removeChild(container.lastChild);
   }
}

import sales from "../model/ModelSales.js";

export function changeTitleSales(){

    document.getElementById('logo-title').textContent='Gestionar Ventas'
 }
 
 export function showSales(){
       // users length comprobation
    if(sales.length==0){
       document.querySelector('#warning').textContent = 'ENTIDAD VACIA'
       document.querySelector('#message').textContent = 'La operación no se puede realizar. Agregue un registro primero.'
       document.querySelector('#modal').classList.remove('hidden');
    }
    else{
      
       let container = document.querySelector('.show-container')
       //deleting previous content
       clearContainer()



       document.getElementById('entitie-title').textContent= 'VENTAS'
       sales.forEach(sale =>{
          let tarjeta = document.createElement('div')
          let saleId  = document.createElement('p')
          let saleDate = document.createElement('p')
          let saleTotal = document.createElement('p')
          let salePayMethod = document.createElement('p')
          let saleIdUser= document.createElement('p')
          let saleIdCustomer= document.createElement('p')
          tarjeta.classList.add('card')
          saleId.textContent = `ID de venta: ${sale.saleId}`
          saleDate.textContent = `Fecha de la venta: ${sale.saleDate}`
          saleTotal.textContent = `Total de la venta: $${sale.saleTotal}`
          salePayMethod.textContent = `Método de pago: ${sale.salePayMethod}`
          saleIdUser.textContent = ` ID Usuario que realizó la venta: ${sale.saleIdUser}`
          saleIdCustomer.textContent = `ID cliente: ${sale.saleIdCustomer}`
 
          tarjeta.append(saleId,saleDate,saleTotal,salePayMethod,saleIdUser,saleIdCustomer)
          container.append(tarjeta)
 
          document.querySelector('#show-container').classList.remove('hidden')
       })
    }
 
 
 }

 // ADD BUTTON 
 export function addSale() {
   clearContainer();
   document.getElementById('entitie-title').textContent = 'Registrar venta';
   let container = document.querySelector('.show-container');
   let form = document.createElement('div');
   let title = document.createElement('h1');
   form.classList.add('addForm');
   title.textContent = 'Añadir registro';
   let button = document.createElement('button');
   button.innerText = 'Añadir Venta';
   buttonAddRecordConfiguration(button); // addEventListener to the button
   container.append(form);
   form.append(title);

   let placeholders = [
       'ID de la Venta',
       'Fecha de la Venta',
       'Total de la Venta',
       'Método de Pago',
       'ID del Usuario',
       'ID del Cliente'
   ];
   let inputIds = [
       'saleId',
       'saleDate',
       'saleTotal',
       'salePayMethod',
       'saleIdUser',
       'saleIdCustomer'
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
   button.addEventListener('click', verifySaleForm);
}

function verifySaleForm() {
   let allInputsCorrect;
   let inputs = {
       saleId: document.getElementById('saleId').value,
       saleDate: document.getElementById('saleDate').value,
       saleTotal: document.getElementById('saleTotal').value,
       salePayMethod: document.getElementById('salePayMethod').value,
       saleIdUser: document.getElementById('saleIdUser').value,
       saleIdCustomer: document.getElementById('saleIdCustomer').value
   };

   allInputsCorrect = areAllFieldsValid(inputs, 'sale');

   if (allInputsCorrect) {
       sales.push(inputs);

       document.querySelector('#warning').textContent = 'VENTA REGISTRADA!';
       document.querySelector('#message').textContent = 'La venta ha sido registrada con éxito.';
       document.querySelector('#modal').classList.remove('hidden');

       document.getElementById('saleId').value = '';
       document.getElementById('saleDate').value = '';
       document.getElementById('saleTotal').value = '';
       document.getElementById('salePayMethod').value = '';
       document.getElementById('saleIdUser').value = '';
       document.getElementById('saleIdCustomer').value = '';
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

   if (type === 'sale' && findSaleById(inputs['saleId'])) {
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
       case 'saleId':
           return /^[A-Za-z0-9-]+$/.test(value);
       case 'saleDate':
           return /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(value);
       case 'saleTotal':
           return /^[0-9]+$/.test(value);
       case 'salePayMethod':
           return /^[A-Za-z\s]+$/.test(value);
       case 'saleIdUser':
       case 'saleIdCustomer':
           return /^[A-Za-z0-9]+$/.test(value);
   }
}

function findSaleById(saleId) {
   return sales.some(sale => sale.saleId === saleId);
}




// delete button
export function deleteSale() {
    if(sales.length==0){
        document.querySelector('#warning').textContent = 'ENTIDAD VACIA'
        document.querySelector('#message').textContent = 'La operación no se puede realizar. Agregue un registro primero.'
        document.querySelector('#modal').classList.remove('hidden');
     }
     else{
    let container = document.querySelector('.show-container');
    clearContainer();

    document.getElementById('entitie-title').textContent = 'VENTAS';
    sales.forEach(sale => {
        let tarjeta = document.createElement('div');
        let saleId = document.createElement('p');
        let saleDate = document.createElement('p');
        let saleTotal = document.createElement('p');
        let salePayMethod = document.createElement('p');
        let saleIdUser = document.createElement('p');
        let saleIdCustomer = document.createElement('p');
        let deleteButton = document.createElement('button');

        tarjeta.classList.add('card');
        saleId.textContent = `ID de venta: ${sale.saleId}`;
        saleDate.textContent = `Fecha de la venta: ${sale.saleDate}`;
        saleTotal.textContent = `Total de la venta: $${sale.saleTotal}`;
        salePayMethod.textContent = `Método de pago: ${sale.salePayMethod}`;
        saleIdUser.textContent = `ID Usuario que realizó la venta: ${sale.saleIdUser}`;
        saleIdCustomer.textContent = `ID cliente: ${sale.saleIdCustomer}`;
        deleteButton.textContent = 'Eliminar';
        deleteButton.dataset.saleId = sale.saleId;
        deleteButton.addEventListener('click', detectCardSale);

        tarjeta.append(saleId, saleDate, saleTotal, salePayMethod, saleIdUser, saleIdCustomer, deleteButton);
        container.append(tarjeta);

        document.querySelector('#show-container').classList.remove('hidden');
    });
}
}

function detectCardSale(event) {
    let parent = event.target.parentElement;
    let saleId = event.target.dataset.saleId;
    let saleIndex = sales.findIndex(sale => sale.saleId === saleId);
    if (saleIndex !== -1) {
        sales.splice(saleIndex, 1);
    }
    parent.remove();
}

function clearContainer() {
    let container = document.getElementById('show-container');
    while (container.children.length > 1) {
        container.removeChild(container.lastChild);
    }
}


 
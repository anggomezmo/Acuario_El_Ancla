import { purchases } from "../model/ModelPurchase.js";

export function changeTitlePurchase(){

    document.getElementById('logo-title').textContent='Gestionar Compras'
 }
 
 export function showPurchases(){
       // users length comprobation
    if(purchases.length==0){
       document.querySelector('#warning').textContent = 'ENTIDAD VACIA'
       document.querySelector('#message').textContent = 'La operación no se puede realizar. Agregue un registro primero.'
       document.querySelector('#modal').classList.remove('hidden');
    }
    else{
      
       let container = document.querySelector('.show-container')
       //deleting previous content
       clearContainer()



       document.getElementById('entitie-title').textContent= 'COMPRAS'
       purchases.forEach(purchase =>{
          let tarjeta = document.createElement('div')
          let purchaseId = document.createElement('p')
          let purchaseMethodPay = document.createElement('p')
          let purchaseTotal = document.createElement('p')
          let purchaseUserId = document.createElement('p')
          
          tarjeta.classList.add('card')
          purchaseId.textContent = `ID de dompra: ${purchase.purchaseId}`
          purchaseMethodPay.textContent = `Metodo de pago: ${purchase.purchaseMethodPay}`
          purchaseTotal.textContent = `Total de la compra: $${purchase.purchaseTotal}`
          purchaseUserId.textContent = `ID usuario que realizó la compra: ${purchase.purchaseUserId}`
          
          tarjeta.append(purchaseId,purchaseTotal,purchaseMethodPay,purchaseUserId)
          container.append(tarjeta)
 
          document.querySelector('#show-container').classList.remove('hidden')
       })
    }
 
 
 }

 export function addPurchase() {
   clearContainer();
   document.getElementById('entitie-title').textContent = 'Registrar compra';
   let container = document.querySelector('.show-container');
   let form = document.createElement('div');
   let title = document.createElement('h1');
   form.classList.add('addForm');
   title.textContent = 'Añadir registro';
   let button = document.createElement('button');
   button.innerText = 'Añadir Compra';
   buttonAddRecordConfiguration(button); // addEventListener to the button
   container.append(form);
   form.append(title);

   let placeholders = [
       'ID de la Compra',
       'Método de Pago',
       'Total de la Compra',
       'ID del Usuario'
   ];
   let inputIds = [
       'purchaseId',
       'purchaseMethodPay',
       'purchaseTotal',
       'purchaseUserId'
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
   button.addEventListener('click', verifyPurchaseForm);
}

function verifyPurchaseForm() {
   let allInputsCorrect;
   let inputs = {
       purchaseId: document.getElementById('purchaseId').value,
       purchaseMethodPay: document.getElementById('purchaseMethodPay').value,
       purchaseTotal: document.getElementById('purchaseTotal').value,
       purchaseUserId: document.getElementById('purchaseUserId').value
   };

   allInputsCorrect = areAllFieldsValid(inputs, 'purchase');

   if (allInputsCorrect) {
       purchases.push(inputs);

       document.querySelector('#warning').textContent = 'COMPRA REGISTRADA!';
       document.querySelector('#message').textContent = 'La compra ha sido registrada con éxito.';
       document.querySelector('#modal').classList.remove('hidden');

       document.getElementById('purchaseId').value = '';
       document.getElementById('purchaseMethodPay').value = '';
       document.getElementById('purchaseTotal').value = '';
       document.getElementById('purchaseUserId').value = '';
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

   if (  findPurchaseById(inputs['purchaseId'])) {
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
       case 'purchaseId':
           return /^[A-Za-z0-9-]+$/.test(value);
       case 'purchaseMethodPay':
           return /^[A-Za-z\s]+$/.test(value);
       case 'purchaseTotal':
           return /^[0-9]+$/.test(value);
       case 'purchaseUserId':
           return /^[A-Za-z0-9]+$/.test(value);
   }
}

function findPurchaseById(purchaseId) {
   return purchases.some(purchase => purchase.purchaseId === purchaseId);
}

//delete purchase
export function deletePurchases() {
    if (purchases.length == 0) {
        document.querySelector('#warning').textContent = 'ENTIDAD VACIA'
        document.querySelector('#message').textContent = 'La operación no se puede realizar. Agregue un registro primero.'
        document.querySelector('#modal').classList.remove('hidden');
    } else {
        let container = document.querySelector('.show-container');
        clearContainer();

        document.getElementById('entitie-title').textContent = 'COMPRAS';
        purchases.forEach(purchase => {
            let tarjeta = document.createElement('div');
            let purchaseId = document.createElement('p');
            let purchaseMethodPay = document.createElement('p');
            let purchaseTotal = document.createElement('p');
            let purchaseUserId = document.createElement('p');
            let deleteButton = document.createElement('button');

            tarjeta.classList.add('card');
            purchaseId.textContent = `ID de compra: ${purchase.purchaseId}`;
            purchaseMethodPay.textContent = `Metodo de pago: ${purchase.purchaseMethodPay}`;
            purchaseTotal.textContent = `Total de la compra: $${purchase.purchaseTotal}`;
            purchaseUserId.textContent = `ID usuario que realizó la compra: ${purchase.purchaseUserId}`;
            deleteButton.textContent = 'Eliminar';
            deleteButton.dataset.purchaseId = purchase.purchaseId;
            deleteButton.addEventListener('click', detectCardPurchase);

            tarjeta.append(purchaseId, purchaseTotal, purchaseMethodPay, purchaseUserId, deleteButton);
            container.append(tarjeta);

            document.querySelector('#show-container').classList.remove('hidden');
        });
    }
}
//edit purchase

export function editPurchase() {
    if (purchases.length == 0) {
        document.querySelector('#warning').textContent = 'ENTIDAD VACIA';
        document.querySelector('#message').textContent = 'La operación no se puede realizar. Agregue un registro primero.';
        document.querySelector('#modal').classList.remove('hidden');
    } else {
        let container = document.querySelector('.show-container');
        clearContainer();

        document.getElementById('entitie-title').textContent = 'COMPRAS';
        purchases.forEach((purchase, index) => {
            let tarjeta = document.createElement('div');
            let purchaseId = document.createElement('p');
            let purchaseMethodPay = document.createElement('p');
            let purchaseTotal = document.createElement('p');
            let purchaseUserId = document.createElement('p');
            let editButton = document.createElement('button');

            tarjeta.classList.add('card');
            purchaseId.textContent = `ID de compra: ${purchase.purchaseId}`;
            purchaseMethodPay.textContent = `Método de pago: ${purchase.purchaseMethodPay}`;
            purchaseTotal.textContent = `Total de la compra: $${purchase.purchaseTotal}`;
            purchaseUserId.textContent = `ID Usuario que realizó la compra: ${purchase.purchaseUserId}`;
            editButton.textContent = 'Editar';
            tarjeta.dataset.index = index;

            editButton.addEventListener('click', () => {
                becomeInputs(tarjeta);
            });

            tarjeta.append(purchaseId, purchaseMethodPay, purchaseTotal, purchaseUserId, editButton);
            container.append(tarjeta);

            document.querySelector('#show-container').classList.remove('hidden');
        });
    }
}

function becomeInputs(card) {
    let index = card.dataset.index;
    let purchase = purchases[index];

    let purchaseMethodPayInput = document.createElement('input');
    let purchaseTotalInput = document.createElement('input');
    let purchaseUserIdInput = document.createElement('input');

    purchaseMethodPayInput.placeholder = "Método de pago";
    purchaseTotalInput.placeholder = "Total de la compra";
    purchaseUserIdInput.placeholder = "ID Usuario que realizó la compra";

    purchaseMethodPayInput.value = purchase.purchaseMethodPay;
    purchaseTotalInput.value = purchase.purchaseTotal;
    purchaseUserIdInput.value = purchase.purchaseUserId;

    card.innerHTML = '';

    card.append(purchaseMethodPayInput, purchaseTotalInput, purchaseUserIdInput);

    let saveButton = document.createElement('button');
    saveButton.textContent = 'Guardar';
    card.append(saveButton);

    saveButton.addEventListener('click', () => {
        let inputs = {
            purchaseMethodPay: purchaseMethodPayInput.value,
            purchaseTotal: purchaseTotalInput.value,
            purchaseUserId: purchaseUserIdInput.value
        };

        if (areAllFieldsValid(inputs)) {
            purchase.purchaseMethodPay = inputs.purchaseMethodPay;
            purchase.purchaseTotal = inputs.purchaseTotal;
            purchase.purchaseUserId = inputs.purchaseUserId;

            card.innerHTML = '';
            let purchaseId = document.createElement('p');
            let purchaseMethodPay = document.createElement('p');
            let purchaseTotal = document.createElement('p');
            let purchaseUserId = document.createElement('p');
            let editButton = document.createElement('button');

            purchaseId.textContent = `ID de compra: ${purchase.purchaseId}`;
            purchaseMethodPay.textContent = `Método de pago: ${purchase.purchaseMethodPay}`;
            purchaseTotal.textContent = `Total de la compra: $${purchase.purchaseTotal}`;
            purchaseUserId.textContent = `ID Usuario que realizó la compra: ${purchase.purchaseUserId}`;
            editButton.textContent = 'Editar';
            editButton.dataset.index = index;

            editButton.addEventListener('click', () => {
                becomeInputs(card);
            });

            card.append(purchaseId, purchaseMethodPay, purchaseTotal, purchaseUserId, editButton);
        }
    });
}





function detectCardPurchase(event) {
    let parent = event.target.parentElement;
    let purchaseId = event.target.dataset.purchaseId;
    let purchaseIndex = purchases.findIndex(purchase => purchase.purchaseId === purchaseId);
    if (purchaseIndex !== -1) {
        purchases.splice(purchaseIndex, 1);
    }
    parent.remove();
}




function clearContainer() {
   let container = document.getElementById('show-container');
   while (container.children.length > 1) {
       container.removeChild(container.lastChild);
   }
}

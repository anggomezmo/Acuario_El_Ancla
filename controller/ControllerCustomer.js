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
       let previousContents= document.querySelectorAll('.card')
       previousContents.forEach(node => {node.remove()})



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
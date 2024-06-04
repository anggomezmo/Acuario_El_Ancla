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
       let previousContents= document.querySelectorAll('.card')
       previousContents.forEach(node => {node.remove()})



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
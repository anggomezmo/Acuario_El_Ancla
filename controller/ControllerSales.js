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
       let previousContents= document.querySelectorAll('.card')
       previousContents.forEach(node => {node.remove()})



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
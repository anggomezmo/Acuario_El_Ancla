import { suppliers } from "../model/ModelSuppliers.js";

export function changeTitleSupplier(){

    document.getElementById('logo-title').textContent='Gestionar Proveedores'
 }
 
 export function showSuppliers(){
       // users length comprobation
    if(suppliers.length==0){
       document.querySelector('#warning').textContent = 'ENTIDAD VACIA'
       document.querySelector('#message').textContent = 'La operación no se puede realizar. Agregue un registro primero.'
       document.querySelector('#modal').classList.remove('hidden');
    }
    else{
 
       let container = document.querySelector('.show-container')
       
       let previousContents= document.querySelectorAll('.card')
       previousContents.forEach(node => {node.remove()})
 
       document.getElementById('entitie-title').textContent= 'USUARIOS'
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
 
import { products } from "../model/ModelProduct.js";

export function changeTitleProduct() {

    document.getElementById('logo-title').textContent = 'Gestionar Productos'
}

export function showProductos() {
    // users length comprobation
    if (products.length == 0) {
        document.querySelector('#warning').textContent = 'ENTIDAD VACIA'
        document.querySelector('#message').textContent = 'La operación no se puede realizar. Agregue un registro primero.'
        document.querySelector('#modal').classList.remove('hidden');
    }
    else {

        let container = document.querySelector('.show-container')
        //deleting previous content
        let previousContents = document.querySelectorAll('.card')
        previousContents.forEach(node => { node.remove() })



        document.getElementById('entitie-title').textContent= 'PRODUCTOS'
          products.forEach(product =>{
          let tarjeta = document.createElement('div')
          let productId  = document.createElement('p')
          let productName = document.createElement('p')
          let productDescription = document.createElement('p')
          let productType = document.createElement('p')
          let productSellPrice= document.createElement('p')
          let productBuyPrice= document.createElement('p')
          let productAvailable= document.createElement('p')
          tarjeta.classList.add('card')
          productId.textContent = `ID de producto: ${product.productId}`
          productName.textContent = `Nombre del producto: ${product.productName}`
          productDescription.textContent = `Descripción del producto: ${product.productDescription}`
          productType.textContent = `Tipo de producto: ${product.productType}`
          productSellPrice.textContent = `Precio de venta: ${product.productSellPrice}`
          productBuyPrice.textContent = `Precio de compra: ${product.productBuyPrice}`
          productAvailable.textContent = `Unidades disponibles: ${product.productAvailable}`
 
          tarjeta.append(productId,productName,productDescription,productType,productSellPrice,productBuyPrice,productAvailable)
          container.append(tarjeta)
 
          document.querySelector('#show-container').classList.remove('hidden')
       })
    }
 
 
 }
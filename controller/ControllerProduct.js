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
        clearContainer()


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

 //add button

 export function addProduct() {
    clearContainer();
    document.getElementById('entitie-title').textContent = 'Registrar producto';
    let container = document.querySelector('.show-container');
    let form = document.createElement('div');
    let title = document.createElement('h1');
    form.classList.add('addForm');
    title.textContent = 'Añadir registro';
    let button = document.createElement('button');
    button.innerText = 'Añadir Producto';
    buttonAddRecordConfiguration(button); // addEventListener to the button
    container.append(form);
    form.append(title);

    let placeholders = [
        'ID del Producto',
        'Nombre del Producto',
        'Descripción del Producto',
        'Tipo de Producto',
        'Precio de Venta',
        'Precio de Compra',
        'Cantidad Disponible'
    ];
    let inputIds = [
        'productId',
        'productName',
        'productDescription',
        'productType',
        'productSellPrice',
        'productBuyPrice',
        'productAvailable'
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
    button.addEventListener('click', verifyProductForm);
}

function verifyProductForm() {
    let allInputsCorrect;
    let inputs = {
        productId: document.getElementById('productId').value,
        productName: document.getElementById('productName').value,
        productDescription: document.getElementById('productDescription').value,
        productType: document.getElementById('productType').value,
        productSellPrice: document.getElementById('productSellPrice').value,
        productBuyPrice: document.getElementById('productBuyPrice').value,
        productAvailable: document.getElementById('productAvailable').value
    };

    allInputsCorrect = areAllFieldsValid(inputs, 'product');

    if (allInputsCorrect) {
        products.push(inputs);

        document.querySelector('#warning').textContent = 'PRODUCTO REGISTRADO!';
        document.querySelector('#message').textContent = 'El producto ha sido registrado con éxito.';
        document.querySelector('#modal').classList.remove('hidden');

        document.getElementById('productId').value = '';
        document.getElementById('productName').value = '';
        document.getElementById('productDescription').value = '';
        document.getElementById('productType').value = '';
        document.getElementById('productSellPrice').value = '';
        document.getElementById('productBuyPrice').value = '';
        document.getElementById('productAvailable').value = '';
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

    if (findProductById(inputs['productId'])) {
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
        case 'productId':
            return /^[A-Za-z0-9-]+$/.test(value);
        case 'productName':
            return /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(value);
        case 'productDescription':
            return /^[A-Za-zÁÉÍÓÚáéíóú\s0-9.,]+$/.test(value);
        case 'productType':
            return /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(value);
        case 'productSellPrice':
        case 'productBuyPrice':
            return /^[0-9]+$/.test(value);
        case 'productAvailable':
            return /^[0-9]+$/.test(value);
    }
}

function findProductById(productId) {
    return products.some(product => product.productId === productId);
}

// delete product

export function deleteProducts() {
    if (products.length == 0) {
        document.querySelector('#warning').textContent = 'ENTIDAD VACIA'
        document.querySelector('#message').textContent = 'La operación no se puede realizar. Agregue un registro primero.'
        document.querySelector('#modal').classList.remove('hidden');
    } else {
        let container = document.querySelector('.show-container');
        clearContainer();

        document.getElementById('entitie-title').textContent = 'PRODUCTOS';
        products.forEach(product => {
            let tarjeta = document.createElement('div');
            let productId = document.createElement('p');
            let productName = document.createElement('p');
            let productDescription = document.createElement('p');
            let productType = document.createElement('p');
            let productSellPrice = document.createElement('p');
            let productBuyPrice = document.createElement('p');
            let productAvailable = document.createElement('p');
            let deleteButton = document.createElement('button');

            tarjeta.classList.add('card');
            productId.textContent = `ID de producto: ${product.productId}`;
            productName.textContent = `Nombre del producto: ${product.productName}`;
            productDescription.textContent = `Descripción del producto: ${product.productDescription}`;
            productType.textContent = `Tipo de producto: ${product.productType}`;
            productSellPrice.textContent = `Precio de venta: ${product.productSellPrice}`;
            productBuyPrice.textContent = `Precio de compra: ${product.productBuyPrice}`;
            productAvailable.textContent = `Unidades disponibles: ${product.productAvailable}`;
            deleteButton.textContent = 'Eliminar';
            deleteButton.dataset.productId = product.productId;
            deleteButton.addEventListener('click', detectCardProduct);

            tarjeta.append(productId, productName, productDescription, productType, productSellPrice, productBuyPrice, productAvailable, deleteButton);
            container.append(tarjeta);

            document.querySelector('#show-container').classList.remove('hidden');
        });
    }
}

export function editProduct() {
    if (products.length == 0) {
        document.querySelector('#warning').textContent = 'ENTIDAD VACIA';
        document.querySelector('#message').textContent = 'La operación no se puede realizar. Agregue un registro primero.';
        document.querySelector('#modal').classList.remove('hidden');
    } else {
        let container = document.querySelector('.show-container');
        clearContainer();

        document.getElementById('entitie-title').textContent = 'PRODUCTOS';
        products.forEach((product, index) => {
            let tarjeta = document.createElement('div');
            let productId = document.createElement('p');
            let productName = document.createElement('p');
            let productDescription = document.createElement('p');
            let productType = document.createElement('p');
            let productSellPrice = document.createElement('p');
            let productBuyPrice = document.createElement('p');
            let productAvailable = document.createElement('p');
            let editButton = document.createElement('button');

            tarjeta.classList.add('card');
            productId.textContent = `ID de producto: ${product.productId}`;
            productName.textContent = `Nombre del producto: ${product.productName}`;
            productDescription.textContent = `Descripción del producto: ${product.productDescription}`;
            productType.textContent = `Tipo de producto: ${product.productType}`;
            productSellPrice.textContent = `Precio de venta: ${product.productSellPrice}`;
            productBuyPrice.textContent = `Precio de compra: ${product.productBuyPrice}`;
            productAvailable.textContent = `Unidades disponibles: ${product.productAvailable}`;
            editButton.textContent = 'Editar';
            tarjeta.dataset.index = index;

            editButton.addEventListener('click', () => {
                becomeInputs(tarjeta);
            });

            tarjeta.append(productId, productName, productDescription, productType, productSellPrice, productBuyPrice, productAvailable, editButton);
            container.append(tarjeta);

            document.querySelector('#show-container').classList.remove('hidden');
        });
    }
}

function becomeInputs(card) {
    let index = card.dataset.index;
    let product = products[index];

    let productNameInput = document.createElement('input');
    let productDescriptionInput = document.createElement('input');
    let productTypeInput = document.createElement('input');
    let productSellPriceInput = document.createElement('input');
    let productBuyPriceInput = document.createElement('input');
    let productAvailableInput = document.createElement('input');

    productNameInput.placeholder = "Nombre del producto";
    productDescriptionInput.placeholder = "Descripción del producto";
    productTypeInput.placeholder = "Tipo de producto";
    productSellPriceInput.placeholder = "Precio de venta";
    productBuyPriceInput.placeholder = "Precio de compra";
    productAvailableInput.placeholder = "Unidades disponibles";

    productNameInput.value = product.productName;
    productDescriptionInput.value = product.productDescription;
    productTypeInput.value = product.productType;
    productSellPriceInput.value = product.productSellPrice;
    productBuyPriceInput.value = product.productBuyPrice;
    productAvailableInput.value = product.productAvailable;

    card.innerHTML = '';

    card.append(productNameInput, productDescriptionInput, productTypeInput, productSellPriceInput, productBuyPriceInput, productAvailableInput);

    let saveButton = document.createElement('button');
    saveButton.textContent = 'Guardar';
    card.append(saveButton);

    saveButton.addEventListener('click', () => {
        let inputs = {
            productName: productNameInput.value,
            productDescription: productDescriptionInput.value,
            productType: productTypeInput.value,
            productSellPrice: productSellPriceInput.value,
            productBuyPrice: productBuyPriceInput.value,
            productAvailable: productAvailableInput.value
        };

        if (areAllFieldsValid(inputs)) {
            product.productName = inputs.productName;
            product.productDescription = inputs.productDescription;
            product.productType = inputs.productType;
            product.productSellPrice = inputs.productSellPrice;
            product.productBuyPrice = inputs.productBuyPrice;
            product.productAvailable = inputs.productAvailable;

            card.innerHTML = '';
            let productId = document.createElement('p');
            let productName = document.createElement('p');
            let productDescription = document.createElement('p');
            let productType = document.createElement('p');
            let productSellPrice = document.createElement('p');
            let productBuyPrice = document.createElement('p');
            let productAvailable = document.createElement('p');
            let editButton = document.createElement('button');

            productId.textContent = `ID de producto: ${product.productId}`;
            productName.textContent = `Nombre del producto: ${product.productName}`;
            productDescription.textContent = `Descripción del producto: ${product.productDescription}`;
            productType.textContent = `Tipo de producto: ${product.productType}`;
            productSellPrice.textContent = `Precio de venta: ${product.productSellPrice}`;
            productBuyPrice.textContent = `Precio de compra: ${product.productBuyPrice}`;
            productAvailable.textContent = `Unidades disponibles: ${product.productAvailable}`;
            editButton.textContent = 'Editar';
            editButton.dataset.index = index;

            editButton.addEventListener('click', () => {
                becomeInputs(card);
            });

            card.append(productId, productName, productDescription, productType, productSellPrice, productBuyPrice, productAvailable, editButton);
        }
    });
}


function detectCardProduct(event) {
    let parent = event.target.parentElement;
    let productId = event.target.dataset.productId;
    let productIndex = products.findIndex(product => product.productId === productId);
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
    }
    parent.remove();
}




function clearContainer() {
    let container = document.getElementById('show-container');
    while (container.children.length > 1) {
        container.removeChild(container.lastChild);
    }
}

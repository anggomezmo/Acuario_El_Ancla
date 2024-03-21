
//Creamos las listas que representan cada tabla
var proveedoresLista = [], usuariosLista = [], productosLista = [],
    ventasLista = [], comprasLista = [], rolesLista = [];


//Ejecución del progrma
mostrarMenuPrincipal()

//Menús
function mostrarMenuPrincipal() {
    let opcion;
    do {
        opcion = Number(prompt("--------------Base de datos el acuario--------------\n\n" +
            "Bienvenido a la base de datos del acuario. Por favor, seleccione una entidad para continuar:\n\n" +
            "1. Proveedores\n" + "2. Usuarios\n" + "3. Productos\n" +
            "4. Ventas\n" + "5. Compras\n" + "6. Roles\n" + "7. Salir\n\n" +
            "Ingrese el número de la entidad que desea gestionar:"));

        switch (opcion) {
            case 1:
                gestionarProveedores();
                break;
            case 2:
                gestionarUsuarios();
                break;
            case 3:
                gestionarProductos();
                break;
            case 4:
                gestionarVentas();
                break;
            case 5: 1
                gestionarCompras();
                break;
            case 6:
                gestionarRoles();
                break;
            case 7:
                console.log("Saliendo del programa...");
                break; // Finaliza el programa
            default:
                console.log("La opción seleccionada no es válida. Por favor, seleccione una opción válida.");
                break;
        }

    } while (opcion != 7);
}

function gestionarProveedores() {
    let opcionEntidad
    do {
        opcionEntidad = Number(prompt("--------------Proveedores--------------\n\n" +
            "Ingrese la opción que desee realizar:\n" +
            "1. Añadir Proveedor\n" + "2. Eliminar Proveedor\n" + "3. Editar Proveedor\n" +
            "4. Mostrar Proveedores\n" + "5. Volver al menú principal\n\n" + "Ingrese el NÚMERO de la opción que desea elegir."));

        switch (opcionEntidad) {
            case 1:
                añadir(1)
                break;
            case 2:
                eliminar(1)
                break;
            case 3:
                editar(1)
                break;
            case 4:
                mostrar(1)
                break;
            case 5:
                console.log('Saliendo al menú principal...')
                return;
            default:
                console.log('Por favor elija una opción valida')
                break;




        }
    } while (true)

}

function gestionarUsuarios() {
    let opcionEntidad
    do {
        opcionEntidad = Number(prompt("--------------Usuarios--------------\n\n" +
            "Ingrese la opción que desee realizar:\n" +
            "1. Añadir Usuario\n" + "2. Eliminar Usuario\n" + "3. Editar Usuario\n" +
            "4. Mostrar Usuarios\n" + "5. Volver al menú principal\n\n" + "Ingrese el NÚMERO de la opción que desea elegir."));

        switch (opcionEntidad) {
            case 1:
                añadir(2)
                break;
            case 2:
                eliminar(2)
                break;
            case 3:
                editar(2)
                break;
            case 4:
                mostrar(2)
                break;
            case 5:
                console.log('Saliendo al menü principal...')
                return;
            default:
                console.log('Por favor elija una opción valida')
                break;




        }
    } while (true)
}

function gestionarProductos() {
    let opcionEntidad
    do {
        opcionEntidad = Number(prompt("--------------Productos--------------\n\n" +
            "Ingrese la opción que desee realizar:\n" +
            "1. Añadir Producto\n" + "2. Eliminar Producto\n" + "3. Editar Producto\n" +
            "4. Mostrar Productos\n" + "5. Volver al menú principal\n\n" + "Ingrese el NÚMERO de la opción que desea elegir."))

        switch (opcionEntidad) {
            case 1:
                añadir(3)
                break;
            case 2:
                eliminar(3)
                break;
            case 3:
                editar(3)
                break;
            case 4:
                mostrar(3)
                break;
            case 5:
                console.log('Saliendo al menú principal...')
                return;
            default:
                console.log('Por favor elija una opción valida')
                break;




        }
    } while (true)
}

function gestionarVentas() {
    let opcionEntidad

    do {
        opcionEntidad = Number(prompt("--------------Ventas--------------\n\n" +
            "Ingrese la opción que desee realizar:\n" +
            "1. Registrar Venta\n" + "2. Editar Ventas\n" + "3. Mostrar Ventas\n" +
            "4. Volver al menú principal\n\n" + "Ingrese el NÚMERO de la opción que desea elegir."));

        switch (opcionEntidad) {
            case 1:
                añadir(4)
                break;
            case 2:
                editar(4n)
                break;
            case 3:
                mostrar(4)
                break;
            case 4:
                console.log('Saliendo al menú principal...')
                return;
            default:
                console.log('Por favor elija una opción valida')
                break;

        }
    } while (true)
}

function gestionarCompras() {
    let opcionEntidad
    do {
        opcionEntidad = Number(prompt("--------------Compras--------------\n\n" +
            "Ingrese la opción que desee realizar:\n" +
            "1. Registrar Compra\n" + "2. Editar Compras\n" + "3. Mostrar Compras\n" +
            "4. Volver al menú principal\n\n" + "Ingrese el NÚMERO de la opción que desea elegir."))

        switch (opcionEntidad) {
            case 1:
                añadir(5)
                break;
            case 2:
                editar(5)
                break;
            case 3:
                mostrar(5)
                break;
            case 4:
                console.log('Saliendo al menú principal...')
                return;
            default:
                console.log('Por favor elija una opción valida')
                break;

        }
    } while (true);
}

function gestionarRoles() {
    let opcionEntidad
    do {
        opcionEntidad = Number(prompt("--------------Roles--------------\n\n" +
            "Ingrese la opción que desee realizar:\n" +
            "1. Añadir Rol\n" + "2. Editar Rol\n" + "3. Eliminar Rol\n" +
            "4. Mostrar Roles\n" + "5. Volver al menú principal\n\n" +
            "Ingrese el NÚMERO de la opción que desea elegir."));

        switch (opcionEntidad) {
            case 1:
                añadir(6)
                break;
            case 2:
                editar(6)
                break;
            case 3:
                eliminar(6)
                break;
            case 4:
                mostrar(6)
                break;
            case 5:
                console.log('Saliendo al menú principal...')
                return;
            default:
                console.log('Por favor elija una opción valida')
                break;


        }
    } while (true);
}

function añadir(entidad) {
    switch (entidad) {
        case 1: //Proveedores
            let id_tributario = prompt('--------------Añadir Proveedores--------------\n\n' +
                'Por favor ingrese el ID tributario del proveedor:');
            let nombre_proveedor = prompt('--------------Añadir Proveedores--------------\n\n' +
                'Por favor ingrese el nombre del proveedor:');
            let direccion_proveedor = prompt('--------------Añadir Proveedores--------------\n\n' +
                'Por favor ingrese la dirección del proveedor:');
            let telefono_proveedor = prompt('--------------Añadir Proveedores--------------\n\n' +
                'Por favor ingrese el teléfono del proveedor:');
            let correo_proveedor = prompt('--------------Añadir Proveedores--------------\n\n' +
                'Por favor ingrese el correo del proveedor:');
            let categoria_productos = prompt('--------------Añadir Proveedores--------------\n\n' +
                'Por favor ingrese la categoría de productos del proveedor:');
            // Creamos un nuevo proveedor y lo añadimos a la lista
            let nuevoProveedor = new Proveedor(id_tributario, nombre_proveedor, direccion_proveedor,
                telefono_proveedor, correo_proveedor, categoria_productos);
            proveedoresLista.push(nuevoProveedor)
            console.log('Se ha añadido el nuevo proveedor')
            return;

        case 2:
            let tipo_documento_usuario = prompt("--------------Añadir Usuarios--------------\n\n" +
                "Por favor ingrese el tipo de documento del usuario:");
            let documento_usuario = prompt("--------------Añadir Usuarios--------------\n\n" +
                "Por favor ingrese el documento del usuario:");
            let nombre_usuario = prompt("--------------Añadir Usuarios--------------\n\n" +
                "Por favor ingrese el nombre del usuario:");
            let apellido_usuario = prompt("--------------Añadir Usuarios--------------\n\n" +
                "Por favor ingrese el apellido del usuario:");
            let correo_usuario = prompt("--------------Añadir Usuarios--------------\n\n" +
                "Por favor ingrese el correo del usuario:");
            let rol_usuario = prompt("--------------Añadir Usuarios--------------\n\n" +
                "Por favor ingrese el rol del usuario:");

            let nuevoUsuario = new Usuario(documento_usuario, tipo_documento_usuario, nombre_usuario,
                apellido_usuario, correo_usuario, rol_usuario);

            usuariosLista.push(nuevoUsuario);
            console.log("Usuario añadido correctamente:");
            return;
        
        case 3:
            let id_producto = prompt("--------------Añadir Productos--------------\n\n" +
            "Por favor ingrese el ID del producto:");
          let nombre_producto = prompt("--------------Añadir Productos--------------\n\n" +
            "Por favor ingrese el nombre del producto:");
          let descripcion_producto = prompt("--------------Añadir Productos--------------\n\n" +
            "Por favor ingrese la descripción del producto:");
          let tipo_producto = prompt("--------------Añadir Productos--------------\n\n" +
            "Por favor ingrese el tipo del producto:");
          let precio_producto = parseFloat(prompt("--------------Añadir Productos--------------\n\n" +
            "Por favor ingrese el precio del producto:"));
          let unidades_disponibles = parseInt(prompt("--------------Añadir Productos--------------\n\n" +
            "Por favor ingrese las unidades disponibles del producto:"));
    
          let nuevoProducto = new Producto(id_producto, nombre_producto, descripcion_producto,
            tipo_producto, precio_producto, unidades_disponibles);
    
          productosLista.push(nuevoProducto);
          console.log("Producto añadido correctamente:");
          return;

          case 4:
            let id_venta = prompt("--------------Registrar Venta--------------\n\n" +
        "Por favor ingrese el ID de la venta:");
      let fecha_hora_compra = prompt("--------------Registrar Venta--------------\n\n" +
        "Por favor ingrese la fecha y hora de la compra:");
      let id_cliente = prompt("--------------Registrar Venta--------------\n\n" +
        "Por favor ingrese el ID del cliente:");
      let total_venta = parseFloat(prompt("--------------Registrar Venta--------------\n\n" +
        "Por favor ingrese el total de la venta:"));
      let metodo_pago_venta = prompt("--------------Registrar Venta--------------\n\n" +
        "Por favor ingrese el método de pago de la venta:");

      let nuevaVenta = new Venta(id_venta, fecha_hora_compra, id_cliente, total_venta, metodo_pago_venta);

      ventasLista.push(nuevaVenta);
      console.log("Venta registrada correctamente:");
      return;
    }
    


}



// Constructores
function Proveedor(id_tributario, nombre_proveedor, direccion_proveedor,
    telefono_proveedor, correo_proveedor, categoria_productos) {
    this.id_tributario = id_tributario;
    this.nombre_proveedor = nombre_proveedor;
    this.direccion_proveedor = direccion_proveedor;
    this.telefono_proveedor = telefono_proveedor;
    this.correo_proveedor = correo_proveedor;
    this.categoria_productos = categoria_productos;

}

function Usuario(documento_usuario, tipo_documento_usuario, nombre_usuario,
    apellido_usuario, correo_usuario, rol_usuario) {
    this.tipo_documento_usuario = tipo_documento_usuario;
    this.documento_usuario = documento_usuario;
    this.nombre_usuario = nombre_usuario;
    this.apellido_usuario = apellido_usuario;
    this.correo_usuario = correo_usuario;
    this.rol_usuario = rol_usuario;
}

function Producto(id_producto, nombre_producto, descripcion_producto, tipo_producto, precio_producto,
    unidades_disponibles) {
    this.id_producto = id_producto;
    this.nombre_producto = nombre_producto;
    this.descripcion_producto = descripcion_producto;
    this.tipo_producto = tipo_producto;
    this.precio_producto = precio_producto;
    this.unidades_disponibles = unidades_disponibles;
}

function Venta(id_venta, fecha_hora_compra, id_cliente, total_venta, metodo_pago_venta) {
    this.id_venta = id_venta;
    this.fecha_hora_compra = fecha_hora_compra;
    this.id_cliente = id_cliente;
    this.total_venta = total_venta;
    this.metodo_pago_venta = metodo_pago_venta;
}

function Compra(id_compra, metodo_pago_compra, total_compra, productos_comprados) {
    this.id_compra = id_compra;
    this.metodo_pago_compra = metodo_pago_compra;
    this.total_compra = total_compra;
    this.productos_comprados = productos_comprados;
}

function Rol(id_roles, nombre_roles) {
    this.id_roles = id_roles;
    this.nombre_roles = nombre_roles;
} 
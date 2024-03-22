
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
                console.log('Entrando a proveedores...')
                gestionarProveedores();
                break;
            case 2:
                console.log('Entrando a usuarios...')
                gestionarUsuarios();
                break;
            case 3:
                console.log('Entrando a productos...')
                gestionarProductos();
                break;
            case 4:
                console.log('Entrando a ventas...')
                gestionarVentas();
                break;
            case 5:
                console.log('Entrando a compras...')
                gestionarCompras();
                break;
            case 6:
                console.log('Entrando a roles...')
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

        case 5:

            let id_compra = prompt("--------------Registrar Compra--------------\n\n" +
                "Por favor ingrese el ID de la compra:");
            let metodo_pago_compra = prompt("--------------Registrar Compra--------------\n\n" +
                "Por favor ingrese el método de pago de la compra:");
            let total_compra = parseFloat(prompt("--------------Registrar Compra--------------\n\n" +
                "Por favor ingrese el total de la compra:"));
            let productos_comprados = prompt("--------------Registrar Compra--------------\n\n" +
                "Por favor ingrese los productos comprados:");

            let nuevaCompra = new Compra(id_compra, metodo_pago_compra, total_compra, productos_comprados);

            comprasLista.push(nuevaCompra);
            console.log("Compra registrada correctamente:");
            return;

        case 6:
            let id_roles = prompt("--------------Añadir Rol--------------\n\n" +
                "Por favor ingrese el ID del rol:");
            let nombre_roles = prompt("--------------Añadir Rol--------------\n\n" +
                "Por favor ingrese el nombre del rol:");

            let nuevoRol = new Rol(id_roles, nombre_roles);

            rolesLista.push(nuevoRol);
            console.log("Rol añadido correctamente:");
            return;

    }

}

function eliminar(entidad) {
    switch (entidad) {
        case 1:
            if (proveedoresLista.length === 0) {
                console.log('No tiene ningún proveedor agregado, por favor añada un proveedor primero')
                return;

            } else {
                console.log('Estos son los proveedores que actualmente están registrados:\n ')
                console.table(proveedoresLista)
            }

            let opcionEliminar = Number(prompt('--------------Eliminar Proveedor--------------\n\n' +
                'Ingrese el índice del proveedor que desea eliminar'))

            if (!Number.isInteger(opcionEliminar) || opcionEliminar < 0 || opcionEliminar >= proveedoresLista.length) {
                console.log('Índice inválido, por favor intente de nuevo')
                eliminar(1)
                return;
            } else {
                proveedoresLista.splice(opcionEliminar, 1)
                console.log('Proveedor eliminado correctamente')
                return;
            }
        case 2:
            if (usuariosLista.length == 0) {
                console.log('No tiene ningún usuario agregado, por favor añada un usuario primero')
                return;
            }
            else {
                console.log('Estos son los usuarios que actualmente están registrados:\n ')
                console.table(usuariosLista)
            }

            let opcionEliminarUsuario = Number(prompt('--------------Eliminar Usuario--------------\n\n' +
                'Ingrese el índice del usuario que desea eliminar'))
            if (!Number.isInteger(opcionEliminarUsuario) || opcionEliminarUsuario < 0 || opcionEliminarUsuario >= usuariosLista.length) {
                console.log('Índice inválido, por favor inténtelo de nuevo')
                eliminar(2)
                return
            }
            else {
                usuariosLista.splice(opcionEliminarUsuario, 1)
                console.log('Usuario eliminado correctamente')
                return;
            }
        case 3:
            if (productosLista.length == 0) {
                console.log('No tiene ningún producto agregado, por favor añada un producto primero')
                return;

            }
            else {
                console.log('Estos son los productos que actualmente están registrados:\n ')
                console.table(productosLista)
            }

            let opcionEliminarProducto = Number(prompt('--------------Eliminar Producto--------------\n\n' +
                'Ingrese el índice del producto que desea eliminar'))
            if (!Number.isInteger(opcionEliminarProducto) || opcionEliminarProducto < 0 || opcionEliminarProducto >= productosLista.length) {
                console.log('Índice inválido, por favor inténtelo de nuevo')
                eliminar(3)
                return
            }
            else {
                productosLista.splice(opcionEliminarProducto, 1)
                console.log('Producto eliminado correctamente')
                return
            }
        case 4:
            if (ventasLista.length == 0) {
                console.log('No tiene ninguna venta registrada')
                return

            }
            else {
                console.log('Estas son las ventas que actualmente están registradas:\n ')
                console.table(ventasLista)
            }

            let opcionEliminarVenta = Number(prompt('--------------Eliminar Venta--------------\n\n' +
                'Ingrese el índice de la venta que desea eliminar'))
            if (!Number.isInteger(opcionEliminarVenta) || opcionEliminarVenta < 0 || opcionEliminarVenta >= ventasLista.length) {
                console.log('Índice inválido, por favor inténtelo de nuevo')
                eliminar(4)
                return
            }
            else {
                ventasLista.splice(opcionEliminarVenta, 1)
                console.log('Venta eliminada correctamente')
                return
            }
        case 5:
            if (comprasLista.length == 0) {
                console.log('No tiene ninguna compra registrada')
                return
            }
            else {
                console.log('Estas son las compras que actualmente están registradas:\n ')
                console.table(comprasLista)
            }

            let opcionEliminarCompra = Number(prompt('--------------Eliminar Compra--------------\n\n' +
                'Ingrese el índice de la compra que desea eliminar'))
            if (!Number.isInteger(opcionEliminarCompra) || opcionEliminarCompra < 0 || opcionEliminarCompra >= comprasLista.length) {
                console.log('Índice inválido, por favor inténtelo de nuevo')
                eliminar(5)
                return
            }
            else {
                comprasLista.splice(opcionEliminarCompra, 1)
                console.log('Compra eliminada correctamente')
                return
            }

        case 6:

            if (rolesLista.length == 0) {
                console.log('No tiene ningún rol agregado, por favor añada un rol primero')
                return
            }
            else {
                console.log('Estos son los roles que actualmente están registrados:\n ')
                console.table(rolesLista)
            }

            let opcionEliminarRol = Number(prompt('--------------Eliminar Rol--------------\n\n' +
                'Ingrese el índice del rol que desea eliminar'))
            if (!Number.isInteger(opcionEliminarRol) || opcionEliminarRol < 0 || opcionEliminarRol >= rolesLista.length) {
                console.log('Índice inválido, por favor inténtelo de nuevo')
                eliminar(6)
            }
            else {
                rolesLista.splice(opcionEliminarRol, 1)
                console.log('Rol eliminado correctamente')
                return
            }






    }



}

function editar(entidad) {
    switch (entidad) {
        case 1:
            if (proveedoresLista.length === 0) {
                console.log('No tiene ningún proveedor agregado, por favor añada un proveedor primero');
                return;
            } else {
                console.log('Estos son los proveedores que actualmente están registrados:\n ');
                console.table(proveedoresLista);
            }

            let opcionEditar = Number(prompt('--------------Editar Proveedor--------------\n\n' +
                'Ingrese el índice del proveedor que desea editar'));

            if (!Number.isInteger(opcionEditar) || opcionEditar < 0 || opcionEditar >= proveedoresLista.length) {
                console.log('Índice inválido, por favor intente de nuevo');
                editar(1);
                return;
            } else {
                let proveedor = proveedoresLista[opcionEditar];
                console.log('Proveedor seleccionado:\n');
                console.table([proveedor]);

                // Solicitar los nuevos datos del proveedor
                let id_tributario = prompt('Ingrese el nuevo ID tributario del proveedor:');
                let nombre_proveedor = prompt('Ingrese el nuevo nombre del proveedor:');
                let direccion_proveedor = prompt('Ingrese la nueva dirección del proveedor:');
                let telefono_proveedor = prompt('Ingrese el nuevo teléfono del proveedor:');
                let correo_proveedor = prompt('Ingrese el nuevo correo del proveedor:');
                let categoria_productos = prompt('Ingrese la nueva categoría de productos del proveedor:');

                // Actualizar los datos del proveedor
                proveedor.id_tributario = id_tributario;
                proveedor.nombre_proveedor = nombre_proveedor;
                proveedor.direccion_proveedor = direccion_proveedor;
                proveedor.telefono_proveedor = telefono_proveedor;
                proveedor.correo_proveedor = correo_proveedor;
                proveedor.categoria_productos = categoria_productos;

                console.log('Proveedor editado correctamente');
                return;
            }

        case 2: // Usuarios
            if (usuariosLista.length === 0) {
                console.log('No tiene ningún usuario agregado, por favor añada un usuario primero');
                return;
            } else {
                console.log('Estos son los usuarios que actualmente están registrados:\n ');
                console.table(usuariosLista);
            }

            let opcionEditarUsuario = Number(prompt('--------------Editar Usuario--------------\n\n' +
                'Ingrese el índice del usuario que desea editar'));

            if (!Number.isInteger(opcionEditarUsuario) || opcionEditarUsuario < 0 || opcionEditarUsuario >= usuariosLista.length) {
                console.log('Índice inválido, por favor intente de nuevo');
                editar(2);
                return;
            } else {
                let usuario = usuariosLista[opcionEditarUsuario];
                console.log('Usuario seleccionado:\n');
                console.table([usuario]);

                // Solicitar los nuevos datos del usuario
                let documento_usuario = prompt('Ingrese el nuevo documento del usuario:');
                let tipo_documento_usuario = prompt('Ingrese el nuevo tipo de documento del usuario:');
                let nombre_usuario = prompt('Ingrese el nuevo nombre del usuario:');
                let apellido_usuario = prompt('Ingrese el nuevo apellido del usuario:');
                let correo_usuario = prompt('Ingrese el nuevo correo del usuario:');
                let rol_usuario = prompt('Ingrese el nuevo rol del usuario:');

                // Actualizar los datos del usuario
                usuario.documento_usuario = documento_usuario;
                usuario.tipo_documento_usuario = tipo_documento_usuario;
                usuario.nombre_usuario = nombre_usuario;
                usuario.apellido_usuario = apellido_usuario;
                usuario.correo_usuario = correo_usuario;
                usuario.rol_usuario = rol_usuario;

                console.log('Usuario editado correctamente');
                return;

            }
        case 3: // Productos
            if (productosLista.length === 0) {
                console.log('No tiene ningún producto agregado, por favor añada un producto primero');
                return;
            } else {
                console.log('Estos son los productos que actualmente están registrados:\n ');
                console.table(productosLista);
            }

            let opcionEditarProducto = Number(prompt('--------------Editar Producto--------------\n\n' +
                'Ingrese el índice del producto que desea editar'));

            if (!Number.isInteger(opcionEditarProducto) || opcionEditarProducto < 0 || opcionEditarProducto >= productosLista.length) {
                console.log('Índice inválido, por favor intente de nuevo');
                editar(3);
                return;
            } else {
                let producto = productosLista[opcionEditarProducto];
                console.log('Producto seleccionado:\n');
                console.table([producto]);

                // Solicitar los nuevos datos del producto
                let id_producto = prompt('Ingrese el nuevo ID del producto:');
                let nombre_producto = prompt('Ingrese el nuevo nombre del producto:');
                let descripcion_producto = prompt('Ingrese la nueva descripción del producto:');
                let tipo_producto = prompt('Ingrese el nuevo tipo de producto:');
                let precio_producto = prompt('Ingrese el nuevo precio del producto:');
                let unidades_disponibles = prompt('Ingrese las nuevas unidades disponibles del producto:');

                // Actualizar los datos del producto
                producto.id_producto = id_producto;
                producto.nombre_producto = nombre_producto;
                producto.descripcion_producto = descripcion_producto;
                producto.tipo_producto = tipo_producto;
                producto.precio_producto = precio_producto;
                producto.unidades_disponibles = unidades_disponibles;

                console.log('Producto editado correctamente');
                return;
            }
        case 4:

            if (ventasLista.length === 0) {
                console.log('No tiene ninguna venta registrada, por favor registre una venta primero');
                return;
            } else {
                console.log('Estas son las ventas actualmente registradas:\n ');
                console.table(ventasLista);
            }

            let opcionEditarVenta = Number(prompt('--------------Editar Venta--------------\n\n' +
                'Ingrese el índice de la venta que desea editar'));

            if (!Number.isInteger(opcionEditarVenta) || opcionEditarVenta < 0 || opcionEditarVenta >= ventasLista.length) {
                console.log('Índice inválido, por favor intente de nuevo');
                editar(4); // 4 porque es el caso de editar ventas
                return;
            } else {
                let venta = ventasLista[opcionEditarVenta];
                console.log('Venta seleccionada:\n');
                console.table([venta]);

                // Solicitar los nuevos datos de la venta
                let id_venta = prompt('Ingrese el nuevo ID de la venta:');
                let fecha_hora_compra = prompt('Ingrese la nueva fecha y hora de la compra:');
                let id_cliente = prompt('Ingrese el nuevo ID del cliente:');
                let total_venta = prompt('Ingrese el nuevo total de la venta:');
                let metodo_pago_venta = prompt('Ingrese el nuevo método de pago de la venta:');

                // Actualizar los datos de la venta
                venta.id_venta = id_venta;
                venta.fecha_hora_compra = fecha_hora_compra;
                venta.id_cliente = id_cliente;
                venta.total_venta = total_venta;
                venta.metodo_pago_venta = metodo_pago_venta;

                console.log('Venta editada correctamente');
                return;
            }
        case 5:
            if (comprasLista.length === 0) {
                console.log('No tiene ninguna compra registrada, por favor registre una compra primero');
                return;
            } else {
                console.log('Estas son las compras actualmente registradas:\n ');
                console.table(comprasLista);
            }

            let opcionEditarCompra = Number(prompt('--------------Editar Compra--------------\n\n' +
                'Ingrese el índice de la compra que desea editar'));

            if (!Number.isInteger(opcionEditarCompra) || opcionEditarCompra < 0 || opcionEditarCompra >= comprasLista.length) {
                console.log('Índice inválido, por favor intente de nuevo');
                editar(5); // 5 porque es el caso de editar compras
                return;
            } else {
                let compra = comprasLista[opcionEditarCompra];
                console.log('Compra seleccionada:\n');
                console.table([compra]);

                // Solicitar los nuevos datos de la compra
                let id_compra = prompt('Ingrese el nuevo ID de la compra:');
                let metodo_pago_compra = prompt('Ingrese el nuevo método de pago de la compra:');
                let total_compra = prompt('Ingrese el nuevo total de la compra:');
                let productos_comprados = prompt('Ingrese los nuevos productos comprados:');

                // Actualizar los datos de la compra
                compra.id_compra = id_compra;
                compra.metodo_pago_compra = metodo_pago_compra;
                compra.total_compra = total_compra;
                compra.productos_comprados = productos_comprados;

                console.log('Compra editada correctamente');
                return;
            }
        case 6:
            if (rolesLista.length === 0) {
                console.log('No tiene ningún rol registrado, por favor registre un rol primero');
                return;
            } else {
                console.log('Estos son los roles actualmente registrados:\n ');
                console.table(rolesLista);
            }

            let opcionEditarRol = Number(prompt('--------------Editar Rol--------------\n\n' +
                'Ingrese el índice del rol que desea editar'));

            if (!Number.isInteger(opcionEditarRol) || opcionEditarRol < 0 || opcionEditarRol >= rolesLista.length) {
                console.log('Índice inválido, por favor intente de nuevo');
                editar(6); // 6 porque es el caso de editar roles
                return;
            } else {
                let rol = rolesLista[opcionEditarRol];
                console.log('Rol seleccionado:\n');
                console.table([rol]);

                // Solicitar los nuevos datos del rol
                let id_roles = prompt('Ingrese el nuevo ID del rol:');
                let nombre_roles = prompt('Ingrese el nuevo nombre del rol:');

                // Actualizar los datos del rol
                rol.id_roles = id_roles;
                rol.nombre_roles = nombre_roles;

                console.log('Rol editado correctamente');
                return;
            }

    }
}

function mostrar(entidad) {
    switch (entidad) {
        case 1: // Proveedores
            if (proveedoresLista.length === 0) {
                console.log('No tiene ningún proveedor agregado, por favor añada un proveedor primero');
                return
            } else {
                console.log('Estos son los proveedores que actualmente están registrados:\n\n ');
                console.table(proveedoresLista);
                return
            }
        case 2: // Usuarios
            if (usuariosLista.length === 0) {
                console.log('No tiene ningún usuario agregado, por favor añada un usuario primero');
                return;
            } else {
                console.log('Estos son los usuarios que actualmente están registrados:\n\n ');
                console.table(usuariosLista);
                return;
            }
        case 3: // Productos
            if (productosLista.length === 0) {
                console.log('No tiene ningún producto agregado, por favor añada un producto primero');
                return;
            } else {
                console.log('Estos son los productos que actualmente están registrados:\n\n ');
                console.table(productosLista);
                return;
            }
        case 4: // Ventas
            if (ventasLista.length === 0) {
                console.log('No tiene ninguna venta registrada, por favor registre una venta primero');
                return;
            } else {
                console.log('Estas son las ventas que actualmente están registradas:\n\n ');
                console.table(ventasLista);
                return;
            }
        case 5: // Compras
            if (comprasLista.length === 0) {
                console.log('No tiene ninguna compra registrada, por favor registre una compra primero');
                return;
            } else {
                console.log('Estas son las compras que actualmente están registradas:\n\n ');
                console.table(comprasLista);
                return;
            }
        case 6: // Roles
            if (rolesLista.length === 0) {
                console.log('No tiene ningún rol registrado, por favor registre un rol primero');
                return;
            } else {
                console.log('Estos son los roles que actualmente están registrados:\n\n ');
                console.table(rolesLista);
                return;
            }
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
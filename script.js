
mostrarMenuPrincipal()


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
            case 5:1
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
        
    } while (opcion!=7);
}

function gestionarProveedores(opcion){
    let opcionEntidad
    do{
    opcionEntidad = Number(prompt("--------------Proveedores--------------\n\n" +
        "Ingrese la opción que desee realizar:\n" +
        "1. Añadir Proveedor\n" + "2. Eliminar Proveedor\n" + "3. Editar Proveedor\n" +
        "4. Mostrar Proveedores\n" + "5. Volver al menú principal\n\n" + "Ingrese el NÚMERO de la opción que desea elegir."));

    switch(opcionEntidad){
        case 1:
            añadir(opcion)
            break;
        case 2:
            eliminar(opcion)
            break;
        case 3:
            editar(opcion)
            break;
        case 4:
            mostrar(opcion)
            break;
        case 5:
            console.log('Saliendo al menü principal...')
            return;
        default:
            console.log('Por favor elija una opción valida')
            break;

        
        

    }
    }while(true)

}

function gestionarUsuarios(opcion){
    let opcionEntidad
    do{
        opcionEntidad = Number(prompt("--------------Usuarios--------------\n\n" +
        "Ingrese la opción que desee realizar:\n" +
        "1. Añadir Usuario\n" + "2. Eliminar Usuario\n" + "3. Editar Usuario\n" +
        "4. Mostrar Usuarios\n" + "5. Volver al menú principal\n\n" + "Ingrese el NÚMERO de la opción que desea elegir."));

    switch(opcionEntidad){
        case 1:
            añadir(opcion)
            break;
        case 2:
            eliminar(opcion)
            break;
        case 3:
            editar(opcion)
            break;
        case 4:
            mostrar(opcion)
            break;
        case 5:
            console.log('Saliendo al menü principal...')
            return;
        default:
            console.log('Por favor elija una opción valida')
            break;

        
        

    }
    }while(true)
}

function gestionarProductos(opcion){
    let opcionEntidad
    do{
        opcionEntidad = Number(prompt("--------------Productos--------------\n\n" +
        "Ingrese la opción que desee realizar:\n" +
        "1. Añadir Producto\n" + "2. Eliminar Producto\n" + "3. Editar Producto\n" +
        "4. Mostrar Productos\n" + "5. Volver al menú principal\n\n" + "Ingrese el NÚMERO de la opción que desea elegir."))

    switch(opcionEntidad){
        case 1:
            añadir(opcion)
            break;
        case 2:
            eliminar(opcion)
            break;
        case 3:
            editar(opcion)
            break;
        case 4:
            mostrar(opcion)
            break;
        case 5:
            console.log('Saliendo al menü principal...')
            return;
        default:
            console.log('Por favor elija una opción valida')
            break;

        
        

    }
    }while(true)
}


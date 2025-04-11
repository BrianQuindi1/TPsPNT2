const productos = [
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
    ];

    
    //PARTE 1

    console.log("1)El nombre del primer producto es: " + productos[0].nombre);

    console.log("Ej2");
    for (const pro of productos) {
        console.log("Producto: " + pro.nombre +" - " + "Precio: $" + pro.precio);
    }

    console.log("Ej3");
    productos.forEach(pro => {
        console.log("Producto: " + pro.nombre +" - " + "Precio: $" + pro.precio);
    });
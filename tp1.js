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

    console.log("Ej4");

    let nombres = [];

    productos.map((p) => nombres.push(p.nombre))

    console.log(nombres);

    console.log("Ej5");

    //console.log("find: " + nums.filter( (num) => num > 2));
    let catRopa = [];
    productos.filter((p) => p.categoria == "Ropa" ? catRopa.push(p) : "");

    console.log(catRopa);

    console.log("Ej6")

    let precios = [];
    productos.filter((p) =>p.precio >3000 ? precios.push(p) : "");

    console.log(precios);

    console.log("Ej7");
    let gorra = productos.find((p) => p.nombre == "Gorra");
    console.log(gorra);
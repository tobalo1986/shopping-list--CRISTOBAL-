
const shoppinglist =

[ 
    { item: "leche", cantidad:2, comprado: false },
    { item: "pan", cantidad:1, comprado: false },
    { item: "huevos", cantidad:12, comprado: false },
    { item: "frutas", cantidad:5, comprado: false },
    { item: "verduras", cantidad:3, comprado: false }
 ]

    function additem(item, cantidad)
     {
        shoppinglist.push({ item, cantidad, comprado: false });
    }

    function removeitem(item)
    {
        const index = shoppinglist.findIndex(producto => producto.item === item);
        if (index !== -1) {
            shoppinglist.splice(index, 1);
        } else {
            console.log(`El producto "${item}" no se encontró en la lista.`);
        }
    }

    function updateitem(index, nuevoitem, nuevacantidad)
    {
        if (index >= 0 && index < shoppinglist.length) {
            shoppinglist[index].item = nuevoitem;
            shoppinglist[index].cantidad = nuevacantidad;
        } else {
            console.log("No se encontró el producto en la lista.");
        }   
    }

    additem("arroz", 4);
    additem("pasta", 2);
    additem("aceite", 1);
    additem("azúcar", 1);    

    removeitem("huevos");
    removeitem("pan");
    removeitem("leche");
    removeitem("coche");

    updateitem(0, "potitos", 3);
    updateitem(2, "pañales", 7);
    updateitem(4, "lechuga", 4);

        console.log("Lista actualizada:");
        console.log(shoppinglist);
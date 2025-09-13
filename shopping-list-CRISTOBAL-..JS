
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

    additem("arroz", 4);
    additem("pasta", 2);
    additem("aceite", 1);
    additem("azúcar", 1);    
        console.log("Lista actualizada:");
        console.log(shoppinglist);
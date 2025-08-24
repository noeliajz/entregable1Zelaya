const comidas = [
  { nombre: "Pizza", precio: 15000 },
  { nombre: "Hamburguesa", precio: 9200 },
  { nombre: "Ensalada", precio: 1900 },
  { nombre: "Tacos", precio: 8100 },
  { nombre: "Pasta", precio: 6400 },
  { nombre: "Milanesa", precio: 4000 },
  { nombre: "Papas", precio: 2000 },
];

function agregarElemento(){
  const nombre =  prompt('Ingresar nombre de la comida')
  const precio = parseFloat(prompt('Ingresar precio'))
  if(nombre && precio){
    comidas.push({nombre, precio})
    alert('Agregaste una comida')
    for (const comida of comidas) {
          console.table(
            ` Nombres:${comida.nombre} , Precio: ${comida.precio}`
          );
        }
  }
}

function eliminarElemento(){
  if(comidas.length>0){
    const elementoEliminado = comidas.pop()
    alert('Eliminaste el último elemento')
  }else{
    alert('El array comidas esta vacio')
  }
}

function miMenuDeOpciones() {
  let opcion;
  do {
    opcion = prompt(
      "Ingresa la opción\n" +
        "1- Agregar elemento en el array comidas\n" +
        "2- Mostrar las comidas con un precio mayor a $7000\n" +
        "3- Eliminar último elemento del array de comidas\n" +
        "4- Mostrar el contenido del menu de comidas con su precio\n" +
        "5- Salir\n"
    );
    switch (opcion) {
      case "1":
        agregarElemento();
        break;
      case "2":
        /* Busca y muestra la comida con precio mayor a $7000 */
        console.log("------------------");
        console.log("Comida con precio mayor a $7000");
        for (let i = 0; i < comidas.length; i++) {
          if (comidas[i].precio > 7000) {
            console.log(
              `Las comidas con un precio superior a $7000 son: ${comidas[i].nombre} , Precio: $${comidas[i].precio}`
            );
          }
        }
        break
      case "3":
        eliminarElemento();
        break;
      case "4":
        /* muestra el contenido del array de objetos */
        let contador = 1;
        for (const comida of comidas) {
          console.table(
            `${contador} - Nombres:${comida.nombre} , Precio: ${comida.precio}`
          );
          contador += 1;
        }
        break
       case '5':
        alert('Llegaste al final')
        break
    }
  } while (opcion != "5");
}

miMenuDeOpciones();
//* Para resolver el ejercicio me guie de la siguiente pagina:
//* https://www.freecodecamp.org/espanol/news/tabla-hash-en-javascript-hash-de-arreglo-asociativo-en-js/

console.log("Ejercicio 1");
function convertirTexto(text) {
  //Crear una funcion para generar el hash de un texto como numero entero
  //Usando métodos ya establecidos
  //Aqui tu codigo

  typeof text != "string" ? TypeError("Ingrese un texto") : null;

  !text ? TypeError("Ingrese un texto") : null;

  let chain = text.split("");

  return chain.reduce(
    (h, a) => (h = a.charCodeAt(0) + (h >> 6) + (h >> 16) - h),
    0
  );
}

try {
  console.log(convertirTexto("Hola Mundo"));
} catch (e) {
  console.log(e.message);
}

console.log("Ejercicio 2");
function HashTable() {
  //      Hash Table
  //      Una hash table contiene un arreglo de "contenedores" donde puede guardar información.
  //      Para guardar un valor asociado a una key (string):
  //    - Correr la key a través de una función hash para transformarla a un número entero.
  //    - Establecer el par llave/valor en tu tabla hash -- Usa un set
  //    - Devuelve el valor almacenado en la tabla[índice] -- Usa un get
  //      Aqui tu codigo

  const table = new Map();

  table.set("Hola Mundo", 1);
  table.set("Mundo Hola", 2);
  table.set("Fede rivero", 3);
  table.set("Rivero Fede", 4);
  table.set("San Juan Tec", 5);
  table.set("Tec San Juan", 6);
  table.set("JavaScript", 7);

  return console.log(table);
}

HashTable();

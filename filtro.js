// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

// * Se corrige el tipo de elemento llamado ya que se utiliza un id
// const li = document.getElementsByName("lista-de-productos")
const li = document.getElementById("lista-de-productos")
// !Ahorita vemos que onda aqui
// * Este selector hace referencia al input que sirve para filtrar
const $i = document.querySelector('input');

// * Iteramos sobre el array de objetos que contiene la información de los productos, posiblemente un for each seria mejor
for (let i = 0; i < productos.length; i++) {
  // * Se crea un div para almacenar el elemento que se crea
  var d = document.createElement("div")
  d.classList.add("producto")

  // * Se crea el elemento donde se coloca el titulo del producto
  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  // * Se crea el elemento donde se coloca la imagen del producto
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  // * Se pintan los elementos en el DOM dentro del contenedor creado al inicio
  d.appendChild(ti)
  d.appendChild(imagen)

  // * Cada elemento se coloca dentro del contenedor padre que YA esta creado en el html, si no no habria donde colocar todos los elementos nuevos
  li.appendChild(d)
}

// * Esta fución no hace nada
// displayProductos(productos)
const botonDeFiltro = document.querySelector(".button");

// * Evento que se genera al presionar el boton de filtro, dispara una función que pinta los productos ya con el filtrado
botonDeFiltro.onclick = function() {
  // * creamos un ciclo para eliminar TODOS los elementos creados al principio ya que si no los borramos se van a poner por debajo los nuevos elementos filtrados
  while (li.firstChild) {
    // * mientras exista un primer elemento tipo li de "lista-de-productos", se remueven estos elementos creados con anterioridad
    li.removeChild(li.firstChild);
  }

  // * obtenemos el valor de entrada del input del filtro
  const texto = $i.value;
  console.log(texto);
  // * Se crea una variable que almacena el array YA filtrado
  const productosFiltrados = filtrado(productos, texto );

  // * Se itera el nuevo array ya filtrado
  for (let i = 0; i < productosFiltrados.length; i++) {
    // * Se crea un div para almacenar el elemento que se crea y se van almacenando los nuevos valores obtenidos
    // * realmente es el mismo procedimiento que se hace al principio cuando se pintan TODOS los elementos del array original
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

// * Función flecha para filtrar datos tomando el array de productos y el valor texto (el del input del filtro) del cual hace la comparación
// * Retorna una función flecha de utilizando el metodo .includes() que determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
// * que a su vez mediante el metodo .filter() crea un nuevo arreglo y devuelve todos los elementos que pasan la condición especificada en la llamada en el callback
// * en este caso se evalua 2 condiciones por lo que podemos filtrar mediante el atributo tipo o color del array de objetos de productos
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  
let frutas = ["limon", "Frutilla", "Sandia", "Manzana"]// tipo de dato string
let numeros = [1, 2, 3, 4, 5, 6]// tipo de dato numero
let combinacion = [5, 6, "una palabra", "otra palabra"]

let productos = [
    {
        nombre: 'Remera Nike',//productos posicion 0
        precio: 7000,
        categoria: 'Remeras',
    },
    {
        nombre: 'Gorras adidas',//productos posicion 1
        precio: 8000,
        categoria: 'Gorras',
    },
    {
        nombre: 'Zapatillas VANS',//productos posicion 2
        precio: 17000,
        categoria: 'Zapatillas',
    }
];

//console.log(productos[0]);// sentencia que en la terminal muestra objetos con posicion "0", despues de los corchetes el "." permite filtras por tipos
//console.log(productos[0].nombre)// filtra por tipo en un lista

// varios console.log para mostrar elementos en la propiedad mostrando en una columna
console.log("productos: " + productos[0].nombre);
console.log("precio: " + productos[0].precio);
console.log("categoria: " + productos[0].categoria);

// para buscar un error entre cientos de lineas utilizamos "console.log"
//let n1 = 15
//let n2 = undefined
//let suma = n1 +n2;
//console.log(n2);

// ciclo for//
//let contador = 1;
for (let contador = 1; contador <= 5; contador++) {
    console.log("estamos en el numero" + contador);
}














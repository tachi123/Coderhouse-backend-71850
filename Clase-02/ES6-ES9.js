const objetos = [ 
    { manzanas: 3, peras: 2, carne: 1, jugos: 5, dulces: 2 },
    { manzanas: 1, sandias: 1, huevos: 6, jugos: 2, panes: 4 } 
];

//Quedarme solo con los nombres de lo vendido
let listaNombresCompleta = [];

objetos.forEach(
    arrayDeProductos => listaNombresCompleta = {...listaNombresCompleta, ...Object.keys(arrayDeProductos)}
)
console.log(listaNombresCompleta);

//Saber la cantidad total de productos vendidos
let soloCantidades = objetos.map(
    cadaVenta => Object.values(cadaVenta).reduce( (unNum, acumulado) => unNum + acumulado)
);
const totalProductos = soloCantidades.reduce( (unNum, acumulado) => unNum + acumulado);

console.log(totalProductos);
/* PUNTO 1 */

/* SE INGRESA UNA LISTA */

const lista = [ 36, 42, 8, 38, 31, 56, 59, 24, 96, 3, 88];


let listaOrdenada = [];

for(let i=0; i < lista.length / 2; i++) {

    if (lista[i] < lista[lista.length-i-1]) {
        listaOrdenada[i] = lista[i] ;
        listaOrdenada[lista.length-i-1] = lista[lista.length-i-1]  ;
    } else {
        listaOrdenada[i] = lista[lista.length-i-1] ;
        listaOrdenada[lista.length-i-1] = lista[i] ;
    }
}

/* DEVUELVE */

console.log('Punto 1: Lista inicial',lista);
console.log('Punto 1: Lista ordenada',listaOrdenada);



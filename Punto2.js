/* PUNTO 2 */


/* MODO IMPERATIVO */

let number = 3
;

agustin = function(number) {
    if(number < 0) {
        console.log('N debe ser un número natural');
    } else if (number == 0) {
        console.log( `El factorial de ${number} es 1` );
    } else {
        let fact = 1;
        for( let i=1; i <= number; i++) {
            fact *= i;
        }
        console.log('Punto 2: Método Imperativo: Numero N =', number)
        console.log('Punto 2: Método Imperativo: Factorial de N =',fact);
    }
} 

agustin(number);



/* MODO FUNCTIONAL */ 

function factorial(number) {
    if( number == 0 || number == 1) {
        return 1
    } else {
        return number * factorial(number-1);
    }
} 


respuesta = factorial(number);

console.log('Punto 2: Método FUNCIONAL: Numero N =', number)
console.log('Punto 2: Método FUNCIONAL: Factorial de N =',respuesta);




/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

// DISCLAIMER: I will not check for input type errors, because I'm building the test cases, but in a real case i would test
// for input types before making calculations

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(n1,n2){
    if (Number.isInteger(n1) && Number.isInteger(n2)){
        return n1 === n2 ? (n1 + n2) * 3 : n1 + n2
    }
    else{
        return 'One of the two numbers is not an integer!'
    }

}

// test case equal numbers
console.log('\nTest case crazySum with n1 === n2')
let res = crazySum(2,2)
console.log(`Result of crazySum with 2 and 2: ${res}`)

// test case different numbers
console.log('\nTest case crazySum with n1 !== n2')
let res2 = crazySum(2,5)
console.log(`Result of crazySum with 2 and 5: ${res2}`)

// test case not integer number
console.log('\nTest case crazySum with n1 or n2 not integer')
let res3 = crazySum(2,5.8)
console.log(`Result of crazySum with 2 and 5.8: ${res3}`)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n1){
    if (Number.isInteger(n1)){
        const minValue = 20
        const maxValue = 100
        const specialValue = 400
        return (n1 >= minValue && n1 <= maxValue) || n1 === specialValue  ? true : false
    }
    else{
        return 'The number is not an integer!'
    }
}

// test case n1 inside range
console.log('\nTest case boundary with n1 inside range')
let bResult = boundary(20)
console.log(`Result of boundary with 20: ${bResult}`)

// test case n1 outside range
console.log('\nTest case boundary with n1 otuside range')
let bResult2 = boundary(2)
console.log(`Result of boundary with 2: ${bResult2}`)

// test case n1 with special case value
console.log('\nTest case boundary with n1 === 400')
let bResult3 = boundary(400)
console.log(`Result of boundary with 400: ${bResult3}`)

// test case n1 not integer
console.log('\nTest case boundary with n1 not integer')
let bResult4 = boundary(3.5)
console.log(`Result of boundary with 3.5: ${bResult4}`)

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(s1){
    if (typeof(s1) === 'string'){
        // with split, i transform the string in an array. Then, i can revers it. Finally, i can join it again to form a string
        return s1.split("").reverse().join("")
    }
    else{
        return 'This is not a string!'
    }
}

// test case s1 is a string
console.log('\nTest case reverseString with a string')
let sResult = reverseString('Kwisatz Haderach')
console.log(`Result of reverseString with Kwisatz Haderach: ${sResult}`)

// test case s1 is not a string
console.log('\nTest case reverseString with something that\'s not a string')
let sResult2 = reverseString(123456)
console.log(`Result of reverseString with 123456: ${sResult2}`)


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(s1){
    if (typeof(s1) === 'string'){
        // first thing first, i split the string into an array of words
        let s1Arr = s1.split(" ")
        // here i will store the processed string
        let resultArray = []
        // for each word in the array
        for (let word of s1Arr){
            // i take the first letter and convert it to upper case
            initialLetter = word.split("")[0].toUpperCase()
            // i split the single word into an array of letters
            splittedWord = word.split("")
            // i replace the first one with the upper case version
            splittedWord[0] = initialLetter
            // i push the full word into the resultArray
            resultArray.push(splittedWord.join(""))
        }
        // i return the joined result Array with spaces in between words
        return resultArray.join(" ")
    }
    else{
        return 'This is not a string!'
    }
}

// test case s1 is not a string
console.log('\nTest case upperFirst with something that\'s not a string')
let us1 = upperFirst(654321)
console.log(`Result of upperFirst with 654321: ${us1}`)

// test case s1 is a single word
console.log('\nTest case upperFirst with a single word')
let us2 = upperFirst('hello')
console.log(`Result of upperFirst with hello: ${us2}`)

// test case s1 is a single word
console.log('\nTest case upperFirst with multiple words')
let us3 = upperFirst('hello it\'s me, my name is Rob')
console.log(`Result of upperFirst with hello it\'s me, my name is Rob: ${us3}`)

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

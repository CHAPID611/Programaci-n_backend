// Tipos basicos variables
// datos estudiante
const Name = 'Nenfar Chapid';
console.log(Name, 'name01');
const age = 21;
console.log(age, 'ageNenfar');
const career = 'Desarrollo de software';
console.log(career, 'careerNenfar');
const isActive = true;
console.log(isActive, 'isActiveNenfar');




// otros tipos

// array
const products: Array<number> = [2, 3, 4, 6, 3];
const books: Array<any> = ['coffe', 'bread'];
const stores: number[] = [9, 4, 7, 3];
const coinn: string[] = ['hola', 'hello', 'status'];
const peopleOne: any[] = ['array', 1, true, { id: 1, name: 'brayan' }];

// tuple
let dateOne: [string, number, boolean];
dateOne = ['1', 10, true];
console.log(dateOne);
//array de tuplas
const mixed: [number, string][]=[
    [1,'one'],
    [2, 'two'],
    [3, 'three']
];
//manipulacion de arrays
const numberOne1 : number[]=[1,2,3,4,5];
//añadir elementos
numberOne1.push(6);//[1,2,3,4,5,6];
//eliminar elementos
numberOne1.pop();//[1,2,3,4,5];
//encontrar el indice de un elemento
const index = numberOne1.indexOf(3)//2

// enum
enum Color { Rojo, Verde, Azul}
const c: Color = Color.Verde;
console.log(`\nNumero de color: ${c}`);
enum Dias{
    id=1,
    tipo,
    name,
    product
}

enum Dia { Lunes = 1, Martes, Miercoles }
const d: Dia = Dia.Miercoles;
console.log(`Numero de Dia: ${d}`);
console.log(Dias[1],'dia');
console.log(Dias.tipo);

//void
function saludar(): void {
    const aux : any = [1,2,3,4,5];
    let sum = 0;
    for(let i=0; i<aux.length; i++){
        sum+=aux[i];
    }
    console.log(sum);
};

//object
let car : {make:string, year:number }={
    make:'toyota',
    year: 2025
}
//null y undefined
let nothing : any= null;
nothing = 'hello';
let notDeined : undefined = undefined;

//union 
let value : number | string | boolean = 42;

//clases

//--------------------------------
const numbers: Array<number> = [1,2,3,4,5];

//Array de tuplas
/* const mixed: [number, string] = [
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
] */

const numberOne: number[] = [1,2,3,4,5];
const stringOne: string[] = ['1','2','3','4','5'];
numberOne.push(6); //añade en la ultima posision
console.log(numberOne);
numberOne.pop(); //elimina el ultimo elemento '6'

// encontrar el indice de un elemento dentro del Arry
const indexNumber = numberOne.indexOf(3); //2
console.log(numberOne, 'numberone')

const indexString = stringOne.indexOf('1'); //2
console.log(indexString, 'indexString');

// extraer parte del Array
const sliceNumber = numberOne.slice(1,4); // [2,3,4] tare desde la pos 1 a 4

// map para transformar los elementos 
const square = numbers.map((item) => item * 2); // [2,]

// filter
const evenNumber = numbers.filter((num) => num % 2 ===0); // [2,4] numeros pares

const coin : any[] = [
    {
        id: 1,
        name: 'pesos',
        code: 'COP'
    },
    {
        id: 2,
        name: 'dolar',
        code: 'USD'
    },
    {
        id: 3,
        name: 'ecua',
        code: 'USD'
    }
];

const coinFilter = coin.filter((coinn) => coinn.code === 'USD') // accede al objeto(s) que tenga code:'USD'
console.log(coinFilter, 'coinFiltter');

// reduce: sumar todos los elementos
const sum = numbers.reduce((acumulator, currentValue) => acumulator + currentValue, 0);

// dividir la cadena de texto en un array
const sentence : string = 'Hello world TypeScript is great'
const word : string[] = sentence.split(' ');// puede separarse como quiera poner
console.log(word, 'Split');

//join: une array con separador personalizado en un texto
const joinSentences: string = word.join('');
const numberArrayCoins : number[] = [1,2,3];
const joinNumberArrayCoins : string = numberArrayCoins.join('_');
console.log(joinNumberArrayCoins);

// find: encontrar 
const numbersTwo: number[] = [10,20,30,40];
const foundNumber: number | undefined = numbersTwo.find((num) => num > 25);
console.log(foundNumber,'foundNumber')

const foundIndex: number | undefined = numbersTwo.find((num) => num > 25);
console.log(foundIndex,'foundIndex')

// every: debe cumplirse en todos similar a && solo devuelve true o false
const allPositive: boolean = numbersTwo.every((num) => num > 0);
console.log(allPositive, 'allPositive');

//some: los que cumplan, siimilar a ||
const someNumbers: boolean = numbersTwo.every((num) => num > 0);
console.log(someNumbers, 'allPositive');

// concat: unir arrays
const array1: number[] =[1,2,3];
const array2: number[] =[4,5,6];
const combinedArray: number[] = array1.concat(array2);
console.log(combinedArray, 'concatArray');

// sort: ordena de menor a mayor
const unsurtedNumbers: number[] = [5,1,2,4,3];
const sortedNumbers: number[] = unsurtedNumbers.sort((a,b) => a - b); // de menor a mayor, de > a < == b-a
console.log(sortedNumbers, 'sortedNumbers')

//sort: ordena en orden alfabetico
const names: string[] = ['Carlie', 'Alice', 'Bob'];
const sortedNames: string[] = names.sort();
console.log(sortedNames, 'sortedNames')

// reverse: sentido contrario
const reverseNumbers: number[] = sortedNumbers.reverse();
console.log(reverseNumbers, 'reverseNumbers');

// uso 'includes' para verificar la existencia de un elemento
const auxNumbersArray: number[] = [1,2,3,4,5,6,9,2,1];
let aut: any = [];

for(let i = 0; i < auxNumbersArray.length; i++){
    if(!aut.includes((auxNumbersArray[i])))
    {
        aut.push(auxNumbersArray[i]);
    }else{
        console.log('El numero ya existe');
    }
}
console.log(aut,'aut');
const hasFour: boolean =numbersTwo.includes(4);
console.log(hasFour, 'hasFour');


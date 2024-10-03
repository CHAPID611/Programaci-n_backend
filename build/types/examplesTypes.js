const Name = 'Nenfar Chapid';
console.log(Name, 'name01');
const age = 21;
console.log(age, 'ageNenfar');
const career = 'Desarrollo de software';
console.log(career, 'careerNenfar');
const isActive = true;
console.log(isActive, 'isActiveNenfar');
const products = [2, 3, 4, 6, 3];
const books = ['coffe', 'bread'];
const stores = [9, 4, 7, 3];
const coinn = ['hola', 'hello', 'status'];
const peopleOne = ['array', 1, true, { id: 1, name: 'brayan' }];
let dateOne;
dateOne = ['1', 10, true];
console.log(dateOne);
const mixed = [
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
];
const numberOne1 = [1, 2, 3, 4, 5];
numberOne1.push(6);
numberOne1.pop();
const index = numberOne1.indexOf(3);
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
const c = Color.Verde;
console.log(`\nNumero de color: ${c}`);
var Dias;
(function (Dias) {
    Dias[Dias["id"] = 1] = "id";
    Dias[Dias["tipo"] = 2] = "tipo";
    Dias[Dias["name"] = 3] = "name";
    Dias[Dias["product"] = 4] = "product";
})(Dias || (Dias = {}));
var Dia;
(function (Dia) {
    Dia[Dia["Lunes"] = 1] = "Lunes";
    Dia[Dia["Martes"] = 2] = "Martes";
    Dia[Dia["Miercoles"] = 3] = "Miercoles";
})(Dia || (Dia = {}));
const d = Dia.Miercoles;
console.log(`Numero de Dia: ${d}`);
console.log(Dias[1], 'dia');
console.log(Dias.tipo);
function saludar() {
    const aux = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i = 0; i < aux.length; i++) {
        sum += aux[i];
    }
    console.log(sum);
}
;
let car = {
    make: 'toyota',
    year: 2025
};
let nothing = null;
nothing = 'hello';
let notDeined = undefined;
let value = 42;
const numbers = [1, 2, 3, 4, 5];
const numberOne = [1, 2, 3, 4, 5];
const stringOne = ['1', '2', '3', '4', '5'];
numberOne.push(6);
console.log(numberOne);
numberOne.pop();
const indexNumber = numberOne.indexOf(3);
console.log(numberOne, 'numberone');
const indexString = stringOne.indexOf('1');
console.log(indexString, 'indexString');
const sliceNumber = numberOne.slice(1, 4);
const square = numbers.map((item) => item * 2);
const evenNumber = numbers.filter((num) => num % 2 === 0);
const coin = [
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
const coinFilter = coin.filter((coinn) => coinn.code === 'USD');
console.log(coinFilter, 'coinFiltter');
const sum = numbers.reduce((acumulator, currentValue) => acumulator + currentValue, 0);
const sentence = 'Hello world TypeScript is great';
const word = sentence.split(' ');
console.log(word, 'Split');
const joinSentences = word.join('');
const numberArrayCoins = [1, 2, 3];
const joinNumberArrayCoins = numberArrayCoins.join('_');
console.log(joinNumberArrayCoins);
const numbersTwo = [10, 20, 30, 40];
const foundNumber = numbersTwo.find((num) => num > 25);
console.log(foundNumber, 'foundNumber');
const foundIndex = numbersTwo.find((num) => num > 25);
console.log(foundIndex, 'foundIndex');
const allPositive = numbersTwo.every((num) => num > 0);
console.log(allPositive, 'allPositive');
const someNumbers = numbersTwo.every((num) => num > 0);
console.log(someNumbers, 'allPositive');
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = array1.concat(array2);
console.log(combinedArray, 'concatArray');
const unsurtedNumbers = [5, 1, 2, 4, 3];
const sortedNumbers = unsurtedNumbers.sort((a, b) => a - b);
console.log(sortedNumbers, 'sortedNumbers');
const names = ['Carlie', 'Alice', 'Bob'];
const sortedNames = names.sort();
console.log(sortedNames, 'sortedNames');
const reverseNumbers = sortedNumbers.reverse();
console.log(reverseNumbers, 'reverseNumbers');
const auxNumbersArray = [1, 2, 3, 4, 5, 6, 9, 2, 1];
let aut = [];
for (let i = 0; i < auxNumbersArray.length; i++) {
    if (!aut.includes((auxNumbersArray[i]))) {
        aut.push(auxNumbersArray[i]);
    }
    else {
        console.log('El numero ya existe');
    }
}
console.log(aut, 'aut');
const hasFour = numbersTwo.includes(4);
console.log(hasFour, 'hasFour');
//# sourceMappingURL=examplesTypes.js.map
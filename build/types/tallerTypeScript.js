const auxNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const auxString = ['1', '2', '3', '4', '5', '6', '7'];
const message = 'Bienvenidos al ITP';
const namesStudents = 'Michael, Anderson, Yadir, Kevin, Emerson';
const arrayProducts = [
    {
        id: 1,
        name: 'arroz',
        price: 1000,
        priceDiscount: 700
    },
    {
        id: 1,
        name: 'atun',
        price: 2500,
        priceDiscount: 1500
    }
];
const array01 = [1, 2, 3, 4];
const array02 = [6, 7, 8, 9];
auxNumber.push(10, 12, 15, 16, 17);
console.log(auxNumber, 'auxNumber push');
auxNumber.pop();
console.log(auxNumber, 'auxNumber pop');
const indexAuxNumber1 = auxNumber.indexOf(1);
const indexAuxNumber4 = auxNumber.indexOf(4);
const indexAuxNumber7 = auxNumber.indexOf(7);
console.log(indexAuxNumber1, 'indexAuxNumber1');
console.log(indexAuxNumber4, 'indexAuxNumber4');
console.log(indexAuxNumber7, 'indexAuxNumber7');
const sliceAuxNumber = auxNumber.slice(2, 9);
console.log(sliceAuxNumber, 'sliceAuxNumber 2-9');
const everyAuxNumber = auxNumber.every((num) => num > 1);
console.log(everyAuxNumber, 'everyAuxNumber nums>1');
const someAuxNumber = auxNumber.some((num) => num >= 7);
console.log(someAuxNumber, 'someAuxNumber nums>=7');
auxString.push('10', '11', '12', '13', '14');
console.log(auxString, 'push 10,11,12,13,14');
const indexAuxString11 = auxString.indexOf('11');
const indexAuxString12 = auxString.indexOf('12');
const indexAuxString14 = auxString.indexOf('14');
console.log(indexAuxString11, 'indexAuxString11');
console.log(indexAuxString12, 'indexAuxString12');
console.log(indexAuxString14, 'indexAuxString14');
const splitMessage = message.split(' ');
console.log(splitMessage, 'splitMessage " "');
const joinMessage = splitMessage.join(',');
console.log(joinMessage, 'joinMessage ","');
const splitNamesStudents = namesStudents.split(',');
console.log(splitNamesStudents, 'splitNamesStudents ","');
const joinNamesStudents = splitNamesStudents.join(' ');
console.log(joinNamesStudents, 'joinNamesStudents " "');
const filterPrice = arrayProducts.filter((array) => array.price > 900);
console.log(filterPrice, 'filterPrice > 900');
let arrayP = [];
for (let i = 0; i < arrayProducts.length; i++) {
    if (arrayProducts[i].price > 900) {
        arrayP.push(arrayProducts[i]);
    }
}
console.log(arrayP, 'for');
const findArrayProducts = arrayProducts.find((first) => first.priceDiscount > 500);
console.log(findArrayProducts, 'findPriceDiscount>500');
const findIndexArray = arrayProducts.findIndex((firstIndex) => firstIndex.price > 1000);
console.log(findIndexArray, 'firstIndex>1000');
arrayProducts.push({
    id: 3,
    name: 'yogurt',
    price: 3000,
    priceDiscount: 2500
}, {
    id: 4,
    name: 'spaguetti',
    price: 2000,
    priceDiscount: 1800
}, {
    id: 5,
    name: 'azucar',
    price: 3500,
    priceDiscount: 3000
});
console.log(arrayProducts, ' arrayProduct push');
const concatArrays = array01.concat(array02);
console.log(concatArrays, 'concatArrays');
array01.push(...array02);
console.log(array01, 'pushArrays');
const sortArray = concatArrays.sort((a, b) => b - a);
console.log(sortArray, 'sortArray');
const sortArray2 = concatArrays.sort((a, b) => a - b);
const reverseArray = concatArrays.reverse();
console.log(reverseArray, 'reverseArray');
//# sourceMappingURL=tallerTypeScript.js.map
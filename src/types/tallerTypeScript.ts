//1
//agregar al array por medio de push= 10, 12, 15, 16, 17
//eliminar el ultimo elmento con pop
//encontrar el indice de un elemento = 1, 4, 7, con indexof
//extraer una parte del array con slice desde la posicion 2-9
// verificar si los elementos son mayores que 1 con every
//verificar si algun elemnto es mayor o igual que 7 con some

//2
//en 2 punto agregar 10, 11, 12, 13, 14 push tipo string
//encontrar el indice de un elemento 11, 12, 14 con index of

//3
//dividir la cadena en un array de palabras donde el separador sea el espacio por split
//a la salida hacer join donde se separen por comas

//4
//dividir la cadena en un array de palabras donde el separador sea las comas por split
//a la salida aplicar join donde separe las palabras con espacios

//5
//filtrar en una constante donde el price sea mayor de 900 por filter y for
//encontrar el primer objeto del array donde el priceDiscount sea mayor a 500 por find
// encontrar el indice del primer elemento del array donde el price sea mayor que 1000 por medio de find index
//agregar tres nuevos objetos de productos por medio de push

//6
//concatenar el array01 con array 02 por medio de concat y push
//a la constante generada ordenar de mayor a menor por sort en otra const
//a la misma constante generada ordenar en forma descendente con reverse

//EJERCICIOS

//1
const auxNumber : number [] = [1,2,3,4,5,6,7,8,9];
//2
const auxString : string[] = ['1','2','3','4','5','6','7'];
//3
const message : string = 'Bienvenidos al ITP';
//4
const namesStudents : string = 'Michael, Anderson, Yadir, Kevin, Emerson';
//5
const arrayProducts: any[] =[
    {
    id:1,
    name: 'arroz',
    price: 1000,
    priceDiscount : 700
},
{
    id:1,
    name: 'atun',
    price: 2500,
    priceDiscount : 1500

}
]; 
//6
const array01 : number[] = [1,2,3,4];
const array02 : number[] = [6,7,8,9];
//1.1
//agregar al array por medio de push= 10, 12, 15, 16, 17
auxNumber.push(10,12,15,16,17);
console.log(auxNumber,'auxNumber push');
//1.2
//eliminar el ultimo elmento con pop
auxNumber.pop();
console.log(auxNumber,'auxNumber pop');
//1.3
//encontrar el indice de los elementos = 1, 4, 7, con indexOf
const indexAuxNumber1 = auxNumber.indexOf(1);
const indexAuxNumber4 = auxNumber.indexOf(4);
const indexAuxNumber7 = auxNumber.indexOf(7);
console.log(indexAuxNumber1, 'indexAuxNumber1');
console.log(indexAuxNumber4, 'indexAuxNumber4');
console.log(indexAuxNumber7, 'indexAuxNumber7');
//1.4
//extraer una parte del array con slice desde la posicion 2-9
const sliceAuxNumber = auxNumber.slice(2,9);
console.log(sliceAuxNumber, 'sliceAuxNumber 2-9');
//1.5
// verificar si los elementos son mayores que 1 con every
const everyAuxNumber : boolean = auxNumber.every((num)=> num >1);
console.log(everyAuxNumber, 'everyAuxNumber nums>1');
//1.6
//verificar si algun elemnto es mayor o igual que 7 con some
const someAuxNumber : boolean = auxNumber.some((num)=> num >=7);
console.log(someAuxNumber, 'someAuxNumber nums>=7');
//2
//2.1
//en 2 punto agregar 10, 11, 12, 13, 14 push tipo string
auxString.push('10','11','12','13','14');
console.log(auxString, 'push 10,11,12,13,14');
//2.2
//encontrar el indice de un elemento 11, 12, 14 con indexOf
const indexAuxString11 = auxString.indexOf('11');
const indexAuxString12 = auxString.indexOf('12');
const indexAuxString14 = auxString.indexOf('14');
console.log(indexAuxString11,'indexAuxString11');
console.log(indexAuxString12,'indexAuxString12');
console.log(indexAuxString14,'indexAuxString14');
//3
//3.1
//dividir la cadena en un array de palabras donde el separador sea el espacio por split
const splitMessage : string[] = message.split(' ');
console.log(splitMessage, 'splitMessage " "');
//3.2
//a la salida hacer join donde se separen por comas
const joinMessage : string = splitMessage.join(',');
console.log(joinMessage, 'joinMessage ","');
//4
//4.1
//dividir la cadena en un array de palabras donde el separador sea las comas por split
const splitNamesStudents : string[] = namesStudents.split(',');
console.log(splitNamesStudents, 'splitNamesStudents ","');
//a la salida aplicar join donde separe las palabras con espacios
const joinNamesStudents : string = splitNamesStudents.join(' ');
console.log(joinNamesStudents, 'joinNamesStudents " "');

//5
//5.1
//filtrar en una constante donde el price sea mayor de 900 por filter y for
//filter
const filterPrice = arrayProducts.filter((array) =>array.price > 900);
console.log(filterPrice, 'filterPrice > 900');
//for
let arrayP : any[] = [];
for(let i=0;i<arrayProducts.length;i++){
    if(arrayProducts[i].price >900){
        arrayP.push(arrayProducts[i])
    }
}
console.log(arrayP, 'for')
//5.2
//encontrar el primer objeto del array donde el priceDiscount sea mayor a 500 por find
const findArrayProducts : number = arrayProducts.find((first)=> first.priceDiscount>500);
console.log(findArrayProducts, 'findPriceDiscount>500');
//5.3
// encontrar el indice del primer elemento del array donde el price sea mayor que 1000 por medio de find index
const findIndexArray : number = arrayProducts.findIndex((firstIndex)=>firstIndex.price > 1000);
console.log(findIndexArray, 'firstIndex>1000');
//5.4
//agregar tres nuevos objetos de productos por medio de push
arrayProducts.push({
    id:3,
    name: 'yogurt',
    price: 3000,
    priceDiscount : 2500
},
{
    id:4,
    name: 'spaguetti',
    price: 2000,
    priceDiscount : 1800
},
{
    id:5,
    name: 'azucar',
    price: 3500,
    priceDiscount : 3000
}
);
console.log(arrayProducts,' arrayProduct push');
//6
//6.1
//concatenar el array01 con array 02 por medio de concat y push
//concat
const concatArrays : number[] = array01.concat(array02);
console.log(concatArrays, 'concatArrays');
//push
array01.push(...array02);
console.log(array01,'pushArrays');
//6.2
//a la constante generada ordenar de mayor a menor por sort en otra const
const sortArray : number[] = concatArrays.sort((a,b)=>b-a);
console.log(sortArray,'sortArray');
//a la misma constante generada ordenar en forma descendente con reverse
const sortArray2 : number[] = concatArrays.sort((a,b)=>a-b);
const reverseArray : number[] = concatArrays.reverse();
console.log(reverseArray, 'reverseArray');
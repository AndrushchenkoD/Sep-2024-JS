// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function squareRectangle(a,b){
// return a*b;
// }
// console.log(squareRectangle(2,2));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function squareCircle(r){
//     return 3.14*r*r;
// }
// console.log(squareCircle(4));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinderSquare(h,r){
//     return 2*r*3.14*(r+h);
// }
// console.log(cylinderSquare(2,3));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
// function arrayLogger(arr){
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// arrayLogger([1,2,3,4,5,5,5,5,5,5]);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
// function textCreator(text){
//     document.write(`<p>${text}</p>`);
// }
// textCreator('pum pum pum');

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
// function listCreator(liText){
//     document.write(`<ul>
//                         <li>${liText}</li>
//                         <li>${liText}</li>
//                         <li>${liText}</li>
//                     </ul>`);
// }
// listCreator('piy')

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// function listCreatorPro(liText,liAmount){
//     document.write(`<ul>`);
//     for (let i = 0; i < liAmount; i++) {
//         document.write(`<li>${liText}</li>`)
//     }
//     document.write(`</ul>`);
// }
// listCreatorPro('bam',4);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
// arr=[1,2,3,true,false,'hellooo'];
// function listForArray(array){
//     document.write(`<ul>`);
//     for (let arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`);
//     }
//     document.write(`</ul>`);
// }
// listForArray(arr);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users=[
//     {id:1,name:'carcar1',age:12},
//     {id:2,name:'carcar1',age:22},
//     {id:3,name:'carcar1',age:32},
//     {id:4,name:'carcar1',age:42},
//     {id:5,name:'carcar1',age:52},
//     {id:6,name:'carcar1',age:62}];
// function usersCreator(arrayOfUsers){
//     for (let user of arrayOfUsers) {
//         document.write(`<div>${user.id}-${user.name}-${user.age}</div>`);
//     }
// }
// usersCreator(users);

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
// let arr=[10,2,65,54];
// function minNumberChecker(array){
//     let minNum=array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (minNum>array[i]){
//             minNum=array[i];
//         }
//     }
//     return minNum;
// }
// console.log(minNumberChecker(arr));

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let numbers=[1,2,3,50];
// function sum(arr){
//     let tempLetka=0;
//     for (let i = 0; i < arr.length; i++) {
//         tempLetka=tempLetka+arr[i];
//     }
//     return tempLetka;
// }
// console.log(sum(numbers));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let numbers=[1,2,3,50];
// function swap(arr,index1,index2){
//     let tempLetka1=arr[index1];
//     arr[index1]=arr[index2];
//     arr[index2]=tempLetka1;
// }
// swap(numbers,0,1);
// console.log(numbers);

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
// function exchange(sumUAH,currencyValues,exchangeCurrency){
//     for (let currencyValuesElement of currencyValues) {
//         if (currencyValuesElement.currency===exchangeCurrency){
//             return sumUAH/currencyValuesElement.value;
//         }
//     }
// }
// let result=exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD');
// console.log(result);
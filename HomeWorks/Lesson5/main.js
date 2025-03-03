// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
//
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let calcRectangleSquare=(a,b)=>a*b;
// console.log(calcRectangleSquare(2, 3));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let calcCircleSquare=(r)=>3.14*r*r;
// console.log(calcCircleSquare(5));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let calcSquareCylinder=(h,r)=>2*r*3.14*(r+h);
// console.log(calcSquareCylinder(2, 4));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr=[1,2,3,true,'hello'];
// let arrayLogger=(array)=>{
//     for (let arrayElement of array) {
//         console.log(arrayElement);
//     }
// };
// arrayLogger(arr);

// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let textCreator=(text)=>document.write(`<p>${text}</p>`);
// textCreator('bang!!!');

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let UlListx3liCreator=(textLi)=>{
//     document.write(`<ul>
//                         <li>${textLi}</li>
//                         <li>${textLi}</li>
//                         <li>${textLi}</li>
//                     </ul>`)
// };
// UlListx3liCreator('BaDumTSSSS!!!');

// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let ulListCustom=(liText,liAmount)=>{
//     document.write(`<ul>`);
//     for (let i = 0; i < liAmount; i++) {
//         document.write(`<li>${liText}</li>`);
//     }
//     document.write(`</ul>`);
// };
// ulListCustom('brrrrbrbrrbrBRRRRR suuuu tutututu',6);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr=[1,6,12,true,false,'TOYOTAA'];
// let arrayListCreator=(array)=>{
//     document.write(`<ul>`);
//     for (let arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`);
//     }
//     document.write(`</ul>`);
// };
// arrayListCreator(arr);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users=[
//     {id:1,name:'carcar1',age:12},
//     {id:2,name:'carcar1',age:22},
//     {id:3,name:'carcar1',age:32},
//     {id:4,name:'carcar1',age:42},
//     {id:5,name:'carcar1',age:52},
//     {id:6,name:'carcar1',age:62}];
// let userCreator=(arrayOfUsers)=>{
//     for (const user of arrayOfUsers) {
//         document.write(`<div>`);
//         for (const userKey in user) {
//             document.write(`${userKey}--${user[userKey]} `)
//         }
//         document.write(`</div>`);
//     }
// };
// userCreator(users);

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
// let numbers=[56,232323,1313,1234,12,999];
// let minArrayNumber=(arr)=>{
// let minNumber=arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (minNumber>arr[i]){
//             minNumber=arr[i];
//         }
//     }
// return minNumber;
// }
// console.log(minArrayNumber(numbers));

// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let numbers=[1,2,3,50];
// let sum=(arr)=>{
//     let summator=arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         summator=summator+arr[i];
//     }
//     return summator;
// };
// console.log(sum(numbers));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let swap=(arr,index1,index2)=>{
//     let tempLetka=arr[index1];
//     arr[index1]=arr[index2];
//     arr[index2]=tempLetka;
// };
// let nmbrs=[1,2,3,4];
// swap(nmbrs,2,3);
// console.log(nmbrs);

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// let exchange=(sumUAH,currencyValues,exchangeCurrency)=>{
//     for (let currencyObj of currencyValues) {
//         if (currencyObj.currency===exchangeCurrency){
//             return sumUAH/currencyObj.value;
//         }
//     }
// };
// let result=exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');
// console.log(result);

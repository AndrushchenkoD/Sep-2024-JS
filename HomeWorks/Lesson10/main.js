//
// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// let disappear = document.createElement('div');
// disappear.id='text';
// disappear.classList.add('alpha');
// let btn=document.createElement('button');
// btn.innerText='hide div';
//
// btn.onclick=function () {
//     if (disappear.classList.contains('diss')){
//         disappear.classList.remove('diss');
//         btn.innerText='show div';
//     }else {
//         disappear.classList.add('diss');
//         btn.innerText='hide div';
//     }
// }
// document.body.append(disappear,btn);

//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let in1=document.createElement('input');
// let btn1=document.createElement('button');
// document.body.append(in1,btn1);
// in1.placeholder='Enter your age';
// btn1.innerText='submit';
// btn1.onclick=function () {
//     if (+in1.value<18){
//         alert('u so yooong!')
//     }else {
//         let old=document.createElement('div');
//         old.innerText='u soooo old heheee!';
//         document.body.append(old);
//     }
// }
//

// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
//
// let f1=document.createElement('form');
// document.body.append(f1);
//
// let inName=document.createElement("input");
// inName.placeholder='Name'
//
// let inSurName=document.createElement("input");
// inSurName.placeholder='Surname'
//
// let inAge=document.createElement("input");
// inAge.placeholder='Age';
//
// let btn=document.createElement("button");
// btn.innerText='Submit';
// f1.onsubmit=function (ev) {
//     ev.preventDefault();
//     let user={name:inName.value,surname:inSurName.value,age:inAge.value}
//     let div=document.createElement('div');
//     div.innerText=`${user.name}--${user.surname}--${user.age}`;
//     document.body.append(div);
// }
// f1.append(inName,inSurName,inAge,btn)


// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

// let div1=document.createElement('div');
// document.body.append(div1);
// window.onload=function () {
//     if (!localStorage.getItem('x')){
//         let x=0
//         localStorage.setItem('x',JSON.stringify(x));
//         div1.innerText=`${x}`;
//     }else{
//         let get=JSON.parse(localStorage.getItem('x'));
//         let x=get+1;
//         div1.innerText=`${x}`;
//         localStorage.setItem('x',JSON.stringify(x));
//     }
// }

//
// #LhSfdhM3 !!!!
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM


//
//
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
// let in1=document.createElement('input');
// in1.type='number';
// let p = document.createElement('p');
// document.body.append(in1,p);
// in1.oninput=function (){
//     const conFnt=2.20462262;
//     let fnt=+in1.value*conFnt;
//     p.innerText=`${fnt}`;
// }

// #RbQGnH5DuC !!!!
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
//
// let addToLocalStorage=function (arrayName,objToAdd) {
//         let existingArray = JSON.parse(localStorage.getItem(arrayName)) || [];
//         if (typeof objToAdd === 'object'&&!objToAdd == null ){
//                 existingArray.push(objToAdd);
//         }
//         localStorage.setItem(`${arrayName}`,JSON.stringify(objToAdd));
// }
// addToLocalStorage("Arw",{name:'Vasya',age:12});

//
//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// let f1=document.createElement('form');
// document.body.append(f1);
//
// let in1=document.createElement("input");
// in1.type='number';
// in1.placeholder='insert amount of rows';
//
// let in2=document.createElement("input");
// in2.type='number';
// in2.placeholder='insert amount of columns';
//
// let in3=document.createElement("input");
// in3.placeholder='insert some data';
//
// let btn=document.createElement("button");
// btn.innerText=`Submit`;
//
// f1.append(in1,in2,in3,btn);
// f1.onsubmit=function (ev) {
//     ev.preventDefault();
//     let table=document.createElement('table');
//     document.body.append(table);
//     for (let i = 0; i < in1.value; i++) {
//         let tr=document.createElement("tr");
//         table.append(tr)
//         for (let j = 0; j < in2.value; j++) {
//             let td=document.createElement('td');
//             td.innerText=`${in3.value}`
//             tr.append(td)
//
//         }
//     }
// }

//
//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
// let div=document.createElement('div');
//
// if (!localStorage.getItem('timeValue')){
//     let time=Date.now();
//     localStorage.setItem("timeValue",JSON.stringify(time));
//     diffTime=0;
// }else {
//     storeTime = JSON.parse(localStorage.getItem('timeValue'));
//     diffTime = (Date.now() - storeTime)/1000;
//     console.log(diffTime)
//     let time = Date.now();
//     localStorage.setItem("timeValue", JSON.stringify(time));
// }
//
//
//
// if (!localStorage.getItem('value')){
//     const x=100;
//     localStorage.setItem('value',JSON.stringify(x))
//     div.innerText=`${x}`;
// }else {
//     if (diffTime>10){
//         let getter=localStorage.getItem('value');
//         x=JSON.parse(getter)+10;
//         div.innerText=x;
//         localStorage.setItem('value',JSON.stringify(x))
//     }else {
//         let getter=localStorage.getItem('value');
//         x=JSON.parse(getter);
//         localStorage.setItem('value',JSON.stringify(x))
//         div.innerText=`${x}`;
//     }
// }
// document.body.append(div);




// #NKB0tgWIK1G
// // ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
// window.onload=function () {
//     pagination();
// }
//
// let arr=[];                       //
// for (let i = 1; i < 101; i++) { //
//     arr.push(i+'a');                    // створив масив від 1а до 100а
// }                                       //
// console.log(arr)
//
// let currentPage=1;
//
// let pagination=function (){
//     document.body.querySelectorAll("p").forEach(value => value.remove())
//     let XXX=currentPage*10;
//     console.log(XXX);
//     for (let i = XXX-10; i < XXX ; i++) {
//         console.log(arr[i]);
//         let p =document.createElement('p');
//         p.innerText=`${arr[i]}`;
//         document.body.append(p);
//     }
// }
//
// let next=document.createElement("button");
// next.innerText=`NEXT`;
// next.onclick=function () {
//     if (currentPage<10){
//         currentPage++;
//         pagination();
//     }}
// let prev=document.createElement("button");
// prev.innerText=`PREV`;
// prev.onclick=function () {
//     if (currentPage>1){
//         currentPage--;
//         pagination();
//     }
// }
//
// document.body.append(prev,next);
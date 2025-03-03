// // #8Nmt60ZT
// // - створити блок,
// let d1=document.createElement('div');
// //     - додати йому класи wrap, collapse, alpha, beta
// d1.classList.add('wrap','collapse','alpha','beta');
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // - додати цей блок в body.
// document.body.appendChild(d1);
// // - клонувати його повністю, та додати клон в body.
// let d2=d1.cloneNode(true);
// document.body.appendChild(d2);
//
// //     #OPLI89c9G
// // - Є масив:
// let arr=   ['Main','Products','About us','Contacts'];
// // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// let ul1=document.createElement('ul');
// document.body.appendChild(ul1);
// for (const arrElement of arr) {
//     const li1 = document.createElement('li');
//     ul1.appendChild(li1);
//     li1.innerText=`${arrElement}`;
// }
//
// #jeBqHV525U5
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let courseDiv=document.createElement('div');
//     document.body.appendChild(courseDiv);
//     for (const courseDivKey in coursesAndDurationArrayElement) {
//         const couseP=document.createElement('p');
//         courseDiv.appendChild(couseP);
//         couseP.innerText=`${courseDivKey}--${coursesAndDurationArrayElement[courseDivKey]}`;
//     }
// }
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// =========================
//     #Kx1xgoKy8
//     - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let courseDiv=document.createElement('div');
    document.body.appendChild(courseDiv);
    courseDiv.classList.add('item');
    for (const courseDivKey in coursesAndDurationArrayElement) {
        if (courseDivKey==='title'){
            let courseH1=document.createElement('h1');
            courseH1.classList.add('heading');
            courseH1.innerText=`${courseDivKey} = ${coursesAndDurationArrayElement.title}`;
            courseDiv.append(courseH1);
        }
       else {
            let courseP=document.createElement('p');
            courseP.classList.add('description');
            courseP.innerText=`${courseDivKey} = ${coursesAndDurationArrayElement.monthDuration}`;
            courseDiv.append(courseP);
       }
    }
}
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
// ==========================
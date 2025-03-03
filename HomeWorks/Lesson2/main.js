/*
Масиви та об'єкти
#67kfznmiMl
- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
*/
// let arr=[1,2,3,true,false,'one',4,5,'two','three'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);
/*
#LARqoUj5I
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
*/
// let book1={title:'book1',pageCount:'100',genre:'romantic'};
// let book2={title:'book1',pageCount:'100',genre:'romantic'};
// let book3={title:'book1',pageCount:'100',genre:'romantic'};
/*
    #sA3Gg1sCp
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
*/
// let book1={
//     title:'book1',
//     pageCount:'100',
//     genre:'romantic',
//     authors:[
//         {
//             name:'Author11',
//             age:'41'
//         },
//         {
//             name:'Author12',
//             age:'42'
//         }
//         ]
// };
// let book2={
//     title:'book2',
//     pageCount:'200',
//     genre:'drama',
//     authors:[
//         {
//             name:'Author21',
//             age:'31'
//         },
//         {
//             name:'Author22',
//             age:'32'}
//     ]
// };
// let book3={
//     title:'book3',
//     pageCount:'300',
//     genre:'detective',
//     authors:[
//         {
//             name:'Author1',
//             age:'41'
//         },
//         {
//             name:'Author2',
//             age:'42'
//         }
//         ]
// };
/*
    #jCHFnEbdmFd
- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username, password. Вивести в консоль пароль кожного користувача
*/
// let arr=[
//     {name:'Vasya',username:'PopI',password:'123123123'},
//     {name:'Petya',username:'Blast',password:'111111111'},
//     {name:'KAtya',username:'KabooM',password:'qweqweqwe'},
//     {name:'Igor',username:'Ruster',password:'qwertyuio'},
//     {name:'Lilya',username:'Dust',password:'zxcvbnm,.'},
//     {name:'Nazar',username:'Spy',password:'asdfghjkl'},
//     {name:'Alik',username:'Detective',password:'12qwe123q'},
//     {name:'Jon',username:'Killer',password:'qwert1231'},
//     {name:'Paaul',username:'Doctor',password:'ASdAdAdDa'},
//     {name:'Pablo',username:'Policeman',password:'000000000'}
// ]
// console.log(arr[0].password);
// console.log(arr[1].password);
// console.log(arr[2].password);
// console.log(arr[3].password);
// console.log(arr[4].password);
// console.log(arr[5].password);
// console.log(arr[6].password);
// console.log(arr[7].password);
// console.log(arr[8].password);
// console.log(arr[9].password);
/*
#coYydZuaeEB
- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
*/
// let WeekTemperature=[
//     {day:'One',morning:'+17',afternoon:'+22',evening:'+20'},
//     {day:'Two',morning:'+16',afternoon:'+23',evening:'+19'},
//     {day:'Three',morning:'+18',afternoon:'+20',evening:'+19'},
//     {day:'Four',morning:'+19',afternoon:'+25',evening:'+21'},
//     {day:'Five',morning:'+13',afternoon:'+18',evening:'+17'},
//     {day:'Six',morning:'+12',afternoon:'+17',evening:'+16'},
//     {day:'Seven',morning:'+15',afternoon:'+18',evening:'+15'},
// ];
// console.log(WeekTemperature[0]);

// let WeekTemperature= {
//     day1:{morning: '+17', afternoon: '+22', evening: '+20'},
//     day2:{morning: '+16', afternoon: '+23', evening: '+19'},
//     day3:{morning: '+18', afternoon: '+20', evening: '+19'},
//     day4:{morning: '+19', afternoon: '+25', evening: '+21'},
//     day5:{morning: '+13', afternoon: '+18', evening: '+17'},
//     day6:{morning: '+12', afternoon: '+17', evening: '+16'},
//     day7:{morning: '+15', afternoon: '+18', evening: '+15'},
// };
//
// console.log(WeekTemperature.day1);

// let WeekTemperature=[
//     day1={morning:'+17',afternoon:'+22',evening:'+20'},
//     day2={morning:'+16',afternoon:'+23',evening:'+19'},
//     day3={morning:'+18',afternoon:'+20',evening:'+19'},
//     day4={morning:'+19',afternoon:'+25',evening:'+21'},
//     day5={morning:'+13',afternoon:'+18',evening:'+17'},
//     day6={morning:'+12',afternoon:'+17',evening:'+16'},
//     day7={morning:'+15',afternoon:'+18',evening:'+15'},
// ];
// console.log(day1);
// console.log(WeekTemperature[1]);

/*
Логічні розгалуження:

    #bAUsaq6LI
    - Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте скрипт при a, що дорівнює 1, 0, -3
*/

// let x=-3;
// if (x!==0){
//     console.log('Вірно');
// }else{
//     console.log('Невірно')
// }

/*
#3ckURgvs
- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).
*/
// let time=+prompt('Введіть число від 1 до 59');
// if (time>=0 && time<=15){
//     console.log('Перша чверть');
// }else if (time>15 && time<=30){
//     console.log('Друга чверть');
// }else if (time>30 && time<=45){
//     console.log('Третя чверть');
// }else if (time>45 && time<60){
//     console.log('Четверта чверть');
// }else{
//     console.log('Шо ти ввів?');
// }
/*
#UMoNq4biWGe
- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
*/
// let day=+prompt('Введіть число від 1 до 31');
// if (day>0 && day<=10){
//     console.log('Перша декада');
// }else if (day>10 && day<=20){
//     console.log('Друга декада');
// }else if (day>20 && day<=31){
//     console.log('Третя декада');
// }else{
//     console.log('Не вводь бяку!');
// }
/*
#KzrtqyQ
- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
*/
// let WeekDay=+prompt('Введіть порядковий номер дня тижня (від 1 до 7!)');
// switch (WeekDay){
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('Нє ну ти не можеш ввести шо пишуть!?');
//         break;
// }
 /*
    #uwsz1RnTQJ1
    - Користувач вводить або має два числа.
        Потрібно знайти та вивести максимальне число з тих двох.
        Також потрібно врахувати коли введені рівні числа.
*/
// let a=+prompt('Введіть перше число');
// let b=+prompt('Введіть друге');
// if (a>b){
//     console.log(`Перше число ${a} більше за друге число ${b}`);
// }else if (b>a){
//     console.log(`Друге число ${b} більше за перше число ${a}`);
// }else if (b===a){
//     console.log(`Перше число ${a} і друге число ${b} рівні між собою`);
// }

/*
        #iBvqtjEm
    - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null і тд включно). Напишіть код який,
        буде присвоювати змінній х значення "default" якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
*/
// let x = null;
// if (x){
//     console.log(x);
// }else {
//     x='default';
//     console.log(x);
// }
/*

/*
#awLXL6TBzg
   - з файлу arrays.js (лежить в папці 2023 plan) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
   */
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let x=prompt('введіть порядковий номер курсу тривалість якого хочете перевірити (1-6!)')-1;
// if (x >=0 && x<coursesAndDurationArray.length){
//     if (coursesAndDurationArray[x].monthDuration>5){
//         console.log('Cупер');
//     }
//     else{
//         console.log('Не супер');}
// }else {
//     console.log('Введіть коректний порядковий номер курсу!')
// }
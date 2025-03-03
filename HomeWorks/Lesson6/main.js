// #dFeorS3m7u -----------------
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// console.log('hello world'.length);
// console.log('lorem ipsum'.length);
// console.log('javascript is cool'.length);

// #8lld9HMxXWB --------------
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// console.log('hello world'.toUpperCase());
// console.log('lorem ipsum'.toUpperCase());
// console.log('javascript is cool'.toUpperCase());

// #ClDsAm7xba7 ----------------
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// console.log('HELLO WORLD'.toLowerCase());
// console.log('LOREM IPSUM'.toLowerCase());
// console.log('JAVASCRIPT IS COOL'.toLowerCase());

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());

//     #bfoJuse4ZzP ----------------
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

// let str1 = 'Ревуть воли як ясла повні';
// let stringToarray=(string)=>string.split(` `);
// let arr = stringToarray(str1);
// console.log(arr);
// ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// #Rbr5kEQ ------------------
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let stringArr=[10,8,-7,55,987,-1011,0,1050,0].map(item=>item.toString());
// console.log(stringArr);

// #5hqyKTfmc -------------
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// let sortNums=(arr,sortMethod)=>{
//     arr.sort(function(a,b) {
//         if (sortMethod === 'ascending') {
//             return a - b;
//         }
//         else if (sortMethod === 'descending') {
//             return b - a;
//         }
//     })
// }
//  // sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// console.log(nums);
//

// ==========================
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration)
//     .filter(value => value.monthDuration > 5)
//     .map((value, index) => {
//         value.id = index + 1;
//         return value
//     })
// console.log(coursesAndDurationArray);

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================


//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)

// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
// const createValues = ['6','7','8','9','10','ace','jack','queen','king'];
// const suits = ['spade', 'diamond','heart', 'club'];
// let CardHolder = [];
//     for (const suit of suits) {
//     if (suit==='spade'||suit==='club'){
//         for (const createValue of createValues) {
//            CardHolder.push({cardSuit:suit,value:createValue,color:"black"});
//         }
//     }else {
//         for (const createValue of createValues) {
//             CardHolder.push({cardSuit:suit,value:createValue,color:"red"});
//         }
//     }
// }
// console.log(CardHolder);
//  let res1 = CardHolder.find(value =>value.value==='ace'||value.cardSuit==='club' );
// console.log(res1);
// let res2= CardHolder.filter(value => value.value==="6");
// console.log(res2);
// let res3=CardHolder.filter(value => value.color==='red');
// console.log(res3);
// let res4=CardHolder.filter(value => value.cardSuit==='diamond');
// console.log(res4);
// let res5=CardHolder.filter(value => value.cardSuit==='club'&&value.value>'9'||value.cardSuit==='club'&&value.value==='10');
// console.log(res5);

// =========================
//

// let resReduse=CardHolder.reduce((acum,card)=>{
//     switch (card.cardSuit) {
//         case 'spade':
//             acum.spades.push(card);
//             break;
//             case 'diamond':
//             acum.diamonds.push(card);
//             break;
//             case 'heart':
//             acum.hearts.push(card);
//             break;
//             case 'club':
//             acum.clubs.push(card);
//             break;
//     }
//     return acum;
// },{  spades:[], diamonds:[], hearts:[], clubs:[]})
// console.log(resReduse);
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }


// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// let filtredSass=coursesArray
//     .filter(value => value.modules
//         .find(value1 => value1==='sass'))
// console.log(filtredSass);
// // --написати пошук всіх об'єктів, в яких в modules є sass
// let filtredDocker=coursesArray
//     .filter(value => value.modules
//     .find(value1 => value1 ==='docker'))
// console.log(filtredDocker)
// // --написати пошук всіх об'єктів, в яких в modules є docker
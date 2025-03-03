// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
//
// cloner=(obj)=>{
//     if (obj){
//         let functionsClone=[];
//         for (const objKey in obj) {
//             if (typeof obj[objKey] === "function"){
//                 let functionClone = obj[objKey].bind({})
//                 functionsClone.push({functionClone,objKey});
//             }
//         }
//         let clone=JSON.parse(JSON.stringify(obj));
//         for (const functionsCloneElement of functionsClone) {
//             clone[functionsCloneElement.objKey]=functionsCloneElement.functionClone;
//         }
//         return clone;
//     }
//     else throw new Error('!!!!')
//     }
//
//     let user = {
//         name:'kokos',
//         age:34,
//         wife:{
//             name:'anna',
//             age:31
//         },
//         greeting(){
//             console.log(`hello`)
//         },
//         foo(){
//             console.log(`hello foo`)
//         }
// };
// let cloneEmpire=cloner(user);
// cloneEmpire.greeting();
// console.log(cloneEmpire);
//
// #iz6emEsP2BA
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let newArr = coursesAndDurationArray.map((value,index)=>({...value,id:index+1}));
// console.log(newArr);
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
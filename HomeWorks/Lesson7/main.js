// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User (id,name,surname,email,phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }
// let users = [];
// users.push(new User(1,'kokos','kokosovich','kokos@gmail.com','+380 670 000 000'));
// users.push(new User(2,'vasya','pupkin','pupkin@gmail.com','+380 670 000 001'));
// users.push(new User(3,'pavlo','morozov','morozov@gmail.com','+380 670 000 002'));
// users.push(new User(4,'pablo','escobaro','escobaro@gmail.com','+380 670 000 003'));
// users.push(new User(5,'sherlock','holmes','holmes@gmail.com','+380 670 000 004'));
// users.push(new User(6,'jon','jonson','jonson@gmail.com','+380 670 000 005'));
// users.push(new User(7,'bob','snail','snail@gmail.com','+380 670 000 006'));
// users.push(new User(8,'elvis','jons','jons@gmail.com','+380 670 000 007'));
// users.push(new User(9,'olya','kvit','kvit@gmail.com','+380 670 000 008'));
// users.push(new User(10,'ivan','petrovych','petrovych@gmail.com','+380 670 000 009'));
// console.log(users);
//
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let filteredUsers=users.filter(value => value.id%2===0);
// console.log(filteredUsers);

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// console.log(users.sort((a, b) => a.id - b.id));

// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let clients=[];
// clients.push(new Client(1,'kokos','kokosovich','kokos@gmail.com','+380 670 000 000',['milk','banana','apples']));
// clients.push(new Client(2,'vasya','pupkin','pupkin@gmail.com','+380 670 000 001',['juice']));
// clients.push(new Client(3,'pavlo','morozov','morozov@gmail.com','+380 670 000 002',['aperol','snacks']));
// clients.push(new Client(4,'pablo','escobaro','escobaro@gmail.com','+380 670 000 003',['vine','chocolate','cheese','oranges']));
// clients.push(new Client(5,'sherlock','holmes','holmes@gmail.com','+380 670 000 004',['cofe','tea','capuchino','jogurt','ice-cream']));
// clients.push(new Client(6,'jon','jonson','jonson@gmail.com','+380 670 000 005',['beer','crisps','nuts','peanuts','fish','beaf']));
// clients.push(new Client(7,'bob','snail','snail@gmail.com','+380 670 000 006',['milkshake']));
// clients.push(new Client(8,'elvis','jons','jons@gmail.com','+380 670 000 007',['jam','meat','cherry']));
// clients.push(new Client(9,'olya','kvit','kvit@gmail.com','+380 670 000 008',['vodka','lime',"teqilla"]));
// clients.push(new Client(10,'ivan','petrovych','petrovych@gmail.com','+380 670 000 009',['gin','tonic']));
// console.log(clients);
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// console.log(clients.sort((a, b) => a.order.length - b.order.length));
//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model,producer,year,maxspeed,capacity) {
//     this.model=model;
//     this.producer=producer;
//     this.year=year;
//     this.maxspeed=maxspeed;
//     this.capacity=capacity;
//     this.drive=function (){
//         console.log(`їдемо зі швидкістю ${maxspeed} на годину`);
//     }
//     this.info=function (){
//         for (const Key in this) {
//             console.log(`${Key}-${this[Key]}`);
//         }
//     }
//     this.increaseMaxSpeed=function(newSpeed){
//         this.maxspeed=this.maxspeed+newSpeed;
//     }
//     this.changeYear=(newValue)=>{this.year=newValue;}
//     this.addDriver=(driver)=>{this.driver=driver}
// }
// let car1=new Car('bmw','Germany','2024',300,'2.0');
// car1.info();
// car1.drive();
// console.log(car1);
// car1.increaseMaxSpeed(30);
// console.log(car1);
// car1.changeYear('2025');
// console.log(car1);
// car1.addDriver({name:'kokos',surname:'Kokosovich',age:31,status:true});
// console.log(car1);
//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car{
//     constructor(model, producer, year, maxspeed, capacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.capacity = capacity;
//     }
//     drive=()=>{console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)};
//     info=()=>{
//         for (const Key in this) {
//             console.log(`${Key} - ${this[Key]}`);
//         }
//     }
//     increaseMaxSpeed=(newValue)=>{this.maxspeed=this.maxspeed+newValue};
//     changeYear=(newYear)=>{this.year=newYear};
//     addDriver=(driver)=>{this.driver=driver};
// }
// let car1=new Car('bmw','Germany',2024,300,'2.0');
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(20);
// console.log(car1);
// car1.changeYear(2023);
// console.log(car1);
// car1.addDriver({name:'kokos',surname:'Kokosovich',age:31,status:true});
// console.log(car1);
//
//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//
//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

// Array.prototype.customForEach = function (functional){
//     for (const arrayElement of this) {
//         functional(arrayElement);
//     }
// };
// [11,22,33,33,33].customForEach((value)=>{
//     console.log(value)
// });
//
// Array.prototype.myFilter=function (functional){
//     let filteredARR = [];
//     for (const functionalElement of this) {
//         if (functional(functionalElement)){
//             filteredARR.push(functionalElement);
//         }
//     }
//     return filteredARR;
// };
// // console.log([11, 22, 33, 33, 33].filter(value => value > 22));
// let x=[11, 22, 33, 33, 33].myFilter((value)=>value>1);
// console.log(x);
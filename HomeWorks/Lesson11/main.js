// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.


//
// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then((value)=>{
//         for (const valueElement of value.carts) {
//             let div=document.createElement('div');
//             document.body.append(div);
//             for (const divKey in valueElement) {
//                     let p=document.createElement('p');
//                 div.append(p);
//                     if (typeof valueElement[divKey]==='object'){
//                         for (const pElement of valueElement[divKey]) {
//                             let prodDiv=document.createElement('div');
//                             div.append(prodDiv);
//                             prodDiv.classList.add('odd');
//                             for (const objEl in pElement) {
//                                 if (objEl==='thumbnail'){
//                                     console.log(objEl, pElement[objEl])
//                                     let img=document.createElement('img');
//                                     prodDiv.append(img);
//                                     img.src= pElement[objEl]
//                                 }
//                                 else {  let prodP=document.createElement('p');
//                                     prodDiv.append(prodP);
//                                     prodP.innerText=`${objEl}--${pElement[objEl]}`}
//
//
//                             }
//                         }
//                     }
//                     else {
//                         p.innerText = `${divKey}--${valueElement[divKey]}`
//                     }
//             }
//         }
//     });
//     #whXxOBlYS0H
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(value => {
    const {recipes}=value;

        for (const recipe of recipes) {
            let div=document.createElement('div');
            document.body.append(div);
            for (const recipeKey in recipe) {
                if (Array.isArray(recipe[recipeKey])){
                    let arr=recipe[recipeKey];
                    let ul=document.createElement("ul");
                    div.append(ul)
                    for (const arrElement of arr) {
                        let li=document.createElement('li');
                        li.innerText=`${arrElement}`;
                        ul.append(li);
                    }
                }
                 else if(recipeKey==='image'){
                    let img=document.createElement("img");
                    img.src=recipe[recipeKey];
                    div.append(img);
                }
                 else {
                    let p=document.createElement("p");
                    div.append(p);
                    p.innerText=`${recipeKey}--${recipe[recipeKey]}`
                }
            }
        }
    });
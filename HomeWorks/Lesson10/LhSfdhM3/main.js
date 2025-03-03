// #LhSfdhM3 !!!!
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
if (!localStorage.getItem("ARR")){
    let arr=[];
    let curData=Date.now();
    arr.push(curData);
    localStorage.setItem("ARR",JSON.stringify(arr));
}else{
    let localData=JSON.parse(localStorage.getItem("ARR"));
    let curData=Date.now();
    localData.push(curData);
    localStorage.setItem("ARR",JSON.stringify(localData));
}









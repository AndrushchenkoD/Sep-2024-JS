if (!localStorage.getItem("ARR")){
    console.log('AAAA')
}else {
    console.log('vvv')
    let localDATA=JSON.parse(localStorage.getItem("ARR"));
    console.log(localDATA);
    for (const localDataValue of localDATA) {
        console.log(localDataValue);
        let pData =document.createElement('p');
        let normalFormat= new Date(localDataValue);
        pData.innerText=`${normalFormat}`;
        document.body.append(pData);
    }
}
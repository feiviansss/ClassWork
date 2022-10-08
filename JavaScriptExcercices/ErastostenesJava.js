var criba = function () {
    "use strict";

    var list = [], primesNumber = [];
    let p=2;
    let answer= document.getElementById("answer");
    let n = parseInt(document.getElementById("num").value); 

    for (let index=2; index<n+1; index++){
        list.push(index); 
    }

    list.forEach(element =>{
        if(element!=0){
            p=element;
        }
        for (let index = p; index<n+1;index++){
            if(list[index]%p===0){ 
                list[index]=0;
            }
        }
    }); 

    list.forEach(element => {
        if(element!=0){
            primesNumber.push(element);
        }
    });

    console.log(list); 
    answer.innerHTML= primesNumber;
    return primesNumber;
};

console.log(criba(1000000));
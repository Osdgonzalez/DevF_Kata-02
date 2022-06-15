function numbers(){
    let arrayNum = [], arrayNumReverse = [], arrayNumResult = []
    let j = 9;
    for(let i = 0; i < 10; i++){
        arrayNum.push(i + 1);
        arrayNum.push(j + 1);

        j--;
    }
    return arrayNum;
}

console.log(numbers())
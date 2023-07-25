function toUpperCaseFirstLetter(kata) {
    let result = "";
    for(let i = 0; i < kata.length; i++) {
        if((i === 0 || kata [i - 1] === " ")) {
            result += kata[i].toUpperCase();
        } else{
            result += kata[i]
        }
    } 
    return result;
}

console.log(toUpperCaseFirstLetter('i riski adibtiyanto'));
console.log(toUpperCaseFirstLetter('wamt to be a web developer'));
    
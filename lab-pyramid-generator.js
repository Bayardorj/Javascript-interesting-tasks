function pyramid(char,number,isThis){
    let result = "\n";
    if(isThis == false){
        for (let i = 0; i < number;i++){
            let space = " ".repeat(number-i-1);
            let chars = char.repeat(2*i+1)
            result += space + chars + "\n";
        }

    } else {
        for (let i = number - 1;i>=0;i--){
            let space = " ".repeat(number - i - 1);
            let chars = char.repeat(2*i+1)
            result += space + chars + "\n";
        }
    }
    return result;

}

console.log(pyramid("o",4,true))
console.log(pyramid("i",5,false))

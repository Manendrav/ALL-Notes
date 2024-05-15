let str = 'Hello World';

//* iteration
for(let i = 0; i < str.length; i++){
    console.log(str[i]);
}


//* reverse iteration
for(let i=str.length; i >= 0; i--){
    console.log(str[i]);
}


//* add a character at specific location

function addChar(str, ch, pos){
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        if(i == (pos - 1)){
            newStr += ch
        }
        newStr += str[i];
    }
    return newStr;
}

let newStr = addChar("hellow", 'Z', 4)
console.log(newStr);



//* remove a character

function remChar(str, ch){
    let newStr = "";
    count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == ch){
            continue;
        }
        newStr += str[i];
    }
    return newStr;
}

let remStr = remChar("Hellow" , 'e')
console.log(remStr)



//* remove a character at specific location

function remAtSpecific(str, pos){
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        if(i == (pos - 1)){
            continue;
        }
        newStr += str[i];
    }
    return newStr;
}

let specificStr = remAtSpecific("You Ena Ji Lama", 5);
console.log(specificStr);



//* search a character
let index = 0
for(let i=0; i < str.length; i++){
    if(str[i] == 'Z'){
       index = i
    }
}

if(index == 0){
    console.log("Value not fonud!!!");
}else{
    console.log(index)
}

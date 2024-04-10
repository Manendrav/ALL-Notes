
//* Q1) Write a program that takes a string and two characters as input, and replaces all occurrences of the first character with the second character in the string.

    // Example:     input_string = "hello world"
    //              char_to_replace = 'l'
    //              replacement_char = 'z'
    //              Output:   "hezzo worzd"


// function replace(str, replace, replacement){
//     let newStr = "";

//     for(let i = 0; i < str.length; i++){
//         if(str[i] == replace){
//             newStr += replacement;
//             continue;
//         }
//         newStr += str[i];
//     }

//     return newStr;
// }

// let replaceChar = replace("hello world", 'l', 'z');
// console.log('"' +replaceChar+ '"');


//* Q2) Implement a function that takes a string as input and replaces all digits (numeric characters) with a specified character (e.g., '*').

    // Example: input_string = "hello123world456"
    //          replacement_char = '*'
    //          Output: "hello***world***"

// function replaceNums(str, replacement){
//     let newStr = "";

//     for(let i = 0; i < str.length; i++){
//         let ASCII = str[i].charCodeAt(0);

//         if(ASCII > 48 && ASCII < 58){
//             newStr += replacement;
//             continue;
//         }

//         newStr += str[i];
//     }

//     return newStr;
// }

// let number = replaceNums("hello123world456", '*');
// console.log('"' +number+ '"');



//* Q3) Write a function that takes a string and two characters as input, and replaces the first occurrence of the character with the second character in the string.

    // Example:     Input:  "hello world"
    //              char_to_replace = 'o'
    //              replacement_char = 'a'
    //              Output:     "hella world"

// function replaceFristOccurrence(str, replace, replacement){
//     let newStr = "";
//     let count = 0;

//     for(let i = 0; i < str.length; i++){
//         if(str[i] == replace && count == 0){
//             newStr += replacement;
//             count++;
//             continue;
//         }
//         newStr += str[i];
//     }

//     return newStr;
// }

// let fristOccurance = replaceFristOccurrence("hello world",'o','a');
// console.log('"' +fristOccurance+ '"');


//* Q4) Create a function that takes a string as input and replaces all vowels (a, e, i, o, u) with a specified character (e.g., '*').

    // Example:     Input:  "hello world"
    //              replacement_char = '*'
    //              Output: "h*ll* w*rld"

// function replaceVowels(str, replacement){
//     let newStr = "";
//     let vowels = ['a', 'e', 'i', 'o', 'u'];

//     for(let i = 0; i < str.length; i++){
//         let isVowel = false;
//         for(let j = 0; j < vowels.length; j++){
//             if(str[i] == vowels[j]){
//                 isVowel = true;
//                 break;
//             }
//         }
//         if (isVowel) {
//             newStr += replacement;
//         } else {
//             newStr += str[i];
//         }
//     }

//     return newStr;
// }

// let vowelsReplacement = replaceVowels("hello world", '*');
// console.log(vowelsReplacement);



//* Q5) Write a program that takes a string as input and replaces each character in the string with a randomly selected character from a specified set of characters (e.g., 'abcdefghijklmnopqrstuvwxyz').

    // Example:     input_string = "hello world"
    // character_set = 'abcdefghijklmnopqrstuvwxyz'
    // Output : It should Random 

function replaceRandomly(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        if(str[i] !== " "){
            let Random = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
            let char = String.fromCharCode(Random);
            newStr += char;
            continue;
        }
        newStr += str[i];
    }

    return newStr;
}

let replaceRandom = replaceRandomly("hello world");
console.log(replaceRandom);
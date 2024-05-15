
//* Q1) remove white spaces from both the string (same work for (',' , '&' , " "))

    // Example: Input:   " Hello, World! "
    //          Output:   "Hello,World!"

// function removeWhiteSpace(str){
//     let newStr = "";
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == " "){
//             continue;                       // skip iteration
//         }

//         newStr += str[i];
//     }

//     return newStr;
// }

// let removeSpaces = removeWhiteSpace(" Hello, World! ");
// console.log(removeSpaces);


//* Q2) Write a program that takes a string as input and removes any leading and trailing whitespace characters. (remove space form front and end only)

    // Example:    Input: " Hello, World! "
    //              Output: "Hello, World!"

// function removeLeadandTrail(str){
//     let newStr = "";
//     for(let i = 0; i < str.length; i++){
//         if( i == 0 && str[0] == " "){
//             i++;
//         }

//         if( i == str.length-1 && str[i] == " " ){
//            continue;
//         }

//         newStr += str[i]; 
//     }
//     return newStr;
// }

// let LeadandTrail = removeLeadandTrail(" Hello, World! ");
// console.log('"'+ LeadandTrail +'"');


//* Q3) Write a function that takes a string and a specific character as input, and removes all occurrences of that character from both the beginning and end of the string.

    // Example: Input: "***Hello, ***** World!***", '*'
    //          Output: "Hello, World!"


// function removeSpecificChar(str, char){
//     let newStr = "";

//     for(let i = 0; i < str.length; i++ ){
//         if(str[i] == char){
//             continue;
//         }
//         newStr += str[i];
//     }

//     return newStr;
// }

// let removerSpecific = removeSpecificChar ("***Hello, *****World!***", '*');
// console.log(removerSpecific);


//* Q4) Write a function that takes a string as input, and removes all the character between A-Z, a-z and 0-9

    // Example:     Input: "Hello, World!"
    //              Output: ", !"

// function removeAlphabets(str){
//     let newStr = "";
//     for(let i = 0; i < str.length; i++ ){
//         let ASCII = str[i].charCodeAt(0);
//         if( ASCII >= 65 && ASCII <= 90 || ASCII >= 97 && ASCII <= 122 || ASCII >= 48 && ASCII <= 57){
//             continue;
//         }
//         newStr += str[i];
//     }
//     return newStr;
// }

// let removeAlpha = removeAlphabets("Hello,5345345 World!");
// console.log('"'+ removeAlpha +'"');


//* Q5) Implement a program that takes a string and another string as input, and removes the specified prefix from the beginning of the string if it exists.

    // Examples:    main_string = "apple"   prefix = "app"
    //              Output:      "le"

    // Example:     main_string = "banana"  prefix = "app"
    //              Output:      "banana"

// function removePrefix(str, prefix){
//     let newStr = "";
//     for(let i = 0; i < str.length; i++ ){
//         for(let j = 0; j < prefix.length; j++){
//             if (str[0] == prefix[0]){
//                 if(str[i] == prefix[j]){
//                     i++;
//                 } 
//             }
//         }
//         newStr += str[i];
//     }
//     return newStr;
// }

// let remPrefix = removePrefix("apple", "app");
// console.log(remPrefix);


//* Q6) Create a function that takes a string and another string as input, and removes the specified suffix from the end of the string if it exists.

    // Examples:    main_string = "apple"   suffix = "ple"
    //              Output:      "ap"

    // Example:     main_string = "banana"  suffix = "ple"
    //              Output:      "banana"


// function removeSuffix(str, suffix){
//     let newStr = "";
//     let i = str.length - 1;
//     let j = suffix.length - 1;

//     while (i >= 0 && j >= 0 && str[i] === suffix[j]) {                      // it set the value of 'i' after the string is not matched 
//         i--;
//         j--;
//     }

//     for (let k = 0; k <= i; k++) {
//         newStr += str[k];
//     }
    
//     return newStr;
// }

// let remSuffix = removeSuffix("banana", "ple");
// console.log(remSuffix);


//* Q7) Implement a function that takes a string as input and removes consecutive duplicate characters, keeping only one occurrence of each character.

    // Example:     input_string = "bookkeeper"
    //              Output:     "bokeper"

// function removeDuplicates(str){                                 // do it today, it wrong solution 
//     let newStr = "";
//     for(let i = 0; i < str.length; i++){
//        if(str[i-1] == str[i]){
//         continue;
//        }
//        newStr += str[i];
//     }
//     return newStr;
// }

// let duplicate = removeDuplicates("bookkeeper");
// console.log(duplicate);


//* Q8) Implement a function that takes a two string prefixes and suffixes as input, and removes any occurrences of prefixes and suffixes from the string.

    // Example:     input_string = "unhappiness"
    //              prefixes = "un"
    //              suffixes = "ness"
    //              output = happi

function removePrfixandSufix(str, prefix, suffix){
    let newStr = "";
    let i = 0
    let j = str.length - 1;
    let k = suffix.length - 1;

    // for prefix
    if(str[0] == prefix[0]){
        while(str[i] == prefix[i]){
            i++;
        }
    } else {
        console.log("Prefix not matched!!!")
    }

    // for suffix
    while(str[j] === suffix[k]){
        j--;
        k--;
    }

    for(let m = i; m <= j; m++){
        newStr += str[m];
    }

    return newStr;
}

let removeElement = removePrfixandSufix("unhappiness", "un", "ness")
console.log(removeElement);

//* Q1) Write a program that takes a string as input and converts all characters to uppercase.

// Example: Input:  "Hello, World!"
// Output:        "HELLO, WORLD!"

// function toUppercase(str){
//     let newStr = "";

//     for(let i = 0; i < str.length; i++){
//         let ASCII = str[i].charCodeAt(0);

//         if (ASCII >= 97 && ASCII <= 122) {                  // here i check the value is lowercase or not
//             ASCII -= 32;
//         }

//         newStr += String.fromCharCode(ASCII);
//     }

//     return newStr;
// }

// let convertUppercase = toUppercase("Hello, World!")
// console.log(convertUppercase);

// let ch = 'A'
// console.log(ch.charCodeAt(0));                           // convert char into ASCII value
// console.log(String.fromCharCode(65));                    // it convert ASCII into Char value


//* Q2) Implement a function that takes a string as input and converts all characters to lowercase.

// Example:     Input:  "Hello, World!"
//  Output:     "hello, world!"

// function toLowercase(str){
//     let newStr = "";

//     for(let i = 0; i < str.length; i++){
//         let ASCII = str[i].charCodeAt(0);

//         if(ASCII >= 65  &&  ASCII <= 90){
//             ASCII += 32;
//         }

//         newStr += String.fromCharCode(ASCII);
//     }

//     return newStr;
// }

// let convertLowercase = toLowercase("HELLO, WORLD!");
// console.log(convertLowercase);


//* Q3) Create a program that takes a string as input and toggles the case of each character (converts uppercase letters to lowercase and vice versa)

// Example:     Input:  "Hello, World!"
// Output:      "hELLO, wORLD!"

// function toogleCase(str) {
//     let newStr = "";

//     for (let i = 0; i < str.length; i++) {
//         let ASCII = str[i].charCodeAt(0);

//         if (ASCII >= 65 && ASCII <= 90) {
//             ASCII += 32;
//         }
//         else if (ASCII >= 97 && ASCII <= 122) {
//             ASCII -= 32;
//         }

//         newStr += String.fromCharCode(ASCII);
//     }

//     return newStr;
// }

// let toogleConvet = toogleCase("Hello, World!");
// console.log(toogleConvet);


//* Q4) Write a function that takes a string as input and converts it to title case (the first letter of each word is capitalized, and the rest are lowercase).
// Example:     Input: "hello world"
//  Output:     "Hello World"


// function titleCase(str) {
//     let newStr = "";
//     let count = true;

//     for (let i = 0; i < str.length; i++) {
//         let ASCII = str[i].charCodeAt(0);

//         if (count && str[i] !== " ") {                          // its not checking space , its checking after the space    // from else condition (True && not a space)
//             if (ASCII >= 97 && ASCII <= 122) {                  // here i check the value is lowercase or not
//                 ASCII -= 32;
//             }
//             newStr += String.fromCharCode(ASCII);
//             count = false;
//         }else {
//             newStr += str[i];                                   // Keep other characters unchanged if not the first letter of a word
//             if (str[i] == " ") {                                // after adding space in string(newStr) it set the count true for next iteration 
//                 count = true;
//             }
//         }
//     }

//     return newStr;
// }

// let titleConvert = titleCase("hello, world!");
// console.log(titleConvert);


//* Q5)  Create a program that takes a string in CamelCase format as input and converts it to snake_case format.

// Example:    Input: "CamelCaseString"
//              Output: "camel_case_string"


// function snakeConversion(str) {
//     let newStr = "";

//     for (let i = 0; i < str.length; i++) {
//         let ASCII = str[i].charCodeAt(0);

//         if (ASCII >= 65 && ASCII <= 90) {
//             if (i > 0) {
//                 newStr += "_"
//             }
//             ASCII += 32;
//         }
//         newStr += String.fromCharCode(ASCII);

//     }
//     return newStr;
// }

// let snakeCase = snakeConversion("CamelCaseString");
// console.log(snakeCase);


//* Q6)  Write a program that takes a string as input and converts the first letter of the string to uppercase while keeping the rest of the string unchanged.

    // Example:    Input: "hello, world!"
    //              Output:  "Hello, world!"

// function fristUppercase(str){
//     let newStr = "";
//     for(let i = 0; i < str.length; i++){

//         if(i < 1){
//             let ASCII = str[i].charCodeAt(0);
        
//             if(ASCII >= 97 && ASCII <= 122){
//                 newStr += String.fromCharCode(ASCII - 32);
//                 continue;
//             }
//         }

//         newStr += str[i];
//     }
//     return newStr;
// }

// let convertFristUppercase = fristUppercase("hello, world!");
// console.log(convertFristUppercase);


//* Q7)  Write a function that takes a string as input and converts uppercase letters to lowercase and vice versa, while also reversing the order of the characters in the string.

    // Example:     Input: "Hello, World!"
    //              Output: "!DLROw ,OLLEh".


// function togglewithException(str){
//     let newStr = "";

//     for(let i = str.length-1; i >= 0; i--){
//         let ASCII = str[i].charCodeAt(0);

//         if(ASCII >= 97 && ASCII <= 122){
//             ASCII -= 32;
//         } else if (ASCII >= 65 && ASCII <= 90){
//             ASCII += 32;
//         }

//         newStr += String.fromCharCode(ASCII);
//     }

//     return newStr;
// }

// let toggleException = togglewithException("Hello, World!");
// console.log(toggleException);


//* Q8)  Create a function that takes a string as input and converts uppercase letters to lowercase if they occur at odd indices in the string, 
//*          and converts lowercase letters to uppercase if they occur at even indices.

    // Example:     Input: "Hello, World!"
    //              Output: "HeLlO, wOrLd!"


function conditionalCaseConversion(str){
    let newStr = "";
    
    for(let i = 0; i < str.length; i++){
        let ASCII = str[i].charCodeAt(0);

        if(i%2 == 0){                           // even case:   lowercase to uppercase
            if(ASCII >= 97 && ASCII <= 122){
                ASCII -= 32;
            }
        } else {                                // odd case:    uppercase to lowercase
            if (ASCII >= 65 && ASCII <= 90){
                ASCII += 32;
            }
        }

        newStr += String.fromCharCode(ASCII);
    }

    return newStr;
}

let conditionalConversion = conditionalCaseConversion("Hello, World!")
console.log(conditionalConversion);
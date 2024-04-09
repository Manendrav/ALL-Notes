
// split method: splits a string into an array of substrings. it returns the new array. and it does not change the original string.
// syntax: string.split(separator, limit)

// separator: specifies the character, or the regular expression, to use for splitting the string. if omitted, the entire string will be returned in the first element of the array.
// limit: specifies the number of splits, items after the limit will not be included in the array.

// join method: joins all elements of an array into a string. it returns the new string. and it does not change the original array.
// syntax: array.join(separator)


//* Q1) "Construct the Split method from scratch." Write a program that takes a sentence as input and splits it into individual words based on whitespace characters.

//  Example:    input = "The quick brown fox"
//  Output:     ["The", "quick", "brown", "fox"]


// function split(str, n, separator) {
//     let newStr = "";
//     let strArr = [];
//     let count = 0;

//     //If n is 0, return an array containing the entire string
//     if (n === 0) {
//         return [str];
//     }

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === separator) {
//             strArr.push(newStr);
//             newStr = "";
//             count++;

//             if (count === n) {
//                 break;
//             }
//             continue;
//         }
//         newStr += str[i];
//     }

//     // Add the remaining characters to strArr
//     if (newStr !== "") {
//         strArr.push(newStr);
//     }

//     return strArr;
// }

// let splitSentance = split("This is a test case", 0, " ")
// console.log(splitSentance);



//* Q2) "Construct the Join method from scratch." Write a function that takes a list of words as input and joins them together into a single string with spaces between each word.

// Example:     word_list = ["Hello", "world", "how", "are", "you"]
//              Output:  "Hello world how are you"

// function join(strArr){
//     let newStr = "";

//     for(let i = 0; i < strArr.length; i++){
//         newStr += strArr[i];
//         if (i < strArr.length - 1) {
//             newStr += " ";
//         }
//     }

//     return newStr
// }

// let joinStr = join(["Hello", "world", "how", "are", "you"]);
// console.log('"'+joinStr+'"');



//* Q3) Create a program that takes a string and a delimiter as input and splits the string into substrings based on the specified delimiter.

//  Example:    input_string = "apple,banana,orange"    delimiter = ","
//  Output:     ["apple", "banana", "orange"]


// function splitByDelimiter(str, delimiter) {
//     let newStr = "";
//     let strArr = [];

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == delimiter) {
//             strArr.push(newStr);
//             newStr = "";
//             continue;
//         }
//         newStr += str[i];
//     }

//     if (newStr !== "") {
//         strArr.push(newStr);
//     }
//     return strArr;

// }

// let splitDelimiter = splitByDelimiter("apple,banana,orange", ",");
// console.log(splitDelimiter);


//* Q4) Write a program that takes a sentence as input, splits it into individual words, converts each word to uppercase, and then joins them back together into a single string.

// Example:     input_sentence = "The quick brown fox"
//              Output: "THE QUICK BROWN FOX"

// function splitandJoin(str) {
//     let newStr = "";
//     let tempStr = "";
//     let strArr = [];
//     let upperCaseArr = [];

//     // split the sentance
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == " ") {
//             strArr.push(tempStr);
//             tempStr = ""
//             continue;
//         }
//         tempStr += str[i];
//     }

//     if (tempStr !== "") {
//         strArr.push(tempStr);
//     }

//     // convert to uppercase
//     function toUppercase(str) {
//         let converted = "";

//         for (let k = 0; k < str.length; k++) {
//             let ASCII = str[k].charCodeAt(0);

//             if (ASCII >= 97 && ASCII <= 122) {                  // here i check the value is lowercase or not
//                 ASCII -= 32;
//             }

//             converted += String.fromCharCode(ASCII);
//         }

//         if (converted !== "") {
//             upperCaseArr.push(converted);
//         }
//     }

//     for (let j = 0; j < strArr.length; j++) {
//         toUppercase(strArr[j]);
//     }

//     // join the string
//     for (let i = 0; i < upperCaseArr.length; i++) {
//         newStr += upperCaseArr[i]
//         if (i < upperCaseArr.length - 1) {
//             newStr += " ";
//         }
//     }

//     return newStr;
// }

// let convetsion = splitandJoin("The quick brown fox");
// console.log('"' + convetsion + '"');


//* Q5) Write a program that takes a string and a list of delimiters as input and splits the string into substrings based on any of the specified delimiters.

    // Example:     input_string = "apple,banana.orange"
    //              delimiters = [",", "."]
    //              Output: ["apple", "banana", "orange"]


// function splitByDelemiters(str, delimiter){
//     let newStr = "";
//     let strArr = [];

//     for(let i = 0; i < str.length; i++ ){
//         let isDelimiter = false;
//         for(let j = 0; j < delimiter.length; j++){
//             if(str[i] == delimiter[j]){
//                 isDelimiter = true;
//                 break;
//             }
//         }

//         if (isDelimiter) {
//             if (newStr !== "") {
//                 strArr.push(newStr);
//                 newStr = "";
//             }
//         } else {
//             newStr += str[i];
//         }
//     } 

//     if(newStr !== ""){
//         strArr.push(newStr);
//     }

//     return strArr;
// }

// let listDelemiter = splitByDelemiters("apple,banana.orange", [",", "."]);
// console.log(listDelemiter);



//* Q6) Implement a program that takes a list of words and their corresponding formatting options as input (e.g., uppercase, lowercase, title case) and 
//*             joins them together into a single string with the specified formatting.

    // Example:     word_format_pairs = [("hello", "uppercase"), ("world", "titlecase"), ("python", "lowercase")]
    //              Output:     "HELLO World python"


let strArr = []

function changeFormat(str, format){
    let newStr = "";

    switch (format) {
        case "uppercase":
            {
                for(let i = 0; i < str.length; i++){
                    let ASCII = str[i].charCodeAt(0);

                    if (ASCII >= 97 && ASCII <= 122) {                  // here i check the value is lowercase or not
                        ASCII -= 32;
                    }
                    
                    newStr += String.fromCharCode(ASCII);
                }
            }
            break;
        
        case "titlecase":
            {
                for(let i = 0; i < str.length; i++){
                    let ASCII = str[0].charCodeAt(0);
                    if(ASCII >= 97 && ASCII <= 122 && i < 1){
                        ASCII -= 32;
                        newStr += String.fromCharCode(ASCII);
                        continue
                    }
                    newStr += str[i]
                    
                }
            }
            break;
        
        case "lowercase":
            {
                for(let i = 0; i < str.length; i++){
                    let ASCII = str[i].charCodeAt(0);

                    if (ASCII >= 65  &&  ASCII <= 90) {                  // here i check the value is lowercase or not
                        ASCII += 32;
                    }
                    
                    newStr += String.fromCharCode(ASCII);
                }
            }
            break;
    }

    strArr.push(newStr);
}

function joinArray(strArr){
    let newStr = "";

    for(let i = 0; i < strArr.length; i++){
        newStr += strArr[i];
        if (i < strArr.length - 1) {
            newStr += " ";
        }
    }

    return newStr
}

let pairs = [["hello", "uppercase"], ["world", "titlecase"], ["python", "lowercase"]];

for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i];
    changeFormat(pair[0], pair[1])
}

let result = joinArray(strArr)


console.log('"' + result + '"')